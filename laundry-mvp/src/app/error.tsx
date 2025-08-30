'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Icon } from '@/components/ui/icon'
import { RefreshCw, Home } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
      <Container variant="page" className="text-center">
        <div className="max-w-md mx-auto">
          <div className="mb-8">
            <Icon icon={RefreshCw} className="h-16 w-16 text-red-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong!</h1>
            <p className="text-gray-600 mb-8">
              We're sorry, but something unexpected happened. Please try refreshing the page or contact support if the problem persists.
            </p>
          </div>
          
          <div className="space-y-4">
            <Button 
              onClick={reset}
              variant="laundry-primary" 
              className="w-full"
            >
              <Icon icon={RefreshCw} className="h-4 w-4 mr-2" />
              Try again
            </Button>
            
            <Link href="/">
              <Button variant="outline" className="w-full">
                <Icon icon={Home} className="h-4 w-4 mr-2" />
                Go Home
              </Button>
            </Link>
          </div>
          
          <div className="mt-8 text-sm text-gray-500">
            <p>If this problem continues, please contact us:</p>
                            <p className="font-medium">0434944733</p>
            <p className="text-xs mt-2">Error ID: {error.digest || 'unknown'}</p>
          </div>
        </div>
      </Container>
    </div>
  )
}
