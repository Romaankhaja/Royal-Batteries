
import type { Product } from '@/lib/types';
import { ProductCard } from '@/components/products/product-card';
import { BatteryCharging } from 'lucide-react';

const sampleProducts: Product[] = [
  {
    id: 'prod-1',
    name: 'Exide XLTZ4A',
    imageUrl: 'https://i.pinimg.com/736x/bb/1f/90/bb1f904013965aa508c094365e22056f.jpg',
    dataAiHint: 'motorcycle battery',
    specifications: [
      "48 months warranty, T&C apply",
      "Fit for Motorcycles, Scooters",
      "Zero-Maintenance VRLA, High Cranking Power"
    ],
    category: 'Two-Wheeler Batteries',
  },
  {
    id: 'prod-2',
    name: 'Exide ML38B20L',
    imageUrl: 'https://www.genuineautoelectricals.com/wp-content/uploads/2018/11/Exide-Mileage.jpg',
    dataAiHint: 'car battery',
    specifications: [
      "60 months warranty, T&C apply",
      "Fit for Passenger Cars (Small to Mid-size)",
      "Enhanced Durability, Reliable Performance"
    ],
    category: 'Car Batteries',
  },
  {
    id: 'prod-3',
    name: 'Exide MTRED45L',
    imageUrl: 'https://i.pinimg.com/736x/40/93/ae/4093aebe4d5fdfbfd0b984a07ca27ab6.jpg',
    dataAiHint: 'car battery maintenance',
    specifications: [
      "72 months warranty, T&C apply",
      "Fit for Passenger Cars (Various Models)",
      "Advanced Calcium-Calcium Technology, Maintenance Free"
    ],
    category: 'Car Batteries',
  },
  {
    id: 'prod-4',
    name: 'Exide EY700L',
    imageUrl: 'https://5.imimg.com/data5/ANDROID/Default/2024/2/385870694/OX/KH/TZ/15206173/product-jpeg.jpg',
    dataAiHint: 'suv battery',
    specifications: [
      "48 months warranty, T&C apply",
      "Fit for SUVs and MUVs",
      "Robust Design for Demanding Loads, Long Life"
    ],
    category: 'Suitable for SUV Car Batteries',
  },
  {
    id: 'prod-5',
    name: 'Exide MLDIN66',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/2/384293323/AK/SA/OW/61242310/new-product-500x500.jpeg',
    dataAiHint: 'diesel car',
    specifications: [
      "60 months warranty, T&C apply",
      "Fit for European & Modern Diesel Cars",
      "High Cranking Power, DIN Standard"
    ],
    category: 'Car Batteries',
  },
  {
    id: 'prod-6',
    name: 'Exide DRIVE45L',
    imageUrl: 'https://www.genuineautoelectricals.com/wp-content/uploads/exide-drive-battery-banner-595x312.webp',
    dataAiHint: 'tempo battery',
    specifications: [
      "36 months warranty, T&C apply",
      "Fit for Compact Cars & Light Commercial Vehicles (Tempos)",
      "Reliable Starting Power, Value for Money"
    ],
    category: 'Car and Tempo Batteries',
  },
  {
    id: 'prod-7',
    name: 'Exide DRIVE88L',
    imageUrl: 'https://www.genuineautoelectricals.com/wp-content/uploads/2022/11/exide-drive-battery.webp',
    dataAiHint: 'truck battery',
    specifications: [
      "36 months warranty, T&C apply",
      "Fit for LCVs, Trucks, Buses",
      "Heavy Duty Performance, Vibration Resistant"
    ],
    category: 'Commercial Vehicle Batteries',
  },
  {
    id: 'prod-8',
    name: 'Exide KI75TF',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/8/446047170/UA/KN/GI/87318993/exide-jai-kisan-ki80t.png',
    dataAiHint: 'commercial vehicle battery',
    specifications: [
      "42 months warranty, T&C apply",
      "Fit for Commercial Vehicles & Heavy Machinery",
      "Tubular Technology, Consistent Power Backup for Heavy Loads"
    ],
    category: 'Commercial Vehicle Batteries',
  },
  {
    id: 'prod-9',
    name: 'Exide KI88T',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/3/396398304/XP/CU/MQ/44680517/exide-jai-kisan-new2-500x500.jpg',
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
    imageUrl: 'https://www.exidecare.com/assets/ProductImages/XP1300.jpg',
    dataAiHint: 'truck power battery',
    specifications: [
      "42 months warranty, T&C apply",
      "Fit for Trucks, Buses, and other Commercial Vehicles",
      "Quick Recharge, Reliable Backup for Commercial Use"
    ],
    category: 'Commercial Vehicle Batteries',
  },
  {
    id: 'prod-11',
    name: 'Exide XP1500',
    imageUrl: 'https://www.exidecare.com/assets/ProductImages/XP1500.jpg',
    dataAiHint: 'bus battery',
    specifications: [
      "42 months warranty, T&C apply",
      "Fit for Heavy Duty Commercial Vehicles (e.g., Buses, Large Trucks)",
      "Higher Capacity, Sustained Performance for Long Hauls"
    ],
    category: 'Commercial Vehicle Batteries',
  },
  {
    id: 'prod-12',
    name: 'Exide Invamaster (IMTT1500)',
    imageUrl: 'https://www.inverterhome.in/wp-content/uploads/2021/08/Exide-InvaMaster-150AH-Tall-Tubular-Battery-FEM0-IMTT1500.jpg',
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
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2023/6/313360315/RE/ZK/KL/53607373/new-exide-star-inverter-banner-500x500.JPG',
    dataAiHint: 'home ups',
    specifications: [
      "42 months on unit, T&C apply",
      "Powers Fans, Lights, TVs during outages",
      "Pure Sine Wave Output, Intelligent Charging"
    ],
    category: 'Home UPS/Inverters',
  },
  {
    id: 'prod-14',
    name: 'Exide IHST1500',
    imageUrl: 'https://exidebatterydealer.com/wp-content/uploads/2024/12/Exide-Inva-Homz-IHST1500.png',
    dataAiHint: 'short tubular',
    specifications: [
      "48 months warranty, T&C apply",
      "Fit for Home UPS/Inverters (Space Saving Design)",
      "Short Tubular, Good Backup for Moderate Needs"
    ],
    category: 'Inverter Batteries',
  },
  {
    id: 'prod-15',
    name: 'Exide GQP24V2550VA',
    imageUrl: 'https://www.inverterhome.in/wp-content/uploads/2024/12/Exide-Inverterz-GQP-900VA-Inverter-300x300.jpg',
    dataAiHint: 'office ups',
    specifications: [
      "42 months on unit, T&C apply",
      "Fit for Small Offices, Shops, Larger Homes",
      "High Capacity, 24V System, Reliable Power"
    ],
    category: 'Home/Commercial UPS',
  },
  {
    id: 'prod-16',
    name: 'Exide DISTILLO Battery Water',
    imageUrl: 'https://m.media-amazon.com/images/X/bxt1/M/Qbxt1Byow07HFog._SL640_QL75_FMwebp_.jpg',
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

    