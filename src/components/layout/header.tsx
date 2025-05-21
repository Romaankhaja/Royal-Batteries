
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Package, Users, HelpCircle, HomeIcon, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Logo } from './logo';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Home', icon: HomeIcon },
  { href: '/#products', label: 'Products', icon: Package },
  { href: '/#find-us', label: 'Find Us', icon: MapPin },
  { href: '/#dealer-application', label: 'Dealer Application', icon: Users },
  { href: '/#faq', label: 'FAQ', icon: HelpCircle },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [activeHash, setActiveHash] = useState('');

  useEffect(() => {
    setIsMounted(true);
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    // Set initial hash
    if (typeof window !== 'undefined') {
      setActiveHash(window.location.hash);
    }
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
  
  if (!isMounted) {
    // Fallback for SSR/initial mount to avoid hydration issues with active link detection
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

  const isNavItemActive = (itemHref: string) => {
    // For root path '/'
    if (itemHref === '/') return pathname === '/' && activeHash === '';
    // For hash links on the homepage
    if (pathname === '/' && itemHref.startsWith('/#')) {
      return activeHash === itemHref.substring(2); // Compare hash with itemHref's hash part
    }
    // For other direct page links (if any were to be added)
    return pathname === itemHref;
  };
  
  const handleLinkClick = (hash: string) => {
    setIsMobileMenuOpen(false);
    // For smooth scroll and hash update
    if (typeof window !== 'undefined') {
        const element = document.getElementById(hash.substring(1)); // Remove #
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            // Manually update hash if not done by browser immediately or for consistency
            window.location.hash = hash; 
        } else {
             // Fallback if element not found immediately, just navigate
            window.location.href = hash;
        }
    }
  };


  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href.startsWith('/#') ? item.href : item.href}
              onClick={(e) => {
                if (item.href.startsWith('/#')) {
                  e.preventDefault();
                  handleLinkClick(item.href.substring(1)); // Pass full hash like #products
                }
              }}
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
                        href={item.href.startsWith('/#') ? item.href : item.href}
                        onClick={(e) => {
                           if (item.href.startsWith('/#')) {
                             e.preventDefault();
                             handleLinkClick(item.href.substring(1)); // Pass full hash like #products
                           } else {
                             setIsMobileMenuOpen(false); // Close for non-hash links
                           }
                        }}
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
