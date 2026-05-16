import type { Metadata } from 'next'
import './globals.css'
import SmoothScrollProvider from '@/components/SmoothScrollProvider'
import Cursor from '@/components/Cursor'

export const metadata: Metadata = {
  title: 'Averis Academy — Stop Trading Time. Start Building Wealth.',
  description:
    "Nigeria's premier wealth-building platform. Learn to earn ₦500K–₦1M/month through digital marketing, then invest into ₦10M–₦50M+ portfolios.",
  keywords: ['Averis Academy', 'digital marketing Nigeria', 'make money online Nigeria', 'affiliate marketing Nigeria', 'wealth building'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,300..900;1,14..32,300..900&family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-white text-slate-900 overflow-x-hidden antialiased">
        <SmoothScrollProvider>
          <Cursor />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
