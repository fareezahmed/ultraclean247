import { Metadata } from 'next'
import MainLayout from '@/components/layout/MainLayout'
import { Container } from '@/components/ui/container'
import { Heading } from '@/components/ui/heading'
import ContactForm from '@/components/forms/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us | FamsComTech Laundry',
  description: 'Get in touch with FamsComTech Laundry. We\'re here to help with all your laundry needs. Contact us today!',
  keywords: 'contact laundry service, laundry contact, customer support',
  openGraph: {
    title: 'Contact Us | FamsComTech Laundry',
          description: 'Get in touch with FamsComTech Laundry. We\'re here to help with all your laundry needs.',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <Container className="py-16">
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-16">
              <Heading as="h1" size="5xl" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Get in Touch
              </Heading>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Have questions about our services? Need to schedule a pickup? We're here to help! 
                Reach out to us through any of the methods below.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="lg:order-2">
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h2>
                    <p className="text-gray-600">Fill out the form below and we'll get back to you within 2 hours.</p>
                  </div>
                  <ContactForm />
                </div>
              </div>

              {/* Contact Information */}
              <div className="lg:order-1 space-y-8">
                {/* Business Hours */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <svg className="h-5 w-5 mr-2 text-laundry-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Business Hours
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="font-medium text-gray-900">7:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Saturday</span>
                      <span className="font-medium text-gray-900">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-medium text-gray-900">9:00 AM - 5:00 PM</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-800">
                      <strong>Emergency Service:</strong> Available 24/7 for urgent requests
                    </p>
                  </div>
                </div>

                {/* Contact Methods */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <svg className="h-5 w-5 mr-2 text-laundry-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Contact Methods
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-laundry-blue text-white rounded-full flex items-center justify-center">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Phone</p>
                        <p className="text-gray-600">0434944733</p>
                        <p className="text-sm text-gray-500">Available during business hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-laundry-blue text-white rounded-full flex items-center justify-center">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <p className="text-gray-600">ultracleanlaundry247@gmail.com</p>
                        <p className="text-sm text-gray-500">Response within 2 hours</p>
                      </div>
                    </div>


                  </div>
                </div>

                {/* Location */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <svg className="h-5 w-5 mr-2 text-laundry-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Service Areas
                  </h3>
                  <p className="text-gray-600 mb-4">
                    We provide pickup and delivery services to the following areas:
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-gray-700">• Toorak</div>
                    <div className="text-gray-700">• Kooyong</div>
                    <div className="text-gray-700">• Hawthorn East</div>
                    <div className="text-gray-700">• Armadale</div>
                    <div className="text-gray-700">• Glen Iris</div>
                    <div className="text-gray-700">• Caulfield North</div>
                    <div className="text-gray-700">• Caulfield East</div>
                    <div className="text-gray-700">• Malvern East</div>
                    <div className="text-gray-700">• Prahran</div>
                    <div className="text-gray-700">• Windsor</div>
                    <div className="text-gray-700">• South Yarra</div>
                    <div className="text-gray-700">• Burnley</div>
                    <div className="text-gray-700">• Richmond</div>
                  </div>
                  <p className="text-xs text-gray-500 mt-3">
                    Don't see your area? Contact us to check availability.
                  </p>
                </div>

                {/* Emergency Contact */}
                <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
                  <h3 className="text-xl font-semibold text-red-900 mb-2 flex items-center">
                    <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    Emergency Service
                  </h3>
                  <p className="text-red-800 mb-3">
                    Need urgent laundry service? We offer 24/7 emergency pickup and delivery.
                  </p>
                  <div className="flex items-center space-x-2">
                    <span className="text-red-900 font-medium">Emergency Hotline:</span>
                    <span className="text-red-800">0434944733</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </MainLayout>
  )
}
