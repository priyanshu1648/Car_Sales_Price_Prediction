"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { feature: "Age", correlation: -0.78 },
  { feature: "Engine Size", correlation: 0.72 },
  { feature: "Mileage", correlation: -0.65 },
  { feature: "Horsepower", correlation: 0.62 },
  { feature: "Fuel Efficiency", correlation: -0.45 },
  { feature: "Weight", correlation: 0.38 },
]

export function FeatureCorrelationChart() {
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
          <XAxis type="number" domain={[-1, 1]} />
          <YAxis dataKey="feature" type="category" />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="correlation"
            fill={(entry) => (entry.correlation > 0 ? "#82ca9d" : "#ff7373")}
            name="Correlation with Price"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

