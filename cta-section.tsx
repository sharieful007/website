"use client"

export function CTASection() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-40 text-center md:px-16 md:py-52">
      {/* Ghost Background Text */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-[18vw] font-bold leading-none tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(248,181,0,0.05)]">
        Modus+
      </div>

      {/* Shooting star decorative elements */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-0.5 w-24 rotate-45 bg-gradient-to-r from-transparent via-amber-400 to-white opacity-20" />
      <div className="pointer-events-none absolute right-1/3 bottom-1/3 h-0.5 w-16 -rotate-45 bg-gradient-to-r from-transparent via-amber-400 to-white opacity-15" />

      <p className="relative mb-8 text-xs font-medium uppercase tracking-[0.3em] text-shooting-star">
        Let&apos;s Build Something
      </p>

      <h2 className="relative mb-6 text-5xl font-light leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl">
        Have a project
        <br />
        in <span className="font-normal italic text-shooting-star glow-accent">mind?</span>
      </h2>

      <p className="relative mx-auto mb-16 max-w-lg text-base font-light text-muted-foreground md:text-lg">
        Available for freelance — residential, commercial, civic, or concept work across Malaysia and beyond.
      </p>

      <div className="relative flex flex-col items-center justify-center gap-5 sm:flex-row">
        <a
          href="mailto:sharieful@modusplus.space"
          className="bg-gradient-to-r from-amber-500 to-orange-500 px-12 py-5 text-sm font-semibold uppercase tracking-[0.2em] text-background transition-all hover:shadow-[0_0_40px_rgba(248,181,0,0.4)]"
        >
          Get in Touch
        </a>
        <a
          href="https://www.behance.net/modusplus"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-amber-500/30 px-12 py-5 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground transition-all hover:border-amber-500 hover:bg-amber-500/10 hover:text-amber-400"
        >
          View on Behance
        </a>
      </div>
    </section>
  )
}
