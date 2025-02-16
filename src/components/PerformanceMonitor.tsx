'use client'

import { useEffect } from 'react'
import { analytics } from '@/lib/analytics'

// Define types for the metric and performance entry
interface WebVitalMetric {
  name: string
  value: number
  rating: string
}

interface PerformanceEventTimingExtended extends PerformanceEventTiming {
  processingStart: number
}

export function PerformanceMonitor() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Report Web Vitals
    const reportWebVitals = (metric: WebVitalMetric) => {
      analytics.track({
        name: 'web_vital',
        properties: {
          name: metric.name,
          value: metric.value,
          rating: metric.rating
        }
      })
    }

    // Observer for Largest Contentful Paint
    new PerformanceObserver((entryList: PerformanceObserverEntryList) => {
      const entries = entryList.getEntries()
      const entry = entries[entries.length - 1] as PerformanceEntry
      reportWebVitals({
        name: 'LCP',
        value: entry.startTime,
        rating: entry.startTime < 2500 ? 'good' : 'poor'
      })
    }).observe({ entryTypes: ['largest-contentful-paint'] })

    // Observer for First Input Delay
    new PerformanceObserver((entryList: PerformanceObserverEntryList) => {
      const entries = entryList.getEntries()
      entries.forEach((entry) => {
        const fidEntry = entry as PerformanceEventTimingExtended
        reportWebVitals({
          name: 'FID',
          value: fidEntry.processingStart - fidEntry.startTime,
          rating: fidEntry.processingStart - fidEntry.startTime < 100 ? 'good' : 'poor'
        })
      })
    }).observe({ entryTypes: ['first-input'] })
  }, [])

  return null
}