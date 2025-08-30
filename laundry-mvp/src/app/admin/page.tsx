import { Metadata } from 'next'
import { Container } from '@/components/ui/container'
import { Heading } from '@/components/ui/heading'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { Separator } from '@/components/ui/separator'
import { 
  Calendar, 
  Users, 
  DollarSign, 
  TrendingUp,
  FileText,
  Settings,
  BarChart3,
  Clock,
  CheckCircle,
  AlertCircle,
  MapPin,
  Phone,
  Mail,
  Edit,
  Trash2,
  Plus,
  Eye,
  Download
} from 'lucide-react'
import { generatePageSEO } from '@/lib/seo'

export const metadata: Metadata = generatePageSEO('admin')

// Mock data for demonstration
const recentBookings = [
  {
    id: 'BK001234',
    customer: 'John Smith',
    service: 'Laundry',
    date: '2024-01-15',
    status: 'completed',
    amount: 45.00,
    area: 'Melbourne CBD'
  },
  {
    id: 'BK001235',
    customer: 'Sarah Johnson',
    service: 'Laundry',
    date: '2024-01-16',
    status: 'in-progress',
    amount: 32.00,
    area: 'Richmond'
  },
  {
    id: 'BK001236',
    customer: 'Mike Wilson',
    service: 'Ironing',
    date: '2024-01-17',
    status: 'pending',
    amount: 28.00,
    area: 'Brunswick'
  },
  {
    id: 'BK001237',
    customer: 'Emma Davis',
    service: 'Laundry',
    date: '2024-01-18',
    status: 'scheduled',
    amount: 55.00,
    area: 'South Yarra'
  }
]

const analyticsData = {
  totalBookings: 1247,
  monthlyRevenue: 28450,
  activeCustomers: 892,
  completionRate: 98.5,
  averageOrderValue: 42.30,
  topServiceArea: 'Melbourne CBD'
}

const contentSections = [
  {
    title: 'Homepage Content',
    description: 'Hero section, services overview, testimonials',
    lastUpdated: '2024-01-10',
    status: 'published'
  },
  {
    title: 'Services Pages',
    description: 'Individual service descriptions and pricing',
    lastUpdated: '2024-01-08',
    status: 'published'
  },
  {
    title: 'Pricing Table',
    description: 'Service packages and pricing information',
    lastUpdated: '2024-01-12',
    status: 'draft'
  },
  {
    title: 'About Us',
    description: 'Company information and team details',
    lastUpdated: '2024-01-05',
    status: 'published'
  }
]

const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed':
      return 'bg-green-100 text-green-800'
    case 'in-progress':
      return 'bg-blue-100 text-blue-800'
    case 'pending':
      return 'bg-yellow-100 text-yellow-800'
    case 'scheduled':
      return 'bg-purple-100 text-purple-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'completed':
      return CheckCircle
    case 'in-progress':
      return Clock
    case 'pending':
      return AlertCircle
    case 'scheduled':
      return Calendar
    default:
      return Clock
  }
}

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <Container variant="page" className="py-6">
          <div className="flex items-center justify-between">
            <div>
              <Heading variant="section" size="3xl" className="mb-2">
                Admin Dashboard
              </Heading>
              <p className="text-gray-600">
                Manage bookings, content, and view analytics
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="laundry-outline" size="sm">
                <Icon icon={Settings} className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Button variant="laundry-primary" size="sm">
                <Icon icon={Plus} className="h-4 w-4 mr-2" />
                New Booking
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <Container variant="page" className="py-8">
        {/* Analytics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card variant="feature-card" className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Bookings</p>
                <p className="text-2xl font-bold text-gray-900">{analyticsData.totalBookings}</p>
                <p className="text-xs text-green-600 mt-1">+12% from last month</p>
              </div>
              <div className="p-3 bg-laundry-blue/10 rounded-xl">
                <Icon icon={Calendar} className="h-6 w-6 text-laundry-blue" />
              </div>
            </div>
          </Card>

          <Card variant="feature-card" className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Monthly Revenue</p>
                <p className="text-2xl font-bold text-gray-900">${analyticsData.monthlyRevenue.toLocaleString()}</p>
                <p className="text-xs text-green-600 mt-1">+8% from last month</p>
              </div>
              <div className="p-3 bg-laundry-green/10 rounded-xl">
                <Icon icon={DollarSign} className="h-6 w-6 text-laundry-green" />
              </div>
            </div>
          </Card>

          <Card variant="feature-card" className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Customers</p>
                <p className="text-2xl font-bold text-gray-900">{analyticsData.activeCustomers}</p>
                <p className="text-xs text-green-600 mt-1">+5% from last month</p>
              </div>
              <div className="p-3 bg-laundry-orange/10 rounded-xl">
                <Icon icon={Users} className="h-6 w-6 text-laundry-orange" />
              </div>
            </div>
          </Card>

          <Card variant="feature-card" className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Completion Rate</p>
                <p className="text-2xl font-bold text-gray-900">{analyticsData.completionRate}%</p>
                <p className="text-xs text-green-600 mt-1">+2% from last month</p>
              </div>
              <div className="p-3 bg-laundry-purple/10 rounded-xl">
                <Icon icon={TrendingUp} className="h-6 w-6 text-laundry-purple" />
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Bookings */}
          <div className="lg:col-span-2">
            <Card variant="feature-card" className="p-6">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Recent Bookings</CardTitle>
                  <Button variant="laundry-outline" size="sm">
                    View All
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4">
                  {recentBookings.map((booking) => {
                    const StatusIcon = getStatusIcon(booking.status)
                    return (
                      <div key={booking.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="p-2 bg-white rounded-lg">
                            <Icon icon={StatusIcon} className="h-5 w-5 text-gray-600" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{booking.customer}</p>
                            <p className="text-sm text-gray-600">{booking.service} • {booking.area}</p>
                            <p className="text-xs text-gray-500">Booking #{booking.id}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-gray-900">${booking.amount}</p>
                          <Badge className={getStatusColor(booking.status)}>
                            {booking.status}
                          </Badge>
                          <p className="text-xs text-gray-500 mt-1">{booking.date}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Content Management */}
          <div>
            <Card variant="feature-card" className="p-6">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Content Management</CardTitle>
                  <Button variant="laundry-outline" size="sm">
                    <Icon icon={Edit} className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4">
                  {contentSections.map((section, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900">{section.title}</h4>
                        <Badge variant={section.status === 'published' ? 'premium' : 'service-tag'}>
                          {section.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{section.description}</p>
                      <p className="text-xs text-gray-500">Last updated: {section.lastUpdated}</p>
                      <div className="flex items-center space-x-2 mt-3">
                        <Button variant="ghost" size="sm">
                          <Icon icon={Eye} className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Icon icon={Edit} className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <Card variant="feature-card" className="p-6">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Button variant="laundry-outline" className="h-20 flex-col">
                  <Icon icon={Calendar} className="h-6 w-6 mb-2" />
                  <span className="text-sm">Manage Bookings</span>
                </Button>
                <Button variant="laundry-outline" className="h-20 flex-col">
                  <Icon icon={FileText} className="h-6 w-6 mb-2" />
                  <span className="text-sm">Edit Content</span>
                </Button>
                <Button variant="laundry-outline" className="h-20 flex-col">
                  <Icon icon={BarChart3} className="h-6 w-6 mb-2" />
                  <span className="text-sm">View Analytics</span>
                </Button>
                <Button variant="laundry-outline" className="h-20 flex-col">
                  <Icon icon={Download} className="h-6 w-6 mb-2" />
                  <span className="text-sm">Export Data</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Business Information */}
        <div className="mt-8">
          <Card variant="feature-card" className="p-6">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg">Business Information</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-laundry-blue/10 rounded-lg">
                    <Icon icon={MapPin} className="h-5 w-5 text-laundry-blue" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Address</p>
                    <p className="text-sm text-gray-600">123 Laundry St, Melbourne</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-laundry-green/10 rounded-lg">
                    <Icon icon={Phone} className="h-5 w-5 text-laundry-green" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <p className="text-sm text-gray-600">0434944733</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-laundry-orange/10 rounded-lg">
                    <Icon icon={Mail} className="h-5 w-5 text-laundry-orange" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-sm text-gray-600">ultracleanlaundry247@gmail.com</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  )
}
