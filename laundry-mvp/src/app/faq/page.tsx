import { Metadata } from 'next'
import MainLayout from '@/components/layout/MainLayout'
import { Container } from '@/components/ui/container'
import { Heading } from '@/components/ui/heading'
import FAQSection from '@/components/sections/FAQSection'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | FamsComTech Laundry',
  description: 'Find answers to common questions about our laundry services. Everything you need to know about booking, pricing, and service areas.',
  keywords: 'laundry FAQ, laundry service FAQ, booking questions',
  openGraph: {
    title: 'Frequently Asked Questions | FamsComTech Laundry',
          description: 'Find answers to common questions about our laundry services.',
    type: 'website',
  },
}

export default function FAQPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <Container className="py-16">
          <div className="max-w-4xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-16">
              <Heading as="h1" size="5xl" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </Heading>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Can't find what you're looking for? We've compiled answers to the most common questions 
                about our laundry services.
              </p>
            </div>

            {/* FAQ Section */}
            <FAQSection />

            {/* Contact CTA */}
            <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Still Have Questions?
                </h2>
                <p className="text-gray-600 mb-6">
                  If you couldn't find the answer you're looking for, our team is here to help!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-laundry-blue hover:bg-laundry-blue-dark transition-colors duration-200"
                  >
                    Contact Us
                  </a>
                  <a
                    href="tel:0395711494"
                    className="inline-flex items-center justify-center px-6 py-3 border border-laundry-blue text-base font-medium rounded-lg text-laundry-blue bg-white hover:bg-gray-50 transition-colors duration-200"
                  >
                                          Call 0434944733
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </MainLayout>
  )
}
