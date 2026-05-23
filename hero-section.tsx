"use client"

import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left Content */}
        <div className="relative z-10 flex flex-col justify-end px-6 pb-16 pt-32 md:px-16 md:pb-24">
          <div className="animate-fade-up">
            <div className="mb-8 flex items-center gap-4">
              <div className="h-px w-12 bg-gradient-to-r from-amber-400 to-orange-500" />
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-shooting-star">
                Integrated Design & Development
              </span>
            </div>
          </div>

          <h1 className="animate-fade-up-delay-1 mb-8 text-5xl font-light leading-[1.05] tracking-tight text-foreground md:text-7xl lg:text-8xl">
            Architecture
            <br />
            built for
            <br />
            <span className="font-normal italic text-shooting-star glow-accent">real impact.</span>
          </h1>

          <p className="animate-fade-up-delay-2 mb-12 max-w-md text-base font-light leading-relaxed text-muted-foreground md:text-lg">
            Purpose-driven design across residential, commercial, cultural, and civic scales. 
            Sustainable systems. Spaces for real people and real futures.
          </p>

          <div className="animate-fade-up-delay-3 flex flex-wrap items-center gap-6">
            <Link
              href="#projects"
              className="group relative overflow-hidden bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-background transition-all hover:shadow-[0_0_30px_rgba(248,181,0,0.4)]"
            >
              <span className="relative z-10">View Portfolio</span>
            </Link>
            <Link
              href="#about"
              className="group flex items-center gap-3 text-sm font-medium uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-amber-400"
            >
              Our Studio
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>

        {/* Right Image - Nexus Dome */}
        <div className="relative hidden overflow-hidden lg:block">
          <Image
            src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/9fda6e248835801.69fa9d9b4f299.png"
            alt="Nexus Dome Design — Modus+"
            fill
            priority
            className="object-cover opacity-60 transition-transform duration-[12s] hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          
          {/* Shooting star accent line */}
          <div className="absolute right-0 top-1/4 h-px w-1/2 bg-gradient-to-l from-transparent via-amber-400/50 to-transparent" />
          
          {/* Ghost Typography */}
          <div className="pointer-events-none absolute bottom-20 right-12 select-none text-[12rem] font-bold leading-none tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(248,181,0,0.08)]">
            M+
          </div>

          {/* Stats Badge */}
          <div className="animate-fade-up-delay-4 absolute right-12 top-40 border border-amber-500/30 bg-background/60 p-6 backdrop-blur-xl border-glow">
            <div className="text-5xl font-light text-foreground">
              12<span className="text-3xl text-shooting-star">+</span>
            </div>
            <div className="mt-2 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
              Published Projects
            </div>
          </div>
        </div>
      </div>

      {/* Shooting Star Decorative Element */}
      <div className="pointer-events-none absolute right-1/4 top-1/3 h-0.5 w-32 rotate-45 bg-gradient-to-r from-transparent via-amber-400 to-white opacity-30" />
    </section>
  )
}
