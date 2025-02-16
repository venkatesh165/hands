export function capturePerformanceMetrics() {
  if (typeof window === 'undefined') return

  const metrics: Record<string, number> = {}

  // Capture Core Web Vitals
  new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries()
    entries.forEach((entry) => {
      if (entry.name === 'LCP') {
        metrics.lcp = entry.startTime
      }
    })
  }).observe({ entryTypes: ['largest-contentful-paint'] })

  new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries()
    entries.forEach((entry) => {
      if (entry.name === 'FID') {
        const fidEntry = entry as PerformanceEventTiming
        metrics.fid = fidEntry.processingStart - fidEntry.startTime
      }
    })
  }).observe({ entryTypes: ['first-input'] })

  // Capture Navigation Timing
  window.addEventListener('load', () => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    metrics.ttfb = navigation.responseStart - navigation.requestStart
    metrics.domLoad = navigation.domContentLoadedEventEnd - navigation.requestStart
    metrics.fullLoad = navigation.loadEventEnd - navigation.requestStart

    // Send metrics to analytics
    fetch('/api/metrics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(metrics),
    })
  })
} 