
import Image from 'next/image';
import type { Product } from '@/lib/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="p-0">
        <div className="relative w-full aspect-[4/3] p-4"> {/* Added p-4 here */}
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill // Changed from layout="fill"
            style={{ objectFit: "contain" }} // Added style for objectFit, removed objectFit prop
            // className="p-4" // Removed p-4 from here
            data-ai-hint={product.dataAiHint}
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-6">
        <CardTitle className="text-xl font-heading mb-2">{product.name}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground mb-1">Category: {product.category}</CardDescription>
        <ul className="mt-4 space-y-1 text-sm text-foreground/80">
          {product.specifications.slice(0, 3).map((spec, index) => (
            <li key={index} className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2 shrink-0" />
              <span>{spec}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
          Inquire Now
        </Button>
      </CardFooter>
    </Card>
  );
}
