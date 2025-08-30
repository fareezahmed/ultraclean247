import { Metadata } from 'next'
import MainLayout from '@/components/layout/MainLayout'
import { Container } from '@/components/ui/container'
import { Heading } from '@/components/ui/heading'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { 
  Leaf, 
  Recycle, 
  Droplets, 
  Zap, 
  Award, 
  Shield,
  TreePine,
  Globe,
  Sun,
  Wind,
  Sprout,
  CheckCircle
} from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sustainability & Eco-Friendly Practices - FamsComTech Laundry Services',
  description: 'Learn about our commitment to environmental responsibility, eco-friendly cleaning methods, and sustainable practices that protect our planet.',
  keywords: 'sustainability, eco-friendly, green laundry, environmental practices, green cleaning, FamsComTech',
  openGraph: {
    title: 'Sustainability & Eco-Friendly Practices - FamsComTech Laundry Services',
    description: 'Learn about our commitment to environmental responsibility and sustainable practices.',
    type: 'website',
  },
}

const ecoPractices = [
  {
    iconName: 'Recycle',
    title: 'Water Conservation',
    description: 'Our advanced washing machines use up to 40% less water than traditional methods, helping preserve this precious resource.',
    impact: '40% less water usage'
  },
  {
    iconName: 'Zap',
    title: 'Energy Efficiency',
    description: 'We use energy-efficient equipment and renewable energy sources to minimize our carbon footprint.',
    impact: '60% less energy consumption'
  },
  {
    iconName: 'Leaf',
    title: 'Eco-Friendly Detergents',
    description: 'All our cleaning products are biodegradable, phosphate-free, and safe for the environment.',
    impact: '100% biodegradable products'
  },
  {
    iconName: 'Droplets',
    title: 'Water Recycling',
    description: 'We recycle and filter water used in our cleaning processes, reducing overall water consumption.',
    impact: '30% water recycling rate'
  },
  {
    iconName: 'TreePine',
    title: 'Carbon Neutral Operations',
    description: 'We offset our carbon emissions through tree planting and renewable energy investments.',
    impact: 'Carbon neutral since 2023'
  },
  {
    iconName: 'Globe',
    title: 'Sustainable Packaging',
    description: 'We use recyclable and biodegradable packaging materials for all our deliveries.',
    impact: '100% recyclable packaging'
  }
]

const certifications = [
  {
    name: 'Green Business Certification',
    issuer: 'Environmental Business Council',
    year: '2024',
    description: 'Recognized for our comprehensive environmental management practices and sustainable operations.',
    iconName: 'Award'
  },
  {
    name: 'Eco-Friendly Cleaning Certification',
    issuer: 'Green Clean Institute',
    year: '2023',
    description: 'Certified for using only environmentally safe cleaning products and methods.',
    iconName: 'Shield'
  },
  {
    name: 'Water Conservation Award',
    issuer: 'Local Water Authority',
    year: '2023',
    description: 'Awarded for implementing innovative water-saving technologies and practices.',
    iconName: 'Droplets'
  },
  {
    name: 'Carbon Neutral Business',
    issuer: 'Climate Action Network',
    year: '2023',
    description: 'Certified carbon neutral through emission reduction and offset programs.',
    iconName: 'Leaf'
  }
]

const environmentalImpact = [
  {
    metric: 'CO2 Emissions Reduced',
    value: '15,000 kg',
    description: 'Annual carbon dioxide emissions prevented through our eco-friendly practices',
    icon: TreePine
  },
  {
    metric: 'Water Saved',
    value: '500,000 L',
    description: 'Liters of water conserved annually through efficient washing methods',
    icon: Droplets
  },
  {
    metric: 'Energy Saved',
    value: '25,000 kWh',
    description: 'Kilowatt-hours of energy saved annually through efficient operations',
    icon: Zap
  },
  {
    metric: 'Trees Planted',
    value: '1,000+',
    description: 'Trees planted through our carbon offset and community programs',
    icon: Sprout
  }
]

const sustainableProducts = [
  {
    name: 'Eco-Friendly Detergents',
    description: 'Biodegradable, phosphate-free cleaning solutions that are gentle on fabrics and the environment.',
    benefits: ['Safe for sensitive skin', 'Biodegradable', 'No harsh chemicals']
  },
  {
    name: 'Natural Fabric Softeners',
    description: 'Plant-based fabric softeners that provide the same softness without synthetic chemicals.',
    benefits: ['Plant-based', 'Hypoallergenic', 'Biodegradable']
  },
  {
    name: 'Green Stain Removers',
    description: 'Natural stain removal solutions that effectively clean without harming the environment.',
    benefits: ['Natural ingredients', 'Effective cleaning', 'Safe disposal']
  },
  {
    name: 'Recycled Packaging',
    description: 'All our packaging materials are made from recycled content and are fully recyclable.',
    benefits: ['100% recyclable', 'Made from recycled materials', 'Minimal waste']
  }
]

const communityInitiatives = [
  {
    title: 'Local Environmental Education',
    description: 'We partner with schools and community groups to educate about sustainable laundry practices.',
    impact: '500+ students educated annually'
  },
  {
    title: 'Tree Planting Program',
    description: 'For every 100 customers, we plant a tree in our local community.',
    impact: '200+ trees planted to date'
  },
  {
    title: 'Green Business Mentorship',
    description: 'We mentor other local businesses on implementing sustainable practices.',
    impact: '15+ businesses mentored'
  },
  {
    title: 'Community Clean-up Events',
    description: 'We organize and participate in local environmental clean-up initiatives.',
    impact: '10+ events annually'
  }
]

export default function SustainabilityPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white">
          <Container className="py-20">
            <div className="max-w-4xl mx-auto text-center">
              <Heading as="h1" size="5xl" className="text-4xl md:text-5xl font-bold mb-6">
                Our Commitment to Sustainability
              </Heading>
              <p className="text-xl md:text-2xl text-green-100 mb-8">
                Protecting our planet while providing exceptional laundry services
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="text-green-600 bg-white">
                  <Leaf className="w-4 h-4 mr-2" />
                  Green Certified
                </Badge>
                <Badge variant="secondary" className="text-green-600 bg-white">
                  <Recycle className="w-4 h-4 mr-2" />
                  Carbon Neutral
                </Badge>
                <Badge variant="secondary" className="text-green-600 bg-white">
                  <Award className="w-4 h-4 mr-2" />
                  Eco-Friendly Award
                </Badge>
              </div>
            </div>
          </Container>
        </div>

        <Container className="py-16">
          <div className="max-w-6xl mx-auto">
            {/* Mission Statement */}
            <div className="text-center mb-20">
              <Heading as="h2" size="3xl" className="text-3xl font-bold text-gray-900 mb-6">
                Our Environmental Mission
              </Heading>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                At FamsComTech, we believe that exceptional laundry service shouldn't come at the expense of our planet. 
                We're committed to implementing sustainable practices throughout our operations, from the products we use 
                to the energy we consume, ensuring a cleaner future for generations to come.
              </p>
            </div>

            {/* Environmental Impact Stats */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <Heading as="h2" size="3xl" className="text-3xl font-bold text-gray-900 mb-4">
                  Our Environmental Impact
                </Heading>
                <p className="text-lg text-gray-600">
                  Real numbers showing our commitment to environmental responsibility
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {environmentalImpact.map((impact, index) => (
                  <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon icon={impact.icon} className="w-8 h-8 text-green-600" />
                      </div>
                      <div className="text-3xl font-bold text-green-600 mb-2">
                        {impact.value}
                      </div>
                      <Heading as="h3" size="lg" className="text-lg font-semibold text-gray-900 mb-2">
                        {impact.metric}
                      </Heading>
                      <p className="text-sm text-gray-600">
                        {impact.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Separator className="my-16" />

            {/* Eco-Friendly Practices */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <Heading as="h2" size="3xl" className="text-3xl font-bold text-gray-900 mb-4">
                  Our Eco-Friendly Practices
                </Heading>
                <p className="text-lg text-gray-600">
                  Comprehensive sustainability measures across all our operations
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {ecoPractices.map((practice, index) => {
                  const iconMap = {
                    Recycle,
                    Zap,
                    Leaf,
                    Droplets,
                    TreePine,
                    Globe
                  };
                  const IconComponent = iconMap[practice.iconName as keyof typeof iconMap];
                  
                  return (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                          <Icon icon={IconComponent} className="w-8 h-8 text-green-600" />
                        </div>
                        <Heading as="h3" size="lg" className="text-lg font-semibold text-gray-900 mb-3">
                          {practice.title}
                        </Heading>
                        <p className="text-gray-600 mb-4">
                          {practice.description}
                        </p>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          {practice.impact}
                        </Badge>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            <Separator className="my-16" />

            {/* Certifications */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <Heading as="h2" size="3xl" className="text-3xl font-bold text-gray-900 mb-4">
                  Green Certifications & Awards
                </Heading>
                <p className="text-lg text-gray-600">
                  Recognition of our commitment to environmental excellence
                </p>
              </div>
              
                             <div className="grid md:grid-cols-2 gap-8">
                 {certifications.map((cert, index) => {
                   const iconMap = {
                     Award,
                     Shield,
                     Droplets,
                     Leaf
                   };
                   const IconComponent = iconMap[cert.iconName as keyof typeof iconMap];
                   
                   return (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <Icon icon={IconComponent} className="w-6 h-6 text-green-600" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <Heading as="h3" size="lg" className="text-lg font-semibold text-gray-900">
                                {cert.name}
                              </Heading>
                              <Badge variant="outline" className="text-green-600 border-green-200">
                                {cert.year}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">
                              Issued by {cert.issuer}
                            </p>
                            <p className="text-gray-600">
                              {cert.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            <Separator className="my-16" />

            {/* Sustainable Products */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <Heading as="h2" size="3xl" className="text-3xl font-bold text-gray-900 mb-4">
                  Sustainable Products We Use
                </Heading>
                <p className="text-lg text-gray-600">
                  Environmentally responsible cleaning solutions for your clothes and our planet
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {sustainableProducts.map((product, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <Heading as="h3" size="lg" className="text-lg font-semibold text-gray-900 mb-3">
                        {product.name}
                      </Heading>
                      <p className="text-gray-600 mb-4">
                        {product.description}
                      </p>
                      <div className="space-y-2">
                        {product.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span className="text-sm text-gray-600">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Separator className="my-16" />

            {/* Community Initiatives */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <Heading as="h2" size="3xl" className="text-3xl font-bold text-gray-900 mb-4">
                  Community Environmental Initiatives
                </Heading>
                <p className="text-lg text-gray-600">
                  Giving back to our community through environmental education and action
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {communityInitiatives.map((initiative, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <Heading as="h3" size="lg" className="text-lg font-semibold text-gray-900 mb-3">
                        {initiative.title}
                      </Heading>
                      <p className="text-gray-600 mb-4">
                        {initiative.description}
                      </p>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        {initiative.impact}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Separator className="my-16" />

            {/* Future Commitments */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <Heading as="h2" size="3xl" className="text-3xl font-bold text-gray-900 mb-4">
                  Our Future Environmental Commitments
                </Heading>
                <p className="text-lg text-gray-600">
                  Ongoing initiatives to further reduce our environmental impact
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="text-center p-6">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Sun className="w-8 h-8 text-green-600" />
                    </div>
                    <Heading as="h3" size="lg" className="text-lg font-semibold text-gray-900 mb-3">
                      Solar Energy Integration
                    </Heading>
                    <p className="text-gray-600">
                      Installing solar panels to power our facilities with 100% renewable energy by 2025.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="text-center p-6">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Wind className="w-8 h-8 text-green-600" />
                    </div>
                    <Heading as="h3" size="lg" className="text-lg font-semibold text-gray-900 mb-3">
                      Zero Waste Operations
                    </Heading>
                    <p className="text-gray-600">
                      Implementing comprehensive waste reduction strategies to achieve zero waste by 2026.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="text-center p-6">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Sprout className="w-8 h-8 text-green-600" />
                    </div>
                    <Heading as="h3" size="lg" className="text-lg font-semibold text-gray-900 mb-3">
                      Carbon Negative Goal
                    </Heading>
                    <p className="text-gray-600">
                      Aiming to become carbon negative by 2027 through enhanced offset programs.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Separator className="my-16" />

            {/* CTA Section */}
            <div className="text-center">
              <Heading as="h2" size="3xl" className="text-3xl font-bold text-gray-900 mb-4">
                Choose Sustainable Laundry Services
              </Heading>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Join us in making a positive environmental impact while enjoying exceptional laundry services
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                  <Link href="/book">
                    Book Eco-Friendly Service
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">
                    Learn More
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </MainLayout>
  )
}
