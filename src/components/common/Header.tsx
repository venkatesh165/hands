'use client'

import { useAuth } from '@/hooks/useAuth'
import { Button } from './Button'

export function Header() {
  const { isSignedIn, signOut } = useAuth()

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <h1 className="font-heading text-2xl font-bold text-primary-600">
            Hustlers & Seekers
          </h1>
        </div>
        <nav className="hidden md:block">
          {isSignedIn ? (
            <Button onClick={signOut} variant="ghost">
              Sign Out
            </Button>
          ) : (
            <Button href="/sign-in">Sign In</Button>
          )}
        </nav>
      </div>
    </header>
  )
} 