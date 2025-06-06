
import type {Metadata} from 'next';
import { Roboto_Slab, Lato, Orbitron } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Phone, MessageSquare as WhatsAppIcon } from 'lucide-react';
import { ScrollToTopButton } from '@/components/ui/scroll-to-top-button';

const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  variable: '--font-roboto-slab',
  weight: ['400', '700'],
  display: 'swap',
});

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: ['400', '700'],
  display: 'swap',
});

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  weight: ['400', '700'], 
  display: 'swap',
});

// IMPORTANT: Replace with your actual deployed website URL
const siteUrl = 'YOUR_DEPLOYED_WEBSITE_URL_HERE'; // Example: 'https://royal-batteries-gajwel.netlify.app'
const siteName = 'Royal Batteries Gajwel - Authorized Exide Dealer';
const siteDescription = 'Royal Batteries in Gajwel, Medak District. Your trusted authorized Exide battery dealer offering a wide range of car, motorcycle, inverter, and commercial vehicle batteries. Sales, service, installation, and support.';
const previewImageUrl = 'https://placehold.co/1200x630.png'; // REPLACE THIS with your actual preview image URL

export const metadata: Metadata = {
  // metadataBase: new URL(siteUrl), // Uncomment and ensure siteUrl is your live domain
  title: {
    default: siteName,
    template: `%s - Royal Batteries Gajwel`, 
  },
  description: siteDescription,
  openGraph: {
    title: siteName,
    description: siteDescription,
    // url: siteUrl, // Uncomment once siteUrl is your live domain
    siteName: siteName,
    images: [
      {
        url: previewImageUrl, 
        width: 1200,
        height: 630,
        alt: 'Royal Batteries - Exide Dealer in Gajwel, Medak',
        type: 'image/png', 
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: siteDescription,
    images: [previewImageUrl], 
    // creator: '@YourTwitterHandle', // Optional: Add your Twitter handle
    // site: '@YourTwitterHandle', // Optional: Add your Twitter handle
  },
  // For favicons and other icons:
  // icons: {
  //   icon: '/favicon.ico', // Place favicon.ico in your /public folder
  //   apple: '/apple-touch-icon.png', // Place apple-touch-icon.png in your /public folder
  // },
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
          robotoSlab.variable,
          lato.variable,
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
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center space-y-3">
          <ScrollToTopButton />
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
