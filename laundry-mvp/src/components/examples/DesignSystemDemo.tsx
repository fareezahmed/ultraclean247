import React from "react"
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  Input,
  Textarea,
  Label,
  Badge,
  Separator,
  Icon,
  Container,
  Heading,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui"
import {
  WashingMachine,
  Truck,
  Star,
  Clock,
  Shield,
  Leaf,
  Zap,
  Crown,
} from "lucide-react"

export function DesignSystemDemo() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Container variant="page">
        <div className="text-center mb-16">
          <Heading variant="hero" size="5xl" as="h1" className="mb-4">
            Laundry Service Design System
          </Heading>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive design system built for modern laundry service websites
          </p>
        </div>

        {/* Color Palette */}
        <section className="mb-16">
          <Heading variant="section" size="3xl" as="h2" className="mb-8 text-center">
            Color Palette
          </Heading>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-20 h-20 bg-laundry-blue rounded-lg mx-auto mb-2"></div>
              <p className="font-semibold">Laundry Blue</p>
              <p className="text-sm text-gray-500">Primary</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-laundry-green rounded-lg mx-auto mb-2"></div>
              <p className="font-semibold">Laundry Green</p>
              <p className="text-sm text-gray-500">Secondary</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-laundry-orange rounded-lg mx-auto mb-2"></div>
              <p className="font-semibold">Laundry Orange</p>
              <p className="text-sm text-gray-500">Accent</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-laundry-purple rounded-lg mx-auto mb-2"></div>
              <p className="font-semibold">Laundry Purple</p>
              <p className="text-sm text-gray-500">Service</p>
            </div>
          </div>
        </section>

        <Separator className="my-16" />

        {/* Typography */}
        <section className="mb-16">
          <Heading variant="section" size="3xl" as="h2" className="mb-8 text-center">
            Typography
          </Heading>
          <div className="space-y-4">
            <Heading variant="hero" size="5xl">Hero Heading (5xl)</Heading>
            <Heading variant="section" size="4xl">Section Heading (4xl)</Heading>
            <Heading variant="section" size="3xl">Section Heading (3xl)</Heading>
            <Heading variant="card" size="2xl">Card Title (2xl)</Heading>
            <Heading variant="primary" size="xl">Primary Heading (xl)</Heading>
            <Heading variant="default" size="lg">Default Heading (lg)</Heading>
          </div>
        </section>

        <Separator className="my-16" />

        {/* Buttons */}
        <section className="mb-16">
          <Heading variant="section" size="3xl" as="h2" className="mb-8 text-center">
            Buttons
          </Heading>
          <div className="space-y-6">
            <div>
              <Heading variant="card" size="xl" className="mb-4">Variants</Heading>
              <div className="flex flex-wrap gap-4">
                <Button variant="default">Default</Button>
                <Button variant="laundry-primary">Primary</Button>
                <Button variant="laundry-secondary">Secondary</Button>
                <Button variant="laundry-outline">Outline</Button>
                <Button variant="laundry-ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
              </div>
            </div>
            <div>
              <Heading variant="card" size="xl" className="mb-4">Sizes</Heading>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="xl">Extra Large</Button>
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-16" />

        {/* Cards */}
        <section className="mb-16">
          <Heading variant="section" size="3xl" as="h2" className="mb-8 text-center">
            Cards
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card variant="service-card">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Icon icon={WashingMachine} variant="primary" size="lg" />
                  <CardTitle>Dry Cleaning</CardTitle>
                </div>
                <Badge variant="service-tag">Professional</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Professional dry cleaning for all your delicate garments with eco-friendly solvents.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="laundry-primary" size="sm" className="w-full">
                  Learn More
                </Button>
              </CardFooter>
            </Card>

            <Card variant="pricing-card">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Icon icon={Truck} variant="secondary" size="lg" />
                  <CardTitle>Express Service</CardTitle>
                </div>
                <Badge variant="express">24h Delivery</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Fast turnaround time for urgent laundry needs with premium care.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="laundry-secondary" size="sm" className="w-full">
                  Book Now
                </Button>
              </CardFooter>
            </Card>

            <Card variant="testimonial-card">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Icon icon={Star} variant="laundry" size="lg" />
                  <CardTitle>Customer Review</CardTitle>
                </div>
                <Badge variant="premium">5 Stars</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 italic">
                  "Excellent service! My clothes came back perfectly clean and fresh."
                </p>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-gray-500">- Sarah M.</p>
              </CardFooter>
            </Card>
          </div>
        </section>

        <Separator className="my-16" />

        {/* Form Elements */}
        <section className="mb-16">
          <Heading variant="section" size="3xl" as="h2" className="mb-8 text-center">
            Form Elements
          </Heading>
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="space-y-2">
              <Label variant="form-label" htmlFor="name">Full Name</Label>
              <Input variant="booking-form" id="name" placeholder="Enter your full name" />
            </div>
            
            <div className="space-y-2">
              <Label variant="form-label" htmlFor="email">Email Address</Label>
              <Input variant="contact-form" id="email" type="email" placeholder="your@email.com" />
            </div>
            
            <div className="space-y-2">
              <Label variant="form-label" htmlFor="service">Service Type</Label>
              <Select>
                <SelectTrigger variant="booking-form">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="laundry">Laundry</SelectItem>
                  <SelectItem value="ironing">Ironing</SelectItem>
                  <SelectItem value="express">Express Service</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label variant="form-label" htmlFor="message">Special Instructions</Label>
              <Textarea variant="booking-form" id="message" placeholder="Any special instructions or notes..." />
            </div>
            
            <Button variant="laundry-primary" size="lg" className="w-full">
              Book Service
            </Button>
          </div>
        </section>

        <Separator className="my-16" />

        {/* Badges */}
        <section className="mb-16">
          <Heading variant="section" size="3xl" as="h2" className="mb-8 text-center">
            Badges
          </Heading>
          <div className="flex flex-wrap gap-4 justify-center">
            <Badge variant="service-tag">Laundry</Badge>
            <Badge variant="pricing">$15.99</Badge>
            <Badge variant="feature">Express Service</Badge>
            <Badge variant="status-pending">Pending</Badge>
            <Badge variant="status-completed">Completed</Badge>
            <Badge variant="status-processing">Processing</Badge>
            <Badge variant="eco-friendly">Eco-Friendly</Badge>
            <Badge variant="express">Express</Badge>
            <Badge variant="premium">Premium</Badge>
          </div>
        </section>

        <Separator className="my-16" />

        {/* Icons */}
        <section className="mb-16">
          <Heading variant="section" size="3xl" as="h2" className="mb-8 text-center">
            Icons
          </Heading>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Icon icon={WashingMachine} variant="primary" size="3xl" className="mx-auto mb-2" />
              <p className="font-semibold">Washing Machine</p>
              <p className="text-sm text-gray-500">Primary</p>
            </div>
            <div className="text-center">
              <Icon icon={Truck} variant="secondary" size="3xl" className="mx-auto mb-2" />
              <p className="font-semibold">Delivery</p>
              <p className="text-sm text-gray-500">Secondary</p>
            </div>
            <div className="text-center">
              <Icon icon={Star} variant="laundry" size="3xl" className="mx-auto mb-2" />
              <p className="font-semibold">Rating</p>
              <p className="text-sm text-gray-500">Laundry</p>
            </div>
            <div className="text-center">
              <Icon icon={Leaf} variant="success" size="3xl" className="mx-auto mb-2" />
              <p className="font-semibold">Eco-Friendly</p>
              <p className="text-sm text-gray-500">Success</p>
            </div>
          </div>
        </section>

        <Separator className="my-16" />

        {/* Features Grid */}
        <section className="mb-16">
          <Heading variant="section" size="3xl" as="h2" className="mb-8 text-center">
            Features Grid
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card variant="feature-card" className="text-center">
              <CardContent className="pt-6">
                <Icon icon={Clock} variant="primary" size="2xl" className="mx-auto mb-4" />
                <Heading variant="card" size="lg" className="mb-2">Fast Service</Heading>
                <p className="text-gray-600">Same day service available for urgent needs</p>
              </CardContent>
            </Card>
            
            <Card variant="feature-card" className="text-center">
              <CardContent className="pt-6">
                <Icon icon={Shield} variant="secondary" size="2xl" className="mx-auto mb-4" />
                <Heading variant="card" size="lg" className="mb-2">Quality Guarantee</Heading>
                <p className="text-gray-600">100% satisfaction guarantee on all services</p>
              </CardContent>
            </Card>
            
            <Card variant="feature-card" className="text-center">
              <CardContent className="pt-6">
                <Icon icon={Leaf} variant="success" size="2xl" className="mx-auto mb-4" />
                <Heading variant="card" size="lg" className="mb-2">Eco-Friendly</Heading>
                <p className="text-gray-600">Environmentally conscious cleaning methods</p>
              </CardContent>
            </Card>
            
            <Card variant="feature-card" className="text-center">
              <CardContent className="pt-6">
                <Icon icon={Zap} variant="warning" size="2xl" className="mx-auto mb-4" />
                <Heading variant="card" size="lg" className="mb-2">Express Delivery</Heading>
                <p className="text-gray-600">Quick pickup and delivery to your doorstep</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </Container>
    </div>
  )
}
