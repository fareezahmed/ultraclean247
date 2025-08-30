'use client'

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

import { useEffect } from 'react'

const gtag = typeof window !== 'undefined' ? window.gtag : undefined;

interface PerformanceMetrics {
  FCP: number // First Contentful Paint
  LCP: number // Largest Contentful Paint
  FID: number // First Input Delay
  CLS: number // Cumulative Layout Shift
  TTFB: number // Time to First Byte
}

export function PerformanceMonitor() {
  useEffect(() => {
    // Track Core Web Vitals
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const fcp = entries[entries.length - 1]
        console.log('FCP:', fcp.startTime)
        
        // Send to analytics
        if (typeof gtag !== 'undefined') {
          gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'FCP',
            value: Math.round(fcp.startTime),
          })
        }
      })
      
      try {
        fcpObserver.observe({ entryTypes: ['paint'] })
      } catch (e) {
        console.warn('FCP observer failed:', e)
      }

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lcp = entries[entries.length - 1]
        console.log('LCP:', lcp.startTime)
        
        if (typeof gtag !== 'undefined') {
          gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'LCP',
            value: Math.round(lcp.startTime),
          })
        }
      })
      
      try {
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
      } catch (e) {
        console.warn('LCP observer failed:', e)
      }

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          const fidEntry = entry as PerformanceEventTiming;
          console.log('FID:', fidEntry.processingStart - fidEntry.startTime)
          
          if (typeof gtag !== 'undefined') {
            gtag('event', 'web_vitals', {
              event_category: 'Web Vitals',
              event_label: 'FID',
              value: Math.round(fidEntry.processingStart - fidEntry.startTime),
            })
          }
        })
      })
      
      try {
        fidObserver.observe({ entryTypes: ['first-input'] })
      } catch (e) {
        console.warn('FID observer failed:', e)
      }

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0
        const entries = list.getEntries()
        
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value
          }
        })
        
        console.log('CLS:', clsValue)
        
        if (typeof gtag !== 'undefined') {
          gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'CLS',
            value: Math.round(clsValue * 1000) / 1000,
          })
        }
      })
      
      try {
        clsObserver.observe({ entryTypes: ['layout-shift'] })
      } catch (e) {
        console.warn('CLS observer failed:', e)
      }

      // Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (navigationEntry) {
        const ttfb = navigationEntry.responseStart - navigationEntry.requestStart
        console.log('TTFB:', ttfb)
        
        if (typeof gtag !== 'undefined') {
          gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'TTFB',
            value: Math.round(ttfb),
          })
        }
      }

      // Cleanup observers
      return () => {
        fcpObserver.disconnect()
        lcpObserver.disconnect()
        fidObserver.disconnect()
        clsObserver.disconnect()
      }
    }
  }, [])

  return null // This component doesn't render anything
}
