
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight, Users, HelpCircle, MapPin as MapPinIconLucide, Package, Phone, Star, Info, Wrench, CheckCircle, ClipboardList } from 'lucide-react';
import { Typewriter } from '@/components/ui/typewriter';

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

// Battery Guide Table Component
import { BatteryDataTables } from '@/components/battery-guide/battery-data-tables';


export const metadata = {
  title: 'Royal Batteries - Authorized Exide Dealer in Gajwel, Medak',
  description: 'Top Exide battery dealer in Gajwel, Medak District. We offer a wide range of car, motorcycle, inverter, and commercial vehicle batteries with sales, service, and support.',
};


const sampleProducts: Product[] = [
  {
    id: 'prod-1',
    name: 'Exide XLTZ4A',
    imageUrl: 'https://i.pinimg.com/736x/bb/1f/90/bb1f904013965aa508c094365e22056f.jpg',
    dataAiHint: 'motorcycle battery',
    specifications: [
      "48 Months Warranty, T&C apply",
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
      "60 Months Warranty, T&C apply",
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
      "72 Months Warranty, T&C apply",
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
      "48 Months Warranty, T&C apply",
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
      "60 Months Warranty, T&C apply",
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
      "36 Months Warranty, T&C apply",
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
      "36 Months Warranty, T&C apply",
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
      "42 Months Warranty, T&C apply",
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
      "42 Months Warranty, T&C apply",
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
      "42 Months Warranty, T&C apply",
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
      "42 Months Warranty, T&C apply",
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
      "60 Months Warranty, T&C apply",
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
      "42 Months Warranty, T&C apply",
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
      "48 Months Warranty, T&C apply",
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
      "42 Months Warranty, T&C apply",
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

const faqItems: FAQItem[] = [
  {
    id: "item-1",
    question: "How do I know which battery is right for my vehicle?",
    answer:
      "You can check your vehicle's owner manual for battery specifications. Alternatively, visit our store, and our experts will help you find the perfect Exide battery based on your vehicle make, model, and usage. You can also refer to our Battery Guide section for CCA ratings.",
  },
  {
    id: "item-2",
    question: "What is the warranty period for Exide batteries?",
    answer:
      "Warranty periods vary depending on the battery model and are subject to terms and conditions. Most Exide car batteries come with a warranty ranging from 18 to 72 months. Specific warranty details are provided with each battery purchase, on the warranty card, and in our product listings.",
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
   {
    id: "item-7",
    question: "What is CCA and why is it important?",
    answer:
      "CCA stands for Cold Cranking Amps. It measures a battery's ability to start an engine in cold temperatures. A higher CCA rating means more starting power. It's important to choose a battery with CCA rating that meets or exceeds your vehicle manufacturer's recommendations.",
  },
];

const servicesList = [
  {
    title: "Genuine Battery Testing with Professional Meters",
    description: "We use advanced devices like Multimeters and the Midtronics (a high-end Exide machine) to accurately test cranking capacity and overall battery health.",
    icon: CheckCircle,
  },
  {
    title: "Professional Installation",
    description: "Expert installation services for all types of vehicle and inverter batteries.",
    icon: CheckCircle,
  },
  {
    title: "Faster Service for Warranty Batteries",
    description: "We prioritize and expedite warranty claims and services, a key reason our customers have trusted us for many years.",
    icon: CheckCircle,
  },
  {
    title: "Expert Consultation",
    description: "Guidance on choosing the right battery for your specific needs.",
    icon: CheckCircle,
  },
];


const STORE_NAME_DISPLAY = "Royal Batteries - Exide Battery Dealer in Gajwel";
const STORE_ADDRESS_LINE1_DISPLAY = "Shop No: 7-1/1/1, Opposite Munsif Court";
const STORE_ADDRESS_LINE2_DISPLAY = "Main Road, Gajwel, Telangana";
const GOOGLE_MAPS_DIRECTIONS_URL = "https://maps.app.goo.gl/CGc54jkMYS78BPB28"; 
const STORE_HOURS = "8:30 AM - 9:30 PM | Open All Days";
const PRIMARY_PHONE = "+919397617823";
const ALTERNATIVE_PHONE = "+917989846947";


export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-10rem)] min-h-[400px] md:min-h-[500px] lg:min-h-[600px] w-full flex items-center justify-center text-center text-primary-foreground overflow-hidden">
        <Image
          src="https://images.jdmagicbox.com/comp/gwalior/i8/pwfl1525778101z6y4i8/catalogue/baba-battery-service-exide-care-bawa-gwalior-battery-dealers-exide-fbtlg.jpg"
          alt="Royal Batteries Hero Background - Exide Batteries"
          fill
          style={{objectFit: 'cover'}}
          quality={80}
          priority
          className="z-0"
          data-ai-hint="exide battery store"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 p-6 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading mb-4 drop-shadow-lg">
            Power Up Your Journey with <Typewriter text="Royal Batteries" speed={100} className="inline-block text-primary" />
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 drop-shadow-md">
            Your trusted authorized Exide dealer in Gajwel. Quality, Reliability, and Service.
          </p>
          <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/#products">
                Explore Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
             <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/#find-us">
                Find Our Store <MapPinIconLucide className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/#battery-guide">
                Check Battery CCA <ClipboardList className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="mt-10 text-center border border-primary/70 rounded-md py-2 px-3 inline-block">
            <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary">23</span>
            <span className="text-lg sm:text-xl md:text-2xl text-primary-foreground ml-1">
              + years of service
            </span>
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

      {/* About Us Section */}
      <section id="about-us" className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-12">
            <Info className="h-16 w-16 text-primary mb-4" />
            <h2 className="text-4xl font-bold font-heading">About Royal Batteries</h2>
            <p className="mt-2 text-lg text-secondary-foreground max-w-2xl">
              Your Trusted Power Partner in Gajwel.
            </p>
          </div>
          <div className="max-w-3xl mx-auto text-center text-foreground/80 space-y-4">
            <p>
              For over 23 years, Royal Batteries has been proudly serving the Gajwel community and the wider Medak district as an authorized Exide battery dealer. Our mission is to provide reliable power solutions with unmatched customer service. 
            </p>
            <p>
              We believe in offering top-quality products, expert advice, and dependable support to ensure your vehicles and appliances always have the power they need. At Royal Batteries, you're not just a customer; you're part of our family.
            </p>
             <p>
              We are committed to honesty, integrity, and providing the best value for your investment.
            </p>
          </div>
        </div>
      </section>

      {/* Battery Guide Section */}
      <section id="battery-guide" className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-12">
            <ClipboardList className="h-16 w-16 text-primary mb-4" />
            <h2 className="text-4xl font-bold font-heading">Exide Battery Guide & CCA Ratings</h2>
            <p className="mt-2 text-lg text-muted-foreground max-w-3xl">
              🔋 Exide Battery Segments. Click on any segment to view the detailed table with Model, Capacity (Ah), CCA (SAE), and Remarks. Understanding CCA (Cold Cranking Amps) is crucial for ensuring your vehicle starts reliably, especially in varying temperatures.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <BatteryDataTables />
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="our-services" className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-12">
            <Wrench className="h-16 w-16 text-primary mb-4" />
            <h2 className="text-4xl font-bold font-heading">Our Services</h2>
            <p className="mt-2 text-lg text-secondary-foreground max-w-2xl">
              More than just batteries, we offer complete power solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {servicesList.map((service) => (
              <Card key={service.title} className="shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.02]">
                <CardHeader>
                  <div className="flex items-center">
                     <service.icon className="h-6 w-6 text-primary mr-3" />
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Find Us Section */}
      <section id="find-us" className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-12">
            <MapPinIconLucide className="h-16 w-16 text-primary mb-4" />
            <h2 className="text-4xl font-bold font-heading">Find Our Store</h2>
            <p className="mt-2 text-lg text-muted-foreground max-w-2xl">
              Visit us at our Gajwel location for all your Exide battery needs.
            </p>
          </div>
          
          <div className="mt-0 md:mt-8 text-center max-w-2xl mx-auto bg-card p-6 md:p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold font-heading mb-4 text-card-foreground">{STORE_NAME_DISPLAY}</h3>
            <p className="text-md text-card-foreground/80 mt-2">
              {STORE_ADDRESS_LINE1_DISPLAY}<br />
              {STORE_ADDRESS_LINE2_DISPLAY}
            </p>
            <p className="mt-4 text-md text-card-foreground/80">
              <strong>Hours:</strong> {STORE_HOURS}
            </p>
             <p className="mt-2 text-md text-card-foreground/80">
              <strong>Contact:</strong> <a href={`tel:${PRIMARY_PHONE}`} className="text-primary hover:underline">{PRIMARY_PHONE}</a>
            </p>
            <p className="mt-1 text-md text-card-foreground/80">
              <strong>Alternative:</strong> <a href={`tel:${ALTERNATIVE_PHONE}`} className="text-primary hover:underline">{ALTERNATIVE_PHONE}</a>
            </p>
            <Button 
              asChild 
              size="lg" 
              className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <a 
                href={GOOGLE_MAPS_DIRECTIONS_URL} 
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
      <section id="dealer-application" className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-12">
            <Users className="h-16 w-16 text-primary mb-4" />
            <h2 className="text-4xl font-bold font-heading">Become a Dealer</h2>
            <p className="mt-2 text-lg text-secondary-foreground max-w-2xl">
              Partner with Royal Batteries and Exide to power your business growth. Join the HUMSAFAR dealer program.
            </p>
          </div>
          <DealerForm />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-12">
            <HelpCircle className="h-16 w-16 text-primary mb-4" />
            <h2 className="text-4xl font-bold font-heading">Frequently Asked Questions</h2>
            <p className="mt-2 text-lg text-muted-foreground max-w-2xl">
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

      {/* Review Section */}
      <section id="review-us" className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col items-center mb-8">
            <Star className="h-16 w-16 text-primary mb-4" />
            <h2 className="text-3xl font-bold font-heading">Share Your Experience!</h2>
          </div>
          <p className="text-lg text-secondary-foreground mb-8 max-w-2xl mx-auto">
            Your feedback helps us improve and lets others know about your experience with Royal Batteries.
            Please take a moment to leave us a review on Google.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <a href={GOOGLE_MAPS_DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">
              Write a Review <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
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
