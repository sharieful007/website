"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    number: "01",
    title: "Nexus Dome Design",
    category: "Concept / Cultural / Research / Desert",
    description: "A climate-responsive geodesic dome in an arid landscape — cultural venue, research hub, and environmental prototype united under one striking structure.",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/9fda6e248835801.69fa9d9b4f299.png",
    link: "https://www.behance.net/gallery/248835801/Nexus-Dome-Design",
    size: "large",
  },
  {
    id: 2,
    number: "02",
    title: "Shadow Pine Retreat",
    category: "Residential / House Design / Luxury",
    description: "Dark-clad pavilion with infinity pool, wooden deck, and fire pit — seamless indoor-outdoor flow for luxurious private living.",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/67c645247862083.69e4d36ef40e0.png",
    link: "https://www.behance.net/gallery/247862083/Shadow-Pine-Retreat",
    size: "medium",
  },
  {
    id: 3,
    number: "03",
    title: "Equatorial Concrete Retreat",
    category: "Residential / KL, Malaysia",
    description: "Concrete and timber villa — thermal mass for passive cooling, louvers for shade and cross-ventilation in a hot humid climate.",
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/24216c247847383.Y3JvcCwxMDI0LDgwMCwwLDExMQ.jpg",
    link: "https://www.behance.net/gallery/247847383/Equatorial-Concrete-Retreat",
    size: "small",
  },
  {
    id: 4,
    number: "04",
    title: "Global Headquarters",
    category: "Commercial / Corporate Office",
    description: "Monolithic shell versus transparent high-tech core — a corporate campus engineered for transparency and innovation.",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/66d4b2248139077.69ea671308b59.png",
    link: "https://www.behance.net/gallery/248139077/Commercial-Office-Global-Headquarters",
    size: "small",
  },
  {
    id: 5,
    number: "05",
    title: "Neoclassical Estate",
    category: "Residential / Luxury Estate",
    description: "European Neoclassical / Beaux-Arts fusion — marble facade, wrought iron gates with gold-leaf crests.",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/3600a1248134843.69ea545ea29a7.png",
    link: "https://www.behance.net/gallery/248134843/Neoclassical-Residential-Estate",
    size: "small",
  },
  {
    id: 6,
    number: "06",
    title: "KL Architectural Hub",
    category: "Cultural / Museum & Education / KL",
    description: "Double-height atrium, multi-level circulation, a world-class centre for Malaysian architectural history.",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/2fbe62248137285.69ea5f83a54b7.png",
    link: "https://www.behance.net/gallery/248137285/The-Kuala-Lumpur-Hub-for-Architectural-Innovation",
    size: "small",
  },
  {
    id: 7,
    number: "07",
    title: "Nordic Design Concept",
    category: "Residential / Concept / KL",
    description: "Scandinavian-influenced house — clean forms, natural materials, and restrained elegance.",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/0e679a247765099.69e21bef04b17.png",
    link: "https://www.behance.net/gallery/247765099/Nordic-Design-Concept",
    size: "medium",
  },
  {
    id: 8,
    number: "08",
    title: "Queen Anne Victorian",
    category: "Residential / Heritage Style",
    description: "Victorian architectural language reinterpreted — asymmetrical massing and rich material contrasts.",
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/196098247848815.Y3JvcCwxMDQzLDgxNiwxMTgsMA.jpg",
    link: "https://www.behance.net/gallery/247848815/Queen-Anne-Victorian-style",
    size: "large",
  },
]

const filters = ["All", "Residential", "Commercial", "Cultural", "Concept"]

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All")
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
    <section id="projects" className="relative bg-card/50 px-6 py-32 md:px-16" ref={sectionRef}>
      {/* Header */}
      <div className="mb-16 flex items-end justify-between border-b border-border/30 pb-10">
        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-shooting-star">
            Selected Work
          </p>
          <h2 className="text-4xl font-light tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Projects with
            <br />
            <span className="font-normal italic text-shooting-star glow-accent">purpose</span>
          </h2>
        </div>
        <div className="hidden text-[8rem] font-light leading-none tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(248,181,0,0.08)] md:block">
          02
        </div>
      </div>

      {/* Filter Bar */}
      <div className="mb-14 flex gap-0 border-b border-border/30">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`-mb-px border-b-2 px-6 py-4 text-xs font-medium uppercase tracking-[0.15em] transition-colors ${
              activeFilter === filter
                ? "border-amber-500 text-amber-400"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Projects Grid - Enhanced Masonry Layout */}
      <div className="grid grid-cols-1 gap-1 md:grid-cols-12 md:grid-rows-[520px_420px_360px]">
        {projects.map((project, index) => {
          const gridClasses = [
            "md:col-span-7 md:row-span-1",
            "md:col-span-5 md:row-span-1",
            "md:col-span-4 md:row-span-1",
            "md:col-span-4 md:row-span-1",
            "md:col-span-4 md:row-span-1",
            "md:col-span-3 md:row-span-1",
            "md:col-span-4 md:row-span-1",
            "md:col-span-5 md:row-span-1",
          ]

          return (
            <div
              key={project.id}
              className={`reveal-item hoverable group relative overflow-hidden bg-secondary ${gridClasses[index]} aspect-[4/3] md:aspect-auto`}
              style={{ opacity: 0, animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Number Watermark */}
              <div className="pointer-events-none absolute left-8 top-6 select-none text-7xl font-bold leading-none tracking-tighter text-transparent opacity-100 transition-opacity duration-500 group-hover:opacity-0 [-webkit-text-stroke:1px_rgba(248,181,0,0.12)] md:text-9xl">
                {project.number}
              </div>

              {/* Image */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover opacity-50 transition-all duration-700 group-hover:scale-110 group-hover:opacity-30"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent transition-all duration-500 group-hover:from-background group-hover:via-background/80" />

              {/* Left Accent Bar - Shooting Star Gradient */}
              <div className="absolute bottom-0 left-0 h-0 w-1 bg-gradient-to-t from-orange-500 via-amber-400 to-white transition-all duration-500 group-hover:h-full" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <p className="mb-3 translate-y-2 text-[10px] font-medium uppercase tracking-[0.2em] text-amber-400 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {project.category}
                </p>
                <h3 className="mb-3 text-xl font-medium tracking-tight text-foreground md:text-2xl lg:text-3xl">
                  {project.title}
                </h3>
                <p className="max-h-0 overflow-hidden text-sm font-light leading-relaxed text-muted-foreground opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
                  {project.description}
                </p>
              </div>

              {/* Link Arrow */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute right-6 top-6 flex h-14 w-14 -translate-y-2 items-center justify-center border border-amber-500/30 text-lg text-muted-foreground opacity-0 transition-all duration-300 hover:border-amber-500 hover:bg-gradient-to-br hover:from-amber-500 hover:to-orange-500 hover:text-background group-hover:translate-y-0 group-hover:opacity-100"
              >
                ↗
              </a>
            </div>
          )
        })}
      </div>

      {/* View All CTA */}
      <div className="mt-16 text-center">
        <a
          href="https://www.behance.net/modusplus"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-amber-500/30 px-12 py-5 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground transition-all hover:border-amber-500 hover:bg-amber-500/10 hover:text-amber-400 hover:shadow-[0_0_30px_rgba(248,181,0,0.15)]"
        >
          View Full Portfolio on Behance →
        </a>
      </div>
    </section>
  )
}
