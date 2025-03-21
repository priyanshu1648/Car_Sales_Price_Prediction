"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const data = [
  {
    id: 1,
    make: "Toyota",
    model: "Camry",
    year: 2018,
    mileage: 45000,
    engine: "2.5L",
    transmission: "Automatic",
    fuel: "Gasoline",
    price: 18500,
  },
  {
    id: 2,
    make: "Honda",
    model: "Civic",
    year: 2019,
    mileage: 32000,
    engine: "1.8L",
    transmission: "Automatic",
    fuel: "Gasoline",
    price: 17200,
  },
  {
    id: 3,
    make: "Ford",
    model: "Fusion",
    year: 2017,
    mileage: 58000,
    engine: "2.0L",
    transmission: "Automatic",
    fuel: "Gasoline",
    price: 14500,
  },
  {
    id: 4,
    make: "BMW",
    model: "3 Series",
    year: 2018,
    mileage: 38000,
    engine: "2.0L",
    transmission: "Automatic",
    fuel: "Gasoline",
    price: 25800,
  },
  {
    id: 5,
    make: "Chevrolet",
    model: "Malibu",
    year: 2020,
    mileage: 22000,
    engine: "1.5L",
    transmission: "Automatic",
    fuel: "Gasoline",
    price: 19200,
  },
  {
    id: 6,
    make: "Nissan",
    model: "Altima",
    year: 2019,
    mileage: 29000,
    engine: "2.5L",
    transmission: "Automatic",
    fuel: "Gasoline",
    price: 16800,
  },
  {
    id: 7,
    make: "Hyundai",
    model: "Sonata",
    year: 2020,
    mileage: 18000,
    engine: "2.4L",
    transmission: "Automatic",
    fuel: "Gasoline",
    price: 20500,
  },
  {
    id: 8,
    make: "Kia",
    model: "Optima",
    year: 2018,
    mileage: 42000,
    engine: "2.4L",
    transmission: "Automatic",
    fuel: "Gasoline",
    price: 15900,
  },
  {
    id: 9,
    make: "Mazda",
    model: "6",
    year: 2019,
    mileage: 31000,
    engine: "2.5L",
    transmission: "Automatic",
    fuel: "Gasoline",
    price: 18200,
  },
  {
    id: 10,
    make: "Subaru",
    model: "Legacy",
    year: 2020,
    mileage: 25000,
    engine: "2.5L",
    transmission: "Automatic",
    fuel: "Gasoline",
    price: 21500,
  },
]

export function CarDataTable() {
  return (
    <div className="rounded-md border overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Make</TableHead>
            <TableHead>Model</TableHead>
            <TableHead>Year</TableHead>
            <TableHead>Mileage</TableHead>
            <TableHead>Engine</TableHead>
            <TableHead>Transmission</TableHead>
            <TableHead>Fuel</TableHead>
            <TableHead className="text-right">Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((car) => (
            <TableRow key={car.id}>
              <TableCell>{car.make}</TableCell>
              <TableCell>{car.model}</TableCell>
              <TableCell>{car.year}</TableCell>
              <TableCell>{car.mileage.toLocaleString()}</TableCell>
              <TableCell>{car.engine}</TableCell>
              <TableCell>{car.transmission}</TableCell>
              <TableCell>{car.fuel}</TableCell>
              <TableCell className="text-right">${car.price.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

