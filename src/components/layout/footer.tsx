
export function Footer() {
  const currentYear = new Date().getFullYear();
  const primaryPhoneNumber = "+919397617823";
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Royal Batteries - Gajwel. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          Authorized Dealer of Exide Batteries
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          Contact: <a href={`tel:${primaryPhoneNumber}`} className="hover:text-primary">{primaryPhoneNumber}</a>
        </p>
      </div>
    </footer>
  );
}
