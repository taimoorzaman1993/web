import { ChevronRight, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Header */}
      

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-900">
            Expert Medical Billing Solutions for Your Practice
          </h1>
          <p className="text-lg text-gray-600">
            Streamline your medical billing with our comprehensive solutions to help you maximize revenue, reduce
            denials, and improve patient satisfaction.
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700">Schedule Demo</Button>
        </div>
        <div className="flex-1">
          <Image
               src="/home/contributor/Downloads/medical-billing (1)/public/main.jpg"
              alt="Medical Billing"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
        <p className="text-gray-600 mb-12">End-to-end medical billing solutions designed for your success</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Solutions */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index}>
              <Image
                src={solution.image || "/placeholder.svg"}
                alt={solution.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardHeader>
                <CardTitle>{solution.title}</CardTitle>
                <CardDescription>{solution.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-12">Client Success Stories</h2>
        <div className="max-w-3xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="mb-8">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-gray-500">{testimonial.title}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Common Questions</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-900 text-white py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <p>Email: contact@medbillpro.com</p>
            <p>Phone: (555) 123-4567</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-purple-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-300">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-300">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-purple-300">
                  Medical Billing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-300">
                  Revenue Cycle
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-300">
                  Compliance
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Stay Updated</h3>
            <Button className="bg-white text-purple-900 hover:bg-purple-100">Subscribe</Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

const services = [
  {
    title: "Claims Processing",
    description: "Fast and accurate claims processing with high acceptance rates",
    icon: <ChevronRight className="w-6 h-6 text-purple-600" />,
  },
  {
    title: "Revenue Optimization",
    description: "Maximize revenue collection through efficient billing cycles",
    icon: <ChevronRight className="w-6 h-6 text-purple-600" />,
  },
  {
    title: "Provider Enrollment",
    description: "Streamlined credentialing and provider enrollment services",
    icon: <ChevronRight className="w-6 h-6 text-purple-600" />,
  },
  // Add more services...
]

const solutions = [
  {
    title: "Complete RCM Solution",
    description: "End-to-end revenue cycle management for optimal financial performance",
    image: `${process.env.NEXT_PUBLIC_BASE_URL}/placeholder.svg?height=300&width=400`,
  },
  {
    title: "Advanced Analytics",
    description: "Data-driven insights for improved decision making",
    image: `${process.env.NEXT_PUBLIC_BASE_URL}/placeholder.svg?height=300&width=400`,
  },
  {
    title: "Compliance Management",
    description: "Stay compliant with healthcare regulations",
    image: `${process.env.NEXT_PUBLIC_BASE_URL}/placeholder.svg?height=300&width=400`,
  },
]

const testimonials = [
  {
    content:
      "MedBill Pro has been a game changer for our practice. Their partnership saved and maximized our revenue while reducing administrative burden.",
    author: "Dr. Sarah Thompson",
    title: "Medical Director",
  },
  // Add more testimonials...
]

const faqs = [
  {
    question: "What makes MedBill Pro different from other billing services?",
    answer:
      "We combine advanced technology with expert human oversight to deliver superior results and personalized service.",
  },
  {
    question: "How long does it take to implement your billing services?",
    answer: "Implementation typically takes 2-4 weeks, depending on your practice size and requirements.",
  },
  // Add more FAQs...
]

