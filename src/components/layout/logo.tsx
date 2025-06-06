import Link from 'next/link';

export function Logo() {
  return (
    <div className="flex flex-col items-start"> {/* Wrapper for vertical stacking */}
      <Link href="/" className="text-primary hover:opacity-80 transition-opacity">
        <span className="text-2xl font-bold font-orbitron uppercase italic tracking-wide"> {/* Updated: added italic */}
          Royal Batteries
        </span>
        <span className="block text-xs font-sans text-muted-foreground -mt-1">
          Gajwel, HIT Dealer for Medak District
        </span>
      </Link>
    </div>
  );
}
