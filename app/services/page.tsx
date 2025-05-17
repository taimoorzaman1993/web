import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { services } from "@/lib/services"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Medical Billing Services - Elanix Enterprise",
  description:
    "Explore our comprehensive medical billing services including claims processing, revenue optimization, provider enrollment, and more. Tailored solutions for healthcare providers.",
    keywords:"Medical billing Elanix,Credentiling Elanix,State Licensing Elanix, Virtual Assistant Elanix, Digital Marketing Elanix, Web Development Elanix,Cold Calling Marketing Elanix, Taimoor Uz Zamman , Top USA medical billing,Facebook billing Elanix Enterprise, Linkedin Elanix Enterprise,claims processing, revenue cycle management, RCM services, credentialing services, web development, digital marketing, virtual assistant, WordPress development, medical billing services, Taimoor Zaman website, Taimoor Zaman Elanix Enterprise, Elanix, Taimoor Zaman Ch - Founder & CEO - Medfolio Billing, healthcare compliance, practice management, HIPAA compliance, medical billing solutions, MedBill Pro, Elanix Enterprise, medical coding, insurance verification, patient billing, accounts receivable management, medical billing outsourcing, healthcare billing services, medical billing software, medical billing company, medical billing services, medical billing agency, Medical Billing Solutions, Elanix Enterprise, end-to-end medical billing services, best medical billing company USA, outsourced medical billing solutions, top healthcare RCM providers, virtual assistant for medical practice, custom healthcare web development, SEO for medical practices, HIPAA-compliant billing services, medical billing and coding experts, practice growth solutions, front office automation healthcare, claim denial management services, insurance claim follow-up, credentialing for healthcare providers, EHR integration services, EMR billing support, healthcare digital transformation, secure patient data handling, online reputation management for doctors, telehealth billing services, healthcare business consulting, medical billing support services, dedicated medical billing team, Medfolio Billing, Elanix medical billing services, healthcare software development, Taimoor Zaman Medfolio, Elanix RCM solutions."    ,
    openGraph: {
    title: "Medical Billing Services - Elanix Enterprise",
    description:
      "Explore our comprehensive medical billing services including claims processing, revenue optimization, provider enrollment, and more. Tailored solutions for healthcare providers.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL || "https://elanixenterprise.com"}/services`,
  },
}

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-purple-600 mb-4">Our Services</h1>
      <p className="text-gray-600 mb-12">End-to-end enterprise solutions designed for your success</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => {
          const Icon = service.icon
          return (
            <Link key={service.slug} href={`/services/${service.slug}`}>
              <Card className="h-full transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

