"use client"

import { useState } from "react"
import Link from "next/link"
import { FileUp, Info, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { DataPreview } from "@/components/data-preview"
import { DataStatistics } from "@/components/data-statistics"
import { DataVisualization } from "@/components/data-visualization"

export default function DataPage() {
  const [activeTab, setActiveTab] = useState("dataset")
  const [dataLoaded, setDataLoaded] = useState(false)
  const [loading, setLoading] = useState(false)
  const [loadProgress, setLoadProgress] = useState(0)

  const handleLoadKaggleData = () => {
    setLoading(true)
    setLoadProgress(0)

    // Simulate loading progress
    const interval = setInterval(() => {
      setLoadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setLoading(false)
          setDataLoaded(true)
          return 100
        }
        return prev + 10
      })
    }, 300)
  }

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
              <Link href="/data" className="text-foreground transition-colors hover:text-foreground/80">
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
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold tracking-tight">Car Sales Data</h1>
          <div className="flex items-center gap-2">
            {!dataLoaded && (
              <Button onClick={handleLoadKaggleData} disabled={loading}>
                {loading ? "Loading..." : "Load Kaggle Dataset"}
              </Button>
            )}
            {dataLoaded && <Button variant="outline">Download Processed Data</Button>}
          </div>
        </div>

        {!dataLoaded && !loading && (
          <Card>
            <CardHeader>
              <CardTitle>Load Car Sales Dataset</CardTitle>
              <CardDescription>Load the Kaggle car sales dataset or upload your own data.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>About the Dataset</AlertTitle>
                <AlertDescription>
                  The default dataset contains car sales data with features like make, model, year, mileage, fuel type,
                  and sales price. You can load the Kaggle dataset or upload your own CSV file.
                </AlertDescription>
              </Alert>

              <div className="grid gap-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Option 1: Load Kaggle Dataset</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Load the ANN Car Sales Price Prediction dataset from Kaggle.
                  </p>
                  <Button onClick={handleLoadKaggleData}>
                    <FileUp className="mr-2 h-4 w-4" />
                    Load Kaggle Dataset
                  </Button>
                </div>

                <div className="border-t pt-4">
                  <h3 className="text-lg font-medium mb-2">Option 2: Upload Your Own Data</h3>
                  <p className="text-sm text-muted-foreground mb-4">Upload your own car sales data in CSV format.</p>
                  <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="car-data">Car Sales Data</Label>
                    <div className="flex items-center gap-2">
                      <Input id="car-data" type="file" accept=".csv" />
                      <Button>
                        <Upload className="mr-2 h-4 w-4" />
                        Upload
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {loading && (
          <Card>
            <CardHeader>
              <CardTitle>Loading Dataset</CardTitle>
              <CardDescription>Please wait while we load and process the car sales dataset.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Progress value={loadProgress} className="w-full" />
              <p className="text-sm text-muted-foreground">Loading: {loadProgress}%</p>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium">Current step:</p>
                  <p className="text-sm text-muted-foreground">
                    {loadProgress < 20
                      ? "Downloading data"
                      : loadProgress < 40
                        ? "Parsing CSV"
                        : loadProgress < 60
                          ? "Cleaning data"
                          : loadProgress < 80
                            ? "Processing features"
                            : "Finalizing dataset"}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium">Estimated time remaining:</p>
                  <p className="text-sm text-muted-foreground">{Math.ceil((100 - loadProgress) / 10) * 0.3} seconds</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {dataLoaded && (
          <Tabs defaultValue="dataset" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="dataset">Dataset</TabsTrigger>
              <TabsTrigger value="statistics">Statistics</TabsTrigger>
              <TabsTrigger value="visualization">Visualization</TabsTrigger>
            </TabsList>
            <TabsContent value="dataset" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Car Sales Dataset</CardTitle>
                  <CardDescription>Preview of the car sales dataset with {1245} records.</CardDescription>
                </CardHeader>
                <CardContent>
                  <DataPreview />
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="text-sm text-muted-foreground">Showing 10 of 1,245 records</div>
                  <Button variant="outline" size="sm">
                    View All Data
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="statistics" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Data Statistics</CardTitle>
                  <CardDescription>Statistical summary of the car sales dataset.</CardDescription>
                </CardHeader>
                <CardContent>
                  <DataStatistics />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="visualization" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Data Visualization</CardTitle>
                  <CardDescription>Visual exploration of the car sales dataset.</CardDescription>
                </CardHeader>
                <CardContent>
                  <DataVisualization />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        )}
      </main>
    </div>
  )
}

