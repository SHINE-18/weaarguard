import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PageFrame, RFQBand } from '@/components/marketing-page'
import { alloys } from '@/lib/site-data'

export const metadata = {
  title: 'Material Technologies & Wear Grades | WearGuard™',
  description: 'The right material for the right wear zone — Wear Steel, Hardfaced Plate, Premium Castings, Ceramic, and Sacrificial Inserts.',
}

const materialCategories = [
  { name: 'Wear Steel', desc: 'Quenched & tempered steel plates (400–500 BHN) for high-impact chutes and loader buckets.', wearMode: 'Impact & Sliding Abrasion', image: '/images/material-technology.webp' },
  { name: 'Hardfaced Plate', desc: 'Chromium carbide overlay plates (60–64 HRC) delivering up to 10x carbon steel life.', wearMode: 'Severe Sliding Abrasion', image: '/images/hardfaced-plate.webp' },
  { name: 'Premium Castings', desc: 'High-chrome Ni-Hard IV & alloy castings precision molded for high-stress crushing and mixing.', wearMode: 'High Impact & Abrasion', image: '/images/mixer-tips.webp' },
  { name: 'Ceramic Liners', desc: '92% Alumina ceramic tiles vulcanized for fine aggregate and slurry erosion protection.', wearMode: 'Fine Erosion & Corrosion', image: '/images/ceramic-liners.webp' },
  { name: 'Rubber-Ceramic', desc: 'Composite rubber-backed ceramic plates absorbing heavy impact shock while resisting erosion.', wearMode: 'High Drop Rock Impact', image: '/images/rubber-ceramic.webp' },
  { name: 'Polymer Liners', desc: 'Ultra-high molecular weight polymer liners eliminating sticky material bridging in hoppers.', wearMode: 'Material Flow & Sticking', image: '/images/wear-liners-3d.png' },
]

export default function MaterialsPage() {
  return (
    <PageFrame
      eyebrow="MATERIAL TECHNOLOGIES / METALLURGY"
      title={
        <>
          THE RIGHT MATERIAL FOR<br />
          <em>THE RIGHT WEAR ZONE.</em>
        </>
      }
      intro="Material selection depends on Impact, Abrasion, Erosion, Temperature, Corrosion, and Material Flow conditions."
    >
      {/* Application-Matched Materials Grid */}
      <section className="products" style={{ background: 'var(--navy-2)' }}>
        <div className="wrap">
          <div className="products-head">
            <div>
              <div className="mono" style={{ color: 'var(--brass)', marginBottom: '10px' }}>
                Material Categories
              </div>
              <h2>Application-Matched Materials.</h2>
            </div>
            <p style={{ color: 'var(--cream-dim)', maxWidth: '400px', fontSize: '14px' }}>
              We analyze operating temperature, rock lump size, impact energy, and slurry velocity before formulating the alloy matrix.
            </p>
          </div>

          <div className="product-grid">
            {materialCategories.map((cat, i) => (
              <div className="product-card" key={cat.name}>
                <div className="product-img-box">
                  <img src={cat.image} alt={cat.name} />
                </div>
                <div className="product-body">
                  <span className="mono" style={{ color: 'var(--brass)', display: 'block', marginBottom: '6px', fontSize: '11px' }}>
                    0{i + 1} / {cat.wearMode}
                  </span>
                  <h3>{cat.name}</h3>
                  <p>{cat.desc}</p>
                  <Link className="product-link" href="/contact">
                    Discuss Material Option →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grade Comparison Table */}
      <section className="value-strip" style={{ background: 'var(--navy)', borderTop: '1px solid rgba(243,244,245,0.1)' }}>
        <div className="wrap">
          <div className="value-head">
            <div className="mono">Technical Comparison Table</div>
            <h2>Alloy Hardness &amp; Application Matrix</h2>
            <p style={{ color: 'var(--cream-dim)', fontSize: '14px', marginTop: '8px' }}>
              Selection guidance based on wear mode, BHN/HRC hardness, temperature resistance, and service-life targets.
            </p>
          </div>

          <div
            style={{
              background: 'var(--navy-2)',
              border: '1px solid rgba(243,244,245,0.15)',
              padding: '24px',
              borderRadius: '4px',
            }}
          >
            {alloys.map((alloy, i) => (
              <div
                key={alloy.name}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '45px 1.4fr 1fr 2fr',
                  gap: '16px',
                  alignItems: 'center',
                  padding: '16px 0',
                  borderBottom: i < alloys.length - 1 ? '1px solid rgba(243,244,245,0.1)' : 'none',
                }}
              >
                <span className="mono" style={{ color: 'var(--brass)' }}>
                  0{i + 1}
                </span>
                <strong style={{ color: 'var(--cream)', font: '400 22px "Anton", sans-serif', textTransform: 'uppercase' }}>
                  {alloy.name}
                </strong>
                <span style={{ color: 'var(--brass)', font: '700 13px "IBM Plex Mono", monospace' }}>
                  {alloy.hardness}
                </span>
                <p style={{ color: 'var(--cream-dim)', fontSize: '13px', margin: 0 }}>
                  {alloy.use}
                </p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '36px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
            <div>
              <div className="mono" style={{ color: 'var(--brass)' }}>NEED HELP SELECTING A MATERIAL?</div>
              <h3 style={{ font: '400 28px "Anton", sans-serif', color: 'var(--cream)', margin: '4px 0 0' }}>
                TALK TO OUR METALLURGICAL TEAM
              </h3>
            </div>
            <Link className="btn btn-brass" href="/contact">
              Talk to a Materials Engineer <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <RFQBand />
    </PageFrame>
  )
}
