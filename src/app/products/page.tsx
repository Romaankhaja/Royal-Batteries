
import type { Product } from '@/lib/types';
import { ProductCard } from '@/components/products/product-card';
import { BatteryCharging } from 'lucide-react';

const sampleProducts: Product[] = [
  {
    id: 'prod-1',
    name: 'Exide XLTZ4A',
    imageUrl: 'https://placehold.co/400x300.png',
    dataAiHint: 'motorcycle battery',
    specifications: [
      "Standard warranty, T&C apply",
      "Fit for Motorcycles, Scooters",
      "Zero-Maintenance VRLA, High Cranking Power"
    ],
    category: 'Two-Wheeler Batteries',
  },
  {
    id: 'prod-2',
    name: 'Exide ML38B20L',
    imageUrl: 'https://placehold.co/400x300.png',
    dataAiHint: 'car battery',
    specifications: [
      "36 months warranty, T&C apply",
      "Fit for Passenger Cars (Small to Mid-size)",
      "Enhanced Durability, Reliable Performance"
    ],
    category: 'Car Batteries',
  },
  {
    id: 'prod-3',
    name: 'Exide MTRED45L',
    imageUrl: 'https://placehold.co/400x300.png',
    dataAiHint: 'car battery maintenance',
    specifications: [
      "48 months warranty, T&C apply",
      "Fit for Passenger Cars (Various Models)",
      "Advanced Calcium-Calcium Technology, Maintenance Free"
    ],
    category: 'Car Batteries',
  },
  {
    id: 'prod-4',
    name: 'Exide EY700L',
    imageUrl: 'https://placehold.co/400x300.png',
    dataAiHint: 'suv battery',
    specifications: [
      "12 months warranty, T&C apply",
      "Fit for SUVs and MUVs",
      "Robust Design for Demanding Loads, Long Life"
    ],
    category: 'Suitable for SUV Car Batteries',
  },
  {
    id: 'prod-5',
    name: 'Exide MLDIN66',
    imageUrl: 'https://placehold.co/400x300.png',
    dataAiHint: 'diesel car',
    specifications: [
      "44 months warranty, T&C apply",
      "Fit for European & Modern Diesel Cars",
      "High Cranking Power, DIN Standard"
    ],
    category: 'Car Batteries',
  },
  {
    id: 'prod-6',
    name: 'Exide DRIVE45L',
    imageUrl: 'https://placehold.co/400x300.png',
    dataAiHint: 'tempo battery',
    specifications: [
      "30 months warranty, T&C apply",
      "Fit for Compact Cars & Light Commercial Vehicles (Tempos)",
      "Reliable Starting Power, Value for Money"
    ],
    category: 'Car and Tempo Batteries',
  },
  {
    id: 'prod-7',
    name: 'Exide DRIVE88L',
    imageUrl: 'https://placehold.co/400x300.png',
    dataAiHint: 'truck battery',
    specifications: [
      "18 months warranty, T&C apply",
      "Fit for LCVs, Trucks, Buses",
      "Heavy Duty Performance, Vibration Resistant"
    ],
    category: 'Commercial Vehicle Batteries',
  },
  {
    id: 'prod-8',
    name: 'Exide KI75TF',
    imageUrl: 'https://placehold.co/400x300.png',
    dataAiHint: 'commercial vehicle battery',
    specifications: [
      "36 months warranty, T&C apply",
      "Fit for Commercial Vehicles & Heavy Machinery",
      "Tubular Technology, Consistent Power Backup for Heavy Loads"
    ],
    category: 'Commercial Vehicle Batteries',
  },
  {
    id: 'prod-9',
    name: 'Exide KI88T',
    imageUrl: 'https://placehold.co/400x300.png',
    dataAiHint: 'heavy duty battery',
    specifications: [
      "42 months warranty, T&C apply",
      "Fit for Heavy Commercial Vehicles & Gensets",
      "Enhanced Power for Demanding Applications, Longer Life"
    ],
    category: 'Commercial Vehicle Batteries',
  },
  {
    id: 'prod-10',
    name: 'Exide XP1300',
    imageUrl: 'https://placehold.co/400x300.png',
    dataAiHint: 'truck power battery',
    specifications: [
      "18 months warranty, T&C apply",
      "Fit for Trucks, Buses, and other Commercial Vehicles",
      "Quick Recharge, Reliable Backup for Commercial Use"
    ],
    category: 'Commercial Vehicle Batteries',
  },
  {
    id: 'prod-11',
    name: 'Exide XP1500',
    imageUrl: 'https://placehold.co/400x300.png',
    dataAiHint: 'bus battery',
    specifications: [
      "24 months warranty, T&C apply",
      "Fit for Heavy Duty Commercial Vehicles (e.g., Buses, Large Trucks)",
      "Higher Capacity, Sustained Performance for Long Hauls"
    ],
    category: 'Commercial Vehicle Batteries',
  },
  {
    id: 'prod-12',
    name: 'Exide Invamaster (IMTT1500)',
    imageUrl: 'https://placehold.co/400x300.png',
    dataAiHint: 'tall tubular',
    specifications: [
      "60 months warranty, T&C apply",
      "Fit for Home UPS/Inverters, High Power Needs",
      "Tall Tubular Design, Very Long Life, Deep Discharge Resistant"
    ],
    category: 'Inverter Batteries',
  },
  {
    id: 'prod-13',
    name: 'Exide STAR 1125VA',
    imageUrl: 'https://placehold.co/400x300.png',
    dataAiHint: 'home ups',
    specifications: [
      "24 months on unit, T&C apply",
      "Powers Fans, Lights, TVs during outages",
      "Pure Sine Wave Output, Intelligent Charging"
    ],
    category: 'Home UPS/Inverters',
  },
  {
    id: 'prod-14',
    name: 'Exide IHST1500',
    imageUrl: 'https://placehold.co/400x300.png',
    dataAiHint: 'short tubular',
    specifications: [
      "54 months warranty, T&C apply",
      "Fit for Home UPS/Inverters (Space Saving Design)",
      "Short Tubular, Good Backup for Moderate Needs"
    ],
    category: 'Inverter Batteries',
  },
  {
    id: 'prod-15',
    name: 'Exide GQP24V2550VA',
    imageUrl: 'https://placehold.co/400x300.png',
    dataAiHint: 'office ups',
    specifications: [
      "24 months on unit, T&C apply",
      "Fit for Small Offices, Shops, Larger Homes",
      "High Capacity, 24V System, Reliable Power"
    ],
    category: 'Home/Commercial UPS',
  },
  {
    id: 'prod-16',
    name: 'Exide DISTILLO Battery Water',
    imageUrl: 'https://placehold.co/400x300.png',
    dataAiHint: 'distilled water',
    specifications: [
      "N/A (Consumable)",
      "For Lead-Acid Batteries requiring water top-up",
      "Maintains Battery Health, Prolongs Life"
    ],
    category: 'Battery Accessories',
  },
];

export default function ProductsPage() {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center text-center mb-12">
        <BatteryCharging className="h-16 w-16 text-primary mb-4" />
        <h1 className="text-4xl font-bold font-heading">Our Products</h1>
        <p className="mt-2 text-lg text-muted-foreground max-w-2xl">
          Explore our wide range of Exide batteries, designed for performance and reliability.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {sampleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
