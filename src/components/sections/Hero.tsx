import Image from 'next/image'
import { Button } from '../common/Button'

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] pt-16">
      <div className="container mx-auto px-4 py-16">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="text-center md:text-left">
            <h1 className="font-heading text-4xl font-bold text-gray-900 md:text-6xl">
              Your Journey <br />
              <span className="text-primary-600">Starts Here</span>
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Download the Hustlers & Seekers app today and take the next step in
              your journey!
            </p>
            <div className="mt-8 flex flex-col items-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
              <Button size="lg" href="https://apps.apple.com">
                <Image 
                  src="/images/app-store-badge.svg" 
                  alt="Download on the App Store"
                  width={135}
                  height={40}
                />
              </Button>
              <Button size="lg" variant="outline" href="https://play.google.com">
                <Image 
                  src="/images/play-store-badge.svg" 
                  alt="Get it on Google Play"
                  width={135}
                  height={40}
                />
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] w-full">
            <Image
              src="/images/app-preview-light.png"
              alt="App Preview"
              fill
              className="object-contain dark:hidden"
              priority
            />
            <Image
              src="/images/app-preview-dark.png"
              alt="App Preview"
              fill
              className="hidden object-contain dark:block"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
} 