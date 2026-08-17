'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { ArrowUpRight, Check, Upload } from 'lucide-react'
import { industries } from '@/lib/site-data'

interface RFQFormProps {
  initialSystem?: string
  initialComponent?: string
}

function RFQFormFields({ initialSystem, initialComponent }: RFQFormProps) {
  const [sent, setSent] = useState(false)
  const [system, setSystem] = useState(initialSystem || '')
  const [component, setComponent] = useState(initialComponent || '')
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!initialSystem && searchParams?.get('system')) {
      setSystem(searchParams.get('system') || '')
    }
    if (!initialComponent && searchParams?.get('component')) {
      setComponent(searchParams.get('component') || '')
    }
  }, [searchParams, initialSystem, initialComponent])

  return sent ? (
    <div className="success-state">
      <Check size={28} />
      <h3>Quote Request Received.</h3>
      <p>Our application engineering team will review your specifications and be in touch within 24 hours.</p>
      <button className="text-link" onClick={() => setSent(false)}>Submit another requirement</button>
    </div>
  ) : (
    <form onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
      <div className="form-row">
        <label>Name *<input required name="name" placeholder="Your full name" /></label>
        <label>Company *<input required name="company" placeholder="Company / Organization" /></label>
      </div>

      <div className="form-row">
        <label>Email *<input required type="email" name="email" placeholder="work@company.com" /></label>
        <label>Phone *<input required name="phone" placeholder="+1 (555) 000-0000" /></label>
      </div>

      <div className="form-row">
        <label>Country *<input required name="country" placeholder="e.g. Australia, USA, Chile" /></label>
        <label>Industry *
          <select defaultValue="" name="industry" required>
            <option value="" disabled>Select Industry</option>
            {industries.map(([name]) => (
              <option key={name} value={name}>{name}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="form-row">
        <label>Equipment / System
          <input
            name="equipment"
            value={system}
            onChange={(e) => setSystem(e.target.value)}
            placeholder="e.g. Batch Mixer, RAP Dryer Drum"
          />
        </label>
        <label>Component Required
          <input
            name="component"
            value={component}
            onChange={(e) => setComponent(e.target.value)}
            placeholder="e.g. Paddle Arms, Liner Plates"
          />
        </label>
      </div>

      <div className="form-row">
        <label>Current Material (if known)<input name="currentMaterial" placeholder="e.g. Carbon Steel, Hardox 400" /></label>
        <label>Wear Problem<input name="wearProblem" placeholder="e.g. Rapid Abrasion, High Drop Impact" /></label>
      </div>

      <div className="form-row">
        <label>Quantity<input name="quantity" placeholder="e.g. 4 sets or 12 units" /></label>
        <label>Required Delivery Date<input type="date" name="deliveryDate" /></label>
      </div>

      <label>Detailed Message & Specifications
        <textarea required name="message" rows={4} placeholder="Describe the application, operating temperature, material velocity, or failure pattern..." />
      </label>

      <label>Upload Drawing / Part Image / PDF
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px', border: '1px dashed rgba(243,244,245,0.3)', cursor: 'pointer' }}>
          <Upload size={18} style={{ color: 'var(--brass)' }} />
          <input type="file" name="attachment" style={{ border: 0, padding: 0 }} />
        </div>
      </label>
      <p className="form-disclaimer">Supported formats: PDF, STEP, DXF, PNG, JPG (max 25MB).</p>

      <button className="button button-brass" type="submit" style={{ marginTop: '12px', width: '100%', justifyContent: 'center' }}>
        Request a Quote <ArrowUpRight size={17} />
      </button>
    </form>
  )
}

export function RFQForm(props: RFQFormProps) {
  return (
    <Suspense fallback={<div style={{ padding: '20px', color: '#b5bec1' }}>Loading form...</div>}>
      <RFQFormFields {...props} />
    </Suspense>
  )
}
