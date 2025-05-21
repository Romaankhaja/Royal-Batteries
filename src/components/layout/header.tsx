
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, MapPin, Package, Users, HelpCircle, BatteryCharging, HomeIcon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Logo } from './logo';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Home', icon: HomeIcon }, // Changed icon for Home
  { href: '/#products', label: 'Products', icon: Package },
  { href: '/#find-us', label: 'Find Us', icon: MapPin },
  { href: '/#dealer-application', label: 'Dealer Application', icon: Users },
  { href: '/#faq', label: 'FAQ', icon: HelpCircle },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) {
    // Avoid rendering on server to prevent hydration mismatch for Sheet state
    // For server components, this could be a Skeleton or null.
    // For client components that need this pattern, it helps avoid mismatch.
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Logo />
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.href} className={cn(
                "text-sm font-medium text-foreground/70",
              )}>
                {item.label}
              </div>
            ))}
          </div>
          <div className="md:hidden">
             <Button variant="ghost" size="icon" disabled>
                <Menu className="h-6 w-6" />
             </Button>
          </div>
        </div>
      </header>
    );
  }


  // Function to determine if a nav item is active, considering hash links
  const isNavItemActive = (itemHref: string) => {
    if (itemHref === '/') return pathname === '/';
    // For hash links, we check if the pathname is '/' and the hash matches,
    // or if the pathname itself (without hash) matches for direct navigations (though less likely now)
    if (typeof window !== 'undefined') {
      const currentHash = window.location.hash;
      if (pathname === '/' && currentHash === itemHref.substring(1)) return true; // itemHref is like '/#products', so substring(1) is '#products'
    }
    return pathname === itemHref; // Fallback for non-hash or direct path match
  };


  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isNavItemActive(item.href) ? "text-primary" : "text-foreground/70"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
              <div className="flex flex-col space-y-6">
                <div className="flex justify-between items-center">
                  <Logo />
                  <SheetClose asChild>
                     <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                        <X className="h-6 w-6" />
                        <span className="sr-only">Close menu</span>
                      </Button>
                  </SheetClose>
                </div>
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          "flex items-center space-x-3 rounded-md p-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                          isNavItemActive(item.href) ? "bg-accent text-accent-foreground" : "text-foreground"
                        )}
                      >
                        <item.icon className="h-5 w-5" />
                        <span>{item.label}</span>
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

    