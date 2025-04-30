import Image from "next/image"
import { notFound } from "next/navigation"
import { Check } from "lucide-react"

import { services } from "@/lib/services"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug)

  if (!service) {
    notFound()
  }

  const Icon = service.icon

  return (
    <div className="container mx-auto px-4 py-16 ">
      <div className="mb-8 flex items-center ">
        <div className="mr-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h1 className="text-4xl font-bold text-purple-600">{service.title}</h1>
      </div>
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <p className="text-l text-gray-600 mb-6">{service.description}</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features:</h2>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            {service.details.map((detail, index) => (
              <li key={index} className="text-gray-600">
                {detail}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative h-[400px] w-[620px]">
          <Image
            src={service.image || "/placeholder.svg?height=400&width=650"}
            alt={`${service.title} illustration`}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="bg-[#F8F7FF] p-7"> 
      <h2 className="text-3xl font-bold  text-purple-600 mb-6 p-3">Pricing Plans</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {service.pricing.map((plan, index) => (
          <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow bg-white">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.plan}</h3>
            <p className="text-2xl font-bold text-purple-600 mb-4">{plan.price}</p>
            <ul className="space-y-2">
              {plan.features.map((feature, fIndex) => (
                <li key={fIndex} className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
  </ul>
          </div>
        ))}
      </div> 
      <div className="bg-[#F8F7FF] h-[35px]"></div>    
      </div>

      {/* Common Questions Section */}
      {service.faqs && service.faqs.length > 0 && (
        <div className="mb-16 p-10">
          <h2 className="text-3xl font-bold text-purple-600 mb-6">Common Questions</h2>
          <div className="bg-white rounded-lg shadow-sm p-1">
            <Accordion type="single" collapsible className="w-full">
              {service.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium  px-4">{faq.question}</AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      )}
    </div>
  )
}
