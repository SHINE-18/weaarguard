import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PageFrame, RFQBand } from '@/components/marketing-page'

export const metadata = {
  title: 'Applications | WearGuard™',
  description: 'Engineered wear protection for Dryer Components, Filters, Mixers, Liners, Bucket Elevators, Drag Conveyors, and Earthmoving Tips.',
}

const applicationItems = [
  {
    number: '01',
    title: 'Dryer Components',
    slug: 'dryer-components',
    tag: 'HIGH HEAT / ABRASION',
    copy: 'Trunnion wheels, girth gears, flights, dam plates, RAP inlets, and discharge assemblies engineered for continuous thermal expansion and abrasive aggregate tumbling.',
    image: '/images/dryer-combo.webp',
  },
  {
    number: '02',
    title: 'Filter Systems',
    slug: 'filter-components',
    tag: 'HEAT / CORROSION',
    copy: 'Nomex and meta-aramid bags, cages, snap rings, housings, impellers, and plenum plates designed for particulate capture in harsh thermal and corrosive gas streams.',
    image: '/images/filter-combo.webp',
  },
  {
    number: '03',
    title: 'Mixer Liners & Arms',
    slug: 'mixer-components',
    tag: 'IMPACT / SLURRY ABRASION',
    copy: 'Ni-Hard and high-chrome liners, paddles, tips, smart arm protection, shafts, and covers built to resist intense impact and high-speed abrasive slurry mixing.',
    image: '/images/mixer-omponents.webp',
  },
  {
    number: '04',
    title: 'Chute & Hopper Liners',
    slug: 'chute-hopper-liners',
    tag: 'GOUGING / SLIDING ABRASION',
    copy: 'Impact plates, rock-box liners, skirt systems, bolt-in liner packages, and transfer-point protection for high-tonnage chutes, hoppers, and bins.',
    image: '/images/liners-in-control-the-flow.webp',
  },
  {
    number: '05',
    title: 'Bucket Elevators',
    slug: 'elevators-conveyors',
    tag: 'CONTINUOUS HEAVY LIFT',
    copy: 'Reinforced elevator buckets, wear-resistant lips, continuous chain components, sprockets, and bottom boot protection designed for non-stop material vertical elevation.',
    image: '/images/elevator-combo.webp',
  },
  {
    number: '06',
    title: 'Drag Conveyors',
    slug: 'elevators-conveyors',
    tag: 'HIGH-FRICTION CONTINUOUS FLOW',
    copy: 'Heavy-duty drag flights, bottom wear liners, side skirts, chain rails, and drive sprockets engineered to prevent premature chain snap and trough burn-through.',
    image: '/images/drive-sprockets.webp',
  },
  {
    number: '07',
    title: 'Earthmoving Teeth & Tips',
    slug: 'earthmoving-bucket-tips',
    tag: 'SHOCK / GROUND ENGAGING WEAR',
    copy: 'Application-matched bucket teeth, adapters, lip shrouds, and heel shrouds that maintain penetration sharpness and protect structural buckets in rock and ore.',
    image: '/images/earth-moving-bucket-tips-1.webp',
  },
]

export default function ApplicationsPage() {
  return (
    <PageFrame
      eyebrow="APPLICATIONS / WEAR SYSTEMS"
      title={<>PROTECT EVERY<br /><em>WEAR POINT.</em></>}
      intro="Engineered protection for every critical stage of material processing — inspect real product gallery imagery, specifications, and request direct audits."
    >
      <section className="category-section wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow brass-text">SYSTEM CATEGORIES</p>
            <h2>PARTS THAT<br /><em>PERFORM.</em></h2>
          </div>
          <p>Explore engineered replacement components built around the exact impact, heat, and sliding abrasion forces present in your equipment.</p>
        </div>

        <div className="category-grid stagger-grid">
          {applicationItems.map((item) => (
            <article className="category-card reveal" key={item.title}>
              <span>{item.number}</span>
              <div>
                <small>{item.tag}</small>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <Link href={`/products/${item.slug}`} style={{ color: 'var(--brass)', fontWeight: 800 }}>
                  Explore Image Gallery & Specs <ArrowUpRight size={16} />
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
