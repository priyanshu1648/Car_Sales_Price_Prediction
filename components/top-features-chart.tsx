"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { feature: "Age", importance: 0.28 },
  { feature: "Engine Size", importance: 0.22 },
  { feature: "Mileage", importance: 0.18 },
  { feature: "Make", importance: 0.12 },
  { feature: "Horsepower", importance: 0.1 },
  { feature: "Fuel Type", importance: 0.06 },
  { feature: "Transmission", importance: 0.04 },
]

export function TopFeaturesChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" domain={[0, 0.3]} tickFormatter={(value) => `${(value * 100).toFixed(0)}%`} />
          <YAxis dataKey="feature" type="category" />
          <Tooltip formatter={(value) => [`${(Number(value) * 100).toFixed(1)}%`, "Importance"]} />
          <Legend />
          <Bar dataKey="importance" fill="#8884d8" name="Feature Importance" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

