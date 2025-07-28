import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sushant Tuladhar - Flutter Developer',
  description: 'Passionate Flutter Developer with hands-on experience in building cross-platform mobile applications. Specialized in Firebase, Provider state management, and responsive UI development.',
  keywords: 'Flutter Developer, Mobile App Development, Firebase, Dart, Cross-platform Development, Nepal',
  authors: [{ name: 'Sushant Tuladhar' }],
  creator: 'Sushant Tuladhar',
  icons: {
    icon: '/s.png',
    shortcut: '/s.png',
    apple: '/s.png',
  },
  openGraph: {
    title: 'Sushant Tuladhar - Flutter Developer',
    description: 'Passionate Flutter Developer with hands-on experience in building cross-platform mobile applications.',
    url: 'https://sushant-tuladhar.vercel.app',
    siteName: 'Sushant Tuladhar Portfolio',
    images: [
      {
        url: '/s.png',
        width: 1200,
        height: 630,
        alt: 'Sushant Tuladhar - Flutter Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sushant Tuladhar - Flutter Developer',
    description: 'Passionate Flutter Developer with hands-on experience in building cross-platform mobile applications.',
    images: ['/s.png'],
  },
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
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-dark-200 text-white antialiased`}>
        {children}
      </body>
    </html>
  )
} 