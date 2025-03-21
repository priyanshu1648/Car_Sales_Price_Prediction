"use client"

import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

// Generate some sample data for anomaly detection
const generateData = () => {
  const normalData = []
  const anomalyData = []

  // Generate normal data points
  for (let i = 0; i < 100; i++) {
    const age = Math.floor(Math.random() * 15)
    // Base price with some randomness
    const price = Math.max(5000, 30000 - age * 2000 + (Math.random() * 4000 - 2000))
    normalData.push({ age, price, anomaly: false })
  }

  // Generate anomaly data points
  anomalyData.push({ age: 2, price: 5000, anomaly: true }) // Too cheap for a 2-year-old car
  anomalyData.push({ age: 10, price: 35000, anomaly: true }) // Too expensive for a 10-year-old car
  anomalyData.push({ age: 1, price: 45000, anomaly: true }) // Very expensive 1-year-old car
  anomalyData.push({ age: 5, price: 8000, anomaly: true }) // Very cheap 5-year-old car
  anomalyData.push({ age: 12, price: 25000, anomaly: true }) // Expensive for a 12-year-old car

  return { normalData, anomalyData }
}

const { normalData, anomalyData } = generateData()

export function AnomalyDetection() {
  return (
    <div className="h-[400px] w-full">
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
            dataKey="age"
            name="Car Age (years)"
            domain={[0, 15]}
            label={{ value: "Car Age (years)", position: "insideBottomRight", offset: -10 }}
          />
          <YAxis
            type="number"
            dataKey="price"
            name="Price ($)"
            domain={[0, 50000]}
            label={{ value: "Price ($)", angle: -90, position: "insideLeft" }}
          />
          <Tooltip
            formatter={(value, name) => [
              name === "age" ? `${value} years` : `$${Math.round(value).toLocaleString()}`,
              name === "age" ? "Car Age" : "Price",
            ]}
            cursor={{ strokeDasharray: "3 3" }}
          />
          <Legend />
          <Scatter name="Normal Data" data={normalData} fill="#8884d8" />
          <Scatter name="Anomalies" data={anomalyData} fill="#ff0000" shape="star" />
        </ScatterChart>
      </ResponsiveContainer>
      <div className="mt-4 text-sm text-muted-foreground">
        <p>The scatter plot shows the relationship between car age and price, with anomalies highlighted in red.</p>
        <p>
          Anomalies represent cars that are priced unusually high or low for their age, which may indicate special
          features, data errors, or unique market conditions.
        </p>
      </div>
    </div>
  )
}

