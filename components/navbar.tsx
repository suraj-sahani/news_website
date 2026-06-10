import {
  Globe,
  House,
  Menu,
  Palette,
  Search,
  TrendingUp,
  Zap,
} from "lucide-react";
import { Container } from "./ui/container";
import Link from "next/link";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";

const NAV_LINKS = [
  { name: "Home", href: "/", icon: <House size={16} /> },
  { name: "World", href: "#", icon: <Globe size={16} /> },
  { name: "Tech", href: "#", icon: <Zap size={16} /> },
  { name: "Business", href: "#", icon: <TrendingUp size={16} /> },
  { name: "Culture", href: "#", icon: <Palette size={16} /> },
];

export default function Navbar() {
  return (
    <header className="border-b">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          {/* LOGO */}
          <div className="shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight text-foreground font-source"
            >
              THE HERALD
            </Link>
          </div>

          {/*  MAIN NAV (Middle - Hidden on mobile) */}
          <nav className="hidden lg:block" aria-label="Main navigation">
            <ul className="flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.icon}
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ACTIONS (Right) */}
          <div className="flex items-center gap-4">
            <Button
              variant={"ghost"}
              size={"icon"}
              aria-label="Search articles"
            >
              <Search size={20} aria-hidden="true" />
            </Button>

            <Button
              variant={"ghost"}
              size={"icon"}
              className="md:hidden"
              aria-label="Open main menu"
            >
              <Menu size={20} aria-hidden="true" />
            </Button>

            <div className="items-center gap-2 hidden md:flex">
              <ThemeToggle />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
