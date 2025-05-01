import Image from "next/image"
import { notFound } from "next/navigation"
import { Check } from "lucide-react"
import type { Metadata } from "next"


import { services } from "@/lib/services"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"


export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug)

  if (!service) {
    return {
      title: "Service Not Found",
    }
  }

  return {
    title: `${service.title} - Elanix Enterprise Medical Billing Services`,
    description: service.description,
    openGraph: {
      title: `${service.title} - Elanix Enterprise Medical Billing Services`,
      description: service.description,
      url: `${process.env.NEXT_PUBLIC_BASE_URL || "https://elanixenterprise.com"}/services/${service.slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} - Elanix Enterprise`,
      description: service.description,
    },
  }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug)

  if (!service) {
    notFound()
  }

  const Icon = service.icon

  // WhatsApp contact number and message
  const whatsappNumber = "15123759999" // Replace with your actual WhatsApp number
  const whatsappMessage = `I'm interested in your ${service.title} service. Can you provide more information?`
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="mb-6 md:mb-8 flex flex-col md:flex-row md:items-center">
        <div className="mr-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4 md:mb-0">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900">{service.title}</h1>
      </div>

      {/* Description and Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 md:mb-12">
        <div>
          <p className="text-lg md:text-xl text-gray-600 mb-6">{service.description}</p>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Key Features:</h2>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            {service.details.map((detail, index) => (
              <li key={index} className="text-gray-600">
                {detail}
              </li>
            ))}
          </ul>
        </div>

        {/* Image Section - Responsive */}
        <div className="w-full h-[250px] md:h-[400px] relative rounded-lg overflow-hidden">
          <Image
            src={service.image || "/placeholder.svg?height=400&width=600"}
            alt={`${service.title} illustration`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
      <div className="bg-[#F8F7FF] h-[35px]"></div>    

 
      {/* Pricing Plans Section */}
      <div className="bg-[#F8F7FF] py-4 px-7 ]"> 
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Pricing Plans</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-12 md:mb-16">
        {service.pricing.map((plan, index) => (
          <div key={index} className="border rounded-lg p-4 md:p-6 hover:shadow-lg transition-shadow bg-white">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{plan.plan}</h3>
            <p className="text-xl md:text-2xl font-bold text-purple-600 mb-4">{plan.price}</p>
            <ul className="space-y-2">
              {plan.features.map((feature, fIndex) => (
                <li key={fIndex} className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      </div>
      
         
      <div className="bg-white h-[35px]"></div>    

      {/* Common Questions Section */}
      {service.faqs && service.faqs.length > 0 && (
        <div className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Common Questions About {service.title}</h2>
          <div className="bg-white rounded-lg shadow-sm p-1">
            <Accordion type="single" collapsible className="w-full">
              {service.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium px-4 py-4">{faq.question}</AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      )}

      {/* Contact CTA Section */}
      <div className="bg-purple-50 rounded-lg p-6 md:p-8 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-purple-900 mb-4">
          Need more information about our {service.title} service?
        </h2>
        <p className="text-gray-600 mb-6">
          Our experts are ready to answer your questions and provide a customized solution for your practice.
        </p>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <Button className="bg-purple-600 hover:bg-purple-700">Contact Us</Button>
        </a>
      </div>
    </div>
  )
}
