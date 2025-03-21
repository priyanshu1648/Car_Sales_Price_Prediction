"use client"

import { useState } from "react"
import Link from "next/link"
import { Download, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CorrelationMatrix } from "@/components/correlation-matrix"
import { FeatureDistribution } from "@/components/feature-distribution"
import { AnomalyDetection } from "@/components/anomaly-detection"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AnalysisPage() {
  const [carMake, setCarMake] = useState("all")
  const [priceRange, setPriceRange] = useState("all")

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="hidden font-bold sm:inline-block">Car Sales Price Prediction</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="/dashboard" className="transition-colors hover:text-foreground/80">
                Dashboard
              </Link>
              <Link href="/data" className="transition-colors hover:text-foreground/80">
                Data
              </Link>
              <Link href="/predict" className="transition-colors hover:text-foreground/80">
                Predictions
              </Link>
              <Link href="/analysis" className="text-foreground transition-colors hover:text-foreground/80">
                Analysis
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
          <h1 className="text-2xl font-bold tracking-tight">Data Analysis</h1>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
            <div className="flex items-center gap-2">
              <Select value={carMake} onValueChange={setCarMake}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select car make" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Makes</SelectItem>
                  <SelectItem value="toyota">Toyota</SelectItem>
                  <SelectItem value="honda">Honda</SelectItem>
                  <SelectItem value="ford">Ford</SelectItem>
                  <SelectItem value="bmw">BMW</SelectItem>
                </SelectContent>
              </Select>
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select price range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="budget">Budget ($5k-$15k)</SelectItem>
                  <SelectItem value="midrange">Mid-range ($15k-$25k)</SelectItem>
                  <SelectItem value="luxury">Luxury ($25k+)</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export Analysis
            </Button>
          </div>
        </div>

        <Tabs defaultValue="correlation" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="correlation">Correlation Analysis</TabsTrigger>
            <TabsTrigger value="distribution">Feature Distribution</TabsTrigger>
            <TabsTrigger value="anomaly">Anomaly Detection</TabsTrigger>
          </TabsList>
          <TabsContent value="correlation" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Correlation Analysis</CardTitle>
                <CardDescription>Explore relationships between different car features and price.</CardDescription>
              </CardHeader>
              <CardContent>
                <CorrelationMatrix />
              </CardContent>
              <CardFooter>
                <p className="text-sm text-muted-foreground">
                  The correlation matrix shows that car age has the strongest negative correlation with price (-0.78),
                  while engine size has the strongest positive correlation (0.72).
                </p>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="distribution" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Feature Distribution</CardTitle>
                <CardDescription>Analyze the distribution of key car features.</CardDescription>
              </CardHeader>
              <CardContent>
                <FeatureDistribution />
              </CardContent>
              <CardFooter>
                <p className="text-sm text-muted-foreground">
                  Most cars in the dataset are between 3-7 years old, with engine sizes clustering around 1.6L, 2.0L,
                  and 2.5L.
                </p>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="anomaly" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Anomaly Detection</CardTitle>
                <CardDescription>Identify unusual patterns or outliers in the car price data.</CardDescription>
              </CardHeader>
              <CardContent>
                <AnomalyDetection />
              </CardContent>
              <CardFooter>
                <p className="text-sm text-muted-foreground">
                  12 potential anomalies detected in the data, which may indicate special car features, data entry
                  errors, or unique market conditions.
                </p>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

