import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
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
              <Link href="/analysis" className="transition-colors hover:text-foreground/80">
                Analysis
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Car Sales Price Prediction
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Forecast car sales prices using machine learning based on historical sales data.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/data">
                  <Button className="bg-primary">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/dashboard">
                  <Button variant="outline">View Dashboard</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Optimize Your Car Pricing Strategy
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our machine learning model helps businesses optimize pricing strategies for car sales by analyzing
                  different factors like car features, market trends, and customer preferences.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Data-Driven Decisions</CardTitle>
                    <CardDescription>Make informed pricing decisions based on predictive analytics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Our model handles missing values, detects outliers, and applies feature scaling for better
                      results.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Comprehensive Analysis</CardTitle>
                    <CardDescription>Evaluate car features and their impact on sales prices</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Analyze different factors affecting car prices and get actionable insights.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Interactive Dashboard</CardTitle>
                    <CardDescription>Visualize your data and predictions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Our interactive dashboard allows you to explore your data and predictions in detail.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
          <p className="text-center text-sm leading-loose text-muted-foreground">
            © 2023 Car Sales Price Prediction. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

