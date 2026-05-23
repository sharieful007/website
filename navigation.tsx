"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-6 transition-all duration-500 md:px-16 ${
        isScrolled ? "bg-background/90 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <Link href="/" className="group flex items-baseline">
        <span className="text-xl font-medium tracking-[0.2em] text-foreground transition-colors">
          MODUS
        </span>
        <span className="text-xl font-medium text-shooting-star">+</span>
      </Link>

      <ul className="hidden items-center gap-12 md:flex">
        {[
          { label: "Services", href: "#services" },
          { label: "Work", href: "#projects" },
          { label: "Studio", href: "#about" },
          { label: "Contact", href: "#contact" },
        ].map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-amber-400"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <a
        href="mailto:sharieful@modusplus.space"
        className="bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-background transition-all hover:shadow-[0_0_20px_rgba(248,181,0,0.4)]"
      >
        Start a Project
      </a>
    </nav>
  )
}
