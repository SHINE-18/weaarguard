'use client'

import { useState } from 'react'

export function WornVsNewToggle() {
  const [showNew, setShowNew] = useState(false)

  return (
    <button
      className="custom-visual"
      onClick={() => setShowNew(!showNew)}
      aria-label="Toggle between worn OEM part and new precision casting"
      type="button"
      style={{ width: '100%', cursor: 'pointer', textAlign: 'left', background: 'transparent', border: 0, padding: 0 }}
    >
      <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '4px', background: 'var(--navy-2)', border: '1px solid rgba(243,244,245,0.15)' }}>
        <img
          src={showNew ? '/images/wearguard-parts.png' : '/images/wearguard.png'}
          alt={showNew ? 'New precision cast wear part upgrade' : 'Worn OEM part before engineering'}
          style={{ width: '100%', height: 'auto', display: 'block', transition: 'opacity 0.3s ease, transform 0.3s ease' }}
        />
        <div style={{ padding: '16px 20px', background: 'var(--navy-2)', borderTop: '1px solid rgba(243,244,245,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
          <span style={{ font: '700 12px "IBM Plex Mono", monospace', color: showNew ? 'var(--brass)' : '#b5bec1', letterSpacing: '0.08em' }}>
            {showNew ? 'NEW CASTING / HIGH-CHROME ALLOY UPGRADE' : 'WORN OEM PART / BEFORE ANALYSIS'}
          </span>
          <span style={{ font: '700 11px "IBM Plex Mono", monospace', color: 'var(--brass)', background: 'rgba(201,135,59,0.15)', padding: '6px 12px', borderRadius: '2px' }}>
            CLICK TO TOGGLE ↔
          </span>
        </div>
      </div>
    </button>
  )
}
