import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PageFrame, FeatureStrip, Process, RFQBand } from '@/components/marketing-page'

export const metadata = {
  title: 'Custom Parts | WearGuard™',
  description: 'Reverse engineering, tailored alloys, low-volume flexibility, and rapid delivery for OEM and obsolete parts.',
}

export default function CustomPartsPage() {
  return (
    <PageFrame
      eyebrow="CUSTOM PARTS / PERFORMANCE ENGINEERING"
      title={<>ANY BRAND.<br />ANY ERA.<br /><em>NO EXCUSES.</em></>}
      intro="Send us the worn part, a drawing, or a failure problem. We reverse-engineer and cast improved replacement parts even for low-volume or discontinued OEM machinery."
    >
      <FeatureStrip />

      <section className="split-section wrap reveal-section">
        <div className="split-image">
          <img src="/wearguard.png" alt="Worn part reverse engineering and metallurgical upgrade" />
          <span className="image-label">REVERSE ENGINEERING / CAD SCAN</span>
        </div>
        <div className="split-copy">
          <p className="eyebrow">MONOPOLY FREEDOM / TAILORED SOLUTIONS</p>
          <h2>STOP PAYING OEM<br /><em>MONOPOLY PRICES.</em></h2>
          <p>
            OEM manufacturers design parts for generic operating conditions and mark up replacement prices heavily. WearGuard reverse-engineers your components, identifies exact failure patterns (cracking, wash-out, severe abrasion), and upgrades the alloy spec to suit your specific tonnage targets.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: '24px 0' }}>
            <div style={{ font: '13px "IBM Plex Mono", monospace', color: 'var(--navy)' }}>✓ CAD & 3D Scanning for worn, cracked, or obsolete parts</div>
            <div style={{ font: '13px "IBM Plex Mono", monospace', color: 'var(--navy)' }}>✓ Small-batch production starting from as few as 1 to 10 units</div>
            <div style={{ font: '13px "IBM Plex Mono", monospace', color: 'var(--navy)' }}>✓ Metallurgical upgrade: 20–60% higher wear resistance</div>
          </div>
          <Link className="button button-dark" href="/contact">
            Start a custom part audit <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      <Process />
      <RFQBand />
    </PageFrame>
  )
}
