"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Check } from "lucide-react"

export function PredictionForm() {
  const [prediction, setPrediction] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    make: "",
    model: "",
    year: "",
    mileage: "",
    engine: "",
    transmission: "Automatic",
    fuel: "Gasoline",
  })

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handlePredict = () => {
    // In a real application, this would call an API to get the prediction
    // For demo purposes, we'll generate a random price based on the inputs
    const currentYear = new Date().getFullYear()
    const age = currentYear - Number.parseInt(formData.year || "2020")
    const mileage = Number.parseInt(formData.mileage || "30000")
    const engineSize = Number.parseFloat(formData.engine || "2.0")

    // Simple formula for demo purposes
    const basePrice = 25000
    const ageFactor = age * 1200
    const mileageFactor = mileage * 0.05
    const engineFactor = engineSize * 5000
    const makeBonus = formData.make === "BMW" || formData.make === "Mercedes" ? 8000 : 0

    const price = basePrice - ageFactor - mileageFactor + engineFactor + makeBonus
    setPrediction(Math.max(5000, Math.round(price)))
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="make">Make</Label>
          <Select value={formData.make} onValueChange={(value) => handleChange("make", value)}>
            <SelectTrigger id="make">
              <SelectValue placeholder="Select make" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Toyota">Toyota</SelectItem>
              <SelectItem value="Honda">Honda</SelectItem>
              <SelectItem value="Ford">Ford</SelectItem>
              <SelectItem value="BMW">BMW</SelectItem>
              <SelectItem value="Chevrolet">Chevrolet</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="model">Model</Label>
          <Input
            id="model"
            placeholder="e.g., Camry"
            value={formData.model}
            onChange={(e) => handleChange("model", e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="year">Year</Label>
          <Input
            id="year"
            placeholder="e.g., 2018"
            value={formData.year}
            onChange={(e) => handleChange("year", e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="mileage">Mileage</Label>
          <Input
            id="mileage"
            placeholder="e.g., 45000"
            value={formData.mileage}
            onChange={(e) => handleChange("mileage", e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="engine">Engine Size (L)</Label>
          <Input
            id="engine"
            placeholder="e.g., 2.5"
            value={formData.engine}
            onChange={(e) => handleChange("engine", e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="transmission">Transmission</Label>
          <Select value={formData.transmission} onValueChange={(value) => handleChange("transmission", value)}>
            <SelectTrigger id="transmission">
              <SelectValue placeholder="Select transmission" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Automatic">Automatic</SelectItem>
              <SelectItem value="Manual">Manual</SelectItem>
              <SelectItem value="CVT">CVT</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="fuel">Fuel Type</Label>
          <Select value={formData.fuel} onValueChange={(value) => handleChange("fuel", value)}>
            <SelectTrigger id="fuel">
              <SelectValue placeholder="Select fuel type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Gasoline">Gasoline</SelectItem>
              <SelectItem value="Diesel">Diesel</SelectItem>
              <SelectItem value="Hybrid">Hybrid</SelectItem>
              <SelectItem value="Electric">Electric</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button onClick={handlePredict} className="w-full">
        Predict Price
      </Button>

      {prediction && (
        <Alert className="mt-4 bg-green-50 border-green-200">
          <Check className="h-4 w-4 text-green-600" />
          <AlertTitle className="text-green-800">Prediction Result</AlertTitle>
          <AlertDescription className="text-green-700">
            The predicted price for this car is <span className="font-bold">${prediction.toLocaleString()}</span>
          </AlertDescription>
        </Alert>
      )}
    </div>
  )
}

