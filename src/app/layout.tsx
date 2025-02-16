import React from 'react'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Providers } from './providers'
import { ThemeProvider } from '@/components/ThemeProvider'
import { PerformanceMonitor } from '@/components/PerformanceMonitor'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import './globals.css'

// Load Inter font with CSS variable support
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

// Load Poppins font with CSS variable support for weights 600 and 700
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://hustlersandseekers.co'),
  title: 'Hustlers & Seekers - Connect, grow, and succeed',
  description: 'Connect, grow, and succeed with a community that understands your journey',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hustlersandseekers.co',
    title: 'Hustlers & Seekers - Connect, grow, and succeed',
    description: 'Connect, grow, and succeed with a community that understands your journey',
    siteName: 'Hustlers & Seekers',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ErrorBoundary>
          <ThemeProvider>
            <Providers>
              <PerformanceMonitor />
              {children}
            </Providers>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
