"use client"

import { useEffect, useRef } from "react"

const services = [
  {
    number: "01",
    title: "Architectural Design",
    description: "From concept to construction documentation — residential, commercial, civic, and cultural. Every project tailored to its context, climate, and community.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 stroke-amber-400" fill="none" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Sustainable Systems",
    description: "Passive cooling, thermal mass strategies, timber louvers, and green integration. Sustainability engineered into every design — not bolted on.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 stroke-amber-400" fill="none" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 000 20M12 2a14.5 14.5 0 010 20M2 12h20" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "3D Visualization",
    description: "SketchUp Pro, V-Ray, and Twinmotion renders that communicate design intent with clarity. Photorealistic visuals for proposals and approvals.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 stroke-amber-400" fill="none" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Interior Design",
    description: "Spatial sequences, material palettes, and lighting strategies. Interiors that serve and inspire — from open-plan workspaces to luxury residences.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 stroke-amber-400" fill="none" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Proposals & Feasibility",
    description: "Government submissions, contractor packages, and investor decks — structured for approval and built on rigorous cost analysis.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 stroke-amber-400" fill="none" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Design Consultancy",
    description: "Strategic design input for developers, institutions, and communities. We bridge vision and execution with clear, actionable direction.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 stroke-amber-400" fill="none" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14" />
      </svg>
    ),
  },
]

export function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up")
          }
        })
      },
      { threshold: 0.1 }
    )

    const items = sectionRef.current?.querySelectorAll(".reveal-item")
    items?.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="relative px-6 py-32 md:px-16" ref={sectionRef}>
      {/* Header */}
      <div className="mb-20 flex items-end justify-between border-b border-border/30 pb-10">
        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-shooting-star">
            What We Do
          </p>
          <h2 className="text-4xl font-light tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Services built for
            <br />
            <span className="font-normal italic text-shooting-star glow-accent">impact</span>
          </h2>
        </div>
        <div className="hidden text-[8rem] font-light leading-none tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(248,181,0,0.08)] md:block">
          01
        </div>
      </div>

      {/* Grid */}
      <div className="grid gap-px bg-border/30 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={service.number}
            className="reveal-item group relative overflow-hidden bg-background p-10 transition-all duration-500 hover:bg-card"
            style={{ opacity: 0, animationDelay: `${index * 0.1}s` }}
          >
            {/* Bottom accent bar */}
            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 transition-all duration-500 group-hover:w-full" />
            
            <span className="absolute right-8 top-8 text-xs tracking-[0.1em] text-muted-foreground/30">
              {service.number}
            </span>

            <div className="mb-8 flex h-14 w-14 items-center justify-center border border-amber-500/30 transition-all duration-300 group-hover:border-amber-500 group-hover:shadow-[0_0_20px_rgba(248,181,0,0.15)]">
              {service.icon}
            </div>

            <h3 className="mb-4 text-base font-semibold uppercase tracking-[0.1em] text-foreground">
              {service.title}
            </h3>

            <p className="text-sm font-light leading-relaxed text-muted-foreground">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
