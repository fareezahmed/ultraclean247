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
  Heart, 
  Shield, 
  Leaf, 
  Clock, 
  Users, 
  Award, 
  Star,
  MapPin,
  Phone,
  Mail,
  Calendar
} from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us - FamsComTech Laundry Services',
  description: 'Learn about our mission, values, and commitment to providing exceptional laundry services. Discover what makes us different.',
  keywords: 'about us, laundry service, team, mission, values, FamsComTech',
  openGraph: {
    title: 'About Us - FamsComTech Laundry Services',
    description: 'Learn about our mission, values, and commitment to providing exceptional laundry services.',
    type: 'website',
  },
}



const values = [
  {
    iconName: 'Heart',
    title: 'Customer First',
    description: 'Every decision we make is centered around providing the best possible experience for our customers.'
  },
  {
    iconName: 'Shield',
    title: 'Quality Guaranteed',
    description: 'We stand behind our work with a 100% satisfaction guarantee on all our services.'
  },
  {
    iconName: 'Leaf',
    title: 'Eco-Friendly',
    description: 'We use environmentally responsible practices and products to protect our planet.'
  },
  {
    iconName: 'Clock',
    title: 'Reliability',
    description: 'We value your time and deliver on our promises, every single time.'
  },
  {
    iconName: 'Users',
    title: 'Community Focused',
    description: 'We\'re proud to serve our local community and give back through various initiatives.'
  },
  {
    iconName: 'Award',
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, from customer service to garment care.'
  }
]

const milestones = [
  {
    year: '2020',
    title: 'Company Founded',
    description: 'FamsComTech was established with a mission to provide convenient, high-quality laundry services.'
  },
  {
    year: '2021',
    title: 'Service Expansion',
            description: 'Expanded services to include ironing, serving over 500 customers.'
  },
  {
    year: '2022',
    title: 'Technology Integration',
    description: 'Launched our online booking platform and mobile app for seamless customer experience.'
  },
  {
    year: '2023',
    title: 'Community Recognition',
    description: 'Received "Best Laundry Service" award from local business association.'
  },
  {
    year: '2024',
    title: 'Sustainable Practices',
    description: 'Implemented eco-friendly cleaning methods and achieved green certification.'
  }
]

export default function AboutPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <Container className="py-20">
            <div className="max-w-4xl mx-auto text-center">
              <Heading as="h1" size="5xl" className="text-4xl md:text-5xl font-bold mb-6">
                About FamsComTech
              </Heading>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Revolutionizing laundry services through technology, quality, and exceptional customer care
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="text-blue-600 bg-white">
                  <Star className="w-4 h-4 mr-2" />
                  4.9/5 Customer Rating
                </Badge>
                <Badge variant="secondary" className="text-blue-600 bg-white">
                  <Users className="w-4 h-4 mr-2" />
                  2000+ Happy Customers
                </Badge>
                <Badge variant="secondary" className="text-blue-600 bg-white">
                  <Award className="w-4 h-4 mr-2" />
                  Award Winning Service
                </Badge>
              </div>
            </div>
          </Container>
        </div>

        <Container className="py-16">
          {/* Mission & Vision */}
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 mb-20">
              <div>
                <Heading as="h2" size="3xl" className="text-3xl font-bold text-gray-900 mb-6">
                  Our Mission
                </Heading>
                <p className="text-lg text-gray-600 mb-6">
                  To provide convenient, high-quality laundry services that save our customers time while delivering exceptional results. We believe everyone deserves clean, fresh clothes without the hassle of doing laundry themselves.
                </p>
                <p className="text-lg text-gray-600">
                  Through innovative technology and dedicated service, we're making laundry day a thing of the past for busy families and professionals across our community.
                </p>
              </div>
              <div>
                <Heading as="h2" size="3xl" className="text-3xl font-bold text-gray-900 mb-6">
                  Our Vision
                </Heading>
                <p className="text-lg text-gray-600 mb-6">
                  To become the most trusted and preferred laundry service provider, known for our reliability, quality, and commitment to customer satisfaction.
                </p>
                <p className="text-lg text-gray-600">
                  We envision a future where laundry services are seamlessly integrated into modern lifestyles, making life easier and more enjoyable for our customers.
                </p>
              </div>
            </div>

            <Separator className="my-16" />

            {/* Company Values */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <Heading as="h2" size="3xl" className="text-3xl font-bold text-gray-900 mb-4">
                  Our Values
                </Heading>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  These core values guide everything we do and shape the way we serve our customers
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {values.map((value, index) => {
                  const iconMap = {
                    Heart,
                    Shield,
                    Leaf,
                    Clock,
                    Users,
                    Award
                  };
                  const IconComponent = iconMap[value.iconName as keyof typeof iconMap];
                  
                  return (
                    <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Icon icon={IconComponent} className="w-8 h-8 text-blue-600" />
                        </div>
                        <Heading as="h3" size="xl" className="text-xl font-semibold text-gray-900 mb-3">
                          {value.title}
                        </Heading>
                        <p className="text-gray-600">
                          {value.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            <Separator className="my-16" />

            {/* Company History */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <Heading as="h2" size="3xl" className="text-3xl font-bold text-gray-900 mb-4">
                  Our Journey
                </Heading>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  From humble beginnings to becoming a trusted name in laundry services
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>
                <div className="space-y-8">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="relative flex items-start md:items-center">
                      <div className="hidden md:block absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                      <div className="md:ml-16 flex-1">
                        <div className="bg-white rounded-lg p-6 shadow-md">
                          <div className="flex items-center mb-3">
                            <Badge variant="outline" className="mr-3">
                              {milestone.year}
                            </Badge>
                            <Heading as="h3" size="lg" className="text-lg font-semibold text-gray-900">
                              {milestone.title}
                            </Heading>
                          </div>
                          <p className="text-gray-600">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>



            {/* Stats Section */}
            <div className="mb-20">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">2000+</div>
                  <p className="text-gray-600">Happy Customers</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">50,000+</div>
                  <p className="text-gray-600">Garments Cleaned</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">4.9/5</div>
                  <p className="text-gray-600">Customer Rating</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                  <p className="text-gray-600">Customer Support</p>
                </div>
              </div>
            </div>

            <Separator className="my-16" />

            {/* CTA Section */}
            <div className="text-center">
              <Heading as="h2" size="3xl" className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Experience the Difference?
              </Heading>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied customers who trust us with their laundry needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/book">
                    Book Your First Service
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/sustainability">
                    Learn About Our Sustainability
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">
                    Contact Us
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
