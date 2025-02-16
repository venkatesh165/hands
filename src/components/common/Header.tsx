'use client'

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <h1 className="font-heading text-2xl font-bold text-primary-600">
            Hustlers & Seekers
          </h1>
        </div>
      </div>
    </header>
  )
} 