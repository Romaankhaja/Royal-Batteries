import type { Product } from '@/lib/types';
import { ProductCard } from '@/components/products/product-card';
import { BatteryCharging } from 'lucide-react';

const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Exide Matrix (MTREDDIN74)',
    imageUrl: 'https://placehold.co/400x300.png',
    dataAiHint: 'car battery',
    specifications: ['Maintenance Free', '74Ah Capacity', 'For Passenger Vehicles', 'Calcium-Calcium Technology'],
    category: 'Car Batteries',
  },
  {
    id: '2',
    name: 'Exide Xplore (12XL5L-B)',
    imageUrl: 'https://placehold.co/400x300.png',
    dataAiHint: 'motorcycle battery',
    specifications: ['Zero-Maintenance VRLA', 'For Motorcycles', 'Spill-proof design', 'High Cranking Power'],
    category: 'Two-Wheeler Batteries',
  },
  {
    id: '3',
    name: 'Exide Invamaster (IMTT1500)',
    imageUrl: 'https://placehold.co/400x300.png',
    dataAiHint: 'inverter battery',
    specifications: ['Tall Tubular Battery', '150Ah Capacity', 'For Home UPS/Inverters', 'Long Life'],
    category: 'Inverter Batteries',
  },
  {
    id: '4',
    name: 'Exide Eezy (EZ700)',
    imageUrl: 'https://placehold.co/400x300.png',
    dataAiHint: 'solar battery',
    specifications: ['C10 Rating Solar Battery', 'Deep Discharge Application', 'Low Maintenance', 'Robust Design'],
    category: 'Solar Batteries',
  },
   {
    id: '5',
    name: 'Exide Mileage (MLDIN44LH)',
    imageUrl: 'https://placehold.co/400x300.png',
    dataAiHint: 'truck battery',
    specifications: ['Heavy Duty Performance', '44Ah Capacity', 'For Commercial Vehicles', 'Vibration Resistant'],
    category: 'Commercial Vehicle Batteries',
  },
  {
    id: '6',
    name: 'Exide Advanz (ADVZ4L-B)',
    imageUrl: 'https://placehold.co/400x300.png',
    dataAiHint: 'scooter battery',
    specifications: ['Maintenance Free', 'For Scooters', 'AGM Technology', 'Factory Charged'],
    category: 'Two-Wheeler Batteries',
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
