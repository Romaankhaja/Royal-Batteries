import { DealerForm } from '@/components/dealer-application/dealer-form';
import { Users } from 'lucide-react';

export const metadata = {
  title: 'Dealer Application - Royal Batteries Medak',
  description: 'Apply to become a HUMSAFAR dealer with Royal Batteries. Join our network.',
};

export default function DealerApplicationPage() {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center text-center mb-12">
        <Users className="h-16 w-16 text-primary mb-4" />
        <h1 className="text-4xl font-bold font-heading">Become a Dealer</h1>
        <p className="mt-2 text-lg text-muted-foreground max-w-2xl">
          Partner with Royal Batteries and Exide to power your business growth. Join the HUMSAFAR dealer program.
        </p>
      </div>
      <DealerForm />
    </div>
  );
}
