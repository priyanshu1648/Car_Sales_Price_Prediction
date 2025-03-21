"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { age: 0, price: 32500 },
  { age: 1, price: 28000 },
  { age: 2, price: 24500 },
  { age: 3, price: 21000 },
  { age: 4, price: 18500 },
  { age: 5, price: 16000 },
  { age: 6, price: 14000 },
  { age: 7, price: 12500 },
  { age: 8, price: 11000 },
  { age: 9, price: 9500 },
  { age: 10, price: 8500 },
  { age: 11, price: 7500 },
  { age: 12, price: 6500 },
  { age: 13, price: 5800 },
  { age: 14, price: 5200 },
  { age: 15, price: 4800 },
]

export function PriceTrendChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="age" label={{ value: "Car Age (years)", position: "insideBottomRight", offset: -10 }} />
          <YAxis label={{ value: "Average Price ($)", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => [`$${value}`, "Average Price"]} />
          <Legend />
          <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} name="Average Price" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

