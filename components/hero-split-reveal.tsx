'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { ArrowUpRight, ChevronDown } from 'lucide-react'

export function HeroSplitReveal() {
  const pinRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  const [isReducedMotion, setIsReducedMotion] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    // Check media queries
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setIsReducedMotion(motionQuery.matches)

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)

    const handleScroll = () => {
      if (!pinRef.current || motionQuery.matches || window.innerWidth < 768) return

      const rect = pinRef.current.getBoundingClientRect()
      const pinDistance = pinRef.current.offsetHeight - window.innerHeight
      if (pinDistance <= 0) return

      // Progress from 0 to 1 over the pinning distance
      const currentScroll = -rect.top
      const calculatedProgress = Math.min(Math.max(currentScroll / pinDistance, 0), 1)

      requestAnimationFrame(() => {
        setProgress(calculatedProgress)
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('resize', checkMobile)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // If reduced motion or mobile or before mount on JS disabled, split is 100% complete
  const isBypassed = isReducedMotion || isMobile || !isMounted
  const activeProgress = isBypassed ? 1 : progress

  // Split completion (0 to 1 mapping from 0% -> 80% scroll)
  const splitCompletion = Math.min(activeProgress / 0.8, 1)

  // Text reveal triggered when split is >= 85% complete
  const textRevealTriggered = activeProgress >= 0.8 || isBypassed

  // Header Nav opacity during hero intro
  const headerOpacity = activeProgress < 0.25 ? activeProgress / 0.25 : 1

  return (
    <div
      ref={pinRef}
      className={`hero-pin-wrapper ${isBypassed ? 'hero-bypassed' : ''}`}
      style={{
        position: 'relative',
        height: isBypassed ? 'auto' : '180vh',
      }}
    >
      <div
        className="hero-sticky-container"
        style={{
          position: isBypassed ? 'relative' : 'sticky',
          top: 0,
          height: isBypassed ? 'auto' : '100vh',
          width: '100%',
          overflow: 'hidden',
          background: 'var(--navy)',
        }}
      >
        {/* Step 1: Full-Bleed Intro Curtain Overlay (0% scroll) */}
        {!isBypassed && (
          <div
            className="hero-curtain-layer"
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 30,
              pointerEvents: activeProgress > 0.85 ? 'none' : 'auto',
              opacity: activeProgress > 0.85 ? (1 - activeProgress) / 0.15 : 1,
              transition: 'opacity 0.2s ease-out',
            }}
          >
            {/* Top-left minimal logo during landing state */}
            <div
              style={{
                position: 'absolute',
                top: '24px',
                left: ' clamp(20px, 5vw, 64px)',
                zIndex: 35,
                opacity: 1 - Math.min(activeProgress * 4, 1),
                transition: 'opacity 0.15s ease',
              }}
            >
              <img
                src="/wearguard-logo.svg"
                alt="WearGuard™"
                style={{ height: '40px', width: 'auto' }}
              />
            </div>

            {/* Bottom-Center Animated Scroll Indicator */}
            <div
              className="hero-scroll-indicator"
              style={{
                position: 'absolute',
                bottom: '36px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 35,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
                color: 'rgba(255, 255, 255, 0.75)',
                font: '700 11px "IBM Plex Mono", monospace',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                opacity: 1 - Math.min(activeProgress * 4, 1),
                transition: 'opacity 0.15s ease',
                pointerEvents: 'none',
              }}
            >
              <span>SCROLL TO EXPLORE</span>
              <ChevronDown className="scroll-bob-icon" size={20} style={{ color: 'var(--brass)' }} />
            </div>
          </div>
        )}

        {/* Hero Split Layout Grid */}
        <div className="hero-split-grid" style={{ height: '100%' }}>
          {/* Left Panel — Wipes from 0% to 55% width */}
          <div
            className="hero-split-left"
            style={{
              clipPath: isBypassed ? 'none' : `inset(0 ${100 - splitCompletion * 55}% 0 0)`,
              transform: isBypassed
                ? 'none'
                : `translateX(${(splitCompletion - 1) * 30}px)`,
              opacity: isBypassed ? 1 : Math.min(splitCompletion * 1.5, 1),
              transition: isBypassed ? 'none' : 'opacity 0.1s linear',
            }}
          >
            <div className="hero-left-content">
              {/* Eyebrow */}
              <div
                className="mono eyebrow hero-reveal-item"
                style={{
                  opacity: textRevealTriggered ? 1 : 0,
                  transform: textRevealTriggered ? 'translateY(0)' : 'translateY(16px)',
                  transition: 'opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                  transitionDelay: '0ms',
                }}
              >
                Industrial Wear Parts &amp; Custom Engineering
              </div>

              {/* Headline */}
              <h1
                className="hero-reveal-item"
                style={{
                  opacity: textRevealTriggered ? 1 : 0,
                  transform: textRevealTriggered ? 'translateY(0)' : 'translateY(24px)',
                  transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                  transitionDelay: '80ms',
                }}
              >
                Your part wears out.<br />
                We engineer the one that{' '}
                <em className="shimmer-text-brass">doesn&apos;t.</em>
              </h1>

              {/* Subhead Paragraph */}
              <p
                className="hero-sub hero-reveal-item"
                style={{
                  opacity: textRevealTriggered ? 1 : 0,
                  transform: textRevealTriggered ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                  transitionDelay: '160ms',
                }}
              >
                We reverse-engineer worn OEM components, match the alloy to how your part actually fails, and deliver in 6–8 weeks — in batches from 1 to 10 units.
              </p>

              {/* CTAs */}
              <div
                className="hero-ctas hero-reveal-item"
                style={{
                  opacity: textRevealTriggered ? 1 : 0,
                  transform: textRevealTriggered ? 'translateY(0)' : 'translateY(16px)',
                  transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                  transitionDelay: '240ms',
                }}
              >
                <Link href="/contact" className="btn btn-brass">
                  Request a Quote <ArrowUpRight size={15} />
                </Link>
                <a href="#process" className="btn btn-outline-light">
                  See How We Engineer a Part →
                </a>
              </div>
            </div>
          </div>

          {/* Right Panel — Full-bleed image transitioning to 45% tile */}
          <div
            className="hero-split-right"
            style={{
              transform: isBypassed
                ? 'none'
                : `scale(${1 + (1 - splitCompletion) * 0.15})`,
              transition: isBypassed ? 'none' : 'transform 0.1s linear',
            }}
          >
            <div className="hero-img-wrap">
              <img
                src="/wearguard.png"
                alt="Worn OEM component beside new precision casting"
              />
            </div>

            {/* Stat Tiles — Staggered fade-up */}
            {[
              ['Delivery', '6–8 Weeks', 0],
              ['Batch Size', '1–10 Units', 80],
              ['Approach', 'Reverse-Engineered', 160],
              ['Materials', 'Alloy-Matched', 240],
            ].map(([label, val, delay]) => (
              <div
                key={label as string}
                className="stat-tile"
                style={{
                  opacity: textRevealTriggered ? 1 : 0,
                  transform: textRevealTriggered ? 'translateY(0)' : 'translateY(16px)',
                  transition: 'opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                  transitionDelay: `${320 + (delay as number)}ms`,
                }}
              >
                <div className="stat-label">{label}</div>
                <div className="stat-value">{val}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
