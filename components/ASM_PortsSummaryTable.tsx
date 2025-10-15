"use client";
import React from "react";

const data = [
  { domain: "tw1.cente...", defaults: "25,80,110,115", custom: "27,160", total: 11 },
  { domain: "webmail.cente...", defaults: "25,80,110,115,443", custom: "27,160", total: 11 },
];

export default function PortsSummaryTable() {
  return (
    <table className="w-full text-sm border rounded-lg shadow mt-4">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-2 border">Domain</th>
          <th className="p-2 border">Default</th>
          <th className="p-2 border">Custom</th>
          <th className="p-2 border">Total</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i} className="text-center">
            <td className="p-2 border">{row.domain}</td>
            <td className="p-2 border">{row.defaults}</td>
            <td className="p-2 border">{row.custom}</td>
            <td className="p-2 border font-bold">{row.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
