
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight, Users, HelpCircle, MapPin as MapPinIcon, Package } from 'lucide-react';

// Product Section Content
import type { Product } from '@/lib/types';
import { ProductCard } from '@/components/products/product-card';
import { BatteryCharging as ProductsBatteryChargingIcon } from 'lucide-react';

// Dealer Application Section Content
import { DealerForm } from '@/components/dealer-application/dealer-form';

// FAQ Section Content
import type { FAQItem } from '@/lib/types';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

const faqItems: FAQItem[] = [
  {
    id: "item-1",
    question: "How do I know which battery is right for my vehicle?",
    answer:
      "You can check your vehicle's owner manual for battery specifications. Alternatively, visit our store, and our experts will help you find the perfect Exide battery based on your vehicle make, model, and usage.",
  },
  {
    id: "item-2",
    question: "What is the warranty period for Exide batteries?",
    answer:
      "Warranty periods vary depending on the battery model. Most Exide car batteries come with a warranty ranging from 18 to 60 months. Specific warranty details are provided with each battery purchase and on the warranty card.",
  },
  {
    id: "item-3",
    question: "Do you offer battery installation services?",
    answer:
      "Yes, we offer professional battery installation services at our Gajwel store. Our technicians ensure your new battery is fitted correctly and safely.",
  },
  {
    id: "item-4",
    question: "How can I maintain my battery to prolong its life?",
    answer:
      "To prolong battery life: \n1. Keep the battery terminals clean and free of corrosion. \n2. Ensure the battery is securely mounted. \n3. Avoid deep discharging your battery frequently. \n4. For non-maintenance-free batteries, check and top up distilled water levels regularly. \n5. Get your vehicle's electrical system checked periodically.",
  },
  {
    id: "item-5",
    question: "What should I do with my old battery?",
    answer:
      "We encourage responsible battery disposal. You can bring your old battery to our store, and we will ensure it is recycled in an environmentally friendly manner through authorized channels.",
  },
  {
    id: "item-6",
    question: "Do you sell inverter batteries?",
    answer:
      "Yes, we stock a wide range of Exide inverter batteries, including tall tubular and flat plate models, suitable for various power backup needs for homes and businesses.",
  },
];

// Store details based on user input and https://maps.app.goo.gl/CGc54jkMYS78BPB28
const STORE_NAME_DISPLAY = "Royal Batteries - Exide Battery Dealer in Gajwel";
const STORE_ADDRESS_DISPLAY_LINE1 = "Shop No: 7-1/1/1, Opposite Munsif Court";
const STORE_ADDRESS_DISPLAY_LINE2 = "Main Road, Gajwel, Telangana";
const GOOGLE_MAPS_DIRECTIONS_ADDRESS = "Royal Batteries - Exide Battery Dealer in Gajwel, Gajwel, Telangana 502312, India"; // Address from the shared map link for directions
const STORE_HOURS = "Mon - Sat: 9:00 AM - 7:00 PM | Sun: Closed";


export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-10rem)] min-h-[400px] md:min-h-[500px] lg:min-h-[600px] w-full flex items-center justify-center text-center text-primary-foreground overflow-hidden">
        <Image
          src="https://placehold.co/1920x800.png"
          alt="Royal Batteries Hero Background"
          fill
          style={{objectFit: 'cover'}}
          quality={80}
          priority
          className="z-0"
          data-ai-hint="battery technology"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 p-6 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading mb-4 drop-shadow-lg">
            Power Up Your Journey with Royal Batteries
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 drop-shadow-md">
            Your trusted authorized Exide dealer in Medak. Quality, Reliability, and Service.
          </p>
          <div className="space-x-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/#products">
                Explore Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
             <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <Link href="/#find-us">
                Find Our Store <MapPinIcon className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-12">
            <ProductsBatteryChargingIcon className="h-16 w-16 text-primary mb-4" />
            <h2 className="text-4xl font-bold font-heading">Our Products</h2>
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
      </section>

      {/* Find Us Section */}
      <section id="find-us" className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-12">
            <MapPinIcon className="h-16 w-16 text-primary mb-4" />
            <h2 className="text-4xl font-bold font-heading">Find Our Store</h2>
            <p className="mt-2 text-lg text-secondary-foreground max-w-2xl">
              Visit us at our Gajwel location for all your Exide battery needs.
            </p>
          </div>
          
          <div className="mt-0 md:mt-8 text-center max-w-2xl mx-auto bg-card p-6 md:p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold font-heading mb-4 text-card-foreground">Visit Us</h3>
            <p className="text-lg text-card-foreground/90">
              <strong>{STORE_NAME_DISPLAY}</strong>
            </p>
            <p className="text-md text-card-foreground/80 mt-2">
              {STORE_ADDRESS_DISPLAY_LINE1}<br />
              {STORE_ADDRESS_DISPLAY_LINE2}
            </p>
            <p className="mt-4 text-md text-card-foreground/80">
              <strong>Hours:</strong> {STORE_HOURS}
            </p>
            <Button 
              asChild 
              size="lg" 
              className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <a 
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(GOOGLE_MAPS_DIRECTIONS_ADDRESS)}`} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Get Directions <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Dealer Application Section */}
      <section id="dealer-application" className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-12">
            <Users className="h-16 w-16 text-primary mb-4" />
            <h2 className="text-4xl font-bold font-heading">Become a Dealer</h2>
            <p className="mt-2 text-lg text-muted-foreground max-w-2xl">
              Partner with Royal Batteries and Exide to power your business growth. Join the HUMSAFAR dealer program.
            </p>
          </div>
          <DealerForm />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-12">
            <HelpCircle className="h-16 w-16 text-primary mb-4" />
            <h2 className="text-4xl font-bold font-heading">Frequently Asked Questions</h2>
            <p className="mt-2 text-lg text-secondary-foreground max-w-2xl">
              Find answers to common questions about our products and services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item) => (
                <AccordionItem key={item.id} value={item.id} className="border-b border-border/70">
                  <AccordionTrigger className="text-left hover:no-underline py-4 text-lg font-medium">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pt-1 pb-4 text-base text-foreground/80 whitespace-pre-line">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-heading mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you need a new battery, want to become a dealer, or have questions, we're here to help.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="#dealer-application">
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
