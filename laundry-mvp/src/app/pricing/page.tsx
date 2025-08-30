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
  Shirt,
  Sparkles,
  Zap,
  Clock,
  Heart,
  Shield,
  Star,
  Calculator,
  Package,
  CheckCircle,
  DollarSign,
  Bed,
  Briefcase
} from 'lucide-react'

export const metadata: Metadata = {
      title: 'Pricing - Ultra Clean 247',
  description: 'Transparent pricing for all our laundry services. Competitive rates, package deals, and express options available.',
  keywords: 'laundry pricing, ironing service cost, express service pricing, bundle packages',
}

const serviceCategories = [
  {
    title: 'Laundry Services',
    icon: Sparkles,
    color: 'laundry-green',
    items: [
      { name: 'Everyday Laundry Bundle', price: '$30', description: '5kg minimum (wash, dry, fold), +$5.50 per extra kg' },
      { name: 'Domestic Washing & Drying', price: '$25', description: '5kg minimum, +$5.00 per extra kg (No folding)' },
      { name: 'Commercial Washing Bundle', price: '$35', description: '5kg minimum bundle package' },
      { name: 'Bedding Refresh Bundle', price: '$35', description: '2 sets of bedding (wash, dry, fold)' }
    ]
  },
  {
    title: 'Ironing Service',
    icon: Zap,
    color: 'laundry-orange',
    items: [
      { name: 'Minimum Ironing Service', price: '$20', description: 'Minimum charge for ironing services' },
      { name: 'Shirts & Blouses', price: '$8', description: 'Business shirts, casual shirts, blouses' },
      { name: 'Pants & Trousers', price: '$10', description: 'Dress pants, khakis, slacks' },
      { name: 'Dresses', price: '$15', description: 'Casual and formal dresses' },
      { name: 'Suits (2-piece)', price: '$25', description: 'Jacket and pants together' },
      { name: 'Coats & Jackets', price: '$18', description: 'Winter coats, blazers, jackets' },
      { name: 'Skirts', price: '$12', description: 'All types of skirts' }
    ]
  }
]

const specialtyServices = [
  {
    title: 'Express Service',
    icon: Clock,
    color: 'laundry-purple',
    price: '+$10',
    description: 'Same-day turnaround for urgent needs',
    features: ['Priority processing', 'Same-day service', 'Premium care', 'Urgent handling']
  }
]

const packageDeals = [
  {
    title: 'Work Week Special Bundle',
    icon: Briefcase,
    color: 'laundry-blue',
    price: '$42',
    originalPrice: '$50',
    savings: '$8',
    description: 'Perfect for working professionals',
    includes: [
      '5kg wash, dry & fold',
      '5 work shirts ironed',
      'Free pickup & delivery',
      '24-hour turnaround'
    ]
  },
  {
    title: 'Everyday Laundry Bundle',
    icon: Package,
    color: 'laundry-green',
    price: '$30',
    originalPrice: '$35',
    savings: '$5',
    description: 'Most popular choice for regular laundry',
    includes: [
      '5kg wash, dry & fold',
      'Premium detergents',
      'Perfect folding',
      '24-hour turnaround',
      'Fabric softener'
    ]
  },
  {
    title: 'Bedding Refresh Bundle',
    icon: Bed,
    color: 'laundry-purple',
    price: '$35',
    originalPrice: '$40',
    savings: '$5',
    description: 'Complete bedding care',
    includes: [
      '2 sets of bedding',
      'Wash, dry & fold',
      'Premium care',
      'Free pickup & delivery',
      '48-hour turnaround'
    ]
  }
]

const additionalFees = [
  {
    service: 'Stain Treatment',
    fee: '$5',
    description: 'Additional charge for stubborn stains'
  },
  {
    service: 'Fabric Protection',
    fee: '$3',
    description: 'Extra protection for delicate fabrics'
  },
  {
    service: 'Rush Service',
    fee: '+$10',
    description: 'Same-day turnaround'
  },
  {
    service: 'After Hours Pickup',
    fee: '$15',
    description: 'Pickup outside business hours'
  }
]

export default function PricingPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-laundry-blue/5 to-laundry-green/5">
        <Container variant="page">
          <div className="text-center mb-16">
            <Badge variant="service-tag" className="mb-4">Transparent Pricing</Badge>
            <Heading variant="hero" size="5xl" className="mb-6">
              Simple, Clear Pricing
            </Heading>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              No hidden fees, no surprises. Our transparent pricing makes it easy to choose 
              the right service for your needs. Quality care at competitive rates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-laundry-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon icon={DollarSign} className="h-8 w-8 text-laundry-blue" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">No Hidden Fees</h3>
              <p className="text-sm text-gray-600">Transparent pricing with no surprises</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-laundry-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon icon={Package} className="h-8 w-8 text-laundry-green" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Package Deals</h3>
              <p className="text-sm text-gray-600">Save money with our service packages</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-laundry-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon icon={Zap} className="h-8 w-8 text-laundry-orange" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Express Options</h3>
              <p className="text-sm text-gray-600">Same-day service for urgent needs</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Package Deals Section */}
      <section className="py-20">
        <Container variant="page">
          <div className="text-center mb-16">
            <Heading variant="section" size="4xl" className="mb-6">
              Save with Package Deals
            </Heading>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Bundle services and save money with our popular packages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {packageDeals.map((pkg, index) => (
              <Card key={index} variant={index === 1 ? "pricing-card" : "feature-card"} className={`p-8 ${index === 1 ? 'border-2 border-laundry-green' : ''}`}>
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-${pkg.color}/10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon icon={pkg.icon} className={`h-8 w-8 text-${pkg.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{pkg.title}</h3>
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-3xl font-bold text-laundry-blue">{pkg.price}</span>
                    <span className="text-lg text-gray-500 line-through ml-2">{pkg.originalPrice}</span>
                  </div>
                  <Badge variant="eco-friendly" className="mb-4">Save {pkg.savings}</Badge>
                  <p className="text-gray-600">{pkg.description}</p>
                </div>
                
                <Separator className="my-6" />
                
                <ul className="space-y-3 mb-8">
                  {pkg.includes.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-laundry-green mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={index === 1 ? "laundry-primary" : "laundry-outline"} 
                  className="w-full"
                  asChild
                >
                  <a href="/book">Choose Package</a>
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Main Services Pricing */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <Container variant="page">
          <div className="text-center mb-16">
            <Heading variant="section" size="4xl" className="mb-6">
              Service Pricing
            </Heading>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Detailed pricing for all our core services
            </p>
          </div>

          {serviceCategories.map((category, index) => (
            <div key={index} className="mb-16">
              <div className="text-center mb-8">
                <div className={`w-16 h-16 bg-${category.color}/10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon icon={category.icon} className={`h-8 w-8 text-${category.color}`} />
                </div>
                <Heading variant="section" size="3xl" className="mb-4">{category.title}</Heading>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <Card key={itemIndex} variant="pricing-card" className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-gray-900">{item.name}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                      <span className={`text-2xl font-bold text-${category.color}`}>{item.price}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </Container>
      </section>

      {/* Specialty Services */}
      <section className="py-20">
        <Container variant="page">
          <div className="text-center mb-16">
            <Heading variant="section" size="4xl" className="mb-6">
              Specialty Services
            </Heading>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized services for unique needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specialtyServices.map((service, index) => (
              <Card key={index} variant="feature-card" className="p-6">
                <div className="flex items-start mb-4">
                  <div className={`p-3 bg-${service.color}/10 rounded-xl mr-4`}>
                    <Icon icon={service.icon} className={`h-8 w-8 text-${service.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{service.title}</h3>
                      <span className={`text-xl font-bold text-${service.color}`}>{service.price}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className={`w-1 h-1 bg-${service.color} rounded-full mr-2`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button variant="laundry-outline" size="sm" className="w-full" asChild>
                  <a href="/book">Book Service</a>
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Additional Fees */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <Container variant="page">
          <div className="text-center mb-16">
            <Heading variant="section" size="4xl" className="mb-6">
              Additional Services & Fees
            </Heading>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Optional services and fees for special requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFees.map((fee, index) => (
              <Card key={index} variant="feature-card" className="p-6 text-center">
                <div className="w-12 h-12 bg-laundry-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon icon={Calculator} className="h-6 w-6 text-laundry-blue" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{fee.service}</h3>
                <div className="text-2xl font-bold text-laundry-blue mb-2">{fee.fee}</div>
                <p className="text-sm text-gray-600">{fee.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Price Calculator CTA */}
      <section className="py-20">
        <Container variant="page">
          <div className="text-center">
            <Card variant="feature-card" className="p-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <Icon icon={Calculator} className="h-8 w-8 text-laundry-blue mr-3" />
                <Heading variant="card" size="xl">Need Help Calculating?</Heading>
              </div>
              <p className="text-gray-600 mb-6">
                Not sure about the cost? Contact us for a personalized quote based on your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="laundry-primary" asChild>
                  <a href="/contact">Get Quote</a>
                </Button>
                <Button variant="laundry-outline" asChild>
                  <a href="/book">Book Now</a>
                </Button>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-laundry-blue/5 to-laundry-green/5">
        <Container variant="page">
          <div className="text-center">
            <Heading variant="section" size="3xl" className="mb-6">
              Ready to Get Started?
            </Heading>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Book your service today and experience professional laundry care at competitive prices
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="laundry-primary" size="lg" asChild>
                <a href="/book">Book Now</a>
              </Button>
              <Button variant="laundry-outline" size="lg" asChild>
                <a href="/contact">Contact Us</a>
              </Button>
            </div>
          </div>
                 </Container>
       </section>
       </div>
     </MainLayout>
   )
 }
