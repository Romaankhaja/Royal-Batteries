
import type {Metadata} from 'next';
import { Roboto_Slab, Lato, Orbitron } from 'next/font/google'; // Changed Montserrat and Open_Sans to Roboto_Slab and Lato
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Phone, MessageSquare as WhatsAppIcon } from 'lucide-react';

const robotoSlab = Roboto_Slab({ // Changed from montserrat
  subsets: ['latin'],
  variable: '--font-roboto-slab', // Changed variable name
  weight: ['400', '700'], // Specify weights for heading
  display: 'swap',
});

const lato = Lato({ // Changed from openSans
  subsets: ['latin'],
  variable: '--font-lato', // Changed variable name
  weight: ['400', '700'], // Specify weights for body
  display: 'swap',
});

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  weight: ['400', '700'], 
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Royal Batteries - Medak | Exide Dealer',
  description: 'Authorized Exide battery dealer in Medak. Sales, service, and support for all your battery needs.',
};

const primaryPhoneNumber = "+919397617823";
const primaryWhatsAppNumber = "919397617823"; // For wa.me link, no '+'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          robotoSlab.variable, // Use new heading font variable
          lato.variable,       // Use new body font variable
          orbitron.variable 
        )}
      >
        <div className="relative flex min-h-dvh flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />

        {/* Floating Action Buttons */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
          <Link
            href={`https://wa.me/${primaryWhatsAppNumber}?text=${encodeURIComponent("Hello! I would like to know more about your products.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-200 animate-pulse-slow"
            aria-label="Chat on WhatsApp"
          >
            <WhatsAppIcon className="h-6 w-6" />
          </Link>
          <Link
            href={`tel:${primaryPhoneNumber}`}
            className="bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors duration-200 animate-pulse-slow"
            aria-label="Call us"
          >
            <Phone className="h-6 w-6" />
          </Link>
        </div>
      </body>
    </html>
  );
}
