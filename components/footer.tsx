import Link from "next/link";
import { Container } from "./container";

const FOOTER_LINKS = {
  sections: [
    { name: "World", href: "/world" },
    { name: "Tech", href: "/tech" },
    { name: "Business", href: "/business" },
    { name: "Culture", href: "/culture" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
    { name: "Press", href: "/press" },
  ],
  legal: [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
    { name: "Cookies", href: "/cookies" },
  ],
};

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-[#f5f5f5] dark:bg-[#171717] pt-16 pb-8">
      <Container className="space-y-6">
        {/* TOP SECTION: Grid Layout */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand & Description */}
          <div className="space-y-2.5 max-w-66">
            <Link
              href="/"
              className="text-xl font-bold text-foreground uppercase font-source block"
            >
              The Herald
            </Link>
            <p className="text-balance text-sm leading-relaxed text-muted-foreground">
              Independent journalism for a changing world. Reporting that
              informs, challenges, and endures.
            </p>
          </div>

          {/* Nav Group: Sections */}
          <nav aria-label="Footer Sections" className="space-y-2">
            <h3 className="text-sm font-bold text-foreground">Sections</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.sections.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Nav Group: Company */}
          <nav aria-label="Company Information" className="space-y-2">
            <h3 className="text-sm font-bold text-foreground">Company</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-foreground">Follow Us</h3>
            <div className="flex gap-3">
              {[1, 2, 3].map((i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={`Follow us on Social Media ${i}`}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background transition-colors hover:bg-muted-foreground/10"
                />
              ))}
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <hr className="border-border" />

        {/* BOTTOM SECTION: Copyright & Legal */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} The Herald Media. All rights reserved.
          </p>

          <nav aria-label="Legal navigation">
            <ul className="flex items-center gap-6">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
