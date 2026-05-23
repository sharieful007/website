"use client"

import { useEffect, useRef } from "react"

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We listen first. Understanding your brief, site, constraints, and vision before a single line is drawn. Context always before concept.",
  },
  {
    number: "02",
    title: "Design",
    description: "Concept through detailed design — with 3D visualization at every stage so you see exactly what you're getting, long before construction begins.",
  },
  {
    number: "03",
    title: "Documentation",
    description: "Construction drawings, BQ, specifications, and submission packages — prepared with the precision contractors and authorities actually expect.",
  },
  {
    number: "04",
    title: "Delivery",
    description: "Site oversight, contractor coordination, and quality control through to handover. We stay until the job is done right.",
  },
]

export function ProcessSection() {
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
    <section className="relative bg-card/50 px-6 py-32 md:px-16" ref={sectionRef}>
      {/* Header */}
      <div className="mb-20 flex items-end justify-between border-b border-border/30 pb-10">
        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-shooting-star">
            How We Work
          </p>
          <h2 className="text-4xl font-light tracking-tight text-foreground md:text-5xl lg:text-6xl">
            A process built on
            <br />
            <span className="font-normal italic text-shooting-star glow-accent">clarity</span>
          </h2>
        </div>
        <div className="hidden text-[8rem] font-light leading-none tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(248,181,0,0.08)] md:block">
          04
        </div>
      </div>

      {/* Process Grid */}
      <div className="grid gap-px bg-border/30 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className="reveal-item group bg-background p-10 transition-all duration-500 hover:bg-card"
            style={{ opacity: 0, animationDelay: `${index * 0.1}s` }}
          >
            <div className="mb-8 text-7xl font-bold leading-none tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(248,181,0,0.2)] transition-all duration-300 group-hover:[-webkit-text-stroke:1px_rgba(248,181,0,0.4)]">
              {step.number}
            </div>
            <h3 className="mb-4 text-base font-semibold uppercase tracking-[0.1em] text-foreground">
              {step.title}
            </h3>
            <p className="text-sm font-light leading-relaxed text-muted-foreground">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
