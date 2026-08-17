import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SiteHeader, SiteFooter } from '@/components/site-chrome'
import { PartnerFeatureCard } from '@/components/marketing-page'
import { WornVsNewToggle } from '@/components/worn-vs-new-toggle'
import { HeroSplitReveal } from '@/components/hero-split-reveal'
import { categories } from '@/lib/site-data'

export const metadata = {
  title: 'WearGuard™ | Engineered Wear Solutions',
  description: 'We reverse-engineer worn OEM components, match the alloy to how your part actually fails, and deliver in 6–8 weeks — in batches from 1 to 10 units.',
}

export default function HomePage() {
  return (
    <main className="site-shell" id="top">
      <SiteHeader />

      {/* Hero — Split-Reveal Curtain Intro */}
      <HeroSplitReveal />

      {/* Partner Feature Banner (Exact Component from Screenshot) */}
      <PartnerFeatureCard />

      {/* Process Section */}
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

      {/* Products Section */}
      <section className="products" id="products">
        <div className="wrap">
          <div className="products-head">
            <div>
              <div className="mono" style={{ color: 'var(--brass)', marginBottom: '10px' }}>
                Find Your Component
              </div>
              <h2>Engineered wear components for demanding equipment.</h2>
            </div>
            <Link href="/products" className="btn btn-outline-light">
              Explore All Products →
            </Link>
          </div>
          <div className="product-grid">
            {categories.map((c) => (
              <div className="product-card" key={c.slug}>
                <div className="product-img-box">
                  <img src={c.image} alt={c.title} />
                </div>
                <div className="product-body">
                  <h3>{c.title}</h3>
                  <p>{c.copy}</p>
                  <Link className="product-link" href={`/products/${c.slug}`}>
                    Explore →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark Statement / Materials Section */}
      <section className="statement" id="materials">
        <div className="wrap statement-inner">
          <h2>The right alloy for the right wear zone.</h2>
          <div className="statement-right">
            <span className="mono">Engineered Material Selection</span>
            <p>
              Impact, abrasion, erosion, heat, corrosion, and flow conditions each call for a different alloy — from WearGuard&apos;s P400–P500 wear steels to EnduraCast and Wearcast liner grades.
            </p>
            <Link href="/materials" className="btn btn-outline-light" style={{ marginTop: '18px' }}>
              Compare Materials →
            </Link>
          </div>
        </div>
      </section>

      {/* Signature Worn vs. New Visualizer */}
      <section className="custom-section wrap" style={{ paddingBlock: '80px' }}>
        <div className="custom-copy">
          <p className="mono" style={{ color: 'var(--brass-hover)', marginBottom: '12px' }}>
            CUSTOM PARTS / PERFORMANCE COMPARISON
          </p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 46px)', margin: '0 0 16px' }}>
            THE PART THAT<br /><em>KEEPS COMING BACK.</em>
          </h2>
          <p style={{ color: '#4b5563', fontSize: '15px', lineHeight: '1.65' }}>
            Send us the worn part or CAD drawing. We analyze failure patterns and re-engineer the component in a higher-grade WearGuard alloy to extend field service life by 20–60%.
          </p>
          <div style={{ marginTop: '24px' }}>
            <Link className="btn btn-dark" href="/contact">
              Start A Custom Part <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
        <div>
          <WornVsNewToggle />
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="wrap">
          <div className="about-head">
            <div className="mono">About WearGuard</div>
            <h2>
              WearGuard doesn&apos;t just sell wear parts — we <span className="hl">engineer wear solutions.</span>
            </h2>
          </div>
          <div className="about-grid">
            <div className="about-img">
              <img src="/images/wearguard-callout.png" alt="Recent project photo" />
            </div>
            <div className="about-img">
              <img src="/images/wear-liners-3d.png" alt="3D Laser scan photo" />
            </div>
            <div className="about-img">
              <img src="/images/mixer-omponents.webp" alt="Precision casting photo" />
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Section */}
      <section className="conversion" id="quote">
        <div className="wrap">
          <h2>Have a wear problem?</h2>
          <p>Send us your drawing, part, or photo — we&apos;ll tell you what it takes to outlast the original.</p>
          <Link href="/contact" className="btn btn-brass">
            Request a Quote <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
