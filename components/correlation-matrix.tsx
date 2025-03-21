"use client"

import { useState } from "react"

const correlationData = [
  ["", "Price", "Age", "Mileage", "Engine", "HP"],
  ["Price", "1.00", "-0.78", "-0.65", "0.72", "0.62"],
  ["Age", "-0.78", "1.00", "0.85", "-0.25", "-0.18"],
  ["Mileage", "-0.65", "0.85", "1.00", "-0.22", "-0.15"],
  ["Engine", "0.72", "-0.25", "-0.22", "1.00", "0.88"],
  ["HP", "0.62", "-0.18", "-0.15", "0.88", "1.00"],
]

export function CorrelationMatrix() {
  const [hoveredCell, setHoveredCell] = useState<string | null>(null)

  const getColor = (value: string, i: number, j: number) => {
    if (i === 0 || j === 0) return "bg-muted"
    if (i === j) return "bg-muted"

    const numValue = Number.parseFloat(value)
    if (isNaN(numValue)) return "bg-white"

    if (numValue > 0.7) return "bg-green-100 dark:bg-green-900"
    if (numValue > 0.4) return "bg-green-50 dark:bg-green-800"
    if (numValue > 0) return "bg-green-25 dark:bg-green-700"
    if (numValue > -0.4) return "bg-red-25 dark:bg-red-700"
    if (numValue > -0.7) return "bg-red-50 dark:bg-red-800"
    return "bg-red-100 dark:bg-red-900"
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <tbody>
          {correlationData.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`border p-2 text-center ${getColor(cell, i, j)} ${
                    hoveredCell === `${i}-${j}` ? "ring-2 ring-primary" : ""
                  }`}
                  onMouseEnter={() => setHoveredCell(`${i}-${j}`)}
                  onMouseLeave={() => setHoveredCell(null)}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 text-sm text-muted-foreground">
        <p>Correlation strength: Values closer to 1 or -1 indicate stronger correlations.</p>
        <p>
          Positive values (green) indicate positive correlation, negative values (red) indicate negative correlation.
        </p>
      </div>
    </div>
  )
}

