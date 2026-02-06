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

// Use higher detail so microstates (like Monaco) are more likely present
const topoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json';

// Manual fixes for common API→TopoJSON name diffs
const COUNTRY_NAME_MAP: Record<string, string> = {
  'United States': 'United States of America',
  'Russia': 'Russian Federation',
  'South Korea': 'South Korea',
  'North Korea': 'North Korea',
  'Czech Republic': 'Czechia',
  'Hong Kong': 'Hong Kong SAR China',
  'Macau': 'Macao SAR China',
  'Vatican City': 'Vatican',
  'Côte d’Ivoire': "Cote d'Ivoire",
  'Cote dIvoire': "Cote d'Ivoire",
  'DR Congo': 'Democratic Republic of the Congo',
  'Congo (Brazzaville)': 'Republic of the Congo',
  'Syria': 'Syrian Arab Republic',
  'Moldova': 'Moldova',
  'Bolivia': 'Bolivia',
  'Tanzania': 'Tanzania',
};

// Fallback coordinates for tiny/edge cases (lng, lat)
const FALLBACK_COORDS: Record<string, [number, number]> = {
  Monaco: [7.4246, 43.7384],
  'Hong Kong': [114.1694, 22.3193],
  'Macao': [113.5439, 22.1987],
  'Vatican': [12.4534, 41.9029],
  'Singapore': [103.8198, 1.3521],
};

type EventRow = { country: string; count: number };

export default function EventMap() {
  const [eventData, setEventData] = useState<EventRow[]>([]);
  const [geoFeatures, setGeoFeatures] = useState<any[]>([]);

  // Normalize strings: lowercase, strip accents & non-letters
  const norm = (s: string) =>
    s
      .normalize('NFKD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/[^a-z]/g, '');

  useEffect(() => {
    // 1) Fetch event data
    fetch(`${process.env.NEXT_PUBLIC_API_BASE}/events-map`)
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

    // 2) Fetch TopoJSON and convert to GeoJSON
    fetch(topoUrl)
      .then((res) => res.json())
      .then((topology) => {
        const geo = feature(topology, topology.objects.countries).features;
        setGeoFeatures(geo as any[]);
      })
      .catch((err) => console.error('Error fetching geo data:', err));
  }, []);

  // Helper: find a Geo feature for a given API country name
  const matchGeo = (apiName: string) => {
    if (!geoFeatures.length) return undefined;
    const targetName = COUNTRY_NAME_MAP[apiName] || apiName;

    // exact normalized match
    const exact =
      geoFeatures.find(
        (g) => norm(g.properties.name || '') === norm(targetName)
      ) || undefined;
    if (exact) return exact;

    // contain/substring match (to handle "United States" vs "United States of America")
    const t = norm(targetName);
    const fuzzy =
      geoFeatures.find((g) => {
        const gn = norm(g.properties.name || '');
        return gn.includes(t) || t.includes(gn);
      }) || undefined;

    return fuzzy;
  };

  // For fast fill checks, build a Set of matched topo names
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
      // Helpful in dev tools to see what's not mapping
      // (e.g., ["Monaco"] on 110m, or custom labels)
      // eslint-disable-next-line no-console
      console.debug('No polygon match for:', missing);
    }
    return names;
  }, [eventData, geoFeatures]);

  return (
    <div className="h-full flex flex-col p-4 lg:p-6">
      {/* Modern Header */}
      <div className="flex items-center space-x-3 mb-4 lg:mb-6 flex-shrink-0">
        <div className="p-2 lg:p-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl shadow-lg flex-shrink-0">
          <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-lg lg:text-xl font-bold text-gray-900 tracking-tight">Global Event Distribution</h3>
          <p className="text-sm text-gray-600 font-medium">Real-time Geographic Activity</p>
        </div>
      </div>

      {/* Map Container */}
      <div className="flex-1 min-h-0 relative rounded-lg overflow-hidden">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ scale: 140, center: [0, 20] }}
          style={{ width: '100%', height: '100%' }}
        >
          <ZoomableGroup zoom={1} center={[0, 20]}>
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
                            fill: isEventCountry
                              ? 'rgba(249, 115, 22, 0.8)'
                              : '#f1f5f9',
                            stroke: '#cbd5e1',
                            strokeWidth: 0.3,
                            outline: 'none',
                          },
                          hover: {
                            fill: isEventCountry
                              ? 'rgba(249, 115, 22, 0.9)'
                              : '#e2e8f0',
                            outline: 'none',
                          },
                          pressed: {
                            fill: '#ea580c',
                            outline: 'none'
                          },
                        }}
                      />
                    );
                  })
                }
              </Geographies>
            )}

            {/* Enhanced Markers (count + country name ONLY for data countries) */}
            {eventData.map((row, idx) => {
              const matchedGeo = matchGeo(row.country);

              if (matchedGeo) {
                const [lng, lat] = geoCentroid(matchedGeo);
                const countryName = matchedGeo.properties.name;

                return (
                  <Marker key={`${row.country}-${idx}`} coordinates={[lng, lat]}>
                    <circle
                      r={Math.min(10, Math.max(4, row.count / 8))}
                      fill="#f97316"
                      stroke="#ffffff"
                      strokeWidth={2}
                      style={{ filter: 'drop-shadow(0 4px 8px rgba(249, 115, 22, 0.4))' }}
                    />

                    {/* Event count */}
                    <text
                      textAnchor="middle"
                      y={-12}
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: 'clamp(10px, 2vw, 12px)',
                        fontWeight: 600,
                        fill: '#1f2937',
                        textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                      }}
                    >
                      {row.count}
                    </text>

                    {/* ✅ Country name (ONLY when data exists) */}
                    <text
                      textAnchor="middle"
                      y={16}
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '15px',
                        fontWeight: 500,
                        fill: '#374151',
                        pointerEvents: 'none',
                        textShadow: '0 1px 1px rgba(255,255,255,0.6)',
                      }}
                    >
                      {countryName}
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
                      r={Math.min(10, Math.max(4, row.count / 8))}
                      fill="#f97316"
                      stroke="#ffffff"
                      strokeWidth={2}
                      style={{ filter: 'drop-shadow(0 4px 8px rgba(249, 115, 22, 0.4))' }}
                    />

                    {/* Optional: show country name for fallback too */}
                    <text
                      textAnchor="middle"
                      y={16}
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '10px',
                        fontWeight: 500,
                        fill: '#374151',
                        pointerEvents: 'none',
                      }}
                    >
                      {row.country}
                    </text>
                  </Marker>
                );
              }

              return null;
            })}
          </ZoomableGroup>
        </ComposableMap>

        {/* Enhanced Legend */}
        <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl border border-white/20">
          <h4 className="text-sm font-bold text-gray-900 mb-2">Activity Levels</h4>
          <div className="flex items-center space-x-4 text-sm font-medium text-gray-700">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full shadow-sm"></div>
              <span>High</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-orange-300 rounded-full shadow-sm"></div>
              <span>Medium</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-orange-200 rounded-full shadow-sm"></div>
              <span>Low</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
