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
    <section className="relative min-h-screen bg-white">
      <div className="container mx-auto px-4 py-24">
        {/* Main Content */}
        <div ref={heroRef} className="text-center">
          <h1 className="font-heading text-6xl font-bold text-primary-600 md:text-7xl lg:text-8xl">
            Hustlers & Seekers
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-gray-600 md:text-2xl">
            Connect, grow, and succeed with a community that understands your journey
          </p>
        </div>

        {/* Watch Image */}
        <div className="relative mx-auto mt-16 aspect-square w-full max-w-2xl">
          <div className="absolute inset-0 -bottom-10 blur-3xl bg-primary-100/30 rounded-full"></div>
          <div className="relative z-10 h-full w-full">
            <Image
              src="/images/watch-preview.png"
              alt="Watch Preview"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>

        {/* Download Section */}
        <div ref={downloadRef} className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-heading">
            Take the Next Step
          </h2>
          <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-6 md:space-y-0">
            <Button 
              size="lg" 
              href="https://apps.apple.com" 
              onClick={handleAppStoreClick}
              className="w-[200px] h-[64px] shadow-lg hover:shadow-xl transition-all"
            >
              <Image 
                src="/images/app-store-badge.svg" 
                alt="Download on the App Store"
                width={180}
                height={60}
                className="w-full h-full object-contain"
              />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              href="https://play.google.com" 
              onClick={handlePlayStoreClick}
              className="w-[200px] h-[64px] shadow-lg hover:shadow-xl transition-all"
            >
              <Image 
                src="/images/play-store-badge.svg" 
                alt="Get it on Google Play"
                width={180}
                height={60}
                className="w-full h-full object-contain"
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 