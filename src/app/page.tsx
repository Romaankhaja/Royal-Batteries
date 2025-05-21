import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight, BatteryCharging, MapPinIcon, UsersIcon, HelpCircleIcon } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-10rem)] min-h-[400px] md:min-h-[500px] lg:min-h-[600px] w-full flex items-center justify-center text-center text-primary-foreground overflow-hidden">
        <Image
          src="https://placehold.co/1920x800.png"
          alt="Royal Batteries Hero Background"
          layout="fill"
          objectFit="cover"
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
              <Link href="/products">
                Explore Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <Link href="/find-us">
                Find Our Store
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-heading text-center mb-12">Our Offerings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<BatteryCharging className="h-10 w-10 text-primary mb-4" />}
              title="Wide Range of Batteries"
              description="Find the perfect Exide battery for your car, bike, inverter, and more."
              link="/products"
              linkText="View Products"
            />
            <FeatureCard
              icon={<MapPinIcon className="h-10 w-10 text-primary mb-4" />}
              title="Store Locator"
              description="Easily find our Gajwel store and get directions."
              link="/find-us"
              linkText="Get Directions"
            />
            <FeatureCard
              icon={<UsersIcon className="h-10 w-10 text-primary mb-4" />}
              title="Become a Dealer"
              description="Join our HUMSAFAR dealer network. Apply today!"
              link="/dealer-application"
              linkText="Apply Now"
            />
            <FeatureCard
              icon={<HelpCircleIcon className="h-10 w-10 text-primary mb-4" />}
              title="FAQs"
              description="Get answers to common questions about batteries and services."
              link="/faq"
              linkText="Read FAQs"
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-heading mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-secondary-foreground mb-8 max-w-2xl mx-auto">
            Whether you need a new battery, want to become a dealer, or have questions, we're here to help.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/contact">
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  linkText: string;
}

function FeatureCard({ icon, title, description, link, linkText }: FeatureCardProps) {
  return (
    <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <div className="mx-auto flex items-center justify-center ">{icon}</div>
        <CardTitle className="mt-2 text-xl font-heading">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-foreground/80">{description}</CardDescription>
        <Button asChild variant="link" className="mt-4 text-primary hover:text-primary/80">
          <Link href={link}>
            {linkText} <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
