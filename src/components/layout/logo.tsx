import Link from 'next/link';

export function Logo() {
  return (
    <div className="flex flex-col items-start"> {/* Wrapper for vertical stacking */}
      <Link href="/" className="text-primary hover:opacity-80 transition-opacity">
        <span className="text-2xl font-bold font-orbitron"> {/* New font for Royal Batteries */}
          Royal Batteries
        </span>
        <span className="block text-xs font-sans text-muted-foreground -mt-1"> {/* Changed color for Medak */}
          Medak
        </span>
      </Link>
      <div className="text-xs text-muted-foreground leading-tight mt-0.5"> {/* "23+ years" section */}
        <span className="text-base font-bold text-primary">23</span>
        <span className="font-medium">+ years of service</span>
      </div>
    </div>
  );
}
