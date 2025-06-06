
"use client";

import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";

interface BatterySpec {
  model: string;
  capacity: string;
  cca: string;
  remarks: string;
}

interface BatteryCategory {
  id: string;
  title: string;
  emoji: string;
  batteries: BatterySpec[];
}

const batteryData: BatteryCategory[] = [
  {
    id: "two-wheeler",
    title: "Two Wheeler Batteries Range",
    emoji: "🏍️",
    batteries: [
      { model: "Exide Xplore FXL0-XLTZ4A", capacity: "4", cca: "95", remarks: "Maintenance-free, VRLA, spill-proof" },
      { model: "Exide Xplore FXL0-XLTZ5", capacity: "4", cca: "115", remarks: "VRLA, low self-discharge" },
      { model: "Exide Xplore FXL0-XLTZ7", capacity: "6", cca: "150", remarks: "VRLA, superior cranking power" },
      { model: "Exide Xplore FXL0-12XL5L-B", capacity: "5", cca: "125", remarks: "VRLA, advanced Lead-Calcium technology" },
      { model: "Exide Xplore FXL0-12XL7B-B", capacity: "7", cca: "170", remarks: "VRLA, high cranking power" },
      { model: "Exide Xplore FXL0-12XL14L-A2", capacity: "14", cca: "250", remarks: "VRLA, high cranking power" },
      { model: "Exide Xplore FXL0-12XL9-B", capacity: "9", cca: "180", remarks: "VRLA, spill-proof" },
      { model: "Exide Xplore FXL0-XLTZ9", capacity: "9", cca: "180", remarks: "VRLA, spill-proof" },
    ],
  },
  {
    id: "petrol-car",
    title: "Petrol Car Batteries Range",
    emoji: "🚗",
    batteries: [
      { model: "Exide Mileage FML8-ML35R", capacity: "35", cca: "270", remarks: "Robust design, spill-resistant" },
      { model: "Exide Mileage FML8-ML35L", capacity: "35", cca: "270", remarks: "Spill-resistant, Magic Eye indicator" },
      { model: "Exide Mileage FML0-ML38B20L", capacity: "35", cca: "270", remarks: "Spill-resistant, Magic Eye indicator" },
      { model: "Exide Mileage FML8-ML40LBH", capacity: "40", cca: "280", remarks: "High temperature resistance" },
      { model: "Exide Mileage FML0-ML40RBH", capacity: "40", cca: "280", remarks: "High temperature resistance" },
      { model: "Exide Mileage FML0-MLDIN50", capacity: "50", cca: "405", remarks: "High reliability, Magic Eye indicator" },
      { model: "Exide Mileage FML8-MLDIN65LH", capacity: "65", cca: "500", remarks: "High reliability, Magic Eye indicator" },
      { model: "Exide Mileage FML0-ML45D21LBH", capacity: "45", cca: "330", remarks: "High reliability, Magic Eye indicator" },
      { model: "Exide Mileage FML0-ML55D23L", capacity: "54", cca: "360", remarks: "High reliability, Magic Eye indicator" },
      { model: "Exide Mileage FML0-ML75D23LBH", capacity: "68", cca: "450", remarks: "High reliability, Magic Eye indicator" },
      { model: "Exide Mileage FML0-MLDIN44LH", capacity: "44", cca: "360", remarks: "High reliability, Magic Eye indicator" },
      { model: "Exide Mileage FML0-MLDIN55", capacity: "55", cca: "480", remarks: "High reliability, Magic Eye indicator" },
      { model: "Exide Mileage FML0-MLDIN60", capacity: "60", cca: "500", remarks: "High reliability, Magic Eye indicator" },
      { model: "Exide Mileage FML0-MLDIN44R", capacity: "44", cca: "360", remarks: "High reliability, Magic Eye indicator" },
      { model: "Exide Mileage FML0-MLDIN80", capacity: "80", cca: "760", remarks: "High reliability, Magic Eye indicator" },
      { model: "Exide Mileage FML0-MLDIN66", capacity: "66", cca: "590", remarks: "High reliability, Magic Eye indicator" },
    ],
  },
  {
    id: "diesel-suv",
    title: "Diesel Car & SUV Batteries Range",
    emoji: "🚙",
    batteries: [
      { model: "Exide Mileage FML0-MLDIN44LH", capacity: "44", cca: "360", remarks: "High reliability, Magic Eye indicator" },
      { model: "Exide Mileage FML0-MLDIN55", capacity: "55", cca: "480", remarks: "High reliability, Magic Eye indicator" },
      { model: "Exide Mileage FML0-MLDIN60", capacity: "60", cca: "500", remarks: "High reliability, Magic Eye indicator" },
      { model: "Exide Mileage FML0-MLDIN44R", capacity: "44", cca: "360", remarks: "High reliability, Magic Eye indicator" },
    ],
  },
  {
    id: "commercial-heavy",
    title: "Commercial & Heavy-Duty Vehicle Batteries Range",
    emoji: "🚛",
    batteries: [
      { model: "Exide Xpress XP800", capacity: "80", cca: "530", remarks: "Spill-resistant, 36-month warranty" },
      { model: "Exide Xpress XP880", capacity: "88", cca: "550", remarks: "Left layout, spill-resistant" },
      { model: "Exide Xpress XP1000", capacity: "100", cca: "580", remarks: "Left layout, spill-resistant" },
      { model: "Exide Xpress XP1100", capacity: "110", cca: "700", remarks: "High cranking power, spill-resistant" },
      { model: "Exide Xpress XP1300", capacity: "130", cca: "720", remarks: "Right layout, spill-resistant" },
      { model: "Exide Xpress XP1500", capacity: "150", cca: "785", remarks: "Right layout, spill-resistant" },
      { model: "Exide Drive 130R", capacity: "130", cca: "700", remarks: "Designed for heavy engines, spill-resistant" },
      { model: "Exide Drive 150R", capacity: "150", cca: "785", remarks: "Designed for heavy engines, spill-resistant" },
    ],
  },
];

export function BatteryDataTables() {
  return (
    <div className="space-y-6">
      {batteryData.map((category) => (
        <details key={category.id} className="group bg-card p-4 sm:p-6 rounded-lg shadow-md open:ring-2 open:ring-primary transition-all">
          <summary className="flex items-center justify-between text-lg sm:text-xl font-semibold font-heading cursor-pointer list-none hover:text-primary">
            <span>{category.emoji} {category.title}</span>
            <span className="transition-transform duration-300 group-open:rotate-180">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </span>
          </summary>
          <div className="mt-4 overflow-x-auto">
            <Table className="min-w-full">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[35%] whitespace-nowrap">Model</TableHead>
                  <TableHead className="w-[15%] whitespace-nowrap text-center">Capacity (Ah)</TableHead>
                  <TableHead className="w-[15%] whitespace-nowrap text-center">CCA (SAE)</TableHead>
                  <TableHead className="w-[35%] whitespace-nowrap">Remarks</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {category.batteries.map((battery, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{battery.model}</TableCell>
                    <TableCell className="text-center">{battery.capacity}</TableCell>
                    <TableCell className="text-center">{battery.cca}</TableCell>
                    <TableCell>{battery.remarks}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </details>
      ))}
    </div>
  );
}
