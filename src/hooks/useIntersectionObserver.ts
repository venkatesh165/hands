import { useEffect, useRef } from 'react'

interface UseIntersectionObserverProps {
  onIntersect: () => void
  threshold?: number
  root?: Element | null
}

export function useIntersectionObserver({
  onIntersect,
  threshold = 0,
  root = null,
}: UseIntersectionObserverProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onIntersect()
          observer.disconnect()
        }
      },
      { threshold, root }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [onIntersect, threshold, root])

  return { ref }
} 