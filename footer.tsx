"use client"

import Link from "next/link"

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/modusplusstudio" },
  { label: "Behance", href: "https://www.behance.net/modusplus" },
  { label: "TikTok", href: "https://www.tiktok.com/@modusplusstudio" },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61577817445966" },
]

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#projects" },
  { label: "Studio", href: "#about" },
  { label: "Contact", href: "mailto:sharieful@modusplus.space" },
]

export function Footer() {
  return (
    <footer className="border-t border-border/30 bg-card/50 px-6 py-16 md:px-16">
      {/* Top Section */}
      <div className="mb-12 grid items-start gap-12 border-b border-border/30 pb-12 md:grid-cols-3">
        {/* Brand */}
        <div>
          <Link href="/" className="mb-4 inline-flex items-baseline">
            <span className="text-xl font-medium tracking-[0.2em] text-foreground">MODUS</span>
            <span className="text-xl font-medium text-shooting-star">+</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm font-light leading-relaxed text-muted-foreground">
            Integrated Design & Development. Purpose-driven architecture for real people and real futures.
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-4 md:items-center">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-amber-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Social */}
        <div className="flex flex-col gap-4 md:items-end">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-amber-400"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-xs font-light tracking-wider text-muted-foreground/50">
          © 2025 Modus+ Integrated Design & Development / Kuala Lumpur, Malaysia
        </p>
        
        <div className="flex items-center gap-3">
          <span className="animate-pulse-ring h-2 w-2 rounded-full bg-amber-400" />
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
            Available for freelance
          </span>
        </div>
      </div>
    </footer>
  )
}
