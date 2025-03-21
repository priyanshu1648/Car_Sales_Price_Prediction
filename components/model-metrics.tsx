"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function ModelMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">R² Score</CardTitle>
          <CardDescription>Coefficient of determination</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">0.94</div>
          <Progress value={94} className="h-2 mt-2" />
          <p className="text-xs text-muted-foreground mt-1">
            94% of the variance in car prices is explained by the model
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">RMSE</CardTitle>
          <CardDescription>Root Mean Square Error</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$1,245</div>
          <Progress value={88} className="h-2 mt-2" />
          <p className="text-xs text-muted-foreground mt-1">Average prediction error of $1,245</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">MAE</CardTitle>
          <CardDescription>Mean Absolute Error</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$845</div>
          <Progress value={92} className="h-2 mt-2" />
          <p className="text-xs text-muted-foreground mt-1">Average absolute error of $845</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">MAPE</CardTitle>
          <CardDescription>Mean Absolute Percentage Error</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">5.7%</div>
          <Progress value={94.3} className="h-2 mt-2" />
          <p className="text-xs text-muted-foreground mt-1">Average percentage error of 5.7%</p>
        </CardContent>
      </Card>
    </div>
  )
}

