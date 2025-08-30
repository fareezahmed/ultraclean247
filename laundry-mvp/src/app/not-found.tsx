import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Icon } from '@/components/ui/icon'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
      <Container variant="page" className="text-center">
        <div className="max-w-md mx-auto">
          <div className="mb-8">
            <Icon icon={Home} className="h-16 w-16 text-laundry-blue mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Page Not Found</h2>
            <p className="text-gray-600 mb-8">
              Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
            </p>
          </div>
          
          <div className="space-y-4">
            <Link href="/">
              <Button variant="laundry-primary" className="w-full">
                <Icon icon={Home} className="h-4 w-4 mr-2" />
                Go Home
              </Button>
            </Link>
            
            <Link href="/contact">
              <Button variant="outline" className="w-full">
                <Icon icon={ArrowLeft} className="h-4 w-4 mr-2" />
                Contact Support
              </Button>
            </Link>
          </div>
          
          <div className="mt-8 text-sm text-gray-500">
            <p>If you believe this is an error, please contact us at:</p>
                            <p className="font-medium">0434944733</p>
          </div>
        </div>
      </Container>
    </div>
  )
}
