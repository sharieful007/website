"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export function AboutSection() {
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
    <section id="about" className="relative px-6 py-32 md:px-16" ref={sectionRef}>
      {/* Header */}
      <div className="mb-20 flex items-end justify-between border-b border-border/30 pb-10">
        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-shooting-star">
            The Studio
          </p>
          <h2 className="text-4xl font-light tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Design from
            <br />
            <span className="font-normal italic text-shooting-star glow-accent">first principles</span>
          </h2>
        </div>
        <div className="hidden text-[8rem] font-light leading-none tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(248,181,0,0.08)] md:block">
          03
        </div>
      </div>

      <div className="grid items-center gap-20 lg:grid-cols-2">
        {/* Visual Side */}
        <div className="reveal-item relative h-[500px] lg:h-[600px]" style={{ opacity: 0 }}>
          {/* Main Image */}
          <div className="absolute left-0 top-0 h-[80%] w-[75%] overflow-hidden border border-border/30">
            <Image
              src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/9fda6e248835801.69fa9d9b4f299.png"
              alt="Nexus Dome — Modus+ Studio Work"
              fill
              className="object-cover opacity-60"
            />
          </div>

          {/* Accent Image */}
          <div className="absolute bottom-0 right-0 flex h-[55%] w-[55%] items-center justify-center overflow-hidden border border-amber-500/30">
            <Image
              src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/67c645247862083.69e4d36ef40e0.png"
              alt="Shadow Pine Retreat interior"
              fill
              className="object-cover opacity-40"
            />
            <div className="absolute text-6xl font-light tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(248,181,0,0.3)]">
              M+
            </div>
          </div>

          {/* Est. Tag */}
          <div className="absolute -top-4 right-[28%] border border-amber-500/30 bg-card px-5 py-2 text-xs font-medium uppercase tracking-[0.2em] text-amber-400">
            Est. 2016
          </div>
        </div>

        {/* Copy Side */}
        <div className="reveal-item" style={{ opacity: 0, animationDelay: "0.2s" }}>
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-shooting-star">
            Modus+ / Kuala Lumpur
          </p>
          
          <p className="mb-8 text-2xl font-light leading-relaxed text-foreground/80 md:text-3xl">
            Purpose-driven design for{" "}
            <span className="italic text-shooting-star glow-accent">real people</span> and real futures. 
            Focused on impact, not excess.
          </p>

          <p className="mb-12 text-base font-light leading-relaxed text-muted-foreground">
            Modus+ is an integrated design and development studio based in Kuala Lumpur. 
            Our practice spans architecture, 3D visualization, interior design, and development 
            consulting — with a consistent focus on sustainability, buildability, and long-term value.
            <br /><br />
            We design spaces that respond to climate, culture, and community across residential, 
            commercial, and civic scales. Available for freelance — now.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 border-t border-border/30 pt-10">
            {[
              { value: "12+", label: "Published Works" },
              { value: "6+", label: "Project Types" },
              { value: "MY", label: "Based in KL" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-light text-shooting-star glow-accent md:text-5xl">{stat.value}</div>
                <div className="mt-2 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
