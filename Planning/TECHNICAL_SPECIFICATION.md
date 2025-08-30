# Technical Specification
## Laundry Service Website - ReactJS/Next.js Implementation

### Architecture Overview

#### Technology Stack Details
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 4.x
- **State Management**: Zustand 5.x
- **Forms**: React Hook Form 7.x + Zod 4.x + Formspree
- **UI Components**: Custom components with class-variance-authority
- **Icons**: Lucide React
- **Notifications**: Sonner
- **SEO**: Next-SEO
- **Build Tool**: Turbopack (development)
- **Deployment**: GitHub Pages
- **Form Handling**: Formspree

---

## Component Architecture

### 1. Design System Components (`src/components/ui/`)

#### Core UI Components
```typescript
// Button Component
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline' | 'ghost'
  size: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  loading?: boolean
}

// Card Component
interface CardProps {
  children: React.ReactNode
  className?: string
  padding?: 'sm' | 'md' | 'lg'
  shadow?: 'sm' | 'md' | 'lg'
}

// Input Component
interface InputProps {
  label?: string
  placeholder?: string
  type?: 'text' | 'email' | 'tel' | 'password'
  error?: string
  required?: boolean
  disabled?: boolean
}
```

#### Layout Components
```typescript
// Header Component
interface HeaderProps {
  transparent?: boolean
  sticky?: boolean
}

// Footer Component
interface FooterProps {
  showNewsletter?: boolean
}

// Section Component
interface SectionProps {
  children: React.ReactNode
  className?: string
  container?: boolean
  spacing?: 'sm' | 'md' | 'lg' | 'xl'
}
```

### 2. Page Components (`src/components/sections/`)

#### Homepage Sections
```typescript
// Hero Section
interface HeroProps {
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
  backgroundImage?: string
}

// Services Grid
interface ServiceCard {
  id: string
  title: string
  description: string
  price: string
  icon: string
  features: string[]
}

// Testimonials Carousel
interface Testimonial {
  id: string
  name: string
  rating: number
  text: string
  image?: string
  location?: string
}
```

### 3. Form Components (`src/components/forms/`)

#### Booking Form
```typescript
interface BookingFormData {
  services: string[]
  pickupDate: Date
  pickupTime: string
  deliveryDate: Date
  deliveryTime: string
  address: {
    street: string
    city: string
    postcode: string
    instructions?: string
  }
  contact: {
    name: string
    email: string
    phone: string
  }
  specialInstructions?: string
}

interface BookingFormProps {
  onSubmit: (data: BookingFormData) => void
  loading?: boolean
}
```

---

## State Management (Zustand)

### Store Structure
```typescript
// Main App Store
interface AppStore {
  // UI State
  isMobileMenuOpen: boolean
  isBookingModalOpen: boolean
  currentTheme: 'light' | 'dark'
  
  // Booking State
  bookingData: Partial<BookingFormData>
  bookingStep: number
  
  // User State
  user: User | null
  
  // Actions
  toggleMobileMenu: () => void
  openBookingModal: () => void
  closeBookingModal: () => void
  updateBookingData: (data: Partial<BookingFormData>) => void
  setBookingStep: (step: number) => void
  setUser: (user: User | null) => void
}

// Services Store
interface ServicesStore {
  services: Service[]
  selectedServices: string[]
  loading: boolean
  
  fetchServices: () => Promise<void>
  selectService: (serviceId: string) => void
  deselectService: (serviceId: string) => void
}
```

---

## API Integration

### Service Layer (`src/lib/services/`)

#### Formspree Integration
```typescript
interface FormspreeConfig {
  endpoint: string // Formspree endpoint URL
  headers: {
    'Content-Type': 'application/json'
  }
}

interface BookingFormData {
  services: string[]
  pickupDate: Date
  pickupTime: string
  deliveryDate: Date
  deliveryTime: string
  address: {
    street: string
    city: string
    postcode: string
    instructions?: string
  }
  contact: {
    name: string
    email: string
    phone: string
  }
  specialInstructions?: string
}

interface FormspreeResponse {
  ok: boolean
  status: number
  body: {
    next: string
  }
}

// Formspree service
const submitToFormspree = async (data: BookingFormData): Promise<FormspreeResponse> => {
  const response = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  
  return response.json()
}
```

#### Contact Formspree Integration
```typescript
interface ContactFormData {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

interface NewsletterFormData {
  email: string
  name?: string
}

// Contact form submission
const submitContactForm = async (data: ContactFormData): Promise<FormspreeResponse> => {
  const response = await fetch(process.env.NEXT_PUBLIC_CONTACT_FORMSPREE_ENDPOINT!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  
  return response.json()
}

// Newsletter subscription
const subscribeNewsletter = async (data: NewsletterFormData): Promise<FormspreeResponse> => {
  const response = await fetch(process.env.NEXT_PUBLIC_NEWSLETTER_FORMSPREE_ENDPOINT!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  
  return response.json()
}
```

---

## Routing Structure

### App Router Pages
```
app/
├── page.tsx                    # Homepage
├── layout.tsx                  # Root layout
├── globals.css                 # Global styles
├── services/
│   ├── page.tsx               # Services overview
│   ├── dry-cleaning/
│   │   └── page.tsx           # Dry cleaning service
│   ├── laundry/
│   │   └── page.tsx           # Laundry service
│   └── ironing/
│       └── page.tsx           # Ironing service
├── pricing/
│   └── page.tsx               # Pricing page
├── book/
│   └── page.tsx               # Booking page
├── contact/
│   └── page.tsx               # Contact page
├── about/
│   └── page.tsx               # About page
└── areas/
    └── page.tsx               # Service areas
```

---

## Styling Strategy

### Tailwind Configuration
```javascript
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef7f0',
          500: '#ff6b35',
          900: '#cc4a1a',
        },
        secondary: {
          50: '#f0f9ff',
          500: '#0ea5e9',
          900: '#0c4a6e',
        },
        gray: {
          50: '#f9fafb',
          900: '#111827',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ]
}
```

### CSS Custom Properties
```css
/* globals.css */
:root {
  --color-primary: #ff6b35;
  --color-secondary: #0ea5e9;
  --color-accent: #f59e0b;
  --color-success: #10b981;
  --color-error: #ef4444;
  --color-warning: #f59e0b;
  
  --font-family-sans: 'Inter', system-ui, sans-serif;
  --font-family-display: 'Poppins', system-ui, sans-serif;
  
  --border-radius: 0.5rem;
  --border-radius-lg: 1rem;
  --border-radius-xl: 1.5rem;
  
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
}
```

---

## Performance Optimization

### Image Optimization
```typescript
// Next.js Image component usage
import Image from 'next/image'

// Optimized image component
const OptimizedImage = ({ src, alt, ...props }) => (
  <Image
    src={src}
    alt={alt}
    placeholder="blur"
    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
    {...props}
  />
)
```

### Code Splitting
```typescript
// Dynamic imports for heavy components
const TestimonialCarousel = dynamic(() => import('@/components/sections/TestimonialCarousel'), {
  loading: () => <div className="h-64 bg-gray-100 animate-pulse rounded-lg" />,
  ssr: false
})

const BookingForm = dynamic(() => import('@/components/forms/BookingForm'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg" />
})
```

---

## SEO Implementation

### Metadata Configuration
```typescript
// lib/seo.ts
export const defaultSEO = {
  titleTemplate: '%s | Laundry Service',
  defaultTitle: 'Professional Laundry & Dry Cleaning Services',
  description: 'Premium laundry and dry cleaning services. Fast, reliable, and eco-friendly. Book online today!',
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://yourlaundryservice.com',
    siteName: 'Your Laundry Service',
  },
  twitter: {
    handle: '@yourlaundryservice',
    site: '@yourlaundryservice',
    cardType: 'summary_large_image',
  },
}

// Page-specific SEO
export const servicesSEO = {
  title: 'Our Services',
  description: 'Professional dry cleaning, laundry, and ironing services. Quality guaranteed.',
  openGraph: {
    title: 'Professional Laundry Services',
    description: 'Premium dry cleaning, laundry, and ironing services.',
  }
}
```

### Structured Data
```typescript
// components/StructuredData.tsx
const ServiceStructuredData = ({ services }: { services: Service[] }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Laundry Service",
    "description": "Professional laundry and dry cleaning services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Your Laundry Service",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Main St",
        "addressLocality": "Sydney",
        "addressRegion": "NSW",
        "postalCode": "2000",
        "addressCountry": "AU"
      },
      "telephone": "+61-2-1234-5678",
      "email": "info@yourlaundryservice.com"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Laundry Services",
      "itemListElement": services.map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description
        },
        "price": service.price,
        "priceCurrency": "AUD"
      }))
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
```

---

## Testing Strategy

### Unit Tests
```typescript
// __tests__/components/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from '@/components/ui/Button'

describe('Button Component', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    fireEvent.click(screen.getByText('Click me'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
```

### Integration Tests
```typescript
// __tests__/pages/booking.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import BookingPage from '@/app/book/page'

describe('Booking Page', () => {
  it('submits booking form successfully', async () => {
    render(<BookingPage />)
    
    // Fill form
    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: 'John Doe' }
    })
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'john@example.com' }
    })
    
    // Submit form
    fireEvent.click(screen.getByText(/book now/i))
    
    await waitFor(() => {
      expect(screen.getByText(/booking confirmed/i)).toBeInTheDocument()
    })
  })
})
```

---

## Deployment Configuration

### GitHub Pages Configuration
```json
// package.json scripts
{
  "scripts": {
    "build": "next build && next export",
    "deploy": "npm run build && gh-pages -d out",
    "predeploy": "npm run build"
  }
}
```

### Next.js Configuration for Static Export
```typescript
// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '',
}

export default nextConfig
```

### Environment Variables
```bash
# .env.local
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://yourusername.github.io/your-repo-name

# Formspree Endpoints
NEXT_PUBLIC_BOOKING_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_BOOKING_FORM_ID
NEXT_PUBLIC_CONTACT_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_CONTACT_FORM_ID
NEXT_PUBLIC_NEWSLETTER_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_NEWSLETTER_FORM_ID
```

---

## Security Considerations

### Form Validation
```typescript
// lib/validations/booking.ts
import { z } from 'zod'

export const bookingSchema = z.object({
  services: z.array(z.string()).min(1, 'Please select at least one service'),
  pickupDate: z.date().min(new Date(), 'Pickup date must be in the future'),
  pickupTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Invalid time format'),
  address: z.object({
    street: z.string().min(5, 'Street address is required'),
    city: z.string().min(2, 'City is required'),
    postcode: z.string().regex(/^\d{4}$/, 'Invalid postcode'),
  }),
  contact: z.object({
    name: z.string().min(2, 'Name is required'),
    email: z.string().email('Invalid email address'),
    phone: z.string().regex(/^\+?[\d\s-()]+$/, 'Invalid phone number'),
  }),
})
```

### CSRF Protection
```typescript
// lib/csrf.ts
import { generateToken, validateToken } from 'csrf'

const tokens = new generateToken()

export const createCSRFToken = () => tokens.secretSync()
export const validateCSRFToken = (secret: string, token: string) => 
  tokens.verify(secret, token)
```

This technical specification provides a comprehensive guide for implementing the laundry service website with modern React/Next.js best practices, ensuring scalability, performance, and maintainability.
