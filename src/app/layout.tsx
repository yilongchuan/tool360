import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import GoogleAnalytics from './google-analytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Developer Tools Hub - Online Tools for Developers',
  description: 'A comprehensive collection of online developer tools including JSON formatter, MD5 decrypt, Regex tester, SQL formatter, and more essential utilities for programmers.',
  metadataBase: new URL('https://www.tool360.top'),
  verification: {
    google: 'G-M2FSGBBXX7',
  },
  keywords: ['developer tools', 'online tools', 'JSON formatter', 'MD5 decrypt', 'regex tester', 'SQL formatter', 'programming tools', 'web developer utilities'],
  authors: [{ name: 'Developer Tools Hub Team' }],
  openGraph: {
    title: 'Developer Tools Hub - Online Tools for Developers',
    description: 'A comprehensive collection of online developer tools including JSON formatter, MD5 decrypt, Regex tester, SQL formatter, and more essential utilities for programmers.',
    url: 'https://www.tool360.top',
    siteName: 'Developer Tools Hub',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="G-M2FSGBBXX7" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
} 