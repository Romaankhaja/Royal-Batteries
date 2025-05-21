import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="text-2xl font-bold font-heading text-primary hover:opacity-80 transition-opacity">
      Royal Batteries
      <span className="block text-xs font-sans text-accent-foreground opacity-75 -mt-1">Medak</span>
    </Link>
  );
}
