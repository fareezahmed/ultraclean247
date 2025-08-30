import { Metadata } from 'next'
import { Container } from '@/components/ui/container'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Icon } from '@/components/ui/icon'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { 
  HelpCircle, 
  Calendar, 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  MessageCircle,
  CheckCircle,
  AlertCircle,
  Info,
  CreditCard,
  Truck,
  Package,
  User,
  Star
} from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
      title: 'Booking Help - Ultra Clean 247',
  description: 'Get help with booking your laundry service. Find answers to common questions and contact our support team.',
  keywords: 'booking help, laundry booking, support, FAQ, customer service',
}

const helpSections = [
  {
    title: "How to Book",
    icon: Calendar,
    items: [
      "Visit our booking page and select your service type",
      "Choose your preferred pickup and delivery times",
      "Enter your contact and address information",
      "Review your order and confirm payment",
      "Receive confirmation email with order details"
    ]
  },
  {
    title: "Payment Options",
    icon: CreditCard,
    items: [
      "Credit/Debit cards (Visa, Mastercard, Amex)",
      "PayPal and digital wallets",
      "NDIS funding available for eligible customers",
      "Invoicing for corporate clients",
      "No hidden fees or charges"
    ]
  },
  {
    title: "Service Areas",
    icon: MapPin,
    items: [
      "Toorak, Kooyong, Hawthorn East",
      "Armadale, Glen Iris, Caulfield North",
      "Caulfield East, Malvern East, Prahran",
      "Windsor, South Yarra, Burnley, Richmond",
      "Contact us to check your specific area"
    ]
  },
  {
    title: "Pickup & Delivery",
    icon: Truck,
    items: [
      "Free pickup and delivery service",
      "Flexible scheduling options",
      "Same-day express service available",
      "Secure handling and tracking",
      "Contactless service available"
    ]
  }
]

const commonQuestions = [
  {
    question: "What if I need to cancel or reschedule?",
    answer: "You can cancel or reschedule your order up to 2 hours before your scheduled pickup time. Contact us via phone or email, and we'll be happy to help."
  },
  {
    question: "How do I track my order?",
    answer: "You'll receive SMS updates throughout the process. You can also call our customer service team for real-time updates on your order status."
  },
  {
    question: "What if I'm not home for pickup/delivery?",
    answer: "We offer contactless service. You can leave your laundry in a secure location, and we'll pick it up. For delivery, we can leave it in a safe spot or arrange a convenient time."
  },
  {
    question: "Do you offer same-day service?",
    answer: "Yes! Our express service offers same-day pickup and delivery for urgent needs. Additional charges apply. Contact us to check availability in your area."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and digital wallets. NDIS funding is also available for eligible customers. Corporate clients can be invoiced."
  },
  {
    question: "How do I know my clothes are safe?",
    answer: "We use professional-grade equipment and follow strict quality control procedures. All garments are individually tagged and tracked throughout the process."
  }
]

const contactMethods = [
  {
    title: "Phone Support",
    icon: Phone,
    description: "Speak directly with our customer service team",
          contact: "0434944733",
    availability: "Mon-Fri: 7AM-7PM, Sat: 8AM-6PM, Sun: 9AM-5PM"
  },
  {
    title: "Email Support",
    icon: Mail,
    description: "Send us a detailed message and we'll respond within 2 hours",
          contact: "ultracleanlaundry247@gmail.com",
    availability: "24/7 - Response within 2 hours during business hours"
  },
  {
    title: "Live Chat",
    icon: MessageCircle,
    description: "Get instant help from our online support team",
    contact: "Available on our website",
    availability: "Mon-Fri: 8AM-6PM"
  }
]

export default function BookingHelpPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <Container variant="page">
          <div className="text-center max-w-3xl mx-auto">
            <div className="mb-6">
              <Icon icon={HelpCircle} className="h-16 w-16 mx-auto mb-4" />
              <h1 className="text-4xl font-bold mb-4">Booking Help & Support</h1>
              <p className="text-xl text-blue-100">
                Need help with your booking? We're here to make your laundry experience as smooth as possible.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  <Icon icon={Phone} className="h-4 w-4 mr-2" />
                  Contact Support
                </Button>
              </Link>
              <Link href="/book">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-blue-600">
                  <Icon icon={Calendar} className="h-4 w-4 mr-2" />
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Quick Help Sections */}
      <section className="py-16">
        <Container variant="page">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Help Guide</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about booking and using our laundry services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {helpSections.map((section, index) => (
              <Card key={index} className="border-blue-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Icon icon={section.icon} className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{section.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2">
                        <Icon icon={CheckCircle} className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <Container variant="page">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Find answers to the most common questions about our services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {commonQuestions.map((faq, index) => (
              <Card key={index} className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg flex items-start space-x-3">
                    <Icon icon={Info} className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>{faq.question}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <Container variant="page">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600">
              Our support team is here to help you with any questions or concerns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center border-blue-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center">
                    <Icon icon={method.icon} className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                  <p className="text-gray-600">{method.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-semibold text-lg text-blue-600">{method.contact}</p>
                    <p className="text-sm text-gray-500">{method.availability}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <Container variant="page">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Book your first service today and experience the difference of professional laundry care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  <Icon icon={Calendar} className="h-4 w-4 mr-2" />
                  Book Your Service
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-blue-600">
                  <Icon icon={MessageCircle} className="h-4 w-4 mr-2" />
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
