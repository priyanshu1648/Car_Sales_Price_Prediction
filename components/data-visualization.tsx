"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PriceDistributionChart } from "@/components/price-distribution-chart"
import { FeatureCorrelationChart } from "@/components/feature-correlation-chart"
import { PriceTrendChart } from "@/components/price-trend-chart"

export function DataVisualization() {
  return (
    <div className="space-y-4">
      <Tabs defaultValue="price" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="price">Price Distribution</TabsTrigger>
          <TabsTrigger value="correlation">Feature Correlation</TabsTrigger>
          <TabsTrigger value="trend">Price Trends</TabsTrigger>
        </TabsList>
        <TabsContent value="price" className="pt-4">
          <PriceDistributionChart />
          <p className="text-sm text-muted-foreground mt-4">
            The price distribution shows that most cars in the dataset are priced between $10,000 and $25,000, with the
            highest concentration in the $15,000-$20,000 range.
          </p>
        </TabsContent>
        <TabsContent value="correlation" className="pt-4">
          <FeatureCorrelationChart />
          <p className="text-sm text-muted-foreground mt-4">
            Car age has the strongest negative correlation with price, while engine size has the strongest positive
            correlation. This indicates that newer cars and cars with larger engines tend to be more expensive.
          </p>
        </TabsContent>
        <TabsContent value="trend" className="pt-4">
          <PriceTrendChart />
          <p className="text-sm text-muted-foreground mt-4">
            The price trend shows a clear depreciation curve, with cars losing value most rapidly in the first few
            years. After about 5 years, the rate of depreciation slows down significantly.
          </p>
        </TabsContent>
      </Tabs>
    </div>
  )
}

