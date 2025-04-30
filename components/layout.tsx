"use client"

import type React from "react"
import Link from "next/link"
import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram, Menu } from "lucide-react"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import Button from "./Button"
import { Logo } from "./logo"



const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || ""

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isSticky, setIsSticky] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <div className={`${isSticky ? "sticky top-0 z-50" : ""}`}>
        {/* Top Banner */}
        <div className="bg-purple-600 text-white py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a
                href="mailto:info@elanixenterprise.com"
                className="flex items-center gap-2 hover:text-purple-100 transition-colors w-full sm:w-auto justify-center"
              >
                <Mail className="h-4 w-4" />
                info@elanixenterprise.com
              </a>
              <span className="flex items-center gap-2 w-full sm:w-auto justify-center">
                <MapPin className="h-4 w-4" />
                123 Medical Plaza, Las Vegas, NV
              </span>
              <a
                href="tel:+1 (512) 375-9999"
                className="flex items-center gap-2 hover:text-purple-100 transition-colors w-full sm:w-auto justify-center"
              >
                <Phone className="h-4 w-4" />
                (512) 375-9999
              </a>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <header className="bg-white border-b shadow-sm">
          <div className="container mx-auto px-4">
            <div className="h-16 flex justify-between items-center relative">
              {/* Logo */}
              <Link href="/" className="flex items-center">
                <Logo />
                <span className="text-2xl font-bold text-purple-600">Elanix Enterprise</span>
              </Link>


              {/* Mobile Menu Button */}
              <Button variant="ghost" className="p-2 md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <Menu className="h-6 w-6" />
              </Button>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex gap-8">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About" },
                  { href: "/services", label: "Services" },
                  { href: "/contact", label: "Contact" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      pathname === link.href ? "bg-purple-50 text-purple-600" : "hover:text-purple-600"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Mobile Menu */}
              {mobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white border-b shadow-lg md:hidden z-50">
                  <nav className="container mx-auto py-2">
                    {[
                      { href: "/", label: "Home" },
                      { href: "/about", label: "About" },
                      { href: "/services", label: "Services" },
                      { href: "/contact", label: "Contact" },
                    ].map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`block px-6 py-3 transition-colors ${
                          pathname === link.href
                            ? "bg-purple-50 text-purple-600"
                            : "hover:bg-gray-50 hover:text-purple-600"
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              )}
            </div>
          </div>
        </header>
      </div>

      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-purple-600 text-white">
        <div className="container mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-x-12 gap-y-8 px-6 py-12">
            {/* Contact Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+1 (512) 375-9999 </span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>info@elanixenterprise.com</span>
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>24/7 Support Available</span>
                </p>
              </div>
            </div>

            {/* Company Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="hover:text-purple-200 transition-colors inline-block">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-purple-200 transition-colors inline-block">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-purple-200 transition-colors inline-block">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Connect</h3>
              <div className="flex flex-wrap gap-4">
                <Link href="#" className="hover:text-purple-200 transition-colors">
                  <Facebook className="w-6 h-6" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="hover:text-purple-200 transition-colors">
                  <Twitter className="w-6 h-6" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="hover:text-purple-200 transition-colors">
                  <Linkedin className="w-6 h-6" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="#" className="hover:text-purple-200 transition-colors">
                  <Instagram className="w-6 h-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Stay Updated</h3>
              <div className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-lg text-gray-900 w-full focus:outline-none focus:ring-2 focus:ring-purple-300"
                />
                <button className="bg-white text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition-colors w-full md:w-auto">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-purple-500">
            <div className="container mx-auto px-6 py-4">
              <p className="text-center text-sm">© 2024 Elanix Enterprise All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

