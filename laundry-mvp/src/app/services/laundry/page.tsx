import { Metadata } from 'next'
import MainLayout from '@/components/layout/MainLayout'
import { Container } from '@/components/ui/container'
import { Heading } from '@/components/ui/heading'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { Separator } from '@/components/ui/separator'
import { 
  Sparkles, 
  Shield, 
  Clock, 
  Truck, 
  Leaf, 
  CheckCircle, 
  Star,
  ArrowLeft,
  Zap,
  Package,
  Droplets
} from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
      title: 'Laundry Service - Ultra Clean 247',
  description: 'Professional wash, dry & fold laundry service. Premium detergents, perfect folding, and quality guaranteed. Free pickup and delivery.',
  keywords: 'laundry service, wash dry fold, premium detergents, perfect folding, pickup delivery',
}

const processSteps = [
  {
    step: 1,
    title: 'Sorting & Inspection',
    description: 'Clothes are sorted by fabric type, color, and care requirements. Each item is inspected for stains and damage.',
    icon: Shield
  },
  {
    step: 2,
    title: 'Gentle Washing',
    description: 'Premium eco-friendly detergents are used with appropriate water temperatures for each fabric type.',
    icon: Droplets
  },
  {
    step: 3,
    title: 'Premium Drying',
    description: 'Careful drying with proper temperatures to prevent shrinkage and maintain fabric quality.',
    icon: Package
  },
  {
    step: 4,
    title: 'Professional Folding',
    description: 'Expert folding techniques ensure your clothes are neatly organized and ready to wear.',
    icon: Sparkles
  },
  {
    step: 5,
    title: 'Quality Check',
    description: 'Final inspection to ensure all items meet our high standards before delivery.',
    icon: CheckCircle
  }
]

const pricingOptions = [
  {
    plan: 'Everyday Laundry Bundle',
    price: '$30',
    items: '5kg minimum (wash, dry, fold)',
    description: 'Most popular choice for regular laundry',
    features: ['5kg minimum bundle', 'Wash, dry & fold', 'Premium detergents', 'Perfect folding', '24-hour turnaround']
  },
  {
    plan: 'Domestic Washing & Drying',
    price: '$25',
    items: '5kg minimum (no folding)',
    description: 'Perfect for those who prefer to fold themselves',
    features: ['5kg minimum', 'Wash & dry only', 'Premium detergents', '24-hour turnaround', 'No folding service']
  },
  {
    plan: 'Commercial Washing Bundle',
    price: '$35',
    items: '5kg minimum bundle package',
    description: 'Great for businesses and commercial needs',
    features: ['5kg minimum bundle', 'Wash, dry & fold', 'Premium detergents', 'Priority processing', 'Business rates']
  }
]

const benefits = [
  {
    title: 'Premium Detergents',
    description: 'We use eco-friendly, hypoallergenic detergents that are gentle on your clothes and skin.',
    icon: Leaf
  },
  {
    title: 'Perfect Folding',
    description: 'Our expert folding techniques ensure your clothes are neatly organized and ready to wear.',
    icon: Package
  },
  {
    title: 'Free Pickup & Delivery',
    description: 'Convenient service that comes to you - no need to leave your home.',
    icon: Truck
  },
  {
    title: 'Quality Guaranteed',
    description: '100% satisfaction guaranteed or we\'ll re-wash for free.',
    icon: CheckCircle
  }
]

const includedItems = [
  'T-shirts and tops',
  'Pants and jeans',
  'Socks and underwear',
  'Towels and linens',
  'Pajamas and loungewear',
  'Baby clothes',
  'Workout clothes',
  'Casual dresses'
]

export default function LaundryPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-laundry-green/5 to-laundry-blue/5">
        <Container variant="page">
          <div className="mb-8">
            <Link href="/services" className="inline-flex items-center text-laundry-blue hover:text-laundry-blue/80 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Services
            </Link>
          </div>
          
          <div className="text-center mb-16">
            <Badge variant="service-tag" className="mb-4">Most Popular</Badge>
            <Heading variant="hero" size="5xl" className="mb-6">
              Professional Laundry Service
            </Heading>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Complete wash, dry, and fold service with premium detergents and expert care. 
              Save time and enjoy perfectly clean, neatly folded clothes delivered to your door.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-laundry-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon icon={Sparkles} className="h-8 w-8 text-laundry-green" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Wash, Dry & Fold</h3>
              <p className="text-sm text-gray-600">Complete laundry service from start to finish</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-laundry-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon icon={Leaf} className="h-8 w-8 text-laundry-blue" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Eco-Friendly</h3>
              <p className="text-sm text-gray-600">Premium green detergents and processes</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-laundry-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon icon={Package} className="h-8 w-8 text-laundry-orange" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Perfect Folding</h3>
              <p className="text-sm text-gray-600">Expert folding for neat organization</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <Container variant="page">
          <div className="text-center mb-16">
            <Heading variant="section" size="4xl" className="mb-6">
              Our Laundry Process
            </Heading>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive 5-step process that ensures your clothes receive the best care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.step} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-laundry-green/10 rounded-full flex items-center justify-center mx-auto">
                    <Icon icon={step.icon} className="h-8 w-8 text-laundry-green" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-laundry-green text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <Container variant="page">
          <div className="text-center mb-16">
            <Heading variant="section" size="4xl" className="mb-6">
              Simple, Transparent Pricing
            </Heading>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your laundry needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {pricingOptions.map((option, index) => (
              <Card key={index} variant={index === 1 ? "pricing-card" : "feature-card"} className={`p-8 ${index === 1 ? 'border-2 border-laundry-green' : ''}`}>
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{option.plan}</h3>
                  <div className="text-3xl font-bold text-laundry-green mb-2">{option.price}</div>
                  <p className="text-sm text-gray-600 mb-4">{option.items}</p>
                  <p className="text-gray-600">{option.description}</p>
                </div>
                
                <Separator className="my-6" />
                
                <ul className="space-y-3 mb-8">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-laundry-green mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={index === 1 ? "laundry-primary" : "laundry-outline"} 
                  className="w-full"
                  asChild
                >
                  <a href="/book">Choose Plan</a>
                </Button>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Card variant="feature-card" className="p-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <Icon icon={Zap} className="h-8 w-8 text-laundry-orange mr-3" />
                <Heading variant="card" size="xl">Express Service Available</Heading>
              </div>
              <p className="text-gray-600 mb-6">
                Need your laundry done faster? Our express service offers same-day turnaround 
                for an additional $10 per load.
              </p>
              <Button variant="laundry-primary" asChild>
                <a href="/book">Book Express Service</a>
              </Button>
            </Card>
          </div>
        </Container>
      </section>

      {/* What's Included Section */}
      <section className="py-20">
        <Container variant="page">
          <div className="text-center mb-16">
            <Heading variant="section" size="4xl" className="mb-6">
              What's Included in Your Laundry?
            </Heading>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We handle all types of everyday clothing and linens
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {includedItems.map((item, index) => (
              <Card key={index} variant="feature-card" className="p-4 text-center">
                <div className="w-12 h-12 bg-laundry-green/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon icon={Sparkles} className="h-6 w-6 text-laundry-green" />
                </div>
                <p className="text-sm font-medium text-gray-900">{item}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <Container variant="page">
          <div className="text-center mb-16">
            <Heading variant="section" size="4xl" className="mb-6">
              Why Choose Our Laundry Service?
            </Heading>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine convenience with quality care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} variant="feature-card" className="p-6">
                <div className="flex items-start">
                  <div className={`p-3 bg-${benefit.icon === Leaf ? 'laundry-green' : benefit.icon === Package ? 'laundry-blue' : benefit.icon === Truck ? 'laundry-orange' : 'laundry-purple'}/10 rounded-xl mr-4`}>
                    <Icon icon={benefit.icon} className={`h-6 w-6 text-${benefit.icon === Leaf ? 'laundry-green' : benefit.icon === Package ? 'laundry-blue' : benefit.icon === Truck ? 'laundry-orange' : 'laundry-purple'}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-laundry-green/5 to-laundry-blue/5">
        <Container variant="page">
          <div className="text-center">
            <Heading variant="section" size="3xl" className="mb-6">
              Ready to Save Time on Laundry?
            </Heading>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Book your laundry service today and enjoy perfectly clean, neatly folded clothes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="laundry-primary" size="lg" asChild>
                <a href="/book">Book Now</a>
              </Button>
              <Button variant="laundry-outline" size="lg" asChild>
                <a href="/pricing">View All Pricing</a>
              </Button>
            </div>
          </div>
                 </Container>
       </section>
       </div>
     </MainLayout>
   )
 }
