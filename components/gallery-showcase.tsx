'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Sparkles, ShieldCheck } from 'lucide-react'
import { galleryShowcase } from '@/lib/site-data'

const categories = ['ALL', 'MIXERS', 'ELEVATORS', 'LINERS', 'EARTHMOVING', 'DRYER']

export function GalleryShowcase() {
  const [activeTab, setActiveTab] = useState('ALL')
  const [selectedImage, setSelectedImage] = useState<typeof galleryShowcase[0] | null>(null)

  const filteredItems = activeTab === 'ALL'
    ? galleryShowcase
    : galleryShowcase.filter((item) => item.category.toUpperCase() === activeTab)

  return (
    <section className="showcase-section section-dark">
      <div className="wrap">
        <div className="section-head" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '36px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <p className="eyebrow brass-text" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Sparkles size={14} /> FIELD PHOTOGRAPHY &amp; 3D CASTINGS
            </p>
            <h2 style={{ font: '400 clamp(36px, 5vw, 64px) "Anton", sans-serif', textTransform: 'uppercase', color: '#ffffff', lineHeight: 1.05, margin: 0 }}>
              PRECISION WEAR<br /><em style={{ color: 'var(--brass)' }}>SHOWCASE.</em>
            </h2>
          </div>
          <p style={{ maxWidth: '380px', color: 'var(--cream-dim)', lineHeight: '1.6', fontSize: '14px', margin: 0 }}>
            Inspect real engineering deliverables — reverse-engineered castings, 3D laser-scanned liner systems, and high-chrome paddle components built for severe abrasion.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="showcase-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={activeTab === cat ? 'showcase-tab active' : 'showcase-tab'}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Display */}
        <div className="showcase-grid">
          {filteredItems.map((item) => (
            <article
              className="showcase-card"
              key={item.id}
              onClick={() => setSelectedImage(item)}
            >
              <div className="showcase-image-wrap">
                <img src={item.image} alt={item.title} className="showcase-img" />
                <span className="showcase-badge">{item.category}</span>
                <span className="showcase-spec-badge">
                  <ShieldCheck size={12} style={{ display: 'inline', marginRight: '4px' }} />
                  {item.spec}
                </span>
              </div>
              <div className="showcase-info">
                <div className="showcase-alloy-tag">{item.alloy}</div>
                <h3>{item.title}</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
                  <span className="showcase-action">
                    Inspect Image Details <ArrowUpRight size={14} />
                  </span>
                  <Link href={`/products/${item.slug}`} className="showcase-action" style={{ color: 'var(--brass)' }} onClick={(e) => e.stopPropagation()}>
                    View Page →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Modal Lightbox for detailed inspection */}
        {selectedImage && (
          <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button className="lightbox-close" onClick={() => setSelectedImage(null)}>✕</button>
              <div className="lightbox-grid">
                <div className="lightbox-img-wrap">
                  <img src={selectedImage.image} alt={selectedImage.title} />
                </div>
                <div className="lightbox-details">
                  <span className="eyebrow brass-text">{selectedImage.category} SYSTEM</span>
                  <h2>{selectedImage.title}</h2>
                  <div className="lightbox-spec-row">
                    <div>
                      <small>MATERIAL ALLOY</small>
                      <strong>{selectedImage.alloy}</strong>
                    </div>
                    <div>
                      <small>MANUFACTURING PROCESS</small>
                      <strong>{selectedImage.spec}</strong>
                    </div>
                  </div>
                  <p style={{ color: 'var(--cream-dim)', fontSize: '14px', lineHeight: '1.6', margin: '20px 0' }}>
                    Engineered to exceed OEM service limits under severe impact, sliding aggregate erosion, and high thermal stress. Precision cast with zero internal voiding.
                  </p>
                  <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                    <Link className="btn btn-brass" href={`/products/${selectedImage.slug}`} style={{ display: 'inline-flex' }}>
                      Explore Full {selectedImage.category} Page <ArrowUpRight size={16} />
                    </Link>
                    <Link className="btn btn-dark" href={`/products/${selectedImage.slug}#product-quote`} style={{ display: 'inline-flex' }}>
                      Request Audit For This Part
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
