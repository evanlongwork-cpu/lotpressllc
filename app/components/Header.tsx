import Link from "next/link";
import { Mark } from "./Mark";

const links = [
  { href: "/", label: "Home" },
  { href: "/record", label: "Record" },
  { href: "/contact", label: "Contact" },
] as const;

export function Header({ path }: { path: string }) {
  return (
    <header className="site-header">
      <div className="desk-rail site-header-inner">
        <Link className="brand" href="/">
          <Mark />
          <span className="wordmark">Lotpress</span>
        </Link>
        <nav aria-label="Site">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={path === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
