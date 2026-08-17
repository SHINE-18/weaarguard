import { Analytics } from '@vercel/analytics/next'
import { Anton, IBM_Plex_Mono, Inter } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { MotionLayer } from '@/components/motion-layer'

const anton = Anton({ subsets: ['latin'], weight: '400', variable: '--font-anton' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const plexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500', '700'], variable: '--font-plex-mono' })

export const metadata: Metadata = {
  title: 'WearGuard™ | Engineered to Outwear',
  description: 'Custom-engineered wear parts for asphalt, cement, mining, and earthmoving operations.',
  generator: 'WearGuard',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f3f4f5',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${anton.variable} ${inter.variable} ${plexMono.variable}`}>
      <body className="antialiased">
        {children}
        <MotionLayer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
