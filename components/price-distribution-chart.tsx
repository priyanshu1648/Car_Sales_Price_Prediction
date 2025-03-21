"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { range: "0-5k", count: 15 },
  { range: "5k-10k", count: 120 },
  { range: "10k-15k", count: 280 },
  { range: "15k-20k", count: 350 },
  { range: "20k-25k", count: 220 },
  { range: "25k-30k", count: 150 },
  { range: "30k-35k", count: 70 },
  { range: "35k-40k", count: 30 },
  { range: "40k+", count: 10 },
]

export function PriceDistributionChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="range" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" name="Number of Cars" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

