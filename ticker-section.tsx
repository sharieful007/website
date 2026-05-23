"use client"

const items = [
  "Architecture",
  "Sustainable Design",
  "3D Visualization",
  "Interior Design",
  "SketchUp Pro",
  "V-Ray Render",
  "Twinmotion",
  "Project Management",
]

export function TickerSection() {
  return (
    <div className="relative border-y border-border/30 bg-card/50 py-5 backdrop-blur-sm">
      <div className="animate-ticker flex whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center gap-12 px-12">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500" />
          </div>
        ))}
      </div>
    </div>
  )
}
