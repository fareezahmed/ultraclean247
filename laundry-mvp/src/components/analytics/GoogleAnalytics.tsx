'use client'

import Script from 'next/script'

// Declare gtag function type
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

const gtag = typeof window !== 'undefined' ? window.gtag : undefined;

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'

export function GoogleAnalytics() {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_title: document.title,
              page_location: window.location.href,
              custom_map: {
                'custom_parameter_1': 'service_type',
                'custom_parameter_2': 'booking_step',
                'custom_parameter_3': 'user_type'
              }
            });
          `,
        }}
      />
    </>
  )
}

// Custom event tracking functions
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && typeof gtag !== 'undefined') {
    gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && typeof gtag !== 'undefined') {
    gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

export const trackBooking = (step: string, serviceType?: string) => {
  trackEvent('booking_step', 'booking', step, 1)
  if (serviceType) {
    trackEvent('service_selected', 'booking', serviceType, 1)
  }
}

export const trackServiceView = (serviceName: string) => {
  trackEvent('service_view', 'engagement', serviceName, 1)
}

export const trackContact = (method: string) => {
  trackEvent('contact', 'engagement', method, 1)
}

export const trackConversion = (type: string, value?: number) => {
  trackEvent('conversion', 'conversion', type, value)
}
