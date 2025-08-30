import { Metadata } from 'next'
import { Container } from '@/components/ui/container'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Icon } from '@/components/ui/icon'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { 
  AlertTriangle, 
  Phone, 
  Mail, 
  MessageCircle,
  Clock,
  CheckCircle,
  User,
  FileText,
  Shield,
  Heart,
  Star,
  ArrowRight,
  Calendar,
  MapPin
} from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
      title: 'Complaints & Feedback - Ultra Clean 247',
  description: 'We take your feedback seriously. Contact us to resolve any issues with our laundry service.',
  keywords: 'complaints, feedback, customer service, laundry complaints, resolution',
}

const complaintTypes = [
  {
    title: "Service Quality Issues",
    icon: Star,
    description: "Problems with cleaning quality, damage, or unsatisfactory results",
    examples: [
      "Clothes not cleaned properly",
      "Damage to garments",
      "Wrong service provided",
      "Poor finishing or pressing"
    ]
  },
  {
    title: "Delivery Problems",
    icon: Calendar,
    description: "Issues with pickup, delivery timing, or missed appointments",
    examples: [
      "Late pickup or delivery",
      "Missed appointments",
      "Wrong delivery address",
      "Contactless service issues"
    ]
  },
  {
    title: "Billing & Payment",
    icon: FileText,
    description: "Problems with charges, invoices, or payment processing",
    examples: [
      "Incorrect charges",
      "Payment processing errors",
      "Billing disputes",
      "Refund requests"
    ]
  },
  {
    title: "Customer Service",
    icon: User,
    description: "Issues with staff behavior, communication, or support",
    examples: [
      "Poor communication",
      "Unprofessional behavior",
      "Unhelpful support",
      "Response time issues"
    ]
  }
]

const resolutionSteps = [
  {
    step: "1",
    title: "Contact Us",
    description: "Reach out through your preferred method - phone, email, or online form",
    icon: Phone,
    timeframe: "Immediate response"
  },
  {
    step: "2",
    title: "Investigation",
    description: "We'll investigate your complaint thoroughly and gather all relevant information",
    icon: FileText,
    timeframe: "24-48 hours"
  },
  {
    step: "3",
    title: "Resolution Plan",
    description: "We'll propose a solution and work with you to ensure satisfaction",
    icon: CheckCircle,
    timeframe: "2-3 business days"
  },
  {
    step: "4",
    title: "Follow-up",
    description: "We'll follow up to ensure the issue is resolved to your satisfaction",
    icon: Heart,
    timeframe: "1 week later"
  }
]

const contactMethods = [
  {
    title: "Phone Complaints",
    icon: Phone,
    description: "Speak directly with our complaints resolution team",
          contact: "0434944733",
    availability: "Mon-Fri: 7AM-7PM, Sat: 8AM-6PM",
    response: "Immediate assistance"
  },
  {
    title: "Email Complaints",
    icon: Mail,
    description: "Send detailed complaint with supporting information",
          contact: "ultracleanlaundry247@gmail.com",
    availability: "24/7",
    response: "Response within 4 hours during business hours"
  },
  {
    title: "Online Form",
    icon: MessageCircle,
    description: "Submit your complaint through our secure online form",
    contact: "Available below",
    availability: "24/7",
    response: "Response within 4 hours during business hours"
  }
]

const guarantees = [
  {
    title: "100% Satisfaction Guarantee",
    description: "If you're not completely satisfied, we'll re-clean your items or provide a full refund",
    icon: Shield
  },
  {
    title: "Damage Protection",
    description: "Full replacement value for any damage caused during our service",
    icon: Heart
  },
  {
    title: "On-Time Guarantee",
    description: "If we're late with pickup or delivery, your service is on us",
    icon: Clock
  },
  {
    title: "Quality Assurance",
    description: "All work is inspected by our quality control team before delivery",
    icon: Star
  }
]

export default function ComplaintsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
        <Container variant="page">
          <div className="text-center max-w-3xl mx-auto">
            <div className="mb-6">
              <Icon icon={AlertTriangle} className="h-16 w-16 mx-auto mb-4" />
              <h1 className="text-4xl font-bold mb-4">Complaints & Feedback</h1>
              <p className="text-xl text-red-100">
                We take your feedback seriously and are committed to resolving any issues quickly and professionally.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  <Icon icon={Phone} className="h-4 w-4 mr-2" />
                  Contact Us
                </Button>
              </Link>
              <Link href="/help">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-red-600">
                  <Icon icon={MessageCircle} className="h-4 w-4 mr-2" />
                  Get Help
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Complaint Types */}
      <section className="py-16">
        <Container variant="page">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of Complaints We Handle</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're here to help resolve any issues you may have with our service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {complaintTypes.map((type, index) => (
              <Card key={index} className="border-red-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-red-100 rounded-lg">
                      <Icon icon={type.icon} className="h-6 w-6 text-red-600" />
                    </div>
                    <CardTitle className="text-xl">{type.title}</CardTitle>
                  </div>
                  <p className="text-gray-600">{type.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {type.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-start space-x-2">
                        <Icon icon={ArrowRight} className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{example}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Resolution Process */}
      <section className="py-16 bg-gray-50">
        <Container variant="page">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Resolution Process</h2>
            <p className="text-lg text-gray-600">
              We follow a structured approach to ensure your complaint is handled efficiently and professionally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resolutionSteps.map((step, index) => (
              <Card key={index} className="text-center border-blue-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center space-x-2 text-sm text-blue-600">
                    <Icon icon={step.icon} className="h-4 w-4" />
                    <span className="font-medium">{step.timeframe}</span>
                  </div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Submit a Complaint</h2>
            <p className="text-lg text-gray-600">
              Choose your preferred method to contact us about your complaint.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center border-red-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-red-100 rounded-full w-16 h-16 flex items-center justify-center">
                    <Icon icon={method.icon} className="h-8 w-8 text-red-600" />
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                  <p className="text-gray-600">{method.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-semibold text-lg text-red-600">{method.contact}</p>
                    <p className="text-sm text-gray-500">{method.availability}</p>
                    <p className="text-sm text-blue-600 font-medium">{method.response}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Online Complaint Form */}
      <section className="py-16 bg-gray-50">
        <Container variant="page">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Submit Your Complaint Online</h2>
              <p className="text-lg text-gray-600">
                Fill out the form below and we'll get back to you within 4 hours during business hours.
              </p>
            </div>

            <Card className="border-red-100">
              <CardHeader>
                <CardTitle className="text-xl text-center">Complaint Form</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Order Number (if applicable)</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Complaint Type *</label>
                    <select
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                      <option value="">Select complaint type</option>
                      <option value="service-quality">Service Quality Issues</option>
                      <option value="delivery">Delivery Problems</option>
                      <option value="billing">Billing & Payment</option>
                      <option value="customer-service">Customer Service</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description of Issue *</label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Please provide a detailed description of your complaint..."
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Desired Resolution</label>
                    <textarea
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="What would you like us to do to resolve this issue?"
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <Button type="submit" variant="default" size="lg" className="bg-red-600 hover:bg-red-700">
                      <Icon icon={MessageCircle} className="h-4 w-4 mr-2" />
                      Submit Complaint
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Guarantees */}
      <section className="py-16">
        <Container variant="page">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Guarantees</h2>
            <p className="text-lg text-gray-600">
              We stand behind our work with comprehensive guarantees for your peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guarantees.map((guarantee, index) => (
              <Card key={index} className="border-green-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Icon icon={guarantee.icon} className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle className="text-xl">{guarantee.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{guarantee.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <Container variant="page">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">We're Here to Help</h2>
            <p className="text-xl text-red-100 mb-8">
              Your satisfaction is our priority. Contact us today to resolve any issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  <Icon icon={Phone} className="h-4 w-4 mr-2" />
                  Contact Us Now
                </Button>
              </Link>
              <Link href="/help">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-red-600">
                  <Icon icon={MessageCircle} className="h-4 w-4 mr-2" />
                  Get Help
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
