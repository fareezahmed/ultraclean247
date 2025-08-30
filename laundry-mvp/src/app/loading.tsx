import { Container } from '@/components/ui/container'
import { Icon } from '@/components/ui/icon'
import { Loader2 } from 'lucide-react'

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
      <Container variant="page" className="text-center">
        <div className="max-w-md mx-auto">
          <div className="mb-8">
            <Icon icon={Loader2} className="h-16 w-16 text-laundry-blue mx-auto mb-4 animate-spin" />
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Loading...</h1>
            <p className="text-gray-600">
              Please wait while we load your content.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="w-8 h-8 border-4 border-laundry-blue border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      </Container>
    </div>
  )
}
