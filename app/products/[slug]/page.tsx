import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowUpRight, ShieldCheck, Sparkles, Truck } from 'lucide-react'
import { PageFrame, RFQBand } from '@/components/marketing-page'
import { RFQForm } from '@/components/rfq-form'
import { categories, getCategory } from '@/lib/site-data'

export function generateStaticParams() {
  return categories.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = getCategory(slug)
  return {
    title: category ? `${category.title} | WearGuard™` : 'Products | WearGuard™',
    description: category?.copy,
  }
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = getCategory(slug)
  if (!category) notFound()

  return (
    <PageFrame
      eyebrow={`PRODUCT SYSTEM / ${category.number}`}
      title={
        <>
          {category.title}<br />
          <em>ENGINEERED TO OUTWEAR.</em>
        </>
      }
      intro={category.copy}
    >
      {/* Operating Environment Banner Card */}
      <section className="wrap" style={{ marginBlock: '40px' }}>
        <div
          style={{
            position: 'relative',
            borderRadius: '4px',
            overflow: 'hidden',
            background: 'var(--navy-2)',
            border: '1px solid rgba(243,244,245,0.15)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
          }}
        >
          <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
            <img
              src={category.heroBanner}
              alt={category.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, transparent 0%, rgba(31,44,54,0.95) 100%)',
              }}
            />
          </div>
          <div style={{ padding: '32px', background: 'var(--navy-2)', color: 'var(--cream)' }}>
            <span
              className="mono"
              style={{ color: 'var(--brass)', display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}
            >
              <Sparkles size={14} /> OPERATING ENVIRONMENT
            </span>
            <p style={{ fontSize: '16px', lineHeight: '1.65', color: 'var(--cream-dim)', marginBottom: '20px', maxWidth: '65ch' }}>
              {category.operatingEnv}
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {category.recommendedAlloys.map((alloy) => (
                <span
                  key={alloy}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 14px',
                    background: 'var(--navy)',
                    border: '1px solid var(--brass)',
                    color: 'var(--cream)',
                    font: '700 11px "IBM Plex Mono", monospace',
                    textTransform: 'uppercase',
                  }}
                >
                  <ShieldCheck size={13} style={{ color: 'var(--brass)' }} /> {alloy}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Component Gallery Grid */}
      <section className="products" style={{ background: 'var(--navy)', borderTop: '1px solid rgba(243,244,245,0.1)' }}>
        <div className="wrap">
          <div className="products-head">
            <div>
              <div className="mono" style={{ color: 'var(--brass)', marginBottom: '10px' }}>
                Field Castings &amp; Deliverables
              </div>
              <h2>
                Explore the<br />
                <em>{category.title.toUpperCase()} LINE.</em>
              </h2>
            </div>
            <p style={{ color: 'var(--cream-dim)', maxWidth: '380px', fontSize: '14px' }}>
              Inspect real engineering deliverables for this product line — cast, machined, and heat-treated to outwear OEM standards.
            </p>
          </div>

          <div className="showcase-grid">
            {category.gallery.map((item, idx) => (
              <div className="showcase-card" key={item.title}>
                <div className="showcase-image-wrap">
                  <img src={item.image} alt={item.title} className="showcase-img" />
                  <div className="showcase-overlay-gradient" />
                  <span className="showcase-badge">{item.tag}</span>
                  <span className="showcase-spec-badge">{item.spec}</span>
                </div>
                <div className="showcase-info">
                  <div className="showcase-alloy-tag">CASTING 0{idx + 1}</div>
                  <h3>{item.title}</h3>
                  <a href="#product-quote" className="showcase-action">
                    Request Quote For This Item <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Specifications */}
      <section className="value-strip" style={{ background: 'var(--navy-2)' }}>
        <div className="wrap">
          <div className="value-head">
            <div className="mono">Technical Performance Data</div>
            <h2>System Specifications</h2>
            <p style={{ color: 'var(--cream-dim)', marginTop: '8px', fontSize: '14px' }}>
              Every casting is supplied with material certificates, hardness test records, and 3D fitment guarantees.
            </p>
          </div>

          <div
            style={{
              background: 'var(--navy)',
              border: '1px solid rgba(243,244,245,0.15)',
              padding: '24px',
              borderRadius: '4px',
            }}
          >
            {category.specs.map((spec, i) => (
              <div
                key={spec.label}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '45px 1.5fr 2fr',
                  gap: '16px',
                  alignItems: 'center',
                  padding: '16px 0',
                  borderBottom: i < category.specs.length - 1 ? '1px solid rgba(243,244,245,0.1)' : 'none',
                }}
              >
                <span className="mono" style={{ color: 'var(--brass)' }}>
                  0{i + 1}
                </span>
                <strong style={{ color: 'var(--cream)', font: '400 20px "Anton", sans-serif', textTransform: 'uppercase' }}>
                  {spec.label}
                </strong>
                <span style={{ color: 'var(--brass)', font: '700 13px "IBM Plex Mono", monospace' }}>
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded RFQ Form */}
      <section id="product-quote" className="quote-section">
        <div className="wrap quote-grid">
          <div>
            <div className="mono" style={{ color: 'var(--brass)', marginBottom: '10px' }}>
              Direct Audit Request
            </div>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', color: 'var(--cream)', margin: '0 0 16px' }}>
              REQUEST A QUOTE FOR<br />
              <em style={{ color: 'var(--brass)' }}>{category.title.toUpperCase()}.</em>
            </h2>
            <p style={{ color: 'var(--cream-dim)', lineHeight: '1.6', fontSize: '15px', marginBottom: '24px' }}>
              Tell us about your wear problem or send us worn part dimensions. Our engineers will respond with a material recommendation and quote within 24 hours.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '24px' }}>
              <span
                style={{
                  font: '700 11px "IBM Plex Mono", monospace',
                  padding: '8px 12px',
                  border: '1px solid rgba(243,244,245,0.2)',
                  color: 'var(--cream)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <ShieldCheck size={14} style={{ color: 'var(--brass)' }} /> 100% Fitment Guarantee
              </span>
              <span
                style={{
                  font: '700 11px "IBM Plex Mono", monospace',
                  padding: '8px 12px',
                  border: '1px solid rgba(243,244,245,0.2)',
                  color: 'var(--cream)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <Truck size={14} style={{ color: 'var(--brass)' }} /> 6–8 Week Global Delivery
              </span>
            </div>
          </div>
          <div className="form-wrap">
            <RFQForm initialSystem={category.title} />
          </div>
        </div>
      </section>

      <RFQBand />
    </PageFrame>
  )
}
