import type { Metadata } from 'next'
import './globals.css'
import SmoothScrollProvider from '@/components/SmoothScrollProvider'
import Cursor from '@/components/Cursor'

export const metadata: Metadata = {
  title: 'Averis Academy — Learn Digital Marketing & Earn Online in Nigeria',
  description:
    'Averis Academy is Nigeria\'s #1 digital marketing training program. Learn affiliate marketing, Facebook & TikTok ads, and digital product creation to earn ₦500K–₦1M/month from your phone. Join 70+ members today.',
  keywords: [
    'Averis Academy',
    'digital marketing course Nigeria',
    'make money online Nigeria',
    'affiliate marketing Nigeria',
    'how to make money online in Nigeria',
    'digital marketing Lagos',
    'earn money online Nigeria',
    'online income Nigeria',
    'Facebook ads Nigeria',
    'TikTok ads Nigeria',
    'digital product Nigeria',
    'online business Nigeria',
    'digital skills Nigeria',
    'make money from phone Nigeria',
    'Averis digital marketing',
    'averis academy Nigeria',
    'best online course Nigeria',
    'affiliate marketing course Lagos',
  ],
  metadataBase: new URL('https://www.averishq.com'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Averis Academy — Learn Digital Marketing & Earn Online in Nigeria',
    description:
      'Learn affiliate marketing, paid ads, and digital product creation. 70+ Nigerians already earning ₦500K–₦1M/month. Join Averis Academy today.',
    url: 'https://www.averishq.com',
    siteName: 'Averis Academy',
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Averis Academy — Earn Online in Nigeria',
    description:
      'Nigeria\'s top digital marketing academy. Learn, earn ₦500K–₦1M/month, and build real online income.',
    site: '@averisacademy',
    creator: '@averisacademy',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
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
