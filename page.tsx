"use client"

import { useEffect, useRef, useState } from "react"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { TickerSection } from "@/components/ticker-section"
import { ServicesSection } from "@/components/services-section"
import { ProjectsSection } from "@/components/projects-section"
import { AboutSection } from "@/components/about-section"
import { ProcessSection } from "@/components/process-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"
import { Starfield } from "@/components/starfield"

export default function Page() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Starfield />
      <CustomCursor />
      <Navigation />
      
      <div className={`transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <HeroSection />
        <TickerSection />
        <ServicesSection />
        <ProjectsSection />
        <AboutSection />
        <ProcessSection />
        <CTASection />
        <Footer />
      </div>
    </main>
  )
}
