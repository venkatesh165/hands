'use client'

import Image from 'next/image'
import { Button } from '../common/Button'
import { analytics } from '@/lib/analytics'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

export function Hero() {
  const { ref: heroRef } = useIntersectionObserver({
    onIntersect: () => analytics.heroSectionViewed(),
    threshold: 0.5,
  })

  const { ref: downloadRef } = useIntersectionObserver({
    onIntersect: () => analytics.downloadSectionViewed(),
    threshold: 0.5,
  })

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-16">
      {/* Hero Section */}
      <div ref={heroRef} className="text-center">
        <h1 className="mb-6 text-5xl font-bold text-primary-600 md:text-6xl lg:text-7xl">
          Hustlers & Seekers
        </h1>
        <p className="mx-auto mb-12 max-w-2xl text-xl text-gray-600">
          Connect, grow, and succeed with a community that understands your journey
        </p>
      </div>

      {/* Watch Preview */}
      <div className="relative mb-12 h-[300px] w-full max-w-xl md:h-[400px]">
        <Image
          src="/images/watch-preview.png"
          alt="Watch Preview"
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>

      {/* Download Section */}
      <div ref={downloadRef} className="text-center">
        <h2 className="mb-8 text-3xl font-bold text-gray-900">
          Take the Next Step
        </h2>
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="h-[60px] w-[200px]"
            onClick={() => analytics.appDownloadClicked('ios')}
          >
            <Image
              src="/images/app-store-badge.svg"
              alt="Download on the App Store"
              width={200}
              height={60}
              style={{ width: '100%', height: '100%' }}
            />
          </a>
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="h-[60px] w-[200px]"
            onClick={() => analytics.appDownloadClicked('android')}
          >
            <Image
              src="/images/play-store-badge.svg"
              alt="Get it on Google Play"
              width={200}
              height={60}
              style={{ width: '100%', height: '100%' }}
            />
          </a>
        </div>
      </div>
    </div>
  )
} 