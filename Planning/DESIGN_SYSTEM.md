# Laundry Service Design System

## Overview
This design system provides a comprehensive set of reusable components and design tokens for the laundry service website. It's built on top of Tailwind CSS v4, shadcn/ui, and class-variance-authority for consistent styling and theming.

## Color Palette

### Primary Colors
- **Laundry Blue** (`--color-laundry-blue`): `oklch(0.55 0.15 240)` - Primary brand color
- **Laundry Green** (`--color-laundry-green`): `oklch(0.65 0.12 140)` - Secondary brand color
- **Laundry Orange** (`--color-laundry-orange`): `oklch(0.75 0.15 30)` - Accent color for CTAs
- **Laundry Purple** (`--color-laundry-purple`): `oklch(0.60 0.12 280)` - Service-specific color

### Light Colors
- **Light Blue** (`--color-laundry-light-blue`): `oklch(0.95 0.05 240)` - Background accents
- **Light Green** (`--color-laundry-light-green`): `oklch(0.95 0.05 140)` - Success states
- **Light Orange** (`--color-laundry-light-orange`): `oklch(0.95 0.05 30)` - Warning states

### Semantic Colors
- **Success**: Green variants for completed actions
- **Warning**: Orange variants for pending states
- **Error**: Red variants for errors and destructive actions
- **Info**: Blue variants for informational content

## Typography

### Font Stack
- **Primary**: Geist Sans (system font fallback)
- **Monospace**: Geist Mono (system font fallback)

### Heading Scale
- `xs`: 0.75rem (12px)
- `sm`: 0.875rem (14px)
- `base`: 1rem (16px)
- `lg`: 1.125rem (18px)
- `xl`: 1.25rem (20px)
- `2xl`: 1.5rem (24px)
- `3xl`: 1.875rem (30px)
- `4xl`: 2.25rem (36px)
- `5xl`: 3rem (48px)
- `6xl`: 3.75rem (60px)
- `7xl`: 4.5rem (72px)

### Font Weights
- `normal`: 400
- `medium`: 500
- `semibold`: 600
- `bold`: 700
- `extrabold`: 800
- `black`: 900

## Spacing System

### Container Variants
- `page`: max-width 80rem (1280px)
- `section`: max-width 72rem (1152px)
- `content`: max-width 64rem (1024px)
- `narrow`: max-width 42rem (672px)
- `wide`: max-width 100%

### Padding Scale
- `sm`: 0.5rem (8px)
- `default`: 1rem (16px)
- `lg`: 1.5rem (24px)
- `xl`: 2rem (32px)
- `none`: 0

## Border Radius
- `sm`: 0.25rem (4px)
- `default`: 0.375rem (6px)
- `md`: 0.5rem (8px)
- `lg`: 0.625rem (10px)
- `xl`: 0.75rem (12px)

## Components

### Button
```tsx
import { Button } from "@/components/ui"

// Variants
<Button variant="default">Default</Button>
<Button variant="laundry-primary">Primary</Button>
<Button variant="laundry-secondary">Secondary</Button>
<Button variant="laundry-outline">Outline</Button>
<Button variant="laundry-ghost">Ghost</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>
```

### Card
```tsx
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui"

// Variants
<Card variant="default">Default Card</Card>
<Card variant="service-card">Service Card</Card>
<Card variant="pricing-card">Pricing Card</Card>
<Card variant="testimonial-card">Testimonial Card</Card>
<Card variant="feature-card">Feature Card</Card>

// Sizes
<Card size="sm">Small Card</Card>
<Card size="default">Default Card</Card>
<Card size="lg">Large Card</Card>
<Card size="xl">Extra Large Card</Card>
```

### Input
```tsx
import { Input } from "@/components/ui"

// Variants
<Input variant="default" placeholder="Default input" />
<Input variant="booking-form" placeholder="Booking form input" />
<Input variant="contact-form" placeholder="Contact form input" />
<Input variant="search" placeholder="Search..." />

// Sizes
<Input size="sm" placeholder="Small input" />
<Input size="default" placeholder="Default input" />
<Input size="lg" placeholder="Large input" />
<Input size="xl" placeholder="Extra large input" />
```

### Badge
```tsx
import { Badge } from "@/components/ui"

// Service-specific variants
<Badge variant="service-tag">Dry Cleaning</Badge>
<Badge variant="pricing">$15.99</Badge>
<Badge variant="feature">Express Service</Badge>
<Badge variant="status-pending">Pending</Badge>
<Badge variant="status-completed">Completed</Badge>
<Badge variant="status-processing">Processing</Badge>
<Badge variant="eco-friendly">Eco-Friendly</Badge>
<Badge variant="express">Express</Badge>
<Badge variant="premium">Premium</Badge>
```

### Icon
```tsx
import { Icon } from "@/components/ui"
import { WashingMachine, Truck, Star } from "lucide-react"

// Variants
<Icon icon={WashingMachine} variant="primary" />
<Icon icon={Truck} variant="secondary" />
<Icon icon={Star} variant="laundry" />

// Sizes
<Icon icon={WashingMachine} size="sm" />
<Icon icon={WashingMachine} size="default" />
<Icon icon={WashingMachine} size="lg" />
<Icon icon={WashingMachine} size="xl" />
<Icon icon={WashingMachine} size="2xl" />
<Icon icon={WashingMachine} size="3xl" />
```

### Heading
```tsx
import { Heading } from "@/components/ui"

// Variants
<Heading variant="hero" size="5xl">Hero Title</Heading>
<Heading variant="section" size="3xl">Section Title</Heading>
<Heading variant="card" size="2xl">Card Title</Heading>
<Heading variant="primary" size="xl">Primary Heading</Heading>

// Semantic elements
<Heading as="h1" size="5xl">Page Title</Heading>
<Heading as="h2" size="3xl">Section Title</Heading>
<Heading as="h3" size="2xl">Subsection Title</Heading>
```

### Container
```tsx
import { Container } from "@/components/ui"

// Variants
<Container variant="page">Page content</Container>
<Container variant="section">Section content</Container>
<Container variant="content">Content area</Container>
<Container variant="narrow">Narrow content</Container>

// Padding options
<Container padding="sm">Small padding</Container>
<Container padding="default">Default padding</Container>
<Container padding="lg">Large padding</Container>
<Container padding="xl">Extra large padding</Container>
```

## Form Components

### Form Structure
```tsx
import { Input, Label, Textarea, Select, Button } from "@/components/ui"

<div className="space-y-4">
  <div className="space-y-2">
    <Label variant="form-label" htmlFor="name">Full Name</Label>
    <Input variant="booking-form" id="name" placeholder="Enter your full name" />
  </div>
  
  <div className="space-y-2">
    <Label variant="form-label" htmlFor="service">Service Type</Label>
    <Select>
      <SelectTrigger variant="booking-form">
        <SelectValue placeholder="Select a service" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="dry-cleaning">Dry Cleaning</SelectItem>
        <SelectItem value="laundry">Laundry</SelectItem>
        <SelectItem value="ironing">Ironing</SelectItem>
      </SelectContent>
    </Select>
  </div>
  
  <div className="space-y-2">
    <Label variant="form-label" htmlFor="message">Special Instructions</Label>
    <Textarea variant="booking-form" id="message" placeholder="Any special instructions..." />
  </div>
  
  <Button variant="laundry-primary" size="lg">Book Now</Button>
</div>
```

## Layout Components

### Section Layout
```tsx
import { Container, Heading, Separator } from "@/components/ui"

<section className="py-16">
  <Container variant="section">
    <div className="text-center mb-12">
      <Heading variant="section" size="3xl">Our Services</Heading>
      <Separator variant="laundry" className="w-24 mx-auto mt-4" />
    </div>
    
    {/* Content */}
  </Container>
</section>
```

### Card Grid
```tsx
import { Card, CardHeader, CardTitle, CardContent, Badge } from "@/components/ui"

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <Card variant="service-card">
    <CardHeader>
      <CardTitle>Dry Cleaning</CardTitle>
      <Badge variant="service-tag">Professional</Badge>
    </CardHeader>
    <CardContent>
      <p>Professional dry cleaning for all your delicate garments.</p>
    </CardContent>
  </Card>
  
  {/* More cards */}
</div>
```

## Usage Guidelines

### Color Usage
- Use **Laundry Blue** for primary actions, navigation, and brand elements
- Use **Laundry Green** for success states and secondary actions
- Use **Laundry Orange** for CTAs and attention-grabbing elements
- Use **Laundry Purple** for service-specific content
- Use light variants for backgrounds and subtle accents

### Typography Hierarchy
- Use `h1` (5xl-7xl) for page titles and hero sections
- Use `h2` (3xl-4xl) for major section headings
- Use `h3` (2xl) for subsection headings
- Use `h4` (xl) for card titles and form sections
- Use `h5` (lg) for small headings
- Use `h6` (base) for the smallest headings

### Spacing Guidelines
- Use consistent spacing between sections (py-16)
- Use smaller spacing between related elements (space-y-4)
- Use larger spacing for major content blocks (py-24)
- Maintain visual hierarchy with appropriate spacing

### Component Variants
- Use service-specific variants for laundry-related content
- Use form-specific variants for input fields
- Use status variants for dynamic content
- Use size variants to maintain visual hierarchy

## Accessibility

### Color Contrast
- All text meets WCAG 2.1 AA contrast requirements
- Interactive elements have sufficient contrast ratios
- Focus states are clearly visible

### Keyboard Navigation
- All interactive elements are keyboard accessible
- Focus indicators are visible and consistent
- Tab order follows logical document flow

### Screen Reader Support
- Semantic HTML elements are used appropriately
- ARIA labels are provided where needed
- Form labels are properly associated with inputs

## Responsive Design

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Mobile-First Approach
- Components are designed mobile-first
- Progressive enhancement for larger screens
- Touch-friendly interaction targets (minimum 44px)

## Performance

### Optimization
- Components use CSS-in-JS for optimal bundle size
- Icons are tree-shakeable
- Variants are generated at build time
- Minimal runtime overhead

### Loading States
- Skeleton loaders for content
- Progressive loading for images
- Optimistic UI updates

## Future Enhancements

### Planned Components
- Modal/Dialog components
- Toast notification system
- Data table components
- Chart and visualization components
- Advanced form components (date picker, time picker)

### Theme System
- Dark mode support
- Custom theme generation
- Brand customization tools
- Component playground

---

This design system provides a solid foundation for building a professional, accessible, and user-friendly laundry service website. All components are designed with the specific needs of a laundry service business in mind, with appropriate color schemes, typography, and interaction patterns.
