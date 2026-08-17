'use client'

import { useEffect } from 'react'
import { animate, stagger } from 'animejs'

export function MotionLayer() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const observed = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { animate(entry.target, { opacity: [0, 1], translateY: [18, 0], duration: 700, ease: 'outQuad' }); observed.unobserve(entry.target) } }), { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach((node) => { (node as HTMLElement).style.opacity = '0'; observed.observe(node) })
    const grids = document.querySelectorAll('.stagger-grid')
    grids.forEach((grid) => animate(grid.children, { opacity: [0, 1], translateY: [16, 0], delay: stagger(65), duration: 600, ease: 'outQuad' }))
    return () => observed.disconnect()
  }, [])
  return null
}
