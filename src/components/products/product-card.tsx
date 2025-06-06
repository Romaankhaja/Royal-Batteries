
import Image from 'next/image';
import type { Product } from '@/lib/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Phone } from 'lucide-react';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const primaryPhoneNumber = "+919397617823";

  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-[1.02]">
      <CardHeader className="p-0">
        <div className="relative w-full aspect-[4/3] p-4"> {/* Padding moved to container */}
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            style={{ objectFit: "contain" }}
            quality={75}
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
        <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link href={`tel:${primaryPhoneNumber}`}>
            <Phone className="mr-2 h-4 w-4" />
            Inquire Now
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
