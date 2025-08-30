"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Icon } from "@/components/ui/icon"
import { Menu, X, Phone, MapPin, Shirt as ShirtIcon, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { 
    name: "Services", 
    href: "/services",
    dropdown: [
      { name: "Laundry", href: "/services/laundry" },
      { name: "Ironing", href: "/services/ironing" },
      { name: "Pricing", href: "/pricing" },
  
    ]
  },
  { 
    name: "About", 
    href: "/about",
    dropdown: [
      { name: "About Us", href: "/about" },
      { name: "Sustainability", href: "/sustainability" },
    ]
  },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [isMounted, setIsMounted] = useState(false)

  // Prevent hydration mismatch by ensuring component is mounted
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleDropdownToggle = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name)
  }

  // Don't render interactive elements until mounted to prevent hydration mismatch
  if (!isMounted) {
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <Container variant="page" className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="sr-only">Ultra Clean 247</span>
              <img src="/logo.svg" alt="Ultra Clean 247 Logo" className="h-8 w-8" />
              <span className="text-xl font-bold text-gray-900">Ultra Clean 247</span>
            </Link>
          </div>

          {/* Desktop Navigation - Static version for SSR */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div className="relative">
                    <div className="flex items-center space-x-1 py-2 text-sm font-medium text-gray-700">
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-2 text-sm font-medium text-gray-700"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Info & CTA - Large screens only */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>0434944733</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Malvern East, VIC</span>
              </div>
            </div>
            <Link href="/book">
              <Button variant="laundry-primary" size="sm">
                Book Now
              </Button>
            </Link>
          </div>

          {/* Tablet CTA only (no location info) */}
          <div className="hidden md:flex lg:hidden items-center">
            <Link href="/book">
              <Button variant="laundry-primary" size="sm">
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile menu button - Static version */}
          <div className="flex md:hidden items-center">
            <div className="p-2">
              <Menu className="h-6 w-6" aria-hidden="true" />
            </div>
          </div>
        </Container>
      </header>
    )
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <Container variant="page" className="flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="sr-only">Ultra Clean 247</span>
            <img src="/logo.svg" alt="Ultra Clean 247 Logo" className="h-8 w-8" />
            <span className="text-xl font-bold text-gray-900">Ultra Clean 247</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <div key={item.name} className="relative">
              {item.dropdown ? (
                <div className="relative">
                  <button
                    onClick={() => handleDropdownToggle(item.name)}
                    className="flex items-center space-x-1 py-2 text-sm font-medium text-gray-700 hover:text-laundry-blue transition-colors"
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {openDropdown === item.name && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:text-laundry-blue hover:bg-gray-50 transition-colors"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="block py-2 text-sm font-medium text-gray-700 hover:text-laundry-blue transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Contact Info & CTA - Large screens only */}
        <div className="hidden lg:flex items-center space-x-6">
          <div className="flex items-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
                               <span>0434944733</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Malvern East, VIC</span>
            </div>
          </div>
          <Link href="/book">
            <Button variant="laundry-primary" size="sm">
              Book Now
            </Button>
          </Link>
        </div>

        {/* Tablet CTA only (no location info) */}
        <div className="hidden md:flex lg:hidden items-center">
          <Link href="/book">
            <Button variant="laundry-primary" size="sm">
              Book Now
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2"
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </Button>
        </div>
      </Container>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden",
          mobileMenuOpen ? "block" : "hidden"
        )}
      >
        <div className="px-4 py-4 bg-white border-t space-y-2">
          {navigation.map((item) => (
            <div key={item.name}>
              {item.dropdown ? (
                <div>
                  <button
                    onClick={() => handleDropdownToggle(item.name)}
                    className="flex items-center justify-between w-full px-3 py-3 text-base font-medium text-gray-700 hover:text-laundry-blue hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <span>{item.name}</span>
                    <ChevronDown className={cn("h-4 w-4 transition-transform", openDropdown === item.name && "rotate-180")} />
                  </button>
                  {openDropdown === item.name && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-laundry-blue hover:bg-gray-50 rounded-md transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-laundry-blue hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          
          {/* Mobile contact info and CTA */}
          <div className="pt-4 space-y-4 border-t border-gray-100">
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <Phone className="h-4 w-4" />
                <span>0434944733</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <MapPin className="h-4 w-4" />
                <span>Malvern East, VIC</span>
              </div>
            </div>
            <Link href="/book" className="block">
              <Button variant="laundry-primary" className="w-full">
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

