# PowerShell Script to Fix Laundry Service Website File Structure
# Run this script from the laundry-mvp directory

Write-Host "🔧 Fixing Laundry Service Website File Structure..." -ForegroundColor Green

# Navigate to the laundry-mvp directory
Set-Location -Path "laundry-mvp"

# Create missing directories
Write-Host "📁 Creating missing directories..." -ForegroundColor Yellow

# Create hooks directory
if (!(Test-Path "src/hooks")) {
    New-Item -ItemType Directory -Path "src/hooks" -Force
    Write-Host "✅ Created src/hooks directory"
}

# Create types directory
if (!(Test-Path "src/types")) {
    New-Item -ItemType Directory -Path "src/types" -Force
    Write-Host "✅ Created src/types directory"
}

# Create sections directory in components
if (!(Test-Path "src/components/sections")) {
    New-Item -ItemType Directory -Path "src/components/sections" -Force
    Write-Host "✅ Created src/components/sections directory"
}

# Create layout directory in components
if (!(Test-Path "src/components/layout")) {
    New-Item -ItemType Directory -Path "src/components/layout" -Force
    Write-Host "✅ Created src/components/layout directory"
}

# Create services directory in lib
if (!(Test-Path "src/lib/services")) {
    New-Item -ItemType Directory -Path "src/lib/services" -Force
    Write-Host "✅ Created src/lib/services directory"
}

# Create validations directory in lib
if (!(Test-Path "src/lib/validations")) {
    New-Item -ItemType Directory -Path "src/lib/validations" -Force
    Write-Host "✅ Created src/lib/validations directory"
}

# Create stores directory in lib
if (!(Test-Path "src/lib/stores")) {
    New-Item -ItemType Directory -Path "src/lib/stores" -Force
    Write-Host "✅ Created src/lib/stores directory"
}

# Create test directories
if (!(Test-Path "__tests__")) {
    New-Item -ItemType Directory -Path "__tests__" -Force
    Write-Host "✅ Created __tests__ directory"
}

if (!(Test-Path "__tests__/components")) {
    New-Item -ItemType Directory -Path "__tests__/components" -Force
    Write-Host "✅ Created __tests__/components directory"
}

if (!(Test-Path "__tests__/pages")) {
    New-Item -ItemType Directory -Path "__tests__/pages" -Force
    Write-Host "✅ Created __tests__/pages directory"
}

# Create individual service pages
Write-Host "📄 Creating service pages..." -ForegroundColor Yellow

# Dry cleaning service page
if (!(Test-Path "src/app/services/dry-cleaning")) {
    New-Item -ItemType Directory -Path "src/app/services/dry-cleaning" -Force
    Write-Host "✅ Created dry-cleaning service directory"
}

# Laundry service page
if (!(Test-Path "src/app/services/laundry")) {
    New-Item -ItemType Directory -Path "src/app/services/laundry" -Force
    Write-Host "✅ Created laundry service directory"
}

# Ironing service page
if (!(Test-Path "src/app/services/ironing")) {
    New-Item -ItemType Directory -Path "src/app/services/ironing" -Force
    Write-Host "✅ Created ironing service directory"
}

# Create about page
if (!(Test-Path "src/app/about")) {
    New-Item -ItemType Directory -Path "src/app/about" -Force
    Write-Host "✅ Created about page directory"
}

# Move existing files to correct locations
Write-Host "📦 Moving files to correct locations..." -ForegroundColor Yellow

# Move common components to layout
if (Test-Path "src/components/common/Header.tsx") {
    if (!(Test-Path "src/components/layout/Header.tsx")) {
        Move-Item "src/components/common/Header.tsx" "src/components/layout/Header.tsx" -Force
        Write-Host "✅ Moved Header.tsx to layout directory"
    }
}

if (Test-Path "src/components/common/Footer.tsx") {
    if (!(Test-Path "src/components/layout/Footer.tsx")) {
        Move-Item "src/components/common/Footer.tsx" "src/components/layout/Footer.tsx" -Force
        Write-Host "✅ Moved Footer.tsx to layout directory"
    }
}

if (Test-Path "src/components/common/Section.tsx") {
    if (!(Test-Path "src/components/layout/Section.tsx")) {
        Move-Item "src/components/common/Section.tsx" "src/components/layout/Section.tsx" -Force
        Write-Host "✅ Moved Section.tsx to layout directory"
    }
}

# Move marketing components to sections
if (Test-Path "src/components/marketing/Hero.tsx") {
    if (!(Test-Path "src/components/sections/Hero.tsx")) {
        Move-Item "src/components/marketing/Hero.tsx" "src/components/sections/Hero.tsx" -Force
        Write-Host "✅ Moved Hero.tsx to sections directory"
    }
}

if (Test-Path "src/components/marketing/PricingTable.tsx") {
    if (!(Test-Path "src/components/sections/PricingTable.tsx")) {
        Move-Item "src/components/marketing/PricingTable.tsx" "src/components/sections/PricingTable.tsx" -Force
        Write-Host "✅ Moved PricingTable.tsx to sections directory"
    }
}

if (Test-Path "src/components/marketing/Steps.tsx") {
    if (!(Test-Path "src/components/sections/Steps.tsx")) {
        Move-Item "src/components/marketing/Steps.tsx" "src/components/sections/Steps.tsx" -Force
        Write-Host "✅ Moved Steps.tsx to sections directory"
    }
}

if (Test-Path "src/components/marketing/TestimonialCarousel.tsx") {
    if (!(Test-Path "src/components/sections/TestimonialCarousel.tsx")) {
        Move-Item "src/components/marketing/TestimonialCarousel.tsx" "src/components/sections/TestimonialCarousel.tsx" -Force
        Write-Host "✅ Moved TestimonialCarousel.tsx to sections directory"
    }
}

# Create essential files
Write-Host "📝 Creating essential files..." -ForegroundColor Yellow

# Create TypeScript type definitions
$typesContent = @"
// Global type definitions for the laundry service website

export interface User {
  id: string
  name: string
  email: string
  phone?: string
}

export interface Service {
  id: string
  title: string
  description: string
  price: string
  icon: string
  features: string[]
  category: 'dry-cleaning' | 'laundry' | 'ironing' | 'express'
}

export interface BookingFormData {
  services: string[]
  pickupDate: string
  pickupTime: string
  deliveryDate: string
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

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

export interface NewsletterFormData {
  email: string
  name?: string
}

export interface Testimonial {
  id: string
  name: string
  rating: number
  text: string
  image?: string
  location?: string
}
"@

Set-Content -Path "src/types/index.ts" -Value $typesContent -Force
Write-Host "✅ Created TypeScript type definitions"

# Create Formspree service
$formspreeContent = @"
export interface FormspreeResponse {
  ok: boolean
  status: number
  body: {
    next: string
  }
}

export interface BookingFormData {
  services: string[]
  pickupDate: string
  pickupTime: string
  deliveryDate: string
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

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

export interface NewsletterFormData {
  email: string
  name?: string
}

// Generic Formspree submission function
const submitToFormspree = async (
  endpoint: string,
  data: any
): Promise<FormspreeResponse> => {
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error(`Formspree submission failed: ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Formspree submission error:', error)
    throw error
  }
}

// Booking form submission
export const submitBookingForm = async (
  data: BookingFormData
): Promise<FormspreeResponse> => {
  const endpoint = process.env.NEXT_PUBLIC_BOOKING_FORMSPREE_ENDPOINT!
  
  // Format data for Formspree
  const formData = {
    _subject: `New Booking Request - ${data.contact.name}`,
    _replyto: data.contact.email,
    services: data.services.join(', '),
    pickupDate: data.pickupDate,
    pickupTime: data.pickupTime,
    deliveryDate: data.deliveryDate,
    deliveryTime: data.deliveryTime,
    customerName: data.contact.name,
    customerEmail: data.contact.email,
    customerPhone: data.contact.phone,
    address: `${data.address.street}, ${data.address.city} ${data.address.postcode}`,
    specialInstructions: data.specialInstructions || 'None',
    bookingReference: generateBookingReference(),
  }

  return submitToFormspree(endpoint, formData)
}

// Contact form submission
export const submitContactForm = async (
  data: ContactFormData
): Promise<FormspreeResponse> => {
  const endpoint = process.env.NEXT_PUBLIC_CONTACT_FORMSPREE_ENDPOINT!
  
  const formData = {
    _subject: `Contact Form - ${data.subject}`,
    _replyto: data.email,
    name: data.name,
    email: data.email,
    phone: data.phone || 'Not provided',
    subject: data.subject,
    message: data.message,
  }

  return submitToFormspree(endpoint, formData)
}

// Newsletter subscription
export const subscribeNewsletter = async (
  data: NewsletterFormData
): Promise<FormspreeResponse> => {
  const endpoint = process.env.NEXT_PUBLIC_NEWSLETTER_FORMSPREE_ENDPOINT!
  
  const formData = {
    _subject: 'New Newsletter Subscription',
    email: data.email,
    name: data.name || 'Anonymous',
  }

  return submitToFormspree(endpoint, formData)
}

// Generate booking reference
const generateBookingReference = (): string => {
  const timestamp = Date.now().toString(36)
  const random = Math.random().toString(36).substr(2, 5)
  return `BK-${timestamp}-${random}`.toUpperCase()
}
"@

Set-Content -Path "src/lib/services/formspree.ts" -Value $formspreeContent -Force
Write-Host "✅ Created Formspree service"

# Create validation schemas
$validationContent = @"
import { z } from 'zod'

export const bookingSchema = z.object({
  services: z.array(z.string()).min(1, 'Please select at least one service'),
  pickupDate: z.string().min(1, 'Pickup date is required'),
  pickupTime: z.string().min(1, 'Pickup time is required'),
  deliveryDate: z.string().min(1, 'Delivery date is required'),
  deliveryTime: z.string().min(1, 'Delivery time is required'),
  address: z.object({
    street: z.string().min(5, 'Street address is required'),
    city: z.string().min(2, 'City is required'),
    postcode: z.string().regex(/^\d{4}$/, 'Invalid postcode'),
  }),
  contact: z.object({
    name: z.string().min(2, 'Name is required'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(10, 'Phone number is required'),
  }),
  specialInstructions: z.string().optional(),
})

export const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  subject: z.string().min(5, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export const newsletterSchema = z.object({
  email: z.string().email('Invalid email address'),
  name: z.string().optional(),
})
"@

Set-Content -Path "src/lib/validations/index.ts" -Value $validationContent -Force
Write-Host "✅ Created validation schemas"

# Create Zustand stores
$storeContent = @"
import { create } from 'zustand'
import { BookingFormData, User, Service } from '@/types'

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

export const useAppStore = create<AppStore>((set) => ({
  // Initial state
  isMobileMenuOpen: false,
  isBookingModalOpen: false,
  currentTheme: 'light',
  bookingData: {},
  bookingStep: 1,
  user: null,

  // Actions
  toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  openBookingModal: () => set({ isBookingModalOpen: true }),
  closeBookingModal: () => set({ isBookingModalOpen: false }),
  updateBookingData: (data) => set((state) => ({ 
    bookingData: { ...state.bookingData, ...data } 
  })),
  setBookingStep: (step) => set({ bookingStep: step }),
  setUser: (user) => set({ user }),
}))

interface ServicesStore {
  services: Service[]
  selectedServices: string[]
  loading: boolean
  
  fetchServices: () => Promise<void>
  selectService: (serviceId: string) => void
  deselectService: (serviceId: string) => void
}

export const useServicesStore = create<ServicesStore>((set, get) => ({
  services: [],
  selectedServices: [],
  loading: false,

  fetchServices: async () => {
    set({ loading: true })
    try {
      // Mock data - replace with actual API call
      const mockServices: Service[] = [
        {
          id: '1',
          title: 'Dry Cleaning',
          description: 'Professional dry cleaning for all fabric types',
          price: 'From $15',
          icon: 'dry-cleaning',
          features: ['Stain removal', 'Fabric protection', 'Same day service'],
          category: 'dry-cleaning'
        },
        {
          id: '2',
          title: 'Laundry Service',
          description: 'Wash, dry, and fold your clothes',
          price: 'From $12',
          icon: 'laundry',
          features: ['Eco-friendly detergents', 'Fabric softener', 'Next day delivery'],
          category: 'laundry'
        },
        {
          id: '3',
          title: 'Ironing Service',
          description: 'Professional pressing and ironing',
          price: 'From $8',
          icon: 'ironing',
          features: ['Crisp finish', 'Wrinkle-free', 'Express available'],
          category: 'ironing'
        }
      ]
      set({ services: mockServices, loading: false })
    } catch (error) {
      console.error('Failed to fetch services:', error)
      set({ loading: false })
    }
  },

  selectService: (serviceId) => {
    const { selectedServices } = get()
    if (!selectedServices.includes(serviceId)) {
      set({ selectedServices: [...selectedServices, serviceId] })
    }
  },

  deselectService: (serviceId) => {
    const { selectedServices } = get()
    set({ selectedServices: selectedServices.filter(id => id !== serviceId) })
  },
}))
"@

Set-Content -Path "src/lib/stores/index.ts" -Value $storeContent -Force
Write-Host "✅ Created Zustand stores"

# Create custom hooks
$hooksContent = @"
import { useEffect, useState } from 'react'

// Hook for handling window resize
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}

// Hook for handling scroll position
export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scrollPosition
}

// Hook for handling form submission
export const useFormSubmission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const submitForm = async (submitFunction: () => Promise<any>) => {
    setIsSubmitting(true)
    setError(null)
    
    try {
      await submitFunction()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      throw err
    } finally {
      setIsSubmitting(false)
    }
  }

  return { isSubmitting, error, submitForm }
}
"@

Set-Content -Path "src/hooks/index.ts" -Value $hooksContent -Force
Write-Host "✅ Created custom hooks"

# Create page files
Write-Host "📄 Creating page files..." -ForegroundColor Yellow

# Services overview page
$servicesPageContent = @"
import { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { PricingTable } from '@/components/sections/PricingTable'

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Professional dry cleaning, laundry, and ironing services. Quality guaranteed.',
}

export default function ServicesPage() {
  return (
    <div>
      <Hero 
        title="Our Services"
        subtitle="Professional laundry and dry cleaning services tailored to your needs"
        ctaText="Book Now"
        ctaLink="/book"
      />
      <PricingTable />
    </div>
  )
}
"@

Set-Content -Path "src/app/services/page.tsx" -Value $servicesPageContent -Force
Write-Host "✅ Created services overview page"

# About page
$aboutPageContent = @"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about our laundry service company, our mission, and our commitment to quality.',
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          We are a professional laundry service dedicated to providing the highest quality 
          care for your garments. With years of experience and state-of-the-art equipment, 
          we ensure your clothes receive the attention they deserve.
        </p>
        <p className="text-lg mb-6">
          Our mission is to make your life easier by taking care of your laundry needs 
          with convenience, reliability, and exceptional service.
        </p>
      </div>
    </div>
  )
}
"@

Set-Content -Path "src/app/about/page.tsx" -Value $aboutPageContent -Force
Write-Host "✅ Created about page"

# Create .env.local template
$envContent = @"
# Formspree Endpoints
NEXT_PUBLIC_BOOKING_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_BOOKING_FORM_ID
NEXT_PUBLIC_CONTACT_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_CONTACT_FORM_ID
NEXT_PUBLIC_NEWSLETTER_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_NEWSLETTER_FORM_ID

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://yourusername.github.io/your-repo-name
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
"@

Set-Content -Path ".env.local.example" -Value $envContent -Force
Write-Host "✅ Created .env.local template"

# Update package.json scripts for GitHub Pages
Write-Host "📦 Updating package.json scripts..." -ForegroundColor Yellow

# Read current package.json
$packageJson = Get-Content "package.json" | ConvertFrom-Json

# Update scripts
$packageJson.scripts.build = "next build && next export"
$packageJson.scripts.deploy = "npm run build && gh-pages -d out"
$packageJson.scripts.predeploy = "npm run build"

# Save updated package.json
$packageJson | ConvertTo-Json -Depth 10 | Set-Content "package.json"
Write-Host "✅ Updated package.json scripts for GitHub Pages deployment"

# Create Next.js config for static export
$nextConfigContent = @"
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
"@

Set-Content -Path "next.config.ts" -Value $nextConfigContent -Force
Write-Host "✅ Created Next.js config for static export"

# Clean up empty directories
Write-Host "🧹 Cleaning up empty directories..." -ForegroundColor Yellow

# Remove empty common directory if all files were moved
if ((Get-ChildItem "src/components/common" -File | Measure-Object).Count -eq 0) {
    Remove-Item "src/components/common" -Force
    Write-Host "✅ Removed empty common directory"
}

# Remove empty marketing directory if all files were moved
if ((Get-ChildItem "src/components/marketing" -File | Measure-Object).Count -eq 0) {
    Remove-Item "src/components/marketing" -Force
    Write-Host "✅ Removed empty marketing directory"
}

Write-Host "`n🎉 File structure fix completed!" -ForegroundColor Green
Write-Host "`n📋 Next steps:" -ForegroundColor Cyan
Write-Host "1. Set up Formspree forms and update .env.local" -ForegroundColor White
Write-Host "2. Update next.config.ts with your actual repository name" -ForegroundColor White
Write-Host "3. Install additional dependencies: npm install @hookform/resolvers" -ForegroundColor White
Write-Host "4. Start development: npm run dev" -ForegroundColor White
Write-Host "`n📁 Current structure:" -ForegroundColor Cyan
tree /f src
