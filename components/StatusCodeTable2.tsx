'use client';

import { useEffect, useState } from 'react';

type StatusData = {
  status: string;
  count: number;
  percentage: number;
};

export default function StatusCodeTable2() {
  const [data, setData] = useState<StatusData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE}/events-by-status`)
      .then(res => res.json())
      .then(apiData => {
        if (apiData?.data) {
          // Calculate total for percentages
          const total = apiData.data.reduce((sum: number, item: Record<string, number>) => {
            const [_, value] = Object.entries(item)[0];
            return sum + value;
          }, 0);

          // Map API data into table format and exclude 'total'
          const formatted = apiData.data
            .filter((item: Record<string, number>) => !('total' in item))
            .map((item: Record<string, number>) => {
              const [name, value] = Object.entries(item)[0];
              return {
                status: name,
                count: value,
                percentage: total > 0 ? ((value / total) * 100) : 0
              };
            });

          setData(formatted);
        }
      })
      .catch(err => console.error('Error fetching events-by-status:', err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="p-4 text-center">
        <p className="text-gray-500">Loading status codes...</p>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 overflow-auto">
        <table className="min-w-full table-auto text-sm">
          <thead className="bg-gray-50 sticky top-0">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Response Code</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Frequency</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Distribution</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Category</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900">
                  HTTP {item.status}
                </td>
                <td className="px-4 py-3 text-gray-700 font-semibold">
                  {item.count.toLocaleString()}
                </td>
                <td className="px-4 py-3 text-gray-700">
                  <div className="flex items-center space-x-2">
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          item.status.startsWith('2') ? 'bg-green-500' :
                          item.status.startsWith('3') ? 'bg-blue-500' :
                          item.status.startsWith('4') ? 'bg-orange-500' :
                          'bg-red-500'
                        }`}
                        style={{ width: `${Math.min(item.percentage * 3, 100)}%` }}
                      ></div>
                    </div>
                    <span className="text-xs">{item.percentage.toFixed(1)}%</span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    item.status.startsWith('2') ? 'bg-green-100 text-green-800' :
                    item.status.startsWith('3') ? 'bg-blue-100 text-blue-800' :
                    item.status.startsWith('4') ? 'bg-orange-100 text-orange-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {item.status.startsWith('2') ? '✅ Success' :
                     item.status.startsWith('3') ? '↪️ Redirect' :
                     item.status.startsWith('4') ? '⚠️ Client Error' : '❌ Server Error'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
