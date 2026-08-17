import Link from 'next/link'
import { ArrowUpRight, ShieldCheck, Factory, Layers3, Truck } from 'lucide-react'
import { PageFrame, FeatureStrip, RFQBand } from '@/components/marketing-page'

export const metadata = {
  title: 'About Us | WearGuard™',
  description: 'WearGuard delivers specialist engineering support and global foundry manufacturing depth for severe-wear industries.',
}

export default function AboutPage() {
  return (
    <PageFrame
      eyebrow="ABOUT US / GLOBAL FOUNDRY CONNECTS"
      title={
        <>
          ENGINEERED SOLUTIONS.<br />
          <em>BUILT TO LAST.</em>
        </>
      }
      intro="WearGuard delivers advanced wear solutions that extend component life, eliminate unexpected plant downtime, and lower total cost of ownership in the world's toughest industries."
    >
      {/* 4 Pillars Trust Rail */}
      <section className="value-strip" style={{ background: 'var(--navy-2)', padding: '36px 0', borderBottom: '1px solid rgba(243,244,245,0.1)' }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--cream)' }}>
            <ShieldCheck size={20} style={{ color: 'var(--brass)' }} />
            <span className="mono" style={{ fontSize: '11px' }}>Quality First Metallurgy</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--cream)' }}>
            <Factory size={20} style={{ color: 'var(--brass)' }} />
            <span className="mono" style={{ fontSize: '11px' }}>Global Foundry Depth</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--cream)' }}>
            <Layers3 size={20} style={{ color: 'var(--brass)' }} />
            <span className="mono" style={{ fontSize: '11px' }}>3D Reverse-Engineering</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--cream)' }}>
            <Truck size={20} style={{ color: 'var(--brass)' }} />
            <span className="mono" style={{ fontSize: '11px' }}>6–8 Week Delivery</span>
          </div>
        </div>
      </section>

      {/* Engineering Heritage Split Section */}
      <section className="about" style={{ background: 'var(--navy)', color: 'var(--cream)', paddingBlock: '80px' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
            <div>
              <div className="mono" style={{ color: 'var(--brass)', marginBottom: '10px' }}>
                Engineering Heritage
              </div>
              <h2 style={{ font: '400 clamp(32px, 4vw, 52px) "Anton", sans-serif', textTransform: 'uppercase', color: 'var(--cream)', margin: 0 }}>
                THE RESPONSIVENESS OF A SPECIALIST.<br />
                <em style={{ color: 'var(--brass)' }}>THE DEPTH OF A PARTNER.</em>
              </h2>
            </div>
            <div>
              <p style={{ color: 'var(--cream-dim)', fontSize: '15px', lineHeight: '1.65', marginBottom: '18px' }}>
                WearGuard is a dedicated specialist in wear-parts engineering. Operating across asphalt, cement, mining, steel, and earthmoving sectors, we combine practical field engineering with global foundry manufacturing depth.
              </p>
              <p style={{ color: 'var(--cream-dim)', fontSize: '15px', lineHeight: '1.65', marginBottom: '24px' }}>
                We do not just match dimensions; we analyze operating stress, temperature, impact, and abrasion to select or formulate the precise alloy that maximizes field life.
              </p>
              <Link className="btn btn-brass" href="/contact">
                Talk to an Engineer <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>

          {/* 3 Photo Grid */}
          <div className="about-grid" style={{ marginTop: '56px' }}>
            <div className="about-img">
              <img src="/images/wearguard-callout.png" alt="Engineering project inspection" />
            </div>
            <div className="about-img">
              <img src="/images/wear-liners-3d.png" alt="3D Laser scanning visualization" />
            </div>
            <div className="about-img">
              <img src="/images/mixer-omponents.webp" alt="Precision casting foundry" />
            </div>
          </div>
        </div>
      </section>

      <FeatureStrip />
      <RFQBand />
    </PageFrame>
  )
}
