import { InteractiveMap } from '@/components/map/interactive-map';
import { MapPinIcon } from 'lucide-react';

export const metadata = {
  title: 'Find Our Store - Royal Batteries Medak',
  description: 'Locate Royal Batteries in Gajwel, Medak. Get directions to our store.',
};

export default function FindUsPage() {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center text-center mb-12">
        <MapPinIcon className="h-16 w-16 text-primary mb-4" />
        <h1 className="text-4xl font-bold font-heading">Find Our Store</h1>
        <p className="mt-2 text-lg text-muted-foreground max-w-2xl">
          Visit us at our Gajwel location for all your Exide battery needs.
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <InteractiveMap />
      </div>

      <div className="mt-12 text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold font-heading mb-4">Visit Us</h2>
        <p className="text-muted-foreground">
          <strong>Royal Batteries - Gajwel Store</strong><br />
          Main Road, Gajwel, Telangana, India<br />
          (Near Old Bus Stand)
        </p>
        <p className="mt-4 text-muted-foreground">
          <strong>Hours:</strong> Mon - Sat: 9:00 AM - 7:00 PM | Sun: Closed
        </p>
      </div>
    </div>
  );
}
