import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PageFrame, RFQBand } from '@/components/marketing-page'
import { steps } from '@/lib/site-data'

export const metadata = {
  title: 'Engineering & Reverse Engineering | WearGuard™',
  description: 'Engineering that solves wear problems — Reverse Engineering, Custom Design, Material Selection, and Small-Batch Flexibility.',
}

const engineeringPillars = [
  { name: 'REVERSE ENGINEERING', desc: 'Design-to-prototype solutions for existing, worn, or obsolete OEM components.' },
  { name: 'CUSTOM DESIGN', desc: 'Components developed around actual equipment geometry and severe operating conditions.' },
  { name: 'MATERIAL SELECTION', desc: 'Matching alloy metallurgy, hardness, and thermal heat treatment to actual wear forces.' },
  { name: 'APPLICATION ENGINEERING', desc: 'In-depth analysis of operating temperature, rock impact energy, and slurry erosion.' },
  { name: 'SMALL-BATCH FLEXIBILITY', desc: 'Order from 1–10 units for field testing, niche repairs, or full production runs.' },
  { name: 'GLOBAL SUPPORT', desc: 'Dedicated engineering assistance from initial 3D scan through delivery and fitment.' },
]

export default function EngineeringPage() {
  return (
    <PageFrame
      eyebrow="ENGINEERING CAPABILITY / PROBLEM SOLVING"
      title={
        <>
          ENGINEERING THAT<br />
          <em>SOLVES WEAR PROBLEMS.</em>
        </>
      }
      intro="WearGuard does not just sell wear parts — WearGuard engineers wear solutions tailored to your equipment, material, and uptime targets."
    >
      {/* 6 Core Capabilities */}
      <section className="products" style={{ background: 'var(--navy-2)' }}>
        <div className="wrap">
          <div className="products-head">
            <div>
              <div className="mono" style={{ color: 'var(--brass)', marginBottom: '10px' }}>
                Core Capabilities
              </div>
              <h2>Application-Specific Engineering.</h2>
            </div>
            <p style={{ color: 'var(--cream-dim)', maxWidth: '400px', fontSize: '14px' }}>
              We combine 3D CAD modeling, laser scanning, custom alloy formulation, and global foundry casting depth.
            </p>
          </div>

          <div className="value-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            {engineeringPillars.map((p, i) => (
              <div className="value-card" key={p.name} style={{ background: 'var(--navy)', border: '1px solid rgba(243,244,245,0.14)' }}>
                <div className="n">0{i + 1} / CAPABILITY</div>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <div style={{ marginTop: '16px' }}>
                  <a href="#workflow" className="product-link">
                    View Workflow Step →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9-Step Custom Solution Workflow */}
      <section id="workflow" className="value-strip" style={{ background: 'var(--navy)', borderTop: '1px solid rgba(243,244,245,0.1)' }}>
        <div className="wrap">
          <div className="value-head" style={{ maxWidth: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <div className="mono">Custom Solution Workflow</div>
              <h2>From Part Diagnosis to Delivery</h2>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', borderLeft: '3px solid var(--brass)', paddingLeft: '18px' }}>
              <span style={{ font: '400 48px "Anton", sans-serif', color: 'var(--brass)' }}>6–8</span>
              <span className="mono" style={{ fontSize: '11px', color: 'var(--cream-dim)' }}>
                WEEKS FROM QUOTE<br />TO SITE DELIVERY
              </span>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '36px' }}>
            {steps.map((step, i) => (
              <div
                key={step}
                style={{
                  padding: '24px',
                  background: 'var(--navy-2)',
                  border: '1px solid rgba(243,244,245,0.14)',
                  borderRadius: '4px',
                }}
              >
                <span className="mono" style={{ color: 'var(--brass)', fontSize: '11px' }}>
                  0{i + 1} STEP
                </span>
                <h3 style={{ margin: '12px 0 8px', font: '400 22px "Anton", sans-serif', color: 'var(--cream)', textTransform: 'uppercase' }}>
                  {step}
                </h3>
                <p style={{ color: 'var(--cream-dim)', fontSize: '13px', lineHeight: '1.6', margin: 0 }}>
                  {[
                    'Upload your CAD drawing, photo, or send us the worn OEM part for inspection.',
                    'Analyze lump size, velocity, moisture, and impact drop energy in your plant.',
                    'Identify sliding abrasion, gouging, heat shock, or chemical erosion modes.',
                    'Select or formulate the optimal WearGuard alloy grade (400 BHN to 65 HRC).',
                    'Model 3D geometry with bevels, countersunk holes, or dead-bed shelves.',
                    'Precision foundry casting, heat treatment, and induction hardening.',
                    '100% dimensional measurement and hardness test verification.',
                    'Secured export packing and global logistics tracking to your site.',
                    'Field performance tracking and inventory restocking support.',
                  ][i]}
                </p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <Link className="btn btn-brass" href="/contact">
              Start Your Engineering Project <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <RFQBand />
    </PageFrame>
  )
}
