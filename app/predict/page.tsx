"use client"

import { useState } from "react"
import Link from "next/link"
import { Download, RefreshCw, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { PredictionChart } from "@/components/prediction-chart"
import { FeatureImportance } from "@/components/feature-importance"
import { ModelMetrics } from "@/components/model-metrics"
import { PredictionForm } from "@/components/prediction-form"

export default function PredictPage() {
  const [isTraining, setIsTraining] = useState(false)
  const [trainingProgress, setTrainingProgress] = useState(0)
  const [isModelTrained, setIsModelTrained] = useState(false)

  const handleTrainModel = () => {
    setIsTraining(true)
    setTrainingProgress(0)

    // Simulate training progress
    const interval = setInterval(() => {
      setTrainingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsTraining(false)
          setIsModelTrained(true)
          return 100
        }
        return prev + 5
      })
    }, 200)
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
              <Link href="/data" className="transition-colors hover:text-foreground/80">
                Data
              </Link>
              <Link href="/predict" className="text-foreground transition-colors hover:text-foreground/80">
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
          <h1 className="text-2xl font-bold tracking-tight">Car Price Prediction</h1>
          <div className="flex items-center gap-2">
            {!isModelTrained && !isTraining && (
              <Button onClick={handleTrainModel}>
                <RefreshCw className="mr-2 h-4 w-4" />
                Train Model
              </Button>
            )}
            {isTraining && (
              <Button disabled>
                <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                Training...
              </Button>
            )}
            {isModelTrained && (
              <>
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Export Model
                </Button>
                <Button onClick={() => setIsModelTrained(false)}>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Retrain Model
                </Button>
              </>
            )}
          </div>
        </div>

        {isTraining && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Training Model</CardTitle>
              <CardDescription>Please wait while we train the prediction model with your data.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Progress value={trainingProgress} className="w-full" />
              <p className="text-sm text-muted-foreground">Training progress: {trainingProgress}%</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium">Current step:</p>
                  <p className="text-sm text-muted-foreground">
                    {trainingProgress < 20
                      ? "Data preprocessing"
                      : trainingProgress < 40
                        ? "Feature engineering"
                        : trainingProgress < 60
                          ? "Model training"
                          : trainingProgress < 80
                            ? "Model evaluation"
                            : "Finalizing model"}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium">Estimated time remaining:</p>
                  <p className="text-sm text-muted-foreground">
                    {Math.ceil((100 - trainingProgress) / 5) * 0.2} minutes
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {isModelTrained ? (
          <Tabs defaultValue="predict" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="predict">Predict</TabsTrigger>
              <TabsTrigger value="metrics">Model Metrics</TabsTrigger>
              <TabsTrigger value="features">Feature Importance</TabsTrigger>
            </TabsList>
            <TabsContent value="predict" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Predict Car Price</CardTitle>
                    <CardDescription>Enter car details to predict its price.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PredictionForm />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Price Predictions</CardTitle>
                    <CardDescription>Predicted vs. actual prices for test data.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PredictionChart />
                  </CardContent>
                  <CardFooter>
                    <p className="text-sm text-muted-foreground">
                      The model has a mean absolute error of $845 on the test data.
                    </p>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="metrics" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Model Performance Metrics</CardTitle>
                  <CardDescription>Evaluation metrics for the trained prediction model.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ModelMetrics />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="features" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Feature Importance</CardTitle>
                  <CardDescription>The relative importance of each feature in the prediction model.</CardDescription>
                </CardHeader>
                <CardContent>
                  <FeatureImportance />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        ) : !isTraining ? (
          <Card>
            <CardHeader>
              <CardTitle>Train Your Prediction Model</CardTitle>
              <CardDescription>
                Train a machine learning model to predict car prices based on your data.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <TrendingUp className="h-4 w-4" />
                <AlertTitle>Ready to Train</AlertTitle>
                <AlertDescription>
                  Your data has been processed and is ready for model training. Click the "Train Model" button to start.
                </AlertDescription>
              </Alert>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium mb-2">Data Summary</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>Total records: 1,245</li>
                    <li>Features: 10</li>
                    <li>Missing values: 1.2%</li>
                    <li>Target: Car Price</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-2">Selected Model</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>Algorithm: Neural Network</li>
                    <li>Train/Test split: 80/20</li>
                    <li>Cross-validation: 5-fold</li>
                    <li>Hyperparameter tuning: Enabled</li>
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleTrainModel} className="w-full">
                <RefreshCw className="mr-2 h-4 w-4" />
                Train Model
              </Button>
            </CardFooter>
          </Card>
        ) : null}
      </main>
    </div>
  )
}

