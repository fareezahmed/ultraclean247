import { Metadata } from 'next'

// Base SEO configuration
export const baseSEO: Metadata = {
  metadataBase: new URL('https://famscomtech.com'),
  title: {
    default: 'Ultra Clean 247 - Professional Laundry Services',
    template: '%s | Ultra Clean 247'
  },
  description: 'Professional laundry and ironing services in Melbourne. Quality care for your clothes with convenient pickup and delivery. Eco-friendly processes and competitive pricing.',
  keywords: [
    'laundry service melbourne',
    'dry cleaning melbourne',
    'ironing service melbourne',
    'laundry pickup delivery',
    'eco friendly laundry',
    'professional laundry',
    'laundry service near me',
    'same day laundry',
    'express laundry service',
    'laundry and ironing'
  ],
  authors: [{ name: 'Ultra Clean 247' }],
  creator: 'Ultra Clean 247',
  publisher: 'Ultra Clean 247',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://famscomtech.com',
    siteName: 'Ultra Clean 247',
    title: 'Ultra Clean 247 - Professional Laundry Services',
    description: 'Professional laundry and ironing services in Melbourne. Quality care for your clothes with convenient pickup and delivery.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ultra Clean 247 - Professional Laundry Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ultra Clean 247 - Professional Laundry Services',
    description: 'Professional laundry and ironing services in Melbourne. Quality care for your clothes with convenient pickup and delivery.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

// Page-specific SEO generator
export function generatePageSEO(page: string): Metadata {
  const pageConfigs: Record<string, Metadata> = {
    home: {
      title: 'Ultra Clean 247 - Professional Laundry Services in Melbourne',
      description: 'Professional laundry and ironing services in Melbourne. Quality care for your clothes with convenient pickup and delivery. Eco-friendly processes and competitive pricing.',
      keywords: ['laundry service melbourne', 'dry cleaning melbourne', 'ironing service melbourne', 'laundry pickup delivery'],
    },
    about: {
      title: 'About Us - Ultra Clean 247',
      description: 'Learn about Ultra Clean 247, Melbourne\'s trusted laundry service provider. We deliver quality, convenience, and eco-friendly solutions.',
      keywords: ['about ultra clean 247', 'laundry service melbourne', 'professional laundry'],
    },
    services: {
      title: 'Our Services - Ultra Clean 247',
      description: 'Comprehensive laundry services including washing, dry cleaning, ironing, and express service. Professional care for all your garment needs.',
      keywords: ['laundry services', 'dry cleaning', 'ironing service', 'express laundry'],
    },
    pricing: {
      title: 'Pricing - Ultra Clean 247',
      description: 'Transparent pricing for all our laundry services. Competitive rates for washing, dry cleaning, and ironing with no hidden fees.',
      keywords: ['laundry pricing', 'dry cleaning prices', 'ironing service cost'],
    },
    contact: {
      title: 'Contact Us - Ultra Clean 247',
      description: 'Get in touch with Ultra Clean 247 for all your laundry needs. Call us at 0434944733 or book online for convenient service.',
      keywords: ['contact ultra clean 247', 'laundry service contact', 'book laundry service'],
    },
    book: {
      title: 'Book Service - Ultra Clean 247',
      description: 'Book your laundry service online with Ultra Clean 247. Easy booking process with pickup and delivery options available.',
      keywords: ['book laundry service', 'online booking', 'laundry pickup delivery'],
    },
  }

  return {
    ...baseSEO,
    ...pageConfigs[page],
  }
}

// Structured Data for Local Business
export const localBusinessStructuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Ultra Clean 247",
  "description": "Professional laundry and ironing services in Melbourne with pickup and delivery",
  "url": "https://famscomtech.com",
  "telephone": "+61395711494",
  "email": "info@ultraclean247.com.au",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main Street",
    "addressLocality": "Melbourne",
    "addressRegion": "VIC",
    "postalCode": "3000",
    "addressCountry": "AU"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -37.8136,
    "longitude": 144.9631
  },
  "openingHours": [
    "Mo-Fr 08:00-18:00",
    "Sa 09:00-17:00",
    "Su 10:00-16:00"
  ],
  "priceRange": "$$",
  "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
  "currenciesAccepted": "AUD",
  "areaServed": {
    "@type": "City",
    "name": "Melbourne"
  },
  "serviceArea": {
    "@type": "City",
    "name": "Melbourne Metropolitan Area"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Laundry Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Laundry Service",
          "description": "Professional washing, drying, and folding service"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Dry Cleaning",
          "description": "Professional dry cleaning for delicate fabrics"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Ironing Service",
          "description": "Professional pressing and ironing service"
        }
      }
    ]
  }
}

// Organization Structured Data
export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Ultra Clean 247",
  "url": "https://famscomtech.com",
  "logo": "https://famscomtech.com/logo.svg",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+61434944733",
    "contactType": "customer service",
    "areaServed": "AU",
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://www.facebook.com/ultraclean247",
    "https://www.instagram.com/ultraclean247",
    "https://www.linkedin.com/company/ultraclean247"
  ]
}

// FAQ Structured Data
export const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What laundry services do you offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer comprehensive laundry services including washing, dry cleaning, ironing, and express same-day service. All services include pickup and delivery."
      }
    },
    {
      "@type": "Question",
      "name": "How much do your services cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our pricing is competitive and transparent. Laundry service starts from $30 for 5kg, ironing from $20 minimum, and express service from $35. Contact us for a detailed quote."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer pickup and delivery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer free pickup and delivery service throughout Melbourne. We'll collect your clothes from your doorstep and return them clean and fresh."
      }
    },
    {
      "@type": "Question",
      "name": "How long does the service take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standard service takes 24-48 hours. We also offer express same-day service for urgent needs. Delivery times depend on your location and service type."
      }
    },
    {
      "@type": "Question",
      "name": "Are your processes eco-friendly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we use eco-friendly detergents and sustainable processes. We're committed to reducing our environmental impact while maintaining the highest quality standards."
      }
    }
  ]
}

// Service Structured Data
export const serviceStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Professional Laundry Service",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Ultra Clean 247"
  },
  "description": "Professional laundry and ironing services with pickup and delivery in Melbourne",
  "areaServed": {
    "@type": "City",
    "name": "Melbourne"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Laundry Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Laundry Service",
          "description": "Professional washing, drying, and folding"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Dry Cleaning",
          "description": "Professional dry cleaning for delicate fabrics"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Ironing Service",
          "description": "Professional pressing and ironing"
        }
      }
    ]
  }
}