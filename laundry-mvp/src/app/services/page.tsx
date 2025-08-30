import { Metadata } from 'next'
import MainLayout from '@/components/layout/MainLayout'
import { Container } from '@/components/ui/container'
import { Heading } from '@/components/ui/heading'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import {
  Shirt,
  Sparkles,
  Zap,
  Clock,
  Heart,
  Shield,
  Truck,
  Leaf,
  Star,
  CheckCircle
} from 'lucide-react'

export const metadata: Metadata = {
      title: 'Our Services - Ultra Clean 247',
  description: 'Professional laundry, ironing, and specialty services. Quality guaranteed with eco-friendly processes.',
  keywords: 'laundry service, ironing, express service',
}

const services = [
  {
    id: 'everyday-laundry',
    title: 'Everyday Laundry Bundle',
    description: '5kg minimum (wash, dry, fold) with premium detergents and careful handling.',
    iconName: 'Sparkles',
    color: 'laundry-green',
    price: '$30',
    unit: 'per 5kg',
    badge: 'Most Popular',
    features: [
      '5kg minimum bundle',
      'Wash, dry & fold',
      'Gentle detergents',
      'Perfect folding',
      'Quality inspection'
    ],
    process: [
      'Sorting by fabric type',
      'Gentle washing cycle',
      'Premium drying',
      'Professional folding',
      'Quality check'
    ]
  },
  {
    id: 'ironing',
    title: 'Ironing Service',
    description: 'Minimum charge for ironing services with expert pressing and steam treatment.',
    iconName: 'Zap',
    color: 'laundry-orange',
    price: '$20',
    unit: 'minimum',
    badge: 'Professional',
    features: [
      'Minimum $20 charge',
      'Expert pressing',
      'Steam treatment',
      'Crisp finish',
      'Professional handling'
    ],
    process: [
      'Fabric assessment',
      'Steam treatment',
      'Expert pressing',
      'Quality inspection',
      'Careful packaging'
    ]
  }
]

const additionalServices = [
  {
    id: 'express',
    title: 'Express Service',
    description: 'Same-day service for urgent needs with premium care.',
    iconName: 'Clock',
    color: 'laundry-purple',
    price: '$35',
    unit: 'from',
    badge: 'Express',
    features: ['Same-day turnaround', 'Priority processing', 'Premium care', 'Urgent handling']
  }
]

export default function ServicesPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-laundry-blue/5 to-laundry-green/5">
        <Container variant="page">
          <div className="text-center mb-16">
            <Badge variant="service-tag" className="mb-4">Professional Care</Badge>
            <Heading variant="hero" size="5xl" className="mb-6">
              Our Premium Services
            </Heading>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Professional laundry and ironing services tailored to your needs. 
              From everyday laundry to expert ironing, we provide quality care 
              with eco-friendly processes and convenient pickup and delivery.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <Container variant="page">
          <div className="text-center mb-16">
            <Heading variant="section" size="4xl" className="mb-6">
              Core Services
            </Heading>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our three main services provide comprehensive care for all your laundry needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service) => {
              const iconMap = {
                Shirt,
                Sparkles,
                Zap
              };
              const IconComponent = iconMap[service.iconName as keyof typeof iconMap];
              
              return (
                <Card key={service.id} variant="service-card" className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardHeader className="pb-4">
                    <div className="flex items-center mb-4">
                      <div className={`p-3 bg-${service.color}/10 rounded-xl mr-4`}>
                        <Icon icon={IconComponent} className={`h-10 w-10 text-${service.color}`} />
                      </div>
                    <div>
                      <CardTitle className="text-xl mb-1">{service.title}</CardTitle>
                      <Badge variant="premium" className="text-xs">{service.badge}</Badge>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <CheckCircle className="h-4 w-4 text-laundry-green mr-2" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center">
                          <div className="w-1 h-1 bg-laundry-green rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Process */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Truck className="h-4 w-4 text-laundry-blue mr-2" />
                      Our Process
                    </h4>
                    <ul className="space-y-2">
                      {service.process.map((step, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center">
                          <div className="w-1 h-1 bg-laundry-blue rounded-full mr-2"></div>
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Separator className="my-6" />

                  {/* Pricing and CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-laundry-blue">{service.price}</span>
                      <span className="text-gray-500 ml-1">{service.unit}</span>
                    </div>
                    <Button variant="laundry-primary" size="sm" asChild>
                      <a href={`/services/${service.id}`}>Learn More</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
            })}
          </div>
        </Container>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <Container variant="page">
          <div className="text-center mb-16">
            <Heading variant="section" size="4xl" className="mb-6">
              Specialty Services
            </Heading>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Additional services for special needs and premium care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {additionalServices.map((service) => {
              const iconMap = {
                Clock,
                Heart,
                Shield,
                Star
              };
              const IconComponent = iconMap[service.iconName as keyof typeof iconMap];
              
              return (
                <Card key={service.id} variant="feature-card" className="text-center p-6 group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`p-3 bg-${service.color}/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center`}>
                    <Icon icon={IconComponent} className={`h-8 w-8 text-${service.color}`} />
                  </div>
                <CardTitle className="text-lg mb-2">{service.title}</CardTitle>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>
                
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="text-xs text-gray-600 flex items-center justify-center">
                      <div className={`w-1 h-1 bg-${service.color} rounded-full mr-2`}></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-center mb-4">
                  <Badge variant="service-tag" className="text-xs">{service.badge}</Badge>
                </div>

                <div className="text-center mb-4">
                  <span className="text-xl font-bold text-laundry-blue">{service.price}</span>
                  <span className="text-gray-500 ml-1 text-sm">{service.unit}</span>
                </div>

                <Button variant="laundry-outline" size="sm" className="w-full" asChild>
                  <a href={`/services/${service.id}`}>Learn More</a>
                </Button>
              </Card>
            );
            })}
          </div>
        </Container>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20">
        <Container variant="page">
          <div className="text-center mb-16">
            <Heading variant="section" size="4xl" className="mb-6">
              Why Choose Our Services?
            </Heading>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine professional expertise with eco-friendly practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-laundry-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon icon={Leaf} className="h-8 w-8 text-laundry-green" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Eco-Friendly</h3>
              <p className="text-sm text-gray-600">Green detergents and sustainable processes</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-laundry-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon icon={Truck} className="h-8 w-8 text-laundry-blue" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Free Pickup & Delivery</h3>
              <p className="text-sm text-gray-600">Convenient service to your door</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-laundry-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon icon={Clock} className="h-8 w-8 text-laundry-orange" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Fast Turnaround</h3>
              <p className="text-sm text-gray-600">Same-day and express options available</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-laundry-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon icon={Shield} className="h-8 w-8 text-laundry-purple" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Quality Guaranteed</h3>
              <p className="text-sm text-gray-600">100% satisfaction or re-clean free</p>
            </div>
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
              Book your first service today and experience the difference of professional laundry care
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book?first-time=true">
                <Button variant="laundry-first-time" size="lg" className="text-lg px-8 py-4">
                  Book Your First Service
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="laundry-outline" size="lg" className="text-lg px-8 py-4">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
                 </Container>
       </section>
       </div>
     </MainLayout>
   )
 }
