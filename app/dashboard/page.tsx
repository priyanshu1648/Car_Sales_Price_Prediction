"use client"

import { useState } from "react"
import Link from "next/link"
import { BarChart3, LineChart, PieChart, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PriceDistributionChart } from "@/components/price-distribution-chart"
import { FeatureCorrelationChart } from "@/components/feature-correlation-chart"
import { PriceTrendChart } from "@/components/price-trend-chart"
import { TopFeaturesChart } from "@/components/top-features-chart"
import { CarDataTable } from "@/components/car-data-table"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="hidden font-bold sm:inline-block">Car Sales Price Prediction</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="/dashboard" className="text-foreground transition-colors hover:text-foreground/80">
                Dashboard
              </Link>
              <Link href="/data" className="transition-colors hover:text-foreground/80">
                Data
              </Link>
              <Link href="/predict" className="transition-colors hover:text-foreground/80">
                Predictions
              </Link>
              <Link href="/analysis" className="transition-colors hover:text-foreground/80">
                Analysis
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              Download Report
            </Button>
            <Button size="sm">
              <TrendingUp className="mr-2 h-4 w-4" />
              Run Prediction
            </Button>
          </div>
        </div>
        <Tabs defaultValue="overview" className="mt-6" onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="data">Data</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Average Price</CardTitle>
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$18,245</div>
                  <p className="text-xs text-muted-foreground">+5.2% from last year</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Prediction Accuracy</CardTitle>
                  <LineChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">94.3%</div>
                  <p className="text-xs text-muted-foreground">+1.8% from last model</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Cars</CardTitle>
                  <PieChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,245</div>
                  <p className="text-xs text-muted-foreground">+12% from last dataset</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Price Range</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$5k-$45k</div>
                  <p className="text-xs text-muted-foreground">Across all models</p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Price Distribution</CardTitle>
                  <CardDescription>Distribution of car prices in the dataset</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <PriceDistributionChart />
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Feature Correlation</CardTitle>
                  <CardDescription>Correlation of features with price</CardDescription>
                </CardHeader>
                <CardContent>
                  <FeatureCorrelationChart />
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Top Features</CardTitle>
                  <CardDescription>Features with highest impact on price</CardDescription>
                </CardHeader>
                <CardContent>
                  <TopFeaturesChart />
                </CardContent>
              </Card>
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Price Trends</CardTitle>
                  <CardDescription>Price trends by car age</CardDescription>
                </CardHeader>
                <CardContent>
                  <PriceTrendChart />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="analytics" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Advanced Analytics</CardTitle>
                <CardDescription>Detailed analysis of car features and prices</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] flex items-center justify-center border rounded-md">
                  <p className="text-muted-foreground">Advanced analytics content will appear here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="data" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Car Data</CardTitle>
                <CardDescription>Browse the car sales dataset</CardDescription>
              </CardHeader>
              <CardContent>
                <CarDataTable />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

