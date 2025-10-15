'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,
} from 'react-simple-maps';
import { geoCentroid } from 'd3-geo';
import { feature } from 'topojson-client';

const topoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json';

const COUNTRY_NAME_MAP: Record<string, string> = {
  'United States': 'United States of America',
  Russia: 'Russian Federation',
  'Czech Republic': 'Czechia',
  Syria: 'Syrian Arab Republic',
  'Côte d’Ivoire': "Cote d'Ivoire",
  'Cote dIvoire': "Cote d'Ivoire",
};

const FALLBACK_COORDS: Record<string, [number, number]> = {
  Singapore: [103.8198, 1.3521],
  Monaco: [7.4246, 43.7384],
  'Vatican City': [12.4534, 41.9029],
};

type EventRow = { country: string; count: number };

export default function EventMap() {
  const [eventData, setEventData] = useState<EventRow[]>([]);
  const [geoFeatures, setGeoFeatures] = useState<any[]>([]);

  const norm = (s: string) =>
    s
      .normalize('NFKD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/[^a-z]/g, '');

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE}/so-events-map`)
      .then((res) => res.json())
      .then((apiData) => {
        if (apiData?.data) {
          const formatted = apiData.data.map((item: Record<string, number>) => {
            const [country, count] = Object.entries(item)[0];
            return { country, count };
          });
          setEventData(formatted);
        }
      })
      .catch((err) => console.error('Error fetching event map data:', err));

    fetch(topoUrl)
      .then((res) => res.json())
      .then((topology) => {
        const geo = feature(topology, topology.objects.countries).features;
        setGeoFeatures(geo as any[]);
      })
      .catch((err) => console.error('Error fetching geo data:', err));
  }, []);

  const matchGeo = (apiName: string) => {
    if (!geoFeatures.length) return undefined;
    const targetName = COUNTRY_NAME_MAP[apiName] || apiName;

    const exact = geoFeatures.find(
      (g) => norm(g.properties.name || '') === norm(targetName)
    );
    if (exact) return exact;

    const t = norm(targetName);
    return geoFeatures.find((g) => {
      const gn = norm(g.properties.name || '');
      return gn.includes(t) || t.includes(gn);
    });
  };

  const highlightedNames = useMemo(() => {
    const names = new Set<string>();
    const missing: string[] = [];
    for (const row of eventData) {
      const found = matchGeo(row.country);
      if (found?.properties?.name) {
        names.add(found.properties.name);
      } else {
        missing.push(row.country);
      }
    }
    if (missing.length) {
      console.debug('No polygon match for:', missing);
    }
    return names;
  }, [eventData, geoFeatures]);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 w-full">
      <h2 className="text-lg font-semibold mb-4">Event Map</h2>
      <div className="w-full h-[500px]"> {/* bigger height for full map */}
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ scale: 150 }} // keeps world fit
          width={980}
          height={500}
          style={{ width: '100%', height: '100%' }}
        >
          <ZoomableGroup zoom={1} center={[0, 20]}> {/* center whole world */}
            {geoFeatures.length > 0 && (
              <Geographies
                geography={{ type: 'FeatureCollection', features: geoFeatures }}
              >
                {({ geographies }: { geographies: any[] }) =>
                  geographies.map((geo: any) => {
                    const isEventCountry = highlightedNames.has(
                      geo.properties.name
                    );
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        style={{
                          default: {
                            fill: isEventCountry ? '#3b82f6' : '#E5E7EB',
                            outline: 'none',
                          },
                          hover: {
                            fill: isEventCountry ? '#2563eb' : '#d1d5db',
                            outline: 'none',
                          },
                          pressed: { fill: '#1d4ed8', outline: 'none' },
                        }}
                      />
                    );
                  })
                }
              </Geographies>
            )}

            {/* Markers */}
            {eventData.map((row, idx) => {
              const matchedGeo = matchGeo(row.country);

              if (matchedGeo) {
                const [lng, lat] = geoCentroid(matchedGeo);
                return (
                  <Marker key={`${row.country}-${idx}`} coordinates={[lng, lat]}>
                    <circle
                      r={6}
                      fill="#ef4444"
                      stroke="#fff"
                      strokeWidth={1.5}
                    />
                    <text
                      textAnchor="middle"
                      y={-10}
                      style={{
                        fontFamily: 'sans-serif',
                        fontSize: 12,
                        fill: '#111',
                      }}
                    >
                      {`${row.country} (${row.count})`}
                    </text>
                  </Marker>
                );
              }

              const fallback = FALLBACK_COORDS[row.country];
              if (fallback) {
                return (
                  <Marker
                    key={`${row.country}-${idx}-fallback`}
                    coordinates={fallback}
                  >
                    <circle
                      r={6}
                      fill="#ef4444"
                      stroke="#fff"
                      strokeWidth={1.5}
                    />
                    <text
                      textAnchor="middle"
                      y={-10}
                      style={{
                        fontFamily: 'sans-serif',
                        fontSize: 12,
                        fill: '#111',
                      }}
                    >
                      {`${row.country} (${row.count})`}
                    </text>
                  </Marker>
                );
              }

              console.debug('No coords for country:', row.country);
              return null;
            })}
          </ZoomableGroup>
        </ComposableMap>
      </div>
    </div>
  );
}
