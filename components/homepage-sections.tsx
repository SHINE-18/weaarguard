'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  ArrowUpRight,
  Award,
  FlaskConical,
  Globe,
  ShieldCheck,
  MapPin,
  Phone,
  Mail,
  Wrench,
  Cog,
  Headphones,
} from 'lucide-react'

/* ─────────────────────────────────────────────────────────────────────
   SECTION 1 — WHY WEARGUARD value-prop block
   Two-column: left = hero product photo, right = stacked icon items
───────────────────────────────────────────────────────────────────── */

const whyItems = [
  {
    Icon: Award,
    title: 'Industry-Leading Expertise',
    desc: 'Deep expertise across mining, asphalt, concrete, and process industries.',
  },
  {
    Icon: FlaskConical,
    title: 'Engineered Alloy Systems',
    desc: 'Custom-tailored alloys built for extreme wear conditions.',
  },
  {
    Icon: Globe,
    title: 'Reliable & Scalable Supply',
    desc: 'Fast global delivery with small-batch flexibility from 1–10 units.',
  },
  {
    Icon: ShieldCheck,
    title: 'Commitment to Quality',
    desc: '20–60% more wear resistance, backed by testing and a 100% fitment guarantee.',
  },
]

export function WhyWearGuard() {
  return (
    <section className="why-wg-section">
      {/* Left — hero product photo */}
      <div className="why-wg-photo">
        <img
          src="/images/material-technologies-whole-set.webp"
          alt="WearGuard engineered alloy components close-up"
        />
        <div className="why-wg-photo-badge">
          <span className="mono">WearGuard™ Alloy</span>
        </div>
      </div>

      {/* Right — content */}
      <div className="why-wg-content">
        <span className="mono eyebrow">COMPETITIVE EDGE</span>
        <h2 className="why-wg-heading">
          WHY <em>WEARGUARD</em>
        </h2>

        <div className="why-wg-items">
          {whyItems.map(({ Icon, title, desc }) => (
            <div className="why-wg-item" key={title}>
              <div className="why-wg-icon">
                <Icon size={18} strokeWidth={1.5} />
              </div>
              <div>
                <strong className="why-wg-item-title">{title}</strong>
                <p className="why-wg-item-desc">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <Link href="/about" className="btn btn-brass" style={{ marginTop: '36px' }}>
          Learn Our Story <ArrowUpRight size={15} />
        </Link>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────
   SECTION 2 — INDUSTRIES TAB-SWITCHER
   Full-width dark bg + large feature photo + thumbnail switcher + numbered tabs
───────────────────────────────────────────────────────────────────── */

const industryTabs = [
  {
    num: '01',
    label: 'Asphalt',
    desc: 'Dryer drums, mixer liners, elevator components, and filter bags engineered for continuous asphalt plant operation.',
    images: [
      '/images/asphalt-plant-hero.png',
      '/images/dryer-combo.webp',
      '/images/dryer-sprockets.webp',
      '/images/drum-internal-discharge-flights.webp',
    ],
  },
  {
    num: '02',
    label: 'Concrete',
    desc: 'High-chrome mixer paddles, liners, tips, and shaft assemblies built to withstand coarse aggregate and slurry abrasion.',
    images: [
      '/images/mixer-omponents.webp',
      '/images/mixer-paddle-arms.webp',
      '/images/mixer-tips.webp',
      '/images/mixer-shaft-&-arms.webp',
    ],
  },
  {
    num: '03',
    label: 'Process Industries',
    desc: 'Transfer chutes, hopper liners, conveyor components, and flow-control armor for bulk handling and process plants.',
    images: [
      '/images/liners-in-control-the-flow.webp',
      '/images/hardfaced-plate.webp',
      '/images/ceramic-liners.webp',
      '/images/rubber-ceramic.webp',
    ],
  },
  {
    num: '04',
    label: 'Mining',
    desc: 'Bucket tips, earthmoving GET, drag conveyor components, and extreme-duty wear plate systems for high-tonnage mining.',
    images: [
      '/images/earth-moving-bucket-tips-1.webp',
      '/images/custom-earth-moving-bucket-tips3.webp',
      '/images/drive-sprockets.webp',
      '/images/product-lines-custom-wear.webp',
    ],
  },
]

export function IndustriesTabSwitcher() {
  const [activeTab, setActiveTab] = useState(0)
  const [activeThumb, setActiveThumb] = useState(0)

  const current = industryTabs[activeTab]
  const mainImage = current.images[activeThumb]

  function handleTabChange(idx: number) {
    setActiveTab(idx)
    setActiveThumb(0)
  }

  return (
    <section className="ind-section">
      <div className="ind-bg-overlay" />

      <div className="wrap ind-inner">
        {/* Top two-column */}
        <div className="ind-top-grid">
          {/* Left copy */}
          <div className="ind-copy">
            <span className="mono ind-eyebrow">CAPABILITIES</span>
            <h2 className="ind-heading">
              ENGINEERED FOR EVERY{' '}
              <em className="ind-heading-gold">INDUSTRY</em>
            </h2>
            <p className="ind-body">
              WearGuard&apos;s alloy systems are application-matched — not generic.
              Each industry demands a different wear profile: asphalt plants
              fight thermal shock and abrasion, mining demands extreme impact
              resistance, and process industries face erosion and corrosion.
              We engineer for all of it.
            </p>
          </div>

          {/* Right photo block */}
          <div className="ind-photo-block">
            <div className="ind-main-photo">
              <img
                src={mainImage}
                alt={current.label}
                key={mainImage}
                className="ind-main-img"
              />
              <div className="ind-photo-label mono">{current.label} Sector</div>
            </div>
            <div className="ind-thumbs">
              {current.images.map((img, i) => (
                <button
                  key={img}
                  className={`ind-thumb${activeThumb === i ? ' ind-thumb-active' : ''}`}
                  onClick={() => setActiveThumb(i)}
                  aria-label={`View image ${i + 1}`}
                >
                  <img src={img} alt="" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Description line + Tab switcher */}
        <div className="ind-desc-line mono">{current.desc}</div>
        <div className="ind-tabs">
          {industryTabs.map((tab, i) => (
            <button
              key={tab.num}
              className={`ind-tab${activeTab === i ? ' ind-tab-active' : ''}`}
              onClick={() => handleTabChange(i)}
            >
              <span className="ind-tab-num">{tab.num}</span>
              <span className="ind-tab-label">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────
   SECTION 3 — SERVICES + INDUSTRIES SPLIT BLOCK
───────────────────────────────────────────────────────────────────── */

export function ServicesSplitBlock() {
  return (
    <>
      {/* Services split */}
      <section className="svc-section">
        {/* Left: service entry */}
        <div className="svc-content">
          <div className="svc-number mono">01</div>
          <h2 className="svc-heading">CUSTOM ENGINEERING</h2>
          <p className="svc-body">
            We reverse-engineer your worn OEM component, identify the exact failure
            mode, and re-manufacture it in a higher-grade WearGuard alloy — bolt-in
            compatible, fully fitted, and ready to outlast.
          </p>

          <ul className="svc-list">
            <li>
              <Wrench size={14} strokeWidth={1.5} className="svc-list-icon" />
              Custom Alloy Formulation
            </li>
            <li>
              <Cog size={14} strokeWidth={1.5} className="svc-list-icon" />
              Precision Casting &amp; Machining
            </li>
            <li>
              <Headphones size={14} strokeWidth={1.5} className="svc-list-icon" />
              24/7 Technical Support
            </li>
          </ul>

          <Link href="/engineering" className="svc-link">
            Explore Service →
          </Link>
        </div>

        {/* Right: geometric texture panel */}
        <div className="svc-texture" aria-hidden="true">
          <svg
            className="svc-texture-svg"
            viewBox="0 0 600 480"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="0,480 200,0 600,0 600,200 400,480" fill="rgba(245,158,11,0.04)" />
            <polygon points="100,480 300,60 600,100 600,480" fill="rgba(255,255,255,0.025)" />
            <polygon points="300,480 500,150 600,200 600,480" fill="rgba(245,158,11,0.025)" />
            <line x1="0" y1="0" x2="600" y2="480" stroke="rgba(245,158,11,0.07)" strokeWidth="1" />
            <line x1="150" y1="0" x2="600" y2="360" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
            <line x1="300" y1="0" x2="600" y2="240" stroke="rgba(245,158,11,0.05)" strokeWidth="1" />
            <line x1="0" y1="120" x2="600" y2="480" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
            {Array.from({ length: 8 }).map((_, row) =>
              Array.from({ length: 10 }).map((_, col) => (
                <circle
                  key={`${row}-${col}`}
                  cx={col * 70 + 20}
                  cy={row * 65 + 20}
                  r={1.5}
                  fill="rgba(245,158,11,0.18)"
                />
              ))
            )}
          </svg>
          <div className="svc-texture-label mono">
            ENGINEERED<br />PRECISION
          </div>
        </div>
      </section>

      {/* Industries full-width strip */}
      <section className="ind-strip">
        <div className="wrap">
          <div className="ind-strip-inner">
            <div>
              <span className="mono ind-strip-eyebrow">INDUSTRIES</span>
              <h2 className="ind-strip-heading">INDUSTRIAL SECTORS</h2>
            </div>
            <p className="ind-strip-body">
              WearGuard partners with operators across asphalt &amp; bitumen plants,
              ready-mix concrete operations, heavy mining &amp; quarrying, steel
              processing, bulk recycling, and aggregate material handling —
              wherever extreme wear is the enemy of uptime.
            </p>
            <Link href="/industries" className="btn btn-outline-light ind-strip-btn">
              View All Industries →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

/* ─────────────────────────────────────────────────────────────────────
   SECTION 4 — PREMIUM FOOTER
───────────────────────────────────────────────────────────────────── */

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Materials', href: '/materials' },
  { label: 'Process', href: '/engineering' },
]

function FacebookIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function TwitterIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

function LinkedinIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

const socialLinks = [
  { label: 'Facebook', href: '#', Icon: FacebookIcon },
  { label: 'Instagram', href: '#', Icon: InstagramIcon },
  { label: 'Twitter / X', href: '#', Icon: TwitterIcon },
  { label: 'LinkedIn', href: '#', Icon: LinkedinIcon },
]

export function PremiumFooter() {
  return (
    <footer className="pf-footer">
      <div className="wrap">
        {/* Top: tagline + CTA + link columns */}
        <div className="pf-top">
          <div className="pf-tagline-col">
            <p className="pf-tagline">
              BUILT TO OUTLAST.<br />
              <span className="pf-tagline-gold">ENGINEERED TO ENDURE.</span>
            </p>
            <Link href="/contact" className="btn btn-brass pf-cta">
              Get Started <ArrowUpRight size={15} />
            </Link>
          </div>

          <div className="pf-links-block">
            <div className="pf-link-col">
              <span className="mono pf-col-label">Quick Links</span>
              {quickLinks.map((l) => (
                <Link key={l.href} href={l.href} className="pf-link">
                  {l.label}
                </Link>
              ))}
            </div>
            <div className="pf-link-col">
              <span className="mono pf-col-label">Social Media</span>
              {socialLinks.map(({ label, href, Icon }) => (
                <a key={label} href={href} className="pf-link pf-social-link">
                  <Icon size={13} strokeWidth={1.5} />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="pf-divider" />

        {/* Bottom: contact info + wordmark */}
        <div className="pf-bottom">
          <div className="pf-contact">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="pf-contact-line"
            >
              <MapPin size={14} strokeWidth={1.5} className="pf-contact-icon" />
              <span>Queensland, Australia · Global Supply Network</span>
            </a>
            <a href="tel:+61437433890" className="pf-contact-line">
              <Phone size={14} strokeWidth={1.5} className="pf-contact-icon" />
              <span>+61 437 433 890</span>
            </a>
            <a href="mailto:contact@wearguard.com" className="pf-contact-line">
              <Mail size={14} strokeWidth={1.5} className="pf-contact-icon" />
              <span>contact@wearguard.com</span>
            </a>
          </div>

          <div className="pf-wordmark-block">
            <div className="pf-wordmark">WEARGUARD</div>
            <span className="mono pf-copyright">
              © 2026 WearGuard™. All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
