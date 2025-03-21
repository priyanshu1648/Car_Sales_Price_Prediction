"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function DataStatistics() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Price Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <p className="text-xs text-muted-foreground">Mean</p>
              <p className="text-lg font-bold">$18,245</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Median</p>
              <p className="text-lg font-bold">$17,500</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Min</p>
              <p className="text-lg font-bold">$4,500</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Max</p>
              <p className="text-lg font-bold">$45,000</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Standard Deviation</p>
              <p className="text-lg font-bold">$6,850</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Range</p>
              <p className="text-lg font-bold">$40,500</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Car Age Distribution</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>0-2 years</span>
              <span>18%</span>
            </div>
            <Progress value={18} className="h-2 mt-1" />
          </div>
          <div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>3-5 years</span>
              <span>42%</span>
            </div>
            <Progress value={42} className="h-2 mt-1" />
          </div>
          <div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>6-8 years</span>
              <span>25%</span>
            </div>
            <Progress value={25} className="h-2 mt-1" />
          </div>
          <div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>9-12 years</span>
              <span>12%</span>
            </div>
            <Progress value={12} className="h-2 mt-1" />
          </div>
          <div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>13+ years</span>
              <span>3%</span>
            </div>
            <Progress value={3} className="h-2 mt-1" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Missing Values</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Make</span>
              <span>0%</span>
            </div>
            <Progress value={0} className="h-2 mt-1" />
          </div>
          <div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Model</span>
              <span>0%</span>
            </div>
            <Progress value={0} className="h-2 mt-1" />
          </div>
          <div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Year</span>
              <span>0%</span>
            </div>
            <Progress value={0} className="h-2 mt-1" />
          </div>
          <div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Mileage</span>
              <span>0.5%</span>
            </div>
            <Progress value={0.5} className="h-2 mt-1" />
          </div>
          <div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Engine Size</span>
              <span>1.2%</span>
            </div>
            <Progress value={1.2} className="h-2 mt-1" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Car Makes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Toyota</span>
              <span>18%</span>
            </div>
            <Progress value={18} className="h-2 mt-1" />
          </div>
          <div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Honda</span>
              <span>15%</span>
            </div>
            <Progress value={15} className="h-2 mt-1" />
          </div>
          <div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Ford</span>
              <span>12%</span>
            </div>
            <Progress value={12} className="h-2 mt-1" />
          </div>
          <div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Chevrolet</span>
              <span>10%</span>
            </div>
            <Progress value={10} className="h-2 mt-1" />
          </div>
          <div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Others</span>
              <span>45%</span>
            </div>
            <Progress value={45} className="h-2 mt-1" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

