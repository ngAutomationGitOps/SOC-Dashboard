"use client";
import React from "react";

const issues = [
  { domain: "centech.com", ip: "110.93.216.182", issue: "TLS1.0 Enabled", severity: "High" },
  { domain: "mail.centech.com", ip: "69.174.114.243", issue: "Expired SSL", severity: "Critical" },
];

export default function IssuesTable() {
  return (
    <table className="w-full text-sm border rounded-lg shadow mt-4">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-2 border">Domain</th>
          <th className="p-2 border">IP</th>
          <th className="p-2 border">Issue</th>
          <th className="p-2 border">Severity</th>
        </tr>
      </thead>
      <tbody>
        {issues.map((row, i) => (
          <tr key={i} className="text-center">
            <td className="p-2 border">{row.domain}</td>
            <td className="p-2 border">{row.ip}</td>
            <td className="p-2 border">{row.issue}</td>
            <td className="p-2 border font-bold text-red-600">{row.severity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
