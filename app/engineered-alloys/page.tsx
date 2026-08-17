import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PageFrame, RFQBand } from '@/components/marketing-page'
import { alloys } from '@/lib/site-data'

export const metadata = {
  title: 'Engineered Alloys | WearGuard™',
  description: 'Custom material technologies matched to impact, sliding abrasion, high temperature, and corrosion conditions.',
}

export default function EngineeredAlloysPage() {
  return (
    <PageFrame
      eyebrow="MATERIAL TECHNOLOGIES / ENGINEERED ALLOYS"
      title={<>RIGHT ALLOY.<br /><em>RIGHT RESULT.</em></>}
      intro="Technical alloy solutions matched to impact, sliding abrasion, high temperature, and erosion forces. Engineered to outwear standard OEM specs by 20–60%."
    >
      <section className="alloy-cards wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">METALLURGICAL PERFORMANCE</p>
            <h2>PERFORMANCE<br /><em>GRADES.</em></h2>
          </div>
          <p>Technical values shown reflect field-proven BHN and HRC hardness ratings tailored for specific abrasive and impact profiles.</p>
        </div>
        <div className="alloy-grid stagger-grid">
          {alloys.map((alloy, i) => (
            <article className="alloy-card reveal" key={alloy.name}>
              <span>0{i + 1}</span>
              <h3>{alloy.name}</h3>
              <strong>{alloy.hardness}</strong>
              <p>{alloy.use}</p>
              <Link href="/contact">
                Discuss this grade <ArrowUpRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="selector-section section-dark">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow brass-text">COMPARATIVE MATRIX</p>
              <h2>MATCH YOUR<br /><em>WEAR PROFILE.</em></h2>
            </div>
            <p>Custom-built wear materials rated for severe abrasion, rock impact, fine erosion, and thermal cycling.</p>
          </div>
          <div className="comparison-table">
            {alloys.map((alloy, i) => (
              <div className="comparison-row" key={alloy.name}>
                <span>0{i + 1}</span>
                <strong>{alloy.name}</strong>
                <b>{alloy.hardness}</b>
                <p>{alloy.use}</p>
                <ArrowUpRight size={17} />
              </div>
            ))}
          </div>
          <Link className="button button-brass" href="/contact">
            Talk to a metallurgical engineer <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
      <RFQBand />
    </PageFrame>
  )
}
