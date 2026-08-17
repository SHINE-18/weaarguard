import Link from 'next/link'
import { ArrowUpRight, Check, ShieldCheck } from 'lucide-react'
import { PageFrame, RFQBand } from '@/components/marketing-page'

export const metadata = {
  title: 'Solutions & Transfer Points | WearGuard™',
  description: 'Control the flow and outlast the impact with custom-engineered wear protection for transfer points, chutes, bins, and hoppers.',
}

const transferProducts = [
  { name: 'Mixer Liners', tag: 'IMPACT / ABRASION', desc: 'Ni-Hard and high-chrome bolt-in liner packages for high-capacity batch mixers.' },
  { name: 'Hopper Liners', tag: 'SLIDING ABRASION', desc: 'Impact-absorbing composite and hardfaced steel liners engineered for raw feed hoppers.' },
  { name: 'Bin Liners', tag: 'MATERIAL FLOW', desc: 'Low-friction polymer and ceramic tile liners preventing material bridging and wall wear.' },
  { name: 'Skirt Liners', tag: 'TRANSFER SKIRTING', desc: 'Tapered wear strips protecting conveyor loading zones and preventing spillage.' },
  { name: 'Impact Plates', tag: 'HIGH DROP IMPACT', desc: 'Heavy-section chromium carbide overlay and Z-Core castings absorbing severe rock drop shock.' },
  { name: 'Rock-Box Components', tag: 'DEAD-BED PROTECTION', desc: 'Self-protecting shelf inserts that build a material dead-bed to eliminate liner wear.' },
  { name: 'Wear Blocks', tag: 'SACRIFICIAL PROTECTION', desc: 'Weld-on bi-metallic wear buttons and bars for localized high-wear hot spots.' },
]

const selectionCriteria = [
  'Material Size & Lump Dimension',
  'Drop Height & Impact Velocity',
  'Moisture & Slurry Content',
  'Abrasion & Gouging Severity',
  'Operating Temperature',
  'Corrosion & Acid Exposure',
  'Target Service Life Target',
]

export default function SolutionsPage() {
  return (
    <PageFrame
      eyebrow="ENGINEERED WEAR SOLUTIONS / TRANSFER POINTS"
      title={<>CONTROL THE FLOW.<br /><em>OUTLAST THE IMPACT.</em></>}
      intro="Application-specific wear solutions designed around your exact material size, velocity, drop height, moisture, and impact severity."
    >
      <section className="category-section wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow brass-text">SELECTION CRITERIA</p>
            <h2>WEAR ZONE<br /><em>ENGINEERING.</em></h2>
          </div>
          <p>We analyze the complete material flow path to match the ideal alloy and liner geometry to your equipment.</p>
        </div>

        <div className="materials-section" style={{ padding: '32px', background: 'var(--navy-2)', marginBottom: '60px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
            {selectionCriteria.map((criterion, i) => (
              <div key={criterion} style={{ padding: '16px', background: 'rgba(243,244,245,0.05)', borderLeft: '2px solid var(--brass)' }}>
                <span style={{ font: '10px "IBM Plex Mono", monospace', color: 'var(--brass)', display: 'block', marginBottom: '6px' }}>0{i + 1} CRITERION</span>
                <strong style={{ color: 'var(--cream)', fontSize: '13px', display: 'block' }}>{criterion}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="section-head">
          <div>
            <p className="eyebrow">TRANSFER & CHUTE COMPONENTS</p>
            <h2>ENGINEERED<br /><em>COMPONENTS.</em></h2>
          </div>
          <p>Explore transfer-point component packages built for extreme impact and sliding wear.</p>
        </div>

        <div className="category-grid stagger-grid">
          {transferProducts.map((prod, i) => (
            <article className="category-card reveal" key={prod.name}>
              <span>0{i + 1}</span>
              <div>
                <small>{prod.tag}</small>
                <h3>{prod.name}</h3>
                <p>{prod.desc}</p>
                <Link href="/contact" style={{ color: 'var(--brass)', fontWeight: 800 }}>
                  Find Your Wear Solution <ArrowUpRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <RFQBand />
    </PageFrame>
  )
}
