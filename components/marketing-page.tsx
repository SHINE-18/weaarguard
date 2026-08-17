import Link from 'next/link'
import { ArrowUpRight, Check, ShieldCheck, Factory, Layers3, Truck } from 'lucide-react'
import { SiteFooter, SiteHeader } from './site-chrome'
import { categories, alloys } from '@/lib/site-data'

export function PageFrame({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string
  title: React.ReactNode
  intro: string
  children: React.ReactNode
}) {
  return (
    <main className="site-shell">
      <SiteHeader />
      <section className="page-hero">
        <div className="wrap">
          <div className="mono eyebrow">{eyebrow}</div>
          <h1>{title}</h1>
          <p className="page-intro">{intro}</p>
          <div style={{ marginTop: '28px' }}>
            <Link className="btn btn-brass" href="/contact">
              Request a Quote <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>
      {children}
      <SiteFooter />
    </main>
  )
}

export function PartnerFeatureCard() {
  return (
    <section className="wrap" style={{ marginBlock: '64px' }}>
      <div
        style={{
          position: 'relative',
          background: '#ffffff',
          border: '1px solid var(--border)',
          borderRadius: '4px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
          padding: '48px clamp(20px, 4vw, 48px)',
          overflow: 'hidden',
        }}
      >
        {/* Top Gradient Bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #f59e0b 0%, #0d9488 100%)',
          }}
        />

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '48px', alignItems: 'center' }}>
          <div>
            <span className="pill-amber" style={{ marginBottom: '20px' }}>
              ⚙ WEAR SOLUTIONS · REAL RESULTS
            </span>
            <h2
              style={{
                font: '400 clamp(32px, 4vw, 48px) "Anton", sans-serif',
                textTransform: 'uppercase',
                color: 'var(--navy)',
                lineHeight: 1.05,
                margin: '16px 0 20px',
              }}
            >
              FROM DESIGN TO DELIVERY,<br />
              <span style={{ color: 'var(--brass-hover)' }}>WEARGUARD PARTNERS WITH YOU</span>
            </h2>
            <p style={{ color: '#4b5563', fontSize: '15.5px', lineHeight: '1.65', marginBottom: '32px', maxWidth: '52ch' }}>
              Stop overpaying OEM margins and struggling with premature component failure. Get custom alloy engineering tailored specifically to your plant&apos;s abrasion profile.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link className="btn btn-brass" href="/contact">
                Get a Free Wear Audit <ArrowUpRight size={15} />
              </Link>
              <Link className="btn btn-dark" href="/engineering">
                Speak With Engineer
              </Link>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div className="value-card" style={{ background: '#ffffff', border: '1.5px solid var(--brass-border)', padding: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Check size={16} style={{ color: 'var(--brass-hover)' }} />
                <h3 style={{ margin: 0, fontSize: '14px', font: '400 16px "Anton", sans-serif' }}>1–10 UNIT RUNS</h3>
              </div>
              <p style={{ fontSize: '12.5px', color: '#4b5563', margin: 0 }}>
                Small-batch flexibility with no massive upfront tooling costs.
              </p>
            </div>

            <div className="value-card" style={{ background: '#ffffff', border: '1.5px solid var(--brass-border)', padding: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Check size={16} style={{ color: 'var(--brass-hover)' }} />
                <h3 style={{ margin: 0, fontSize: '14px', font: '400 16px "Anton", sans-serif' }}>20–60% LONGER LIFE</h3>
              </div>
              <p style={{ fontSize: '12.5px', color: '#4b5563', margin: 0 }}>
                Significant wear resistance improvement over standard alloys.
              </p>
            </div>

            <div className="value-card" style={{ background: '#ffffff', border: '1.5px solid var(--brass-border)', padding: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Check size={16} style={{ color: 'var(--brass-hover)' }} />
                <h3 style={{ margin: 0, fontSize: '14px', font: '400 16px "Anton", sans-serif' }}>6–8 WEEK TURNAROUND</h3>
              </div>
              <p style={{ fontSize: '12.5px', color: '#4b5563', margin: 0 }}>
                Rapid quote-to-delivery pathway for high-priority replacement.
              </p>
            </div>

            <div className="value-card" style={{ background: '#ffffff', border: '1.5px solid var(--brass-border)', padding: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Check size={16} style={{ color: 'var(--brass-hover)' }} />
                <h3 style={{ margin: 0, fontSize: '14px', font: '400 16px "Anton", sans-serif' }}>GLOBAL SUPPORT</h3>
              </div>
              <p style={{ fontSize: '12.5px', color: '#4b5563', margin: 0 }}>
                Worldwide shipping with on-site engineering and audit consultations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function FeatureStrip() {
  return (
    <section className="value-strip">
      <div className="wrap">
        <div className="value-head">
          <div className="mono">Core Capabilities</div>
          <h2>Application-specific wear engineering for heavy industry.</h2>
        </div>
        <div className="value-grid">
          {[
            ['1–10 UNIT RUNS', 'Small-batch flexibility with no massive upfront tooling costs.'],
            ['20–60% LONGER LIFE', 'Significant wear resistance improvement over standard alloys.'],
            ['6–8 WEEK TURNAROUND', 'Rapid quote-to-delivery pathway for high-priority replacement.'],
            ['GLOBAL SUPPORT', 'Worldwide shipping with on-site engineering and audit consultations.'],
          ].map(([t, c]) => (
            <div key={t} className="value-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Check size={16} style={{ color: 'var(--brass-hover)' }} />
                <h3>{t}</h3>
              </div>
              <p>{c}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Process() {
  return (
    <section className="process" id="process">
      <div className="wrap">
        <div className="process-head">
          <h2>
            Send the worn part.<br />
            We handle the rest.
          </h2>
          <Link href="/engineering" className="btn btn-outline-dark">
            Talk to an Engineer →
          </Link>
        </div>
        <div className="steps">
          <div className="step">
            <div className="num">01</div>
            <p>Send your part or drawing</p>
          </div>
          <div className="step">
            <div className="num">02</div>
            <p>We analyze the wear conditions</p>
          </div>
          <div className="step">
            <div className="num">03</div>
            <p>We match the alloy</p>
          </div>
          <div className="step">
            <div className="num">04</div>
            <p>We engineer &amp; manufacture</p>
          </div>
          <div className="step">
            <div className="num">05</div>
            <p>We deliver in 6–8 weeks</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function RFQBand() {
  return (
    <section className="conversion" style={{ background: 'linear-gradient(135deg, #131f28 0%, #1a2936 100%)', padding: '80px 0', position: 'relative', borderTop: '1px solid rgba(245, 158, 11, 0.25)' }}>
      <div className="wrap" style={{ textAlign: 'center', maxWidth: '800px' }}>
        <span className="pill-amber" style={{ marginBottom: '20px', display: 'inline-flex' }}>
          ⚡ RAPID QUOTE &amp; DIRECT AUDIT
        </span>
        <h2 style={{ font: '400 clamp(32px, 5vw, 54px) "Anton", sans-serif', textTransform: 'uppercase', color: '#ffffff', lineHeight: '1.05', margin: '14px 0 16px' }}>
          HAVE A WEAR PROBLEM?<br />
          <span style={{ color: 'var(--brass)' }}>LET&apos;S ENGINEER THE SOLUTION.</span>
        </h2>
        <p style={{ color: 'var(--cream-dim)', fontSize: '16px', lineHeight: '1.65', margin: '0 auto 32px', maxWidth: '560px' }}>
          Send us your drawing, worn part photo, or dimensions — our metallurgical team will analyze the failure mode and provide a custom alloy quotation within 24 hours.
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '32px' }}>
          <Link className="btn btn-brass" href="/contact">
            Request a Free Audit <ArrowUpRight size={15} />
          </Link>
          <Link className="btn btn-outline-light" href="/engineering">
            Talk to an Engineer
          </Link>
        </div>

        <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', paddingTop: '24px', borderTop: '1px solid rgba(248, 249, 250, 0.1)' }}>
          <span className="mono" style={{ color: 'var(--cream-dim)', fontSize: '11px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <ShieldCheck size={14} style={{ color: 'var(--brass)' }} /> 100% Fitment Guarantee
          </span>
          <span className="mono" style={{ color: 'var(--cream-dim)', fontSize: '11px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Truck size={14} style={{ color: 'var(--brass)' }} /> 6–8 Week Delivery
          </span>
          <span className="mono" style={{ color: 'var(--cream-dim)', fontSize: '11px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Factory size={14} style={{ color: 'var(--brass)' }} /> 1–10 Small Batch Runs
          </span>
        </div>
      </div>
    </section>
  )
}

export function ProductCards() {
  return (
    <section className="products">
      <div className="wrap">
        <div className="products-head">
          <div>
            <div className="mono" style={{ color: 'var(--brass)', marginBottom: '10px' }}>
              6 Core Wear Ecosystems
            </div>
            <h2>Alloy-matched component packages.</h2>
          </div>
          <p style={{ color: 'var(--cream-dim)', maxWidth: '400px', fontSize: '14px' }}>
            Click any product system to inspect field photography, alloy recommendations, technical spec sheets, and direct quote request forms.
          </p>
        </div>
        <div className="product-grid">
          {categories.map((category) => (
            <div className="product-card" key={category.slug}>
              <div className="product-img-box">
                <img src={category.image} alt={category.title} />
              </div>
              <div className="product-body">
                <span className="mono" style={{ color: 'var(--brass-hover)', display: 'block', marginBottom: '6px', fontSize: '11px' }}>
                  {category.tag}
                </span>
                <h3>{category.title}</h3>
                <p>{category.copy}</p>
                <Link className="product-link" href={`/products/${category.slug}`}>
                  Explore System →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function AlloyCards() {
  return (
    <section className="products" style={{ background: 'var(--background)', color: 'var(--navy)' }}>
      <div className="wrap">
        <div className="products-head">
          <div>
            <div className="mono" style={{ color: 'var(--brass)', marginBottom: '10px' }}>
              Metallurgy &amp; Wear Grades
            </div>
            <h2 style={{ color: 'var(--navy)' }}>Application-Matched Materials.</h2>
          </div>
        </div>
        <div className="product-grid" style={{ gap: '20px' }}>
          {alloys.map((alloy, i) => (
            <div className="product-card" key={alloy.name} style={{ background: '#fff', border: '1px solid var(--border)' }}>
              <div className="product-img-box">
                <img src={alloy.image} alt={alloy.name} />
              </div>
              <div className="product-body">
                <span className="mono" style={{ color: 'var(--brass-hover)', display: 'block', marginBottom: '6px', fontSize: '11px' }}>
                  GRADE 0{i + 1}
                </span>
                <h3 style={{ color: 'var(--navy)' }}>{alloy.name}</h3>
                <strong style={{ display: 'block', font: '700 13px "IBM Plex Mono", monospace', color: 'var(--brass-hover)', margin: '4px 0 10px' }}>
                  {alloy.hardness}
                </strong>
                <p style={{ color: '#4b5563' }}>{alloy.use}</p>
                <Link className="product-link" href="/contact" style={{ color: 'var(--navy)' }}>
                  Discuss Grade →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function TrustLine() {
  return (
    <section className="value-strip" style={{ padding: '36px 0', borderBottom: '1px solid rgba(248,249,250,0.1)' }}>
      <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#ffffff' }}>
          <ShieldCheck size={20} style={{ color: 'var(--brass)' }} />
          <span className="mono" style={{ fontSize: '11px' }}>Quality First Metallurgy</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#ffffff' }}>
          <Factory size={20} style={{ color: 'var(--brass)' }} />
          <span className="mono" style={{ fontSize: '11px' }}>Global Foundry Connects</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#ffffff' }}>
          <Layers3 size={20} style={{ color: 'var(--brass)' }} />
          <span className="mono" style={{ fontSize: '11px' }}>3D Reverse-Engineering</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#ffffff' }}>
          <Truck size={20} style={{ color: 'var(--brass)' }} />
          <span className="mono" style={{ fontSize: '11px' }}>6–8 Week Delivery</span>
        </div>
      </div>
    </section>
  )
}
