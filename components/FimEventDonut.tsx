'use client';

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { useEffect, useState } from 'react';

// Custom mapping for specific event types
const EVENT_COLORS: Record<string, string> = {
  Modified: '#4099BF',
  Added: '#3BB39C',
  Delete: '#BF0462',
};

// Fallback colors for other events
const FALLBACK_COLORS = ['#22c55e', '#0ea5e9', '#f59e0b'];

const renderCustomizedLabel = ({ name, percent }: any) =>
  `${name} (${(percent * 100).toFixed(0)}%)`;

export default function FimEventDonut() {
  const [chartData, setChartData] = useState<any[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    async function fetchEventCounts() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/fim-eventCount`);
        const json = await res.json();

        const counts = json.counts;
        const formattedData = Object.keys(counts).map((key) => ({
          name: key,
          value: counts[key],
        }));

        // Sort descending by value
        formattedData.sort((a, b) => b.value - a.value);

        setChartData(formattedData);
      } catch (err) {
        console.error('Failed to load FIM event data', err);
      }
    }

    fetchEventCounts();
  }, []);

  return (
    <div className="h-full flex flex-col p-4">
      <h2 className="text-lg lg:text-xl font-semibold text-gray-800 mb-4 text-center">
        Event Type Breakdown
      </h2>

      <div className="flex-1">
        {isClient && chartData.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                labelLine
                label={renderCustomizedLabel}
                paddingAngle={2}
              >
                {chartData.map((entry, idx) => {
                  const color =
                    EVENT_COLORS[entry.name] || FALLBACK_COLORS[idx % FALLBACK_COLORS.length];
                  return (
                    <Cell
                      key={`cell-${idx}`}
                      fill={color}
                      stroke="#fff"
                      strokeWidth={1}
                    />
                  );
                })}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-center text-gray-500">Loading...</p>
          </div>
        )}
      </div>

      {/* Custom Legend */}
      {isClient && chartData.length > 0 && (
        <ul className="flex flex-wrap justify-center gap-4 mt-4 text-sm">
        {chartData.map((entry, idx) => {
          const color =
            EVENT_COLORS[entry.name] || FALLBACK_COLORS[idx % FALLBACK_COLORS.length];
          return (
            <li key={idx} className="flex items-center gap-2">
              <span
                className="inline-block w-3 h-3 rounded-full"
                style={{ backgroundColor: color }}
              ></span>
              <span className="text-gray-700 font-medium">{entry.name}</span>
              <span className="ml-1 text-gray-500">
                ({entry.value.toLocaleString()})
              </span>
            </li>
          );
        })}
      </ul>
      )}
    </div>
  );
}
