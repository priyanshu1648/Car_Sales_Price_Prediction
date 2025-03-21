"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const ageData = [
  { range: "0-2", count: 225 },
  { range: "3-5", count: 520 },
  { range: "6-8", count: 310 },
  { range: "9-12", count: 150 },
  { range: "13+", count: 40 },
]

const engineData = [
  { range: "1.0-1.5L", count: 180 },
  { range: "1.6-2.0L", count: 450 },
  { range: "2.1-2.5L", count: 320 },
  { range: "2.6-3.0L", count: 210 },
  { range: "3.1L+", count: 85 },
]

const mileageData = [
  { range: "0-20k", count: 210 },
  { range: "20k-40k", count: 380 },
  { range: "40k-60k", count: 290 },
  { range: "60k-80k", count: 180 },
  { range: "80k-100k", count: 120 },
  { range: "100k+", count: 65 },
]

export function FeatureDistribution() {
  return (
    <div className="space-y-4">
      <Tabs defaultValue="age" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="age">Car Age</TabsTrigger>
          <TabsTrigger value="engine">Engine Size</TabsTrigger>
          <TabsTrigger value="mileage">Mileage</TabsTrigger>
        </TabsList>
        <TabsContent value="age" className="pt-4">
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={ageData}
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
          <p className="text-sm text-muted-foreground mt-4">
            Most cars in the dataset are between 3-5 years old, with fewer cars in the older age ranges.
          </p>
        </TabsContent>
        <TabsContent value="engine" className="pt-4">
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={engineData}
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
                <Bar dataKey="count" fill="#82ca9d" name="Number of Cars" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            The most common engine size is between 1.6L and 2.0L, which is typical for compact and mid-size cars.
          </p>
        </TabsContent>
        <TabsContent value="mileage" className="pt-4">
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={mileageData}
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
                <Bar dataKey="count" fill="#ffc658" name="Number of Cars" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Most cars in the dataset have between 20,000 and 60,000 miles, with fewer high-mileage vehicles.
          </p>
        </TabsContent>
      </Tabs>
    </div>
  )
}

