import { Metadata } from 'next'
import MainLayout from "@/components/layout/MainLayout"
import { Container } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"
import { PWARegistration } from "@/components/pwa/PWARegistration"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Icon } from "@/components/ui/icon"
import { 
  Smartphone, 
  Download, 
  Wifi, 
  Bell, 
  Zap, 
  Shield, 
  Globe,
  CheckCircle,
  Star
} from "lucide-react"
import { generatePageSEO } from '@/lib/seo'

export const metadata: Metadata = generatePageSEO('pwa')

export default function PWAPage() {
  const features = [
    {
      icon: Download,
      title: "Install as App",
      description: "Add to your home screen and use like a native mobile app",
      benefits: ["No app store required", "Automatic updates", "Native app experience"]
    },
    {
      icon: Wifi,
      title: "Offline Access",
      description: "Access key features even without internet connection",
      benefits: ["View services offline", "Check pricing", "Access contact info"]
    },
    {
      icon: Zap,
      title: "Fast Loading",
      description: "Cached content loads instantly for better performance",
      benefits: ["Instant page loads", "Reduced data usage", "Better user experience"]
    },
    {
      icon: Bell,
      title: "Push Notifications",
      description: "Get real-time updates about your orders and special offers",
      benefits: ["Order status updates", "Special promotions", "Delivery notifications"]
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your data is protected with industry-standard security",
      benefits: ["HTTPS encryption", "Secure payments", "Privacy protection"]
    },
    {
      icon: Globe,
      title: "Cross-Platform",
      description: "Works seamlessly across all devices and browsers",
      benefits: ["iOS & Android", "Desktop & mobile", "All major browsers"]
    }
  ]

  const benefits = [
    {
      icon: CheckCircle,
      title: "No Downloads Required",
      description: "Access directly from your browser - no app store needed"
    },
    {
      icon: Star,
      title: "Always Up to Date",
      description: "Automatic updates ensure you always have the latest features"
    },
    {
      icon: Smartphone,
      title: "Home Screen Access",
      description: "Add to home screen for quick access like a native app"
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Get relevant updates without spam or unnecessary alerts"
    }
  ]

  return (
    <MainLayout>
      <Container>
        {/* Hero Section */}
        <div className="text-center py-16">
          <Badge variant="secondary" className="mb-4">
            <Icon icon={Smartphone} className="w-3 h-3 mr-1" />
            Progressive Web App
          </Badge>
          
          <Heading as="h1" size="5xl" className="mb-6">
            Experience FamsComTech Like Never Before
          </Heading>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Install our Progressive Web App for a native mobile experience with offline access, 
            push notifications, and lightning-fast performance.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
              <Icon icon={CheckCircle} className="w-4 h-4" />
              <span className="font-medium">Free to Install</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
              <Icon icon={Zap} className="w-4 h-4" />
              <span className="font-medium">Lightning Fast</span>
            </div>
            <div className="flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full">
              <Icon icon={Wifi} className="w-4 h-4" />
              <span className="font-medium">Works Offline</span>
            </div>
          </div>
        </div>

        {/* PWA Registration Component */}
        <div className="max-w-2xl mx-auto mb-16">
          <PWARegistration />
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <Heading as="h2" size="3xl" className="text-center mb-12">
            Powerful Features
          </Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon icon={feature.icon} className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center gap-2 text-sm text-gray-700">
                        <Icon icon={CheckCircle} className="w-4 h-4 text-green-500" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <Heading as="h2" size="3xl" className="text-center mb-12">
            Why Choose Our PWA?
          </Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon icon={benefit.icon} className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Installation Guide */}
        <div className="mb-16">
          <Heading as="h2" size="3xl" className="text-center mb-12">
            How to Install
          </Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* iOS Safari */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">📱</span>
                  iOS Safari
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3 text-sm">
                  <li className="flex gap-2">
                    <span className="font-bold text-blue-600">1.</span>
                    <span>Tap the Share button</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-blue-600">2.</span>
                    <span>Scroll down and tap "Add to Home Screen"</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-blue-600">3.</span>
                    <span>Tap "Add" to install</span>
                  </li>
                </ol>
              </CardContent>
            </Card>

            {/* Android Chrome */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">🤖</span>
                  Android Chrome
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3 text-sm">
                  <li className="flex gap-2">
                    <span className="font-bold text-blue-600">1.</span>
                    <span>Tap the menu button (⋮)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-blue-600">2.</span>
                    <span>Tap "Add to Home screen"</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-blue-600">3.</span>
                    <span>Tap "Add" to install</span>
                  </li>
                </ol>
              </CardContent>
            </Card>

            {/* Desktop */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">💻</span>
                  Desktop
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3 text-sm">
                  <li className="flex gap-2">
                    <span className="font-bold text-blue-600">1.</span>
                    <span>Look for the install icon in the address bar</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-blue-600">2.</span>
                    <span>Click "Install" when prompted</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-blue-600">3.</span>
                    <span>Confirm installation</span>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <Heading as="h2" size="3xl" className="mb-4">
            Ready to Get Started?
          </Heading>
          <p className="text-xl mb-8 opacity-90">
            Install our PWA now and enjoy a better laundry service experience
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl mb-2">📱</div>
              <div className="font-semibold">Mobile App Experience</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl mb-2">⚡</div>
              <div className="font-semibold">Lightning Fast</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl mb-2">🔔</div>
              <div className="font-semibold">Smart Notifications</div>
            </div>
          </div>
        </div>
      </Container>
    </MainLayout>
  )
}

