import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HeClinic for Men - Premier Men\'s Health Clinic in Bangkok',
  description: 'HeClinic for Men offers innovative, non-surgical solutions for men\'s health, enhancement, and confidence in Bangkok, Thailand. Expert doctors, discreet care, premium location in Thonglor.',
  keywords: 'mens health, bangkok clinic, penile enhancement, hair transplant, erectile dysfunction, vasectomy, thailand medical tourism',
  authors: [{ name: 'HeClinic for Men' }],
  creator: 'HeClinic for Men',
  publisher: 'HeClinic for Men',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://heclinic.co.th',
    title: 'HeClinic for Men - Premier Men\'s Health Clinic in Bangkok',
    description: 'Expert men\'s health care in Bangkok. Penile enhancement, hair restoration, erectile dysfunction treatment and more.',
    siteName: 'HeClinic for Men',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HeClinic for Men - Premier Men\'s Health Clinic in Bangkok',
    description: 'Expert men\'s health care in Bangkok. Penile enhancement, hair restoration, erectile dysfunction treatment and more.',
    creator: '@heclinicformen',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  )
}