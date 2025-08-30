import { Metadata } from 'next'
import { Suspense } from 'react'
import MainLayout from '@/components/layout/MainLayout'
import { Container } from '@/components/ui/container'
import { Heading } from '@/components/ui/heading'
import BookFormWrapper from "@/components/forms/BookFormWrapper"

export const metadata: Metadata = {
  title: 'Book Your Laundry Service | FamsComTech Laundry',
  description: 'Book your laundry or ironing service online. Fast, reliable pickup and delivery in your area.',
  keywords: 'book laundry service, online booking, ironing service booking',
  openGraph: {
    title: 'Book Your Laundry Service | FamsComTech Laundry',
          description: 'Book your laundry or ironing service online. Fast, reliable pickup and delivery in your area.',
    type: 'website',
  },
}

export default function BookPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <Container className="py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Heading as="h1" size="5xl" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Book Your Service
              </Heading>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Schedule your pickup and we'll handle the rest. Fast, reliable, and convenient laundry services at your doorstep.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Booking Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                  <Suspense fallback={<div className="text-center py-8">Loading booking form...</div>}>
                    <BookFormWrapper />
                  </Suspense>
                </div>
              </div>
              
              {/* Booking Info */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">How It Works</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-laundry-blue text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        1
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Book Online</h4>
                        <p className="text-sm text-gray-600">Fill out the form and choose your service</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-laundry-blue text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        2
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">We Pick Up</h4>
                        <p className="text-sm text-gray-600">We'll collect your items at your scheduled time</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-laundry-blue text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        3
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">We Clean</h4>
                        <p className="text-sm text-gray-600">Professional cleaning with premium care</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-laundry-blue text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        4
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">We Deliver</h4>
                        <p className="text-sm text-gray-600">Fresh, clean clothes delivered back to you</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Areas</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    We currently serve the following areas:
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
                
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Need Help?</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Have questions about our services or booking process?
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="text-laundry-blue">📞</span>
                      <span className="text-gray-700">Call: 0434944733</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-laundry-blue">📧</span>
                      <span className="text-gray-700">Email: ultracleanlaundry247@gmail.com</span>
                    </div>

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