"use client"

import { useEffect, useRef, useState } from "react"

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const mousePos = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`
        dotRef.current.style.top = `${e.clientY}px`
      }
    }

    const animateRing = () => {
      const dx = mousePos.current.x - ringPos.current.x
      const dy = mousePos.current.y - ringPos.current.y
      
      ringPos.current.x += dx * 0.12
      ringPos.current.y += dy * 0.12
      
      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`
        ringRef.current.style.top = `${ringPos.current.y}px`
      }
      
      requestAnimationFrame(animateRing)
    }

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement
      if (target.matches('a, button, [role="button"], .hoverable') || target.closest('a, button, [role="button"], .hoverable')) {
        setIsHovering(true)
      }
    }

    const handleMouseLeave = (e: Event) => {
      const target = e.target as HTMLElement
      if (target.matches('a, button, [role="button"], .hoverable') || target.closest('a, button, [role="button"], .hoverable')) {
        setIsHovering(false)
      }
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseover", handleMouseEnter)
    document.addEventListener("mouseout", handleMouseLeave)
    
    const animation = requestAnimationFrame(animateRing)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseover", handleMouseEnter)
      document.removeEventListener("mouseout", handleMouseLeave)
      cancelAnimationFrame(animation)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot hidden md:block"
        style={{ opacity: 1 }}
      />
      <div
        ref={ringRef}
        className={`cursor-ring hidden md:block ${isHovering ? "hover" : ""}`}
        style={{ opacity: 1 }}
      />
      <style jsx global>{`
        @media (min-width: 768px) {
          * {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  )
}
