"use client"

import { useEffect, useRef } from "react"

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight * 5
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create stars
    const stars: { x: number; y: number; size: number; opacity: number; speed: number }[] = []
    const numStars = 250

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.8 + 0.3,
        opacity: Math.random() * 0.6 + 0.2,
        speed: Math.random() * 0.0005 + 0.0002,
      })
    }

    // Create shooting stars
    const shootingStars: { x: number; y: number; length: number; speed: number; opacity: number; active: boolean }[] = []
    
    const createShootingStar = () => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.5,
        length: Math.random() * 80 + 40,
        speed: Math.random() * 8 + 6,
        opacity: Math.random() * 0.5 + 0.5,
        active: true,
      }
    }

    // Spawn shooting stars occasionally
    let lastShootingStarTime = 0

    let animationId: number
    let time = 0

    const animate = (currentTime: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 1

      // Draw regular stars
      stars.forEach((star) => {
        const twinkle = Math.sin(time * star.speed * 100) * 0.3 + 0.7
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * twinkle})`
        ctx.fill()
      })

      // Spawn new shooting star every 3-6 seconds
      if (currentTime - lastShootingStarTime > 3000 + Math.random() * 3000) {
        shootingStars.push(createShootingStar())
        lastShootingStarTime = currentTime
      }

      // Draw and update shooting stars
      shootingStars.forEach((star, index) => {
        if (!star.active) return

        // Draw shooting star with gradient
        const gradient = ctx.createLinearGradient(
          star.x, star.y,
          star.x + star.length, star.y + star.length * 0.8
        )
        gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`)
        gradient.addColorStop(0.3, `rgba(248, 181, 0, ${star.opacity * 0.8})`)
        gradient.addColorStop(1, `rgba(255, 107, 53, 0)`)

        ctx.beginPath()
        ctx.moveTo(star.x, star.y)
        ctx.lineTo(star.x + star.length, star.y + star.length * 0.8)
        ctx.strokeStyle = gradient
        ctx.lineWidth = 2
        ctx.stroke()

        // Add glow
        ctx.beginPath()
        ctx.arc(star.x, star.y, 3, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
        ctx.fill()

        // Update position
        star.x += star.speed
        star.y += star.speed * 0.8
        star.opacity -= 0.01

        // Remove if off screen or faded
        if (star.x > canvas.width || star.y > canvas.height || star.opacity <= 0) {
          shootingStars.splice(index, 1)
        }
      })

      animationId = requestAnimationFrame(animate)
    }

    animate(0)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      style={{ background: "transparent" }}
    />
  )
}
