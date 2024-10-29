// components/AnalyticsDisplay.tsx
"use client";

import React, { useEffect, useState } from 'react';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function AnalyticsDisplay() {
  const [analyticsData, setAnalyticsData] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/analytics/aggregate')
      .then((response) => response.json())
      .then((data) => setAnalyticsData(data))
      .catch((error) => console.error('Error fetching analytics data:', error));
  }, []);

  return (
    <div className="p-8 bg-gray-100 rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-8">Website Analytics Overview</h2>

      {analyticsData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pie Chart: Total Time Spent per Page */}
          <div className="bg-white p-4 shadow-md rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Total Time Spent on Each Page</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={analyticsData}
                  dataKey="totalTimeSpent"
                  nameKey="pageName"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  label
                >
                  {analyticsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#8884d8' : '#82ca9d'} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Bar Chart: Users per Page */}
          <div className="bg-white p-4 shadow-md rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Number of Users per Page</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={analyticsData}>
                <XAxis dataKey="pageName" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="uniqueUsersCount" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Stacked Bar Chart: Time Spent per User on Each Page */}
          <div className="bg-white p-4 shadow-md rounded-lg col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Time Spent by Each User on Each Page</h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={analyticsData}>
                <XAxis dataKey="pageName" />
                <YAxis />
                <Tooltip />
                <Legend />
                {analyticsData.map((pageData, index) => (
                  <Bar
                    key={`bar-${index}`}
                    dataKey="timeSpent"
                    data={pageData.userSessions}
                    name={pageData.pageName}
                    stackId="a"
                    fill={index % 2 === 0 ? '#8884d8' : '#82ca9d'}
                  />
                ))}
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
}
