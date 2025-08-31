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
  Zap,
  Shield,
  Clock,
  Truck,
  Leaf,
  CheckCircle,
  Star,
  ArrowLeft,
  Sparkles,
  Thermometer
} from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
      title: 'Ironing Service - Ultra Clean 247',
  description: 'Professional ironing and pressing service. Expert steam treatment, crisp finishes, and wrinkle-free results. Quality guaranteed.',
  keywords: 'ironing service, pressing, steam treatment, wrinkle-free, professional finishing',
}

const processSteps = [
  {
    step: 1,
    title: 'Fabric Assessment',
    description: 'Each garment is assessed for fabric type, care requirements, and current condition to determine the best pressing approach.',
    icon: Shield
  },
  {
    step: 2,
    title: 'Steam Treatment',
    description: 'Professional steam treatment to relax wrinkles and prepare the fabric for optimal pressing results.',
    icon: Thermometer
  },
  {
    step: 3,
    title: 'Expert Pressing',
    description: 'Skilled pressing using appropriate temperatures and techniques for each fabric type.',
    icon: Zap
  },
  {
    step: 4,
    title: 'Quality Inspection',
    description: 'Thorough inspection to ensure all wrinkles are removed and the garment meets our high standards.',
    icon: CheckCircle
  },
  {
    step: 5,
    title: 'Careful Packaging',
    description: 'Gentle packaging to maintain the pressed finish and protect the garment during delivery.',
    icon: Sparkles
  }
]

const pricingItems = [
  {
    item: 'Minimum Ironing Service',
    price: '$20',
    description: 'Minimum charge for ironing services'
  },
  {
    item: 'Shirts & Blouses',
    price: '$8',
    description: 'Business shirts, casual shirts, blouses'
  },
  {
    item: 'Pants & Trousers',
    price: '$10',
    description: 'Dress pants, khakis, slacks'
  },
  {
    item: 'Dresses',
    price: '$15',
    description: 'Casual and formal dresses'
  },
  {
    item: 'Suits (2-piece)',
    price: '$25',
    description: 'Jacket and pants together'
  },
  {
    item: 'Coats & Jackets',
    price: '$18',
    description: 'Winter coats, blazers, jackets'
  },
  {
    item: 'Skirts',
    price: '$12',
    description: 'All types of skirts'
  }
]

const benefits = [
  {
    title: 'Expert Techniques',
    description: 'Our trained professionals use industry-best pressing techniques for perfect results.',
    icon: Star
  },
  {
    title: 'Steam Treatment',
    description: 'Professional steam treatment ensures deep wrinkle removal and fabric relaxation.',
    icon: Thermometer
  },
  {
    title: 'Fabric-Specific Care',
    description: 'Different fabrics receive specialized treatment to maintain their quality and appearance.',
    icon: Shield
  },
  {
    title: 'Crisp Finishes',
    description: 'Professional finishing ensures your clothes look their absolute best.',
    icon: Sparkles
  }
]

const includedItems = [
  'Business shirts',
  'Dress pants',
  'Formal dresses',
  'Suits and blazers',
  'Casual shirts',
  'Skirts',
  'Coats and jackets',
  'Table linens'
]

export default function IroningPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-laundry-orange/5 to-laundry-blue/5">
        <Container variant="page">
          <div className="mb-8">
            <Link href="/services" className="inline-flex items-center text-laundry-blue hover:text-laundry-blue/80 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Services
            </Link>
          </div>
          
          <div className="text-center mb-16">
            <Badge variant="service-tag" className="mb-4">Professional Service</Badge>
            <Heading variant="hero" size="5xl" className="mb-6">
              Professional Ironing Service
            </Heading>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Expert pressing and steam treatment for crisp, professional finishes. 
              Our skilled professionals ensure your clothes look their absolute best with wrinkle-free results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-laundry-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon icon={Zap} className="h-8 w-8 text-laundry-orange" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Expert Pressing</h3>
              <p className="text-sm text-gray-600">Professional techniques for perfect results</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-laundry-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon icon={Thermometer} className="h-8 w-8 text-laundry-blue" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Steam Treatment</h3>
              <p className="text-sm text-gray-600">Deep wrinkle removal and fabric relaxation</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-laundry-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon icon={Sparkles} className="h-8 w-8 text-laundry-green" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Crisp Finish</h3>
              <p className="text-sm text-gray-600">Professional finishing for perfect appearance</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <Container variant="page">
          <div className="text-center mb-16">
            <Heading variant="section" size="4xl" className="mb-6">
              Our Ironing Process
            </Heading>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive 5-step process that ensures your clothes receive expert pressing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.step} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-laundry-orange/10 rounded-full flex items-center justify-center mx-auto">
                    <Icon icon={step.icon} className="h-8 w-8 text-laundry-orange" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-laundry-orange text-white rounded-full flex items-center justify-center text-sm font-bold">
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
              Transparent Pricing
            </Heading>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Clear, competitive pricing for all your ironing needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {pricingItems.map((item, index) => (
              <Card key={index} variant="pricing-card" className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.item}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                  <span className="text-2xl font-bold text-laundry-orange">{item.price}</span>
                </div>
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
                Need your ironing done faster? Our express service offers same-day turnaround 
                for an additional $8 per item.
              </p>
              <Button variant="laundry-primary" asChild>
                <Link href="/book?service=express">Book Express Service</Link>
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
              What We Iron
            </Heading>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional ironing for all types of garments and linens
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {includedItems.map((item, index) => (
              <Card key={index} variant="feature-card" className="p-4 text-center">
                <div className="w-12 h-12 bg-laundry-orange/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon icon={Zap} className="h-6 w-6 text-laundry-orange" />
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
              Why Choose Our Ironing Service?
            </Heading>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine professional expertise with quality care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} variant="feature-card" className="p-6">
                <div className="flex items-start">
                  <div className={`p-3 bg-${benefit.icon === Star ? 'laundry-orange' : benefit.icon === Thermometer ? 'laundry-blue' : benefit.icon === Shield ? 'laundry-green' : 'laundry-purple'}/10 rounded-xl mr-4`}>
                    <Icon icon={benefit.icon} className={`h-6 w-6 text-${benefit.icon === Star ? 'laundry-orange' : benefit.icon === Thermometer ? 'laundry-blue' : benefit.icon === Shield ? 'laundry-green' : 'laundry-purple'}`} />
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

      {/* Tips Section */}
      <section className="py-20">
        <Container variant="page">
          <div className="text-center mb-16">
            <Heading variant="section" size="4xl" className="mb-6">
              Ironing Tips & Care
            </Heading>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Helpful tips to maintain your pressed clothes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card variant="feature-card" className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <Icon icon={Shield} className="h-5 w-5 text-laundry-blue mr-2" />
                Storage Tips
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Hang pressed clothes on proper hangers</li>
                <li>• Avoid overcrowding in your closet</li>
                <li>• Use garment bags for special items</li>
                <li>• Keep clothes away from direct sunlight</li>
              </ul>
            </Card>

            <Card variant="feature-card" className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <Icon icon={Leaf} className="h-5 w-5 text-laundry-green mr-2" />
                Maintenance
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Steam touch-ups between wears</li>
                <li>• Address stains immediately</li>
                <li>• Regular professional pressing</li>
                <li>• Proper folding for storage</li>
              </ul>
            </Card>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-laundry-orange/5 to-laundry-blue/5">
        <Container variant="page">
          <div className="text-center">
            <Heading variant="section" size="3xl" className="mb-6">
              Ready for Professional Ironing?
            </Heading>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Book your ironing service today and enjoy crisp, professional finishes
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
