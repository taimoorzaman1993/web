"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <>
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-purple-600 mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-600 mb-8">
              We're here to help you with any questions you may have about our enterprise solutions. Please fill out the
              form, and we'll get back to you as soon as possible.
            </p>

            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">Our Office</h2>
                <p>123 Enterprise Plaza Dr.</p>
                <p>Suite 456</p>
                <p>Las Vegas, NV 89123</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                <div className="space-y-2">
                  <p className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-purple-600" />
                    +1 (512) 375-9999
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-purple-600" />
                    info@elanixenterprise.com
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-purple-600" />
                    Las Vegas, NV
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name">Your Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="email">Your Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="phone">Your Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="message">Your Message</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="min-h-[150px]"
              />
            </div>

            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
              Send Message
            </Button>
          </form>
        </div>
      </section>

      <section className="h-[400px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3223.8070402927434!2d-115.1398!3d36.1147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDA2JzUzLjAiTiAxMTXCsDA4JzIzLjMiVw!5e0!3m2!1sen!2sus!4v1635786994261!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>
    </>
  )
}

