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

  const handleAppStoreClick = () => {
    analytics.appDownloadClicked('ios')
  }

  const handlePlayStoreClick = () => {
    analytics.appDownloadClicked('android')
  }

  return (
    <section className="relative min-h-[calc(100vh-4rem)] bg-white pt-16">
      <div className="container mx-auto px-4 py-16">
        {/* Main Content */}
        <div ref={heroRef} className="text-center">
          <h1 className="font-heading text-6xl font-bold text-primary-600 md:text-7xl">
            Hustlers & Seekers
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-gray-600">
            Connect, grow, and succeed with a community that understands your journey
          </p>
        </div>

        {/* Watch Image with Shadow */}
        <div className="relative mx-auto mt-16 h-[500px] max-w-3xl">
          <div className="absolute inset-0 -bottom-4 blur-xl bg-primary-100/50 rounded-full"></div>
          <Image
            src="/images/watch-preview.png"
            alt="Watch Preview"
            fill
            className="object-contain relative z-10"
            priority
          />
        </div>

        {/* Download Section */}
        <div ref={downloadRef} className="mt-20 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">
            Take the Next Step
          </h2>
          <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-6 md:space-y-0">
            <Button 
              size="lg" 
              href="https://apps.apple.com" 
              onClick={handleAppStoreClick}
              className="shadow-lg hover:shadow-xl transition-shadow"
            >
              <Image 
                src="/images/app-store-badge.svg" 
                alt="Download on the App Store"
                width={160}
                height={48}
              />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              href="https://play.google.com" 
              onClick={handlePlayStoreClick}
              className="shadow-lg hover:shadow-xl transition-shadow"
            >
              <Image 
                src="/images/play-store-badge.svg" 
                alt="Get it on Google Play"
                width={160}
                height={48}
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 