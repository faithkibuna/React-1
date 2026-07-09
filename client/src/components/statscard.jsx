import React from "react";
export default function StatsCard({ title, value, color }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h1 className="text-lg font-semibold">{title}</h1>
      <p className={`text-gray-600 font-bold ${color}`}>{value}</p>
    </div>
  );
}
