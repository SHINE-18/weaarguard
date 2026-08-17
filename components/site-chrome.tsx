'use client'

import Link from 'next/link'
import { ArrowUpRight, Menu, X, ShieldCheck, Mail, Phone, Clock } from 'lucide-react'
import { useState } from 'react'
import { WearGuardLogo } from './wear-guard-logo'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <WearGuardLogo size="small" />
        <button
          className="menu-toggle"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav className={open ? 'nav-links is-open' : 'nav-links'}>
          <Link href="/products" onClick={() => setOpen(false)}>Products</Link>
          <Link href="/industries" onClick={() => setOpen(false)}>Industries</Link>
          <Link href="/materials" onClick={() => setOpen(false)}>Materials</Link>
          <Link href="/engineering" onClick={() => setOpen(false)}>Engineering</Link>
          <Link href="/custom-parts" onClick={() => setOpen(false)}>Custom Parts</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link className="btn nav-cta" href="/contact" onClick={() => setOpen(false)}>
            Request a Quote <ArrowUpRight size={14} />
          </Link>
        </nav>
      </div>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer style={{ background: 'linear-gradient(180deg, #111a22 0%, #070c10 100%)', borderTop: '1px solid rgba(245, 158, 11, 0.2)', position: 'relative' }}>
      <div className="wrap" style={{ paddingTop: '64px', paddingBottom: '32px' }}>
        
        {/* Top Branding Section */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px', marginBottom: '40px' }}>
          <div>
            <WearGuardLogo size="large" />
            <div className="mono" style={{ color: 'var(--cream-dim)', fontSize: '11px', marginTop: '14px', letterSpacing: '0.15em' }}>
              ENGINEERED WEAR SOLUTIONS · METALLURGICAL EXCELLENCE
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px', background: 'rgba(245, 158, 11, 0.1)', border: '1px solid var(--brass-border)', borderRadius: '4px' }}>
            <Clock size={15} style={{ color: 'var(--brass)' }} />
            <span className="mono" style={{ color: 'var(--cream)', fontSize: '11px' }}>6–8 WEEKS GLOBAL DELIVERY</span>
          </div>
        </div>

        <div className="foot-grid" style={{ gridTemplateColumns: '1.2fr 1fr 1fr 1.3fr', gap: '32px', borderTop: '1px solid rgba(248, 249, 250, 0.1)', paddingTop: '40px' }}>
          <div className="foot-col">
            <span className="mono" style={{ color: 'var(--brass)', display: 'block', marginBottom: '14px' }}>Company</span>
            <Link href="/about" style={{ display: 'block', marginBottom: '10px', color: 'var(--cream-dim)' }}>About Us</Link>
            <Link href="/engineering" style={{ display: 'block', marginBottom: '10px', color: 'var(--cream-dim)' }}>Engineering</Link>
            <Link href="/materials" style={{ display: 'block', marginBottom: '10px', color: 'var(--cream-dim)' }}>Materials &amp; Alloys</Link>
            <Link href="/contact" style={{ display: 'block', marginBottom: '10px', color: 'var(--cream-dim)' }}>Contact &amp; Audit</Link>
          </div>

          <div className="foot-col">
            <span className="mono" style={{ color: 'var(--brass)', display: 'block', marginBottom: '14px' }}>Products</span>
            <Link href="/products/dryer-components" style={{ display: 'block', marginBottom: '10px', color: 'var(--cream-dim)' }}>Dryer Components</Link>
            <Link href="/products/mixer-components" style={{ display: 'block', marginBottom: '10px', color: 'var(--cream-dim)' }}>Mixer Components</Link>
            <Link href="/products/filter-components" style={{ display: 'block', marginBottom: '10px', color: 'var(--cream-dim)' }}>Filter Components</Link>
            <Link href="/products/bucket-elevators-drag-conveyors" style={{ display: 'block', marginBottom: '10px', color: 'var(--cream-dim)' }}>Bucket Elevators &amp; Conveyors</Link>
            <Link href="/products/transfer-point-components" style={{ display: 'block', marginBottom: '10px', color: 'var(--cream-dim)' }}>Transfer &amp; Chute Liners</Link>
            <Link href="/products/earthmoving-bucket-tips" style={{ display: 'block', marginBottom: '10px', color: 'var(--cream-dim)' }}>Earthmoving Bucket Tips</Link>
          </div>

          <div className="foot-col">
            <span className="mono" style={{ color: 'var(--brass)', display: 'block', marginBottom: '14px' }}>Industries</span>
            <Link href="/industries" style={{ display: 'block', marginBottom: '10px', color: 'var(--cream-dim)' }}>Asphalt Sector</Link>
            <Link href="/industries" style={{ display: 'block', marginBottom: '10px', color: 'var(--cream-dim)' }}>Cement Plants</Link>
            <Link href="/industries" style={{ display: 'block', marginBottom: '10px', color: 'var(--cream-dim)' }}>Mining &amp; Quarries</Link>
            <Link href="/industries" style={{ display: 'block', marginBottom: '10px', color: 'var(--cream-dim)' }}>Steel &amp; Processing</Link>
            <Link href="/industries" style={{ display: 'block', marginBottom: '10px', color: 'var(--cream-dim)' }}>Recycling &amp; Recovery</Link>
          </div>

          <div className="foot-col">
            <span className="mono" style={{ color: 'var(--brass)', display: 'block', marginBottom: '14px' }}>Engineering Direct</span>
            <a href="mailto:contact@wearguard.com" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px', color: 'var(--cream-dim)' }}>
              <Mail size={14} style={{ color: 'var(--brass)' }} /> contact@wearguard.com
            </a>
            <a href="tel:+61437433890" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px', color: 'var(--cream-dim)' }}>
              <Phone size={14} style={{ color: 'var(--brass)' }} /> +61 437 433 890
            </a>
            <div style={{ marginTop: '16px', padding: '12px', background: 'rgba(248, 249, 250, 0.05)', borderLeft: '3px solid var(--brass)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px', font: '700 11px "IBM Plex Mono", monospace', color: 'var(--cream)' }}>
                <ShieldCheck size={14} style={{ color: 'var(--brass)' }} /> 100% Fitment Guarantee
              </span>
            </div>
          </div>
        </div>

        <div className="foot-bottom" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '36px', paddingTop: '20px', borderTop: '1px solid rgba(248, 249, 250, 0.08)', color: 'var(--cream-dim)', fontSize: '11px', fontFamily: 'IBM Plex Mono, monospace' }}>
          <span>© 2026 WearGuard™. All Rights Reserved.</span>
          <span>ryetek.com.au</span>
        </div>
      </div>
    </footer>
  )
}
