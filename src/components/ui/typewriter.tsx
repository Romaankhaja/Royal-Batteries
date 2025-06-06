
"use client";

import { useState, useEffect, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface TypewriterProps extends HTMLAttributes<HTMLSpanElement> {
  text: string;
  speed?: number;
  cursorClassName?: string;
}

export function Typewriter({
  text,
  speed = 100, // Speed of typing in milliseconds
  className,
  cursorClassName,
  ...props
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!text) return;
    // Reset state if text prop changes
    setDisplayedText('');
    setIsComplete(false);
    
    let currentText = '';
    const intervalId = setInterval(() => {
      if (currentText.length < text.length) {
        currentText += text[currentText.length];
        setDisplayedText(currentText);
      } else {
        clearInterval(intervalId);
        setIsComplete(true);
      }
    }, speed);

    return () => clearInterval(intervalId); // Cleanup on unmount or if dependencies change
  }, [text, speed]);

  return (
    <span className={cn("inline", className)} {...props} aria-label={text}>
      {displayedText}
      {!isComplete && (
        <span
          aria-hidden="true"
          className={cn(
            "inline-block h-[1em] w-[2px] ml-1 bg-current animate-blink",
            cursorClassName
          )}
          style={{ verticalAlign: 'text-bottom' }} // Better cursor alignment
        />
      )}
    </span>
  );
}
