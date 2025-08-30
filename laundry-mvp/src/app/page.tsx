import { Metadata } from 'next'
import MainLayout from "@/components/layout/MainLayout"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"
import { Icon } from "@/components/ui/icon"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/ui/animated-section"
import { WashingMachineIcon, IroningIcon, DeliveryTruckIcon, PileOfTowelsIcon, DetergentIcon, ClothesPackingIcon } from '@/components/ui/animated-icon'
import Link from "next/link"
import {
  Sparkles,
  Truck,
  Clock,
  Shield,
  Leaf,
  Star,
  MapPin,
  Shirt as ShirtIcon,
  Heart,
  Briefcase,
  Bed
} from "lucide-react"
import { generatePageSEO } from '@/lib/seo'

export const metadata: Metadata = generatePageSEO('home')

export default function Home() {
  return (
    <MainLayout>
             {/* Hero Section */}
       <section className="relative overflow-hidden bg-gradient-to-br from-laundry-blue via-laundry-purple to-laundry-green text-white parallax-section"
        style={{
          backgroundImage: `url(/background.jpg)`,
          backgroundSize: 'cover',
          opacity: 1,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundBlendMode: 'multiply',
          backgroundColor: 'rgba(0,0,0,0.45)',
        }}
       >
         {/* Bubble Animation Background */}
         <div className="absolute inset-0 opacity-30">
           <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
           <div className="absolute top-0 left-0 w-full h-full bubble-animation" style={{
             backgroundImage: `url(/bubble.png)`,
             backgroundRepeat: 'no-repeat',
             backgroundSize: 'contain',
             opacity: 1,
             transition: 'background 0.3s, border-radius 0.3s, opacity 0.3s'
           }}></div>
         </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-laundry-light-blue/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-laundry-orange/20 rounded-full blur-lg"></div>


        
        <Container variant="page" className="relative z-10 py-24 lg:py-32 bg-gradient-to-br from-white/5 to-transparent">
          <div className="max-w-5xl mx-auto text-center">
            {/* Trust Badge */}
            <Badge variant="eco-friendly" className="mb-8 animate-pulse text-xl">
              <Leaf className="h-8 w-8 mr-2" />
              Eco-Friendly • Same Day Service • Free Pickup
            </Badge>
            
                         {/* Main Headline */}
             <Heading variant="hero" size="6xl" className="mb-6 leading-tight">
               <span className="text-white font-bold">Professional </span>
               <span className="text-laundry-light-blue"> Laundry</span>
             </Heading>
            
            {/* Value Proposition */}
            <p className="text-2xl lg:text-3xl mb-8 text-laundry-light-blue max-w-3xl mx-auto font-light leading-relaxed">
              Quality care for your clothes, delivered to your door. 
              <span className="block text-white font-medium">Fast, reliable, and eco-friendly laundry services in Melbourne.</span>
            </p>
            
            {/* Key Benefits */}
            <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm">
              <div className="flex items-center space-x-2 bg-white text-laundry-blue px-4 py-2 rounded-full">
                <Icon icon={Truck} className="h-4 w-4" />
                <span>Free Pickup & Delivery</span>
              </div>
              <div className="flex items-center space-x-2 bg-white text-laundry-blue px-4 py-2 rounded-full">
                <Icon icon={Clock} className="h-4 w-4" />
                <span>Same Day Service</span>
              </div>
              <div className="flex items-center space-x-2 bg-white text-laundry-blue px-4 py-2 rounded-full">
                <Icon icon={Shield} className="h-4 w-4" />
                <span>100% Satisfaction</span>
              </div>
            </div>
            
                         {/* Call-to-Action Buttons */}
             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
               <Link href="/book">
                 <Button variant="laundry-secondary" size="lg" className="text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 btn-hover">
                   <Icon icon={Clock} className="h-5 w-5 mr-2 spin-animation" />
                   Book Now - Same Day Service
                 </Button>
               </Link>
               <Link href="/services">
                 <Button variant="laundry-outline" size="lg" className="text-lg bg-white px-8 py-4 border-2 hover:laundry-light-blue hover:text-laundry-blue transition-all duration-300 btn-hover">
                   View Our Services
                 </Button>
               </Link>
             </div>
            
            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-laundry-light-blue">
              <div className="flex items-center space-x-2">
                <Icon icon={Shield} className="h-5 w-5" />
                <span>Trusted by 10,000+ customers</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon icon={Star} className="h-5 w-5" />
                <span>4.9/5 Star Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon icon={Leaf} className="h-5 w-5" />
                <span>Eco-Friendly Process</span>
              </div>
            </div>
          </div>
        </Container>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

             {/* Features Section */}
       <AnimatedSection animationType="fade-in" className="py-16 bg-gray-50">
         <Container variant="page">
           <div className="text-center mb-12">
             <Heading variant="section" size="3xl" className="mb-4 text-reveal">
               Why Choose Ultra Clean 247?
             </Heading>
             <p className="text-lg text-gray-600 max-w-2xl mx-auto text-reveal-delayed">
               We provide exceptional laundry services with convenience and care
             </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             <AnimatedSection animationType="slide-in-left" delay={200}>
               <Card variant="feature-card" className="card-hover">
                 <CardContent className="text-center p-6">
                   <div className="relative">
                     <ClothesPackingIcon 
                        className="w-16 h-16 align-middle rounded-full mx-auto" 
                        width={256} 
                        height={256} 
                      />  
                     <div className="absolute inset-0 pulse-glow rounded-full">
                      
                     </div>
                   </div>
                   <Heading variant="card" size="xl" className="mb-2">
                     Free Pickup & Delivery
                   </Heading>
                   <p className="text-gray-600">
                     We come to you! Free pickup and delivery service for your convenience.
                   </p>
                 </CardContent>
               </Card>
             </AnimatedSection>
             
             <AnimatedSection animationType="fade-in" delay={400}>
               <Card variant="feature-card" className="card-hover">
                 <CardContent className="text-center p-6">
                   <div className="relative">
                     <DeliveryTruckIcon 
                        className="w-16 h-16 align-middle rounded-full mx-auto" 
                        width={256} 
                        height={256} 
                      />  
                     <div className="absolute inset-0 pulse-glow rounded-full"></div>
                   </div>
                   <Heading variant="card" size="xl" className="mb-2">
                     Express Service
                   </Heading>
                   <p className="text-gray-600">
                     Need it fast? Our express service gets your clothes back in 24 hours.
                   </p>
                 </CardContent>
               </Card>
             </AnimatedSection>
             
             <AnimatedSection animationType="slide-in-right" delay={600}>
               <Card variant="feature-card" className="card-hover">
                 <CardContent className="text-center p-6">
                   <div className="relative">
                     <PileOfTowelsIcon 
                        className="w-16 h-16 align-middle rounded-full mx-auto" 
                        width={256} 
                        height={256} 
                      /> 
                     <div className="absolute inset-0 pulse-glow rounded-full"></div>
                   </div>
                   <Heading variant="card" size="xl" className="mb-2">
                     Quality Guarantee
                   </Heading>
                   <p className="text-gray-600">
                     100% satisfaction guaranteed. We treat your clothes like our own.
                   </p>
                 </CardContent>
               </Card>
             </AnimatedSection>
           </div>
         </Container>
       </AnimatedSection>

             {/* Services Showcase Section */}
       <AnimatedSection animationType="fade-in" className="py-20 bg-gradient-to-br from-gray-50 to-white">
         <Container variant="page">
           <div className="text-center mb-16">
             <Badge variant="service-tag" className="mb-4 bounce-animation">
               Best Value
             </Badge>
             <Heading variant="section" size="4xl" className="mb-6 text-reveal">
               Save with Package Deals
             </Heading>
             <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-reveal-delayed">
               Bundle your laundry needs and save money with our package deals. 
               Quality guaranteed, delivered to your door.
             </p>
           </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Everyday Laundry Bundle */}
            <Card variant="service-card" className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                   <div className="p-3 bg-laundry-blue/10 rounded-xl mr-4">
                     <div className="w-10 h-10">
                      <WashingMachineIcon 
                          className="w-16 h-16 align-middle rounded-full mx-auto" 
                          width={256} 
                          height={256} 
                        />
                     </div>
                   </div>
                  <div>
                    <Heading variant="card" size="xl" className="mb-1">
                      Everyday Laundry Bundle
                    </Heading>
                    <Badge variant="premium" className="text-xs">
                      Most Popular
                    </Badge>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Complete wash, dry, and fold service for everyday clothing and household linens. 
                  Perfect for families and busy professionals.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <Icon icon={Shield} className="h-4 w-4 text-laundry-green mr-2" />
                    <span>Wash, dry & fold</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Icon icon={Leaf} className="h-4 w-4 text-laundry-green mr-2" />
                    <span>5kg minimum</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Icon icon={Star} className="h-4 w-4 text-laundry-green mr-2" />
                    <span>Extra kg +$5.50</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-laundry-blue">$30</span>
                    <span className="text-gray-500 ml-1">per 5kg</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Work Week Special Bundle */}
            <Card variant="service-card" className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-laundry-green/10 rounded-xl mr-4">
                    <PileOfTowelsIcon 
                        className="w-16 h-16 align-middle rounded-full mx-auto" 
                        width={256} 
                        height={256} 
                      />
                  </div>
                  <div>
                    <Heading variant="card" size="xl" className="mb-1">
                      Work Week Special Bundle
                    </Heading>
                    <Badge variant="express" className="text-xs">
                      Best Value
                    </Badge>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  5kg wash, dry, fold + 5 work shirts ironed. 
                  Perfect for professionals who need crisp, clean work attire.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <Icon icon={Shield} className="h-4 w-4 text-laundry-green mr-2" />
                    <span>5kg wash, dry & fold</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Icon icon={Leaf} className="h-4 w-4 text-laundry-green mr-2" />
                    <span>5 work shirts ironed</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Icon icon={Star} className="h-4 w-4 text-laundry-green mr-2" />
                    <span>Professional finish</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-laundry-green">$42</span>
                    <span className="text-gray-500 ml-1">bundle</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Bedding Refresh Bundle */}
            <Card variant="service-card" className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-laundry-orange/10 rounded-xl mr-4">
                    <DetergentIcon 
                        className="w-16 h-16 align-middle rounded-full mx-auto" 
                        width={256} 
                        height={256} 
                      />
                  </div>
                  <div>
                    <Heading variant="card" size="xl" className="mb-1">
                      Bedding Refresh Bundle
                    </Heading>
                    <Badge variant="service-tag" className="text-xs">
                      Fresh & Clean
                    </Badge>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Washing, drying, and folding for 2 sets of bedding. 
                  Keep your bedroom fresh and comfortable with clean linens.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <Icon icon={Shield} className="h-4 w-4 text-laundry-green mr-2" />
                    <span>2 sets of bedding</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Icon icon={Leaf} className="h-4 w-4 text-laundry-green mr-2" />
                    <span>Wash, dry & fold</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Icon icon={Star} className="h-4 w-4 text-laundry-green mr-2" />
                    <span>Fresh & hygienic</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-laundry-orange">$35</span>
                    <span className="text-gray-500 ml-1">per 2 sets</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
                    
          {/* CTA Section */}
          <div className="text-center mt-16">
            <Heading variant="section" size="2xl" className="mb-4">
              Ready to Get Started?
            </Heading>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Book your first service today and experience the difference of professional laundry care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button variant="laundry-primary" size="lg">
                  Book Now
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="laundry-outline" size="lg">
                  View Full Pricing
                </Button>
              </Link>
            </div>
          </div>
        </Container>
       </AnimatedSection>

      {/* NDIS Laundry Services Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">


        <Container variant="page">
          <div className="text-center mb-16">
            <Badge variant="premium" className="mb-4">
              <Heart className="h-4 w-4 mr-2" />
              NDIS Approved Provider
            </Badge>
            <Heading variant="section" size="4xl" className="mb-6">
              NDIS Laundry Services
            </Heading>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Supporting NDIS participants and their families with professional laundry services. 
              We understand the unique needs of our community and provide compassionate, reliable care.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* NDIS Content */}
            <div>
              <Heading variant="card" size="2xl" className="mb-6 text-blue-900">
                Professional Laundry Care for NDIS Participants
              </Heading>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Icon icon={Shield} className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">NDIS Approved Provider</h3>
                    <p className="text-gray-600">
                      We are an approved NDIS provider, ensuring our services meet the highest standards 
                      of care and support for participants and their families.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Icon icon={Truck} className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Convenient Pickup & Delivery</h3>
                    <p className="text-gray-600">
                      Free pickup and delivery service eliminates the need to travel, making laundry 
                      management easier for NDIS participants and their support networks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Icon icon={Clock} className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Flexible Scheduling</h3>
                    <p className="text-gray-600">
                      We work around your schedule and NDIS plan requirements, providing flexible 
                      pickup and delivery times that suit your needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Icon icon={Star} className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Specialized Care</h3>
                    <p className="text-gray-600">
                      Understanding of specific laundry needs, including sensitive skin requirements, 
                      special fabric care, and medical garment cleaning.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/book">
                  <Button variant="laundry-primary" size="lg" className="w-full sm:w-auto">
                    Book NDIS Service
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="laundry-outline" size="lg" className="w-full sm:w-auto">
                    Contact NDIS Team
                  </Button>
                </Link>
              </div>
            </div>

            {/* NDIS Benefits Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-10 w-10 text-white" />
                </div>
                <Heading variant="card" size="xl" className="text-blue-900">
                  NDIS Benefits
                </Heading>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                  <Icon icon={Shield} className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">NDIS Plan Management Support</span>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                  <Icon icon={Truck} className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Free Pickup & Delivery</span>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg">
                  <Icon icon={Clock} className="h-5 w-5 text-purple-600" />
                  <span className="text-gray-700">Flexible Scheduling</span>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-orange-50 rounded-lg">
                  <Icon icon={Star} className="h-5 w-5 text-orange-600" />
                  <span className="text-gray-700">Specialized Care</span>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-indigo-50 rounded-lg">
                  <Icon icon={Leaf} className="h-5 w-5 text-indigo-600" />
                  <span className="text-gray-700">Eco-Friendly Process</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-blue-100 rounded-lg">
                <p className="text-sm text-blue-900 text-center">
                  <strong>NDIS Funding Available</strong><br />
                  Our services can be funded through your NDIS plan under 
                  Core Supports - Assistance with Daily Life
                </p>
              </div>
            </div>
          </div>

          {/* NDIS Testimonial */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-200">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} icon={Star} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl text-gray-700 italic mb-6">
                "Ultra Clean 247 has been a lifesaver for our family. As NDIS participants, we need reliable, 
                understanding service providers, and they deliver exactly that. The pickup and delivery 
                service makes managing our laundry so much easier."
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  MW
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">Michael Wilson</div>
                  <div className="text-sm text-gray-600">NDIS Participant & Family</div>
                  <div className="text-xs text-blue-600">Verified NDIS Customer</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-laundry-blue/5 to-laundry-green/5">
        <Container variant="page">
          <div className="text-center mb-16">
            <Badge variant="service-tag" className="mb-4">
              Customer Reviews
            </Badge>
            <Heading variant="section" size="4xl" className="mb-6">
              What Our Customers Say
            </Heading>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what our satisfied customers have to say about their experience with Ultra Clean 247.
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <Card variant="testimonial-card" className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  {/* Star Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} icon={Star} className="h-5 w-5 text-laundry-yellow fill-current" />
                    ))}
                  </div>
                  
                  {/* Testimonial Text */}
                  <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                    "Ultra Clean 247 has completely transformed my laundry experience! The pickup and delivery service is incredibly convenient, and my clothes have never looked better. The express service saved me when I needed a suit cleaned for an important meeting."
                  </blockquote>
                  
                  {/* Customer Info */}
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-laundry-blue to-laundry-green rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      SM
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Sarah Mitchell</div>
                      <div className="text-sm text-gray-600">Business Professional</div>
                      <div className="text-xs text-laundry-blue">Verified Customer</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial 2 */}
              <Card variant="testimonial-card" className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  {/* Star Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} icon={Star} className="h-5 w-5 text-laundry-yellow fill-current" />
                    ))}
                  </div>
                  
                  {/* Testimonial Text */}
                  <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                    "I was skeptical about laundry delivery, but Ultra Clean 247 exceeded all my expectations. The quality is outstanding, and the eco-friendly approach gives me peace of mind. Highly recommend!"
                  </blockquote>
                  
                  {/* Customer Info */}
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-laundry-purple to-laundry-pink rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      EJ
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Emma Johnson</div>
                      <div className="text-sm text-gray-600">Customer</div>
                      <div className="text-xs text-laundry-blue">Verified Customer</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial 3 */}
              <Card variant="testimonial-card" className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  {/* Star Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} icon={Star} className="h-5 w-5 text-laundry-yellow fill-current" />
                    ))}
                  </div>
                  
                  {/* Testimonial Text */}
                  <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                    "As a busy parent, I don't have time for laundry. Ultra Clean 247's service is a game-changer! The quality is outstanding, prices are fair, and the team is always professional. My kids' school uniforms look brand new every week."
                  </blockquote>
                  
                  {/* Customer Info */}
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-laundry-green to-laundry-blue rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      MW
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Michael Wilson</div>
                      <div className="text-sm text-gray-600">Parent</div>
                      <div className="text-xs text-laundry-blue">Verified Customer</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 text-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-laundry-blue mb-2">4.9/5</div>
                  <div className="text-gray-600">Average Rating</div>
                  <div className="flex justify-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} icon={Star} className="h-4 w-4 text-laundry-yellow fill-current" />
                    ))}
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-laundry-green mb-2">10,000+</div>
                  <div className="text-gray-600">Happy Customers</div>
                  <div className="text-sm text-gray-500 mt-1">Across Melbourne</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-laundry-orange mb-2">99%</div>
                  <div className="text-gray-600">Satisfaction Rate</div>
                  <div className="text-sm text-gray-500 mt-1">Quality Guaranteed</div>
                </div>
              </div>
            </div>

            {/* CTA for Reviews */}
            <div className="text-center mt-12">
              <Heading variant="section" size="2xl" className="mb-4">
                Join Our Happy Customers
              </Heading>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Experience the difference of professional laundry care. Book your first service today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                              <Link href="/book?first-time=true">
                <Button variant="laundry-first-time" size="lg" className="text-lg px-8 py-4">
                  Book Your First Service
                </Button>
              </Link>
                <Button variant="laundry-outline" size="lg">
                  Read More Reviews
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <Container variant="page">
          <div className="text-center mb-16">
            <Badge variant="service-tag" className="mb-4">
              Why Ultra Clean 247?
            </Badge>
            <Heading variant="section" size="4xl" className="mb-6">
              Why Choose Ultra Clean 247?
            </Heading>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're not just another laundry service. We're your trusted partner in garment care, 
              committed to quality, convenience, and environmental responsibility.
            </p>
          </div>

          {/* Key Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Convenience */}
            <Card variant="feature-card" className="text-center p-8 group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="p-4 bg-laundry-blue/10 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Icon icon={Truck} className="h-10 w-10 text-laundry-blue" />
              </div>
              <Heading variant="card" size="xl" className="mb-4">
                Ultimate Convenience
              </Heading>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Free pickup and delivery service. No more trips to the laundromat. 
                We come to you, handle everything, and return your clothes fresh and ready to wear.
              </p>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center justify-center">
                  <Icon icon={Clock} className="h-4 w-4 text-laundry-green mr-2" />
                  <span>Same day service available</span>
                </div>
                <div className="flex items-center justify-center">
                  <Icon icon={MapPin} className="h-4 w-4 text-laundry-green mr-2" />
                  <span>Free pickup & delivery</span>
                </div>
                <div className="flex items-center justify-center">
                  <Icon icon={Shield} className="h-4 w-4 text-laundry-green mr-2" />
                  <span>Secure handling</span>
                </div>
              </div>
            </Card>

            {/* Quality */}
            <Card variant="feature-card" className="text-center p-8 group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="p-4 bg-laundry-green/10 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Icon icon={Star} className="h-10 w-10 text-laundry-green" />
              </div>
              <Heading variant="card" size="xl" className="mb-4">
                Premium Quality
              </Heading>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Professional-grade equipment and expert techniques ensure your clothes 
                receive the best possible care. Every garment is treated with attention to detail.
              </p>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center justify-center">
                  <Icon icon={Sparkles} className="h-4 w-4 text-laundry-green mr-2" />
                  <span>Expert finishing</span>
                </div>
                <div className="flex items-center justify-center">
                  <Icon icon={Shield} className="h-4 w-4 text-laundry-green mr-2" />
                  <span>Quality guarantee</span>
                </div>
                <div className="flex items-center justify-center">
                  <Icon icon={Star} className="h-4 w-4 text-laundry-green mr-2" />
                  <span>Professional equipment</span>
                </div>
              </div>
            </Card>

            {/* Eco-Friendly */}
            <Card variant="feature-card" className="text-center p-8 group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="p-4 bg-laundry-orange/10 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Icon icon={Leaf} className="h-10 w-10 text-laundry-orange" />
              </div>
              <Heading variant="card" size="xl" className="mb-4">
                Eco-Friendly
              </Heading>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We're committed to environmental responsibility. Our eco-friendly detergents 
                and processes protect both your clothes and the planet.
              </p>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center justify-center">
                  <Icon icon={Leaf} className="h-4 w-4 text-laundry-green mr-2" />
                  <span>Green detergents</span>
                </div>
                <div className="flex items-center justify-center">
                  <Icon icon={Shield} className="h-4 w-4 text-laundry-green mr-2" />
                  <span>Water conservation</span>
                </div>
                <div className="flex items-center justify-center">
                  <Icon icon={Star} className="h-4 w-4 text-laundry-green mr-2" />
                  <span>Eco-certified</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Quality Guarantees */}
          <div className="bg-gradient-to-br from-laundry-blue/5 to-laundry-green/5 rounded-2xl p-8 mb-16">
            <div className="text-center mb-12">
              <Heading variant="section" size="3xl" className="mb-4">
                Our Quality Guarantees
              </Heading>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We stand behind our work with comprehensive guarantees that give you peace of mind.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-laundry-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon icon={Shield} className="h-8 w-8 text-laundry-blue" />
                </div>
                <Heading variant="card" size="lg" className="mb-2">
                  100% Satisfaction
                </Heading>
                <p className="text-gray-600 text-sm">
                  Not happy? We'll re-clean or refund, no questions asked.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-laundry-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon icon={Clock} className="h-8 w-8 text-laundry-green" />
                </div>
                <Heading variant="card" size="lg" className="mb-2">
                  On-Time Delivery
                </Heading>
                <p className="text-gray-600 text-sm">
                  Late delivery? Your service is on us.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-laundry-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon icon={Star} className="h-8 w-8 text-laundry-orange" />
                </div>
                <Heading variant="card" size="lg" className="mb-2">
                  Damage Protection
                </Heading>
                <p className="text-gray-600 text-sm">
                  Full replacement value for any damage.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-laundry-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon icon={Leaf} className="h-8 w-8 text-laundry-purple" />
                </div>
                <Heading variant="card" size="lg" className="mb-2">
                  Eco Promise
                </Heading>
                <p className="text-gray-600 text-sm">
                  Certified eco-friendly processes and materials.
                </p>
              </div>
            </div>
          </div>

          {/* Environmental Commitments */}
          <div className="bg-gradient-to-br from-laundry-green/5 to-laundry-blue/5 rounded-2xl p-8 mb-16">
            <div className="text-center mb-12">
              <Heading variant="section" size="3xl" className="mb-4">
                Environmental Commitments
              </Heading>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We're committed to sustainable practices that protect our environment while delivering exceptional service.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-laundry-green/10 rounded-lg">
                  <Icon icon={Leaf} className="h-6 w-6 text-laundry-green" />
                </div>
                <div>
                  <Heading variant="card" size="lg" className="mb-2">
                    Green Detergents
                  </Heading>
                  <p className="text-gray-600">
                    We use only eco-certified, biodegradable detergents that are gentle on your clothes and the environment.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-laundry-blue/10 rounded-lg">
                  <Icon icon={Shield} className="h-6 w-6 text-laundry-blue" />
                </div>
                <div>
                  <Heading variant="card" size="lg" className="mb-2">
                    Water Conservation
                  </Heading>
                  <p className="text-gray-600">
                    Our advanced equipment uses 40% less water than traditional methods while delivering superior results.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-laundry-orange/10 rounded-lg">
                  <Icon icon={Star} className="h-6 w-6 text-laundry-orange" />
                </div>
                <div>
                  <Heading variant="card" size="lg" className="mb-2">
                    Energy Efficiency
                  </Heading>
                  <p className="text-gray-600">
                    Solar-powered facilities and energy-efficient equipment reduce our carbon footprint significantly.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-laundry-purple/10 rounded-lg">
                  <Icon icon={Sparkles} className="h-6 w-6 text-laundry-purple" />
                </div>
                <div>
                  <Heading variant="card" size="lg" className="mb-2">
                    Sustainable Packaging
                  </Heading>
                  <p className="text-gray-600">
                    Recyclable and biodegradable packaging materials ensure minimal environmental impact.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <Heading variant="section" size="3xl" className="mb-4">
              Ready to Experience the Difference?
            </Heading>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Ultra Clean 247 for their garment care needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book?first-time=true">
                <Button variant="laundry-first-time" size="lg" className="text-lg px-8 py-4">
                  Start Your First Order
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="laundry-outline" size="lg" className="text-lg px-8 py-4">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </MainLayout>
  )
}
