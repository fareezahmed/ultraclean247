import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Icon } from "@/components/ui/icon"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter,
  Shirt as ShirtIcon,
  Heart
} from "lucide-react"

const navigation = {
  services: [
    { name: "Laundry", href: "/services/laundry" },
    { name: "Ironing", href: "/services/ironing" },
  ],
  company: [
    { name: "About Us", href: "/about" },

    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ],
  support: [
    { name: "FAQ", href: "/faq" },
    { name: "Booking Help", href: "/help" },
    { name: "Complaints", href: "/complaints" },
  ],
}

const socialLinks = [
  { name: "Facebook", href: "#", icon: Facebook },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "Twitter", href: "#", icon: Twitter },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <Container variant="page" className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Icon icon={ShirtIcon} className="h-8 w-8 text-laundry-blue" />
              <span className="text-xl font-bold">Ultra Clean 247</span>
            </div>
            <p className="text-gray-300 mb-6">
              Professional laundry and ironing services in Melbourne. 
              Quality care for your clothes, delivered to your door.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-laundry-blue" />
                <span>0434944733</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-laundry-blue" />
                                 <span>ultracleanlaundry247@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-laundry-blue" />
                <span>Malvern East, VIC</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 mb-6">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="mb-6">
              <h4 className="font-medium mb-2">Business Hours</h4>
              <div className="text-sm text-gray-300 space-y-1">
                <div className="flex justify-between">
                  <span>Mon - Fri:</span>
                  <span>7:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>9:00 AM - 5:00 PM</span>
                </div>
              </div>
            </div>

            <Link href="/book" className="w-full">
              <Button variant="laundry-primary" className="w-full">
                Book Now
              </Button>
            </Link>
          </div>
        </div>

        <Separator variant="laundry" className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-400">
            © 2024 Ultra Clean 247. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-4">
            {/* NDIS Badge */}
            <Badge variant="premium" className="flex items-center space-x-1 bg-blue-600 hover:bg-blue-700 text-white border-0">
              <Icon icon={Heart} className="h-3 w-3" />
              <span className="text-xs font-medium">We Love NDIS</span>
            </Badge>
            
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={item.name}
                >
                  <item.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
