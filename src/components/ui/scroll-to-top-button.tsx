
"use client";

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (typeof window !== 'undefined') {
      if (window.pageYOffset > 300) { // Show button after scrolling 300px
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', toggleVisibility);
      // Set initial state on mount
      toggleVisibility(); 
      return () => {
        window.removeEventListener('scroll', toggleVisibility);
      };
    }
  }, []);

  if (!isVisible) {
    return null; // Don't render the button if it's not supposed to be visible
  }

  return (
    <Button
      variant="default" 
      size="icon" 
      onClick={scrollToTop}
      className={cn(
        "rounded-full shadow-lg hover:bg-primary/80 transition-all duration-300 ease-in-out",
        "transform scale-100 hover:scale-105" // Added a subtle hover scale effect
        // The button uses p-3 equivalent padding due to size="icon" h-10 w-10 nature
      )}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-6 w-6" />
    </Button>
  );
}
