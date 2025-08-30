# Formspree Integration Guide
## Laundry Service Website - Form Handling

### Overview
This guide explains how to integrate Formspree for handling booking and contact forms in the laundry service website. Formspree will manage form submissions, send email notifications, and provide auto-responses to customers.

---

## Setup Process

### 1. Create Formspree Forms

#### Step 1: Sign up for Formspree
1. Go to [formspree.io](https://formspree.io)
2. Create a free account
3. Verify your email address

#### Step 2: Create Forms
Create three separate forms for different purposes:

**Booking Form:**
- Form Name: "Laundry Service Booking"
- Email: your-business-email@domain.com
- Auto-response: Enabled
- Spam protection: Enabled

**Contact Form:**
- Form Name: "Contact Us"
- Email: your-business-email@domain.com
- Auto-response: Enabled
- Spam protection: Enabled

**Newsletter Form:**
- Form Name: "Newsletter Subscription"
- Email: your-business-email@domain.com
- Auto-response: Disabled (optional)
- Spam protection: Enabled

### 2. Get Form Endpoints

After creating each form, you'll get endpoints like:
```
https://formspree.io/f/xaybzwkd
https://formspree.io/f/mqkqjvnp
https://formspree.io/f/abc123def
```

### 3. Environment Variables Setup

Create `.env.local` file:
```bash
# Formspree Endpoints
NEXT_PUBLIC_BOOKING_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_BOOKING_FORM_ID
NEXT_PUBLIC_CONTACT_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_CONTACT_FORM_ID
NEXT_PUBLIC_NEWSLETTER_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_NEWSLETTER_FORM_ID

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://yourusername.github.io/your-repo-name
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## Implementation

### 1. Formspree Service Layer

Create `src/lib/services/formspree.ts`:

```typescript
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
```

### 2. Booking Form Component

Create `src/components/forms/BookingForm.tsx`:

```typescript
'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { submitBookingForm, BookingFormData } from '@/lib/services/formspree'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Card } from '@/components/ui/Card'
import { toast } from 'sonner'

const bookingSchema = z.object({
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

export function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  })

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true)
    
    try {
      const response = await submitBookingForm(data)
      
      if (response.ok) {
        toast.success('Booking submitted successfully! We\'ll contact you soon.')
        reset()
      } else {
        throw new Error('Submission failed')
      }
    } catch (error) {
      console.error('Booking submission error:', error)
      toast.error('Failed to submit booking. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Services Selection */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Services Required *
          </label>
          <div className="space-y-2">
            {['Dry Cleaning', 'Laundry', 'Ironing', 'Express Service'].map((service) => (
              <label key={service} className="flex items-center">
                <input
                  type="checkbox"
                  value={service}
                  {...register('services')}
                  className="mr-2"
                />
                {service}
              </label>
            ))}
          </div>
          {errors.services && (
            <p className="text-red-500 text-sm mt-1">{errors.services.message}</p>
          )}
        </div>

        {/* Pickup Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Pickup Date *"
            type="date"
            {...register('pickupDate')}
            error={errors.pickupDate?.message}
          />
          <Input
            label="Pickup Time *"
            type="time"
            {...register('pickupTime')}
            error={errors.pickupTime?.message}
          />
        </div>

        {/* Delivery Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Delivery Date *"
            type="date"
            {...register('deliveryDate')}
            error={errors.deliveryDate?.message}
          />
          <Input
            label="Delivery Time *"
            type="time"
            {...register('deliveryTime')}
            error={errors.deliveryTime?.message}
          />
        </div>

        {/* Address */}
        <div className="space-y-4">
          <Input
            label="Street Address *"
            {...register('address.street')}
            error={errors.address?.street?.message}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="City *"
              {...register('address.city')}
              error={errors.address?.city?.message}
            />
            <Input
              label="Postcode *"
              {...register('address.postcode')}
              error={errors.address?.postcode?.message}
            />
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-4">
          <Input
            label="Full Name *"
            {...register('contact.name')}
            error={errors.contact?.name?.message}
          />
          <Input
            label="Email *"
            type="email"
            {...register('contact.email')}
            error={errors.contact?.email?.message}
          />
          <Input
            label="Phone *"
            type="tel"
            {...register('contact.phone')}
            error={errors.contact?.phone?.message}
          />
        </div>

        {/* Special Instructions */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Special Instructions
          </label>
          <textarea
            {...register('specialInstructions')}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="Any special requirements or instructions..."
          />
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          loading={isSubmitting}
          disabled={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? 'Submitting...' : 'Book Now'}
        </Button>
      </form>
    </Card>
  )
}
```

### 3. Contact Form Component

Create `src/components/forms/ContactForm.tsx`:

```typescript
'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { submitContactForm, ContactFormData } from '@/lib/services/formspree'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Card } from '@/components/ui/Card'
import { toast } from 'sonner'

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  subject: z.string().min(5, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    try {
      const response = await submitContactForm(data)
      
      if (response.ok) {
        toast.success('Message sent successfully! We\'ll get back to you soon.')
        reset()
      } else {
        throw new Error('Submission failed')
      }
    } catch (error) {
      console.error('Contact submission error:', error)
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="max-w-lg mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          label="Name *"
          {...register('name')}
          error={errors.name?.message}
        />
        
        <Input
          label="Email *"
          type="email"
          {...register('email')}
          error={errors.email?.message}
        />
        
        <Input
          label="Phone"
          type="tel"
          {...register('phone')}
          error={errors.phone?.message}
        />
        
        <Input
          label="Subject *"
          {...register('subject')}
          error={errors.subject?.message}
        />
        
        <div>
          <label className="block text-sm font-medium mb-2">
            Message *
          </label>
          <textarea
            {...register('message')}
            rows={5}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="Your message..."
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          loading={isSubmitting}
          disabled={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </Card>
  )
}
```

---

## Formspree Configuration

### 1. Auto-Response Setup

Configure auto-responses in Formspree dashboard:

**Booking Form Auto-Response:**
```
Subject: Booking Confirmation - [Booking Reference]

Dear [Customer Name],

Thank you for your booking request with [Your Laundry Service].

Booking Reference: [Booking Reference]
Services: [Services]
Pickup Date: [Pickup Date] at [Pickup Time]
Delivery Date: [Delivery Date] at [Delivery Time]

We will contact you within 2 hours to confirm your booking and provide a final quote.

If you have any questions, please call us at [Phone Number] or reply to this email.

Best regards,
[Your Laundry Service Team]
```

**Contact Form Auto-Response:**
```
Subject: Thank you for contacting us

Dear [Name],

Thank you for reaching out to [Your Laundry Service].

We have received your message and will get back to you within 24 hours.

In the meantime, you can:
- Check our services at [Website URL]
- Call us at [Phone Number]
- Visit our FAQ page

Best regards,
[Your Laundry Service Team]
```

### 2. Email Notifications

Set up email notifications to be sent to your business email for:
- New booking requests
- Contact form submissions
- Newsletter subscriptions

### 3. Spam Protection

Enable Formspree's spam protection features:
- Honeypot fields
- Rate limiting
- Spam filtering

---

## Testing

### 1. Development Testing
```bash
# Test form submissions locally
npm run dev
# Navigate to booking and contact pages
# Submit test forms
# Check Formspree dashboard for submissions
```

### 2. Production Testing
```bash
# Deploy to GitHub Pages
npm run deploy
# Test forms on live site
# Verify email notifications
# Check auto-responses
```

---

## Monitoring & Analytics

### 1. Formspree Dashboard
- Monitor form submissions
- Track spam attempts
- View submission analytics
- Manage email notifications

### 2. Custom Analytics
```typescript
// Track form submissions in Google Analytics
const trackFormSubmission = (formType: 'booking' | 'contact' | 'newsletter') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_submit', {
      form_type: formType,
      event_category: 'engagement',
    })
  }
}
```

---

## Troubleshooting

### Common Issues

1. **Form not submitting**
   - Check Formspree endpoint URL
   - Verify environment variables
   - Check browser console for errors

2. **Emails not received**
   - Check spam folder
   - Verify Formspree email settings
   - Test with different email addresses

3. **CORS errors**
   - Ensure using correct Formspree endpoint
   - Check if using HTTPS in production

### Support Resources
- [Formspree Documentation](https://formspree.io/docs/)
- [Formspree Support](https://formspree.io/support/)
- [Next.js Static Export Guide](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)

This integration provides a robust, scalable solution for handling form submissions without requiring a backend server, perfect for a static site hosted on GitHub Pages.
