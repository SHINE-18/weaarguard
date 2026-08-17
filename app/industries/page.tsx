import Link from 'next/link'
import { ArrowUpRight, Check, ShieldCheck } from 'lucide-react'
import { PageFrame, RFQBand } from '@/components/marketing-page'

export const metadata = {
  title: 'Industries & Sectors | WearGuard™',
  description: 'Custom-engineered wear protection for Asphalt, Concrete, Process Industries, and Mining operations.',
}

const industrySectors = [
  {
    number: '01',
    name: 'Asphalt',
    slug: 'dryer-components',
    tag: 'HEAT / SLIDING ABRASION',
    image: '/images/asphalt-plant-hero.png',
    copy: 'Continuous material flow and elevated thermal stress handled with application-matched alloys. Engineered protection for dryer drum flights, RAP inlets, trunnion wheels, dam plates, and discharge assemblies.',
    wearMechanisms: 'RAP thermal shock, sliding aggregate abrasion up to 400°C, and trunnion wheel rotational wear.',
    alloys: ['WearGuard P450', 'Forged Steel 50 HRC', 'EnduraCast Z-Core'],
    deliverables: ['Trunnion wheels & girth gears', 'RAP inlet wear liners', 'Discharge chute armor', 'Internal dryer drum flights'],
  },
  {
    number: '02',
    name: 'Concrete',
    slug: 'mixer-components',
    tag: 'AGGREGATE IMPACT / SLURRY EROSION',
    image: '/images/outlast-the-mix-image-.webp',
    copy: 'High-impact liner plates and wear-resistant arms built to outlast coarse aggregate grinding and wet slurry abrasion in high-capacity batch mixers and transfer hoppers.',
    wearMechanisms: 'Coarse aggregate gouging, high-velocity cement slurry wash-out, and mixer paddle arm shear stress.',
    alloys: ['WearGuard P500', 'High-Chrome Ni-Hard IV', 'EnduraCast Ultra (65 HRC)'],
    deliverables: ['Ni-Hard & High-Chrome mixer liners', 'Smart arm shaft protection', 'Hopper discharge wear plates', 'Reversible mixer paddle tips'],
  },
  {
    number: '03',
    name: 'Process Industries',
    slug: 'transfer-point-components',
    tag: 'THERMAL / CORROSIVE WEAR',
    image: '/images/rpm-8.png',
    copy: 'Tailored metallurgical solutions for steel mills, cement manufacturing, chemical processing, and power generation where high temperatures and corrosive gas destroy standard carbon steel.',
    wearMechanisms: 'Corrosive flue gas acid condensation, thermal cycling, and fine abrasive dust erosion.',
    alloys: ['Stainless 316L Overlay', 'Chromium Carbide 62 HRC', 'WearGuard P400'],
    deliverables: ['High-temp kiln liners & seals', 'Plenum & flue gas duct armor', 'Corrosion-resistant alloy castings', 'Baghouse exhaust fan impellers'],
  },
  {
    number: '04',
    name: 'Mining',
    slug: 'earthmoving-bucket-tips',
    tag: 'SEVERE GOUGING / HIGH-STRESS ABRASION',
    image: '/images/rpm-12.png',
    copy: 'Heavy-duty impact plates, rock box components, bucket lips, and chute liners engineered to withstand relentless rock impact and ground-engaging shock loads.',
    wearMechanisms: 'Extreme rock impact, high-stress grinding abrasion, bucket lip gouging, and tip fracture shock.',
    alloys: ['Wearcast Ultra 800', 'Martensitic Alloy Steel', 'EnduraCast Z-Core'],
    deliverables: ['Crusher jaw & cone liners', 'Bolt-in chute & hopper liners', 'Ground-engaging teeth & adapters', 'Excavator lip & heel shrouds'],
  },
]

export default function IndustriesPage() {
  return (
    <PageFrame
      eyebrow="INDUSTRIES / SECTORS WE SERVE"
      title={
        <>
          BUILT FOR THE<br />
          <em>HARDEST WORK.</em>
        </>
      }
      intro="WearGuard delivers custom-engineered wear protection with complete metallurgical details, tailored alloys, and direct component fitment guarantees."
    >
      <section className="products" style={{ background: 'var(--navy-2)' }}>
        <div className="wrap">
          <div className="products-head">
            <div>
              <div className="mono" style={{ color: 'var(--brass)', marginBottom: '10px' }}>
                Targeted Sector Solutions
              </div>
              <h2>Engineered by Application.</h2>
            </div>
            <p style={{ color: 'var(--cream-dim)', maxWidth: '400px', fontSize: '14px' }}>
              Every industry faces a unique combination of impact, abrasion, heat, and corrosion. Inspect the exact wear mechanisms and alloy solutions below.
            </p>
          </div>

          <div className="product-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
            {industrySectors.map((sector) => (
              <div
                key={sector.name}
                className="product-card"
                style={{ background: 'var(--navy)', border: '1px solid rgba(243,244,245,0.15)', display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                  <img src={sector.image} alt={sector.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div className="showcase-overlay-gradient" />
                  <span className="showcase-badge" style={{ position: 'absolute', top: '14px', left: '14px' }}>
                    {sector.number} / {sector.name}
                  </span>
                  <span className="showcase-spec-badge" style={{ position: 'absolute', top: '14px', right: '14px' }}>
                    {sector.tag}
                  </span>
                </div>

                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3 style={{ font: '400 32px "Anton", sans-serif', textTransform: 'uppercase', margin: '0 0 10px', color: 'var(--cream)' }}>
                    {sector.name}
                  </h3>
                  <p style={{ color: 'var(--cream-dim)', fontSize: '14px', lineHeight: '1.6', margin: '0 0 16px' }}>{sector.copy}</p>

                  <div style={{ padding: '14px', background: 'var(--navy-2)', borderLeft: '3px solid var(--brass)', marginBottom: '16px' }}>
                    <span className="mono" style={{ display: 'block', color: 'var(--brass)', fontSize: '10px', marginBottom: '4px' }}>
                      WEAR MECHANISMS AT WORK
                    </span>
                    <span style={{ fontSize: '12px', color: 'var(--cream)', lineHeight: '1.5', display: 'block' }}>
                      {sector.wearMechanisms}
                    </span>
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <span className="mono" style={{ display: 'block', color: '#617078', fontSize: '10px', marginBottom: '8px' }}>
                      RECOMMENDED METALLURGY
                    </span>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      {sector.alloys.map((alloy) => (
                        <span
                          key={alloy}
                          style={{
                            font: '700 10px "IBM Plex Mono", monospace',
                            padding: '4px 8px',
                            background: 'rgba(243,244,245,0.08)',
                            color: 'var(--cream)',
                            border: '1px solid rgba(243,244,245,0.15)',
                            textTransform: 'uppercase',
                          }}
                        >
                          <ShieldCheck size={11} style={{ display: 'inline', marginRight: '4px', color: 'var(--brass)' }} />
                          {alloy}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid rgba(243,244,245,0.1)' }}>
                    <span className="mono" style={{ display: 'block', color: '#617078', fontSize: '10px', marginBottom: '8px' }}>
                      KEY DELIVERABLES
                    </span>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '20px' }}>
                      {sector.deliverables.map((item) => (
                        <span key={item} style={{ font: '11px "IBM Plex Mono", monospace', color: 'var(--cream-dim)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <Check size={12} style={{ color: 'var(--brass)', flexShrink: 0 }} /> {item}
                        </span>
                      ))}
                    </div>

                    <Link href={`/products/${sector.slug}`} className="btn btn-brass" style={{ width: '100%', justifyContent: 'center' }}>
                      Inspect {sector.name} Systems <ArrowUpRight size={15} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RFQBand />
    </PageFrame>
  )
}
