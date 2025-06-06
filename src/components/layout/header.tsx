
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Package, Users, HelpCircle, HomeIcon, MapPin, Info, Wrench, ClipboardList } from 'lucide-react';
import { useState, useEffect, type ComponentType } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Logo } from './logo';
import { cn } from '@/lib/utils';

interface NavItem {
  href: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  { href: '/', label: 'Home', icon: HomeIcon },
  { href: '/#products', label: 'Products', icon: Package },
  { href: '/#about-us', label: 'About Us', icon: Info },
  { href: '/#battery-guide', label: 'Check Battery CCA', icon: ClipboardList },
  { href: '/#our-services', label: 'Services', icon: Wrench },
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
      if (typeof window !== 'undefined') {
        setActiveHash(window.location.hash);
      }
    };

    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted && typeof window !== 'undefined') {
        // Page is restored from bfcache
        setActiveHash(window.location.hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('pageshow', handlePageShow);
    
    // Set initial hash
    if (typeof window !== 'undefined') {
      setActiveHash(window.location.hash);
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('pageshow', handlePageShow);
    };
  }, []);
  
  const handleLinkClick = (hashValue: string) => { // hashValue is e.g., "#products"
    const elementId = hashValue.startsWith('#') ? hashValue.substring(1) : hashValue; // "products"
    const element = document.getElementById(elementId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Update URL hash without triggering a full page navigation if already on the page
      if (window.location.hash !== hashValue) {
         // This will also trigger the 'hashchange' listener to update activeHash
        window.history.pushState(null, '', hashValue); 
        setActiveHash(hashValue); // Manually set for immediate UI update if needed
      }
    } else {
      console.warn(`Element with ID '${elementId}' not found for smooth scroll.`);
    }
  };
  
  if (!isMounted) {
    // Fallback for SSR/initial mount to avoid hydration issues
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Logo />
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.href} className="text-sm font-medium text-foreground/70">
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
    const currentPath = pathname;
    const currentHash = activeHash; 

    if (itemHref === '/') {
      return currentPath === '/' && (currentHash === '' || currentHash === '#');
    }
    if (itemHref.startsWith('/#')) {
      const targetHash = itemHref.substring(1); 
      return currentPath === '/' && currentHash === targetHash;
    }
    return currentPath === itemHref;
  };

  const commonLinkOnClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    const targetHref = item.href; // e.g., "/", "/#products"
    const isHashLinkOnHomepage = targetHref.startsWith('/#') && pathname === '/';
    const isHomeLink = targetHref === '/';

    if (isHashLinkOnHomepage) {
      e.preventDefault();
      handleLinkClick(targetHref.substring(1)); // Pass "#section"
      if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    } else if (isHomeLink) {
      if (pathname === '/') { // Already on homepage
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (window.location.hash) {
          // Clear the hash from URL without full navigation
          history.pushState("", document.title, window.location.pathname + window.location.search);
          setActiveHash(''); // Update state
        }
      }
      // If navigating to Home from another page, Next.js Link handles it.
      if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    } else {
      // For other full page links or hash links from different pages, let Next.js Link handle it.
      if (isMobileMenuOpen) setIsMobileMenuOpen(false);
      // If navigating to a hash on the homepage from another page,
      // Next.js Link will navigate to '/' and the hash will be applied by the browser.
      // The hashchange listener should pick it up.
    }
  };


  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={`desktop-${item.href}`}
              href={item.href}
              onClick={(e) => commonLinkOnClick(e, item)}
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
                     <Button variant="ghost" size="icon">
                        <X className="h-6 w-6" />
                        <span className="sr-only">Close menu</span>
                      </Button>
                  </SheetClose>
                </div>
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <SheetClose asChild key={`mobile-${item.href}`}>
                      <Link
                        href={item.href}
                        onClick={(e) => commonLinkOnClick(e, item)}
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
