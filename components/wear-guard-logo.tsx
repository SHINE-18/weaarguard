import Link from 'next/link'

export function WearGuardLogo({ size = 'medium' }: { size?: 'small' | 'medium' | 'large' }) {
  const isSmall = size === 'small'
  const isLarge = size === 'large'
  const logoHeight = isSmall ? '44px' : isLarge ? '96px' : '60px'

  return (
    <Link
      href="/"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        textDecoration: 'none',
        userSelect: 'none',
      }}
    >
      <img
        src="/wearguard-logo.svg"
        alt="WearGuard™ Engineered Wear Solutions"
        style={{
          height: logoHeight,
          width: 'auto',
          maxWidth: '100%',
          objectFit: 'contain',
          filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.4))',
          transition: 'transform 0.2s ease, filter 0.2s ease',
        }}
      />
    </Link>
  )
}
