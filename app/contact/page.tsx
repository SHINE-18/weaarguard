import { Mail, Phone, Globe } from 'lucide-react'
import { PageFrame } from '@/components/marketing-page'
import { RFQForm } from '@/components/rfq-form'

export const metadata = {
  title: 'Contact & Request a Quote | WearGuard™',
  description: 'Have a wear problem? Let us engineer the solution. Submit your drawing, component specifications, or part enquiry.',
}

export default function ContactPage() {
  return (
    <PageFrame
      eyebrow="CONTACT / REQUEST A QUOTE"
      title={
        <>
          HAVE A WEAR PROBLEM?<br />
          <em>LET&apos;S ENGINEER THE SOLUTION.</em>
        </>
      }
      intro="Tell us about your wear failure, current material, or send a CAD drawing. Our application engineers will analyze your requirement and provide a quote within 24 hours."
    >
      <section className="quote-section">
        <div className="wrap quote-grid">
          <div>
            <div className="mono" style={{ color: 'var(--brass)', marginBottom: '10px' }}>
              Direct Engineering Contact
            </div>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', color: 'var(--cream)', margin: '0 0 16px' }}>
              WEARGUARD<br />
              <em style={{ color: 'var(--brass)' }}>ENGINEERING DIRECT.</em>
            </h2>
            <p style={{ color: 'var(--cream-dim)', lineHeight: '1.6', fontSize: '15px', marginBottom: '24px' }}>
              Free wear audits, material selection support, and custom component quotation available worldwide.
            </p>

            <div className="contact-lines">
              <a href="mailto:contact@wearguard.com">
                <Mail size={16} /> contact@wearguard.com
              </a>
              <a href="tel:+61437433890">
                <Phone size={16} /> +61 437 433 890
              </a>
              <a href="https://ryetek.com.au" target="_blank" rel="noopener noreferrer">
                <Globe size={16} /> ryetek.com.au
              </a>
            </div>

            <div style={{ marginTop: '36px', padding: '20px', background: 'var(--navy)', borderLeft: '3px solid var(--brass)' }}>
              <strong style={{ color: 'var(--cream)', display: 'block', fontSize: '13px', marginBottom: '4px' }}>
                GLOBAL DELIVERY GUARANTEE
              </strong>
              <span style={{ color: 'var(--cream-dim)', fontSize: '12px' }}>
                6–8 Weeks from CAD quote approval to site delivery worldwide.
              </span>
            </div>
          </div>

          <div className="form-wrap">
            <RFQForm />
          </div>
        </div>
      </section>
    </PageFrame>
  )
}
