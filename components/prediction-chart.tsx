"use client"

import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts"

// Generate some sample data for actual vs predicted prices
const generateData = () => {
  const data = []
  for (let i = 0; i < 50; i++) {
    const actual = 5000 + Math.random() * 30000
    // Add some noise to predictions (within +/- 10%)
    const predicted = actual * (0.9 + Math.random() * 0.2)
    data.push({ actual, predicted })
  }
  return data
}

const data = generateData()

export function PredictionChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis
            type="number"
            dataKey="actual"
            name="Actual Price"
            domain={[0, 40000]}
            label={{ value: "Actual Price ($)", position: "insideBottomRight", offset: -10 }}
          />
          <YAxis
            type="number"
            dataKey="predicted"
            name="Predicted Price"
            domain={[0, 40000]}
            label={{ value: "Predicted Price ($)", angle: -90, position: "insideLeft" }}
          />
          <Tooltip
            formatter={(value) => [
              `$${Math.round(value).toLocaleString()}`,
              value === data[0].actual ? "Actual Price" : "Predicted Price",
            ]}
            cursor={{ strokeDasharray: "3 3" }}
          />
          <Legend />
          <ReferenceLine y={0} stroke="#000" />
          <ReferenceLine x={0} stroke="#000" />
          <ReferenceLine y="x" stroke="red" strokeDasharray="3 3" />
          <Scatter name="Predictions" data={data} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  )
}

