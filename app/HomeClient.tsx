"use client"

import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import {
  CheckCircle,
  Users,
  Clock,
  Heart,
  TrendingUp,
  MessageCircle,
  BarChart,
  ChevronDown,
  Download,
  MessageSquare,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { TestimonialSlider } from "@/components/testimonial-slider"
import { services } from "@/lib/services"
import { PricingTable } from "@/components/pricing-table"
import { LocalBusinessJsonLd } from "@/components/json-ld"

const features = [
  {
    icon: <Clock className="w-6 h-6 text-purple-600" />,
    title: "Fast Turnaround",
    description: "24-48 hour processing",
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-purple-600" />,
    title: "Accuracy Guaranteed",
    description: "99.9% accuracy rate",
  },
  {
    icon: <Users className="w-6 h-6 text-purple-600" />,
    title: "Certified Team",
    description: "Expert billing staff",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-purple-600" />,
    title: "Revenue Growth",
    description: "Maximize collections",
  },
  {
    icon: <Heart className="w-6 h-6 text-purple-600" />,
    title: "Healthcare Focus",
    description: "Industry specialists",
  },
]

const solutions = [
  {
    title: "Complete RCM Solution",
    description: "End-to-end revenue cycle management for optimal financial performance",
    image: "/rcm.jpg"
  },
  {
    title: "Advanced Analytics",
    description: "Data-driven insights for improved decision making",
    image: "/aa.jpg",
  },
  {
    title: "Compliance Management",
    description: "Stay compliant with healthcare regulations and monitoring system",
    image: "/compliance.jpg",
  },
]

const advantages = [
  "Industry-leading 98% clean claim rate",
  "Average 12% increase in collections",
  "Dedicated account manager for every client",
  "Regular performance reviews and optimization",
  "Advanced AI-powered claim scrubbing",
  "Transparent pricing with no hidden fees",
  "Seamless EHR/EMR integration",
  "Flexible contract terms",
]

const testimonials = [
  {
    author: "Dr. Emily Roberts",
    title: "Internal Medicine",
    content:
      "Since partnering with Elanix Enterprise, our collections have improved significantly. Their team is professional and responsive.",
    rating: 5,
  },
  {
    author: "Dr. James Wilson",
    title: "Cardiology Practice",
    content:
      "Outstanding service! They've streamlined our billing process and increased our revenue by 25% in the first year.",
    rating: 5,
  },
  {
    author: "Dr. Sarah Thompson",
    title: "Pediatrics Specialist",
    content:
      "Elanix Enterprise has been a game-changer for our practice. Their attention to detail and expertise in pediatric billing has significantly reduced our claim denials.",
    rating: 5,
  },
  {
    author: "Dr. Michael Chen",
    title: "Family Practice",
    content:
      "The level of professionalism and expertise at Elanix Enterprise is unmatched. They've helped us optimize our billing processes and increase revenue.",
    rating: 5,
  },
  {
    author: "Dr. Lisa Anderson",
    title: "Orthopedic Surgery",
    content:
      "Switching to Elanix Enterprise was the best decision for our practice. Their team is responsive, efficient, and truly cares about our success.",
    rating: 5,
  },
]

const handleDownload = () => {
  // Replace this URL with the actual URL of your PDF
  const pdfUrl = "/business-flyer.pdf"
  const link = document.createElement("a")
  link.href = pdfUrl
  link.download = "Elanix-Enterprise-Flyer.pdf"
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export default function HomeClient() {
  const router = useRouter()

  return (
    <>
      {/* JSON-LD Structured Data */}
      <LocalBusinessJsonLd
        name="Elanix Enterprise"
        description="Expert medical billing solutions for healthcare providers. Maximize revenue, reduce denials, and improve patient satisfaction."
        url="https://elanixenterprise.com"
        telephone="+1 (512) 375 9999"
        address={{
          streetAddress: "123 Medical Plaza",
          addressLocality: "Las Vegas",
          addressRegion: "NV",
          postalCode: "89123",
          addressCountry: "US",
        }}
        geo={{
          latitude: 36.1147,
          longitude: -115.1398,
        }}
        images={["https://elanixenterprise.com/images/office.jpg", "https://elanixenterprise.com/images/team.jpg"]}
        sameAs={[
          "https://facebook.com/elanixenterprise",
          "https://twitter.com/elanixenterprise",
          "https://linkedin.com/company/elanixenterprise",
        ]}
        openingHours={[
          "Monday 09:00-17:00",
          "Tuesday 09:00-17:00",
          "Wednesday 09:00-17:00",
          "Thursday 09:00-17:00",
          "Friday 09:00-17:00",
        ]}
        priceRange="$$"
      />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-gradient-to-b from-purple-50 to-white py-20 shadow-md relative"
      >
        <div className="container mx-auto px-4">
          <Button onClick={handleDownload} className="absolute top-4 right-4 bg-purple-600 hover:bg-purple-700">
            <Download className="mr-2 h-4 w-4" /> Download Flyer
          </Button>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold"
              >
                Expert Enterprise Solutions for Your Business
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg text-gray-600"
              >
                Streamline your business operations with our comprehensive solutions to help you maximize efficiency,
                reduce costs, and improve customer satisfaction.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <Button className="bg-purple-600 hover:bg-purple-700" onClick={() => router.push("/contact")}>
                  Schedule Demo
                </Button>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex-1"
            >
              <Image
                src="/main.jpg"
                alt="Elanix Enterprise Solutions"
                width={500}
                height={400}
                className="rounded-lg shadow-md"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
      <div className="h-[25px] bg-purple-100"></div>

      {/* Services Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container bg-[url('/ser.png')] bg-cover bg-center mx-auto px-10 py-16 text-center"

 >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-4"
        >
          Our Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 mb-12"
        >
          End-to-end medical billing solutions designed for your success
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 6).map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Link href={`/services/${service.slug}`}>
                  <Card className="text-center h-full transition-shadow hover:shadow-lg">
                    <CardHeader>
                      <motion.div
                        className="mx-auto w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                      >
                        <Icon className="w-6 h-6 text-purple-600" />
                      </motion.div>
                      <CardTitle>{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{service.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </motion.section>

      <div className="h-12 bg-white"></div>
      <div className="bg-[#F8F7FF] h-[35px]"></div>    

{/* Pricing Section */}
<motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 py-16 text-center bg-white"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-4 text-purple-600"
        >
          We ensure best pricing for our clients
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 mb-12"
        >
          Transparent pricing tailored to your practice's needs
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-6xl mx-auto shadow-md rounded-lg overflow-hidden"
        >
          <PricingTable />
        </motion.div>
      </motion.section>



      {/* Why Elanix Enterprise Section */}
      <section className="bg-[#F8F7FF]">
        <div className="grid grid-cols-[10px,1fr,10px]">
          <div className="bg-white"></div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="py-20"
          >
            <div className="container mx-auto px-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold text-purple-600 mb-12"
              >
                Why Elanix Enterprise?
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
                  >
                    <motion.div
                      className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4"
                      whileHover={{ scale: 1.1, backgroundColor: "#EDE9FE" }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          <div className="bg-white"></div>
        </div>
      </section>

      {/* The Elanix Enterprise Advantage */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-purple-600 mb-12"
            >
              The Elanix Enterprise Advantage
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-1 shrink-0" />
                    <span className="text-gray-700">{advantage}</span>
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-center md:justify-end">
                <Image
                  src="/whyus.jpg"
                  alt="Elanix Enterprise Advantage"
                  width={550}
                  height={400}
                  className="rounded-full shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>


      <div className="bg-[#F8F7FF] h-[35px]"></div>    


      {/* Featured Solutions */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Featured Solutions
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Card className="h-full flex flex-col">
                  <motion.div
                    className="relative pt-[75%]"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <Image
                      src={solution.image || "/placeholder.svg"}
                      alt={solution.title}
                      fill
                      className="object-cover rounded-t-lg absolute top-0 left-0"
                    />
                  </motion.div>
                  <CardHeader className="flex-1">
                    <CardTitle>{solution.title}</CardTitle>
                    <p className="text-gray-600">{solution.description}</p>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Client Success Stories */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-[#F8F7FF]"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Client Success Stories
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <TestimonialSlider testimonials={testimonials} />
          </motion.div>
        </div>
      </motion.section>

      {/* Data-Driven Solutions */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-purple-600 mb-12"
          >
            Data-Driven Solutions
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="w-6 h-6 text-purple-600" />,
                title: "Financial Analytics",
                description: "Track key performance indicators and financial metrics in real-time",
              },
              {
                icon: <Clock className="w-6 h-6 text-purple-600" />,
                title: "Claims Analytics",
                description: "Monitor claims status and identify bottlenecks in the billing process",
              },
              {
                icon: <BarChart className="w-6 h-6 text-purple-600" />,
                title: "Practice Insights",
                description: "Comprehensive reporting on practice performance and growth opportunities",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all border"
              >
                <motion.div
                  className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Common Questions */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-[#F8F7FF] bg-[url('/questions.png')] bg-cover bg-center "
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-center mb-12"
            >
              Common Questions
            </motion.h2>
            <div className="space-y-4">
              {[
                {
                  question: "What makes Elanix Enterprise different from other billing services?",
                  answer:
                    "We combine advanced technology with expert human oversight to deliver superior results and personalized service. Our dedicated team ensures maximum reimbursement while maintaining compliance.",
                },
                {
                  question: "How long does it take to implement your billing services?",
                  answer:
                    "Implementation typically takes 2-4 weeks, depending on your practice size and requirements. We provide comprehensive training and support throughout the transition process.",
                },
                {
                  question: "What specialties do you work with?",
                  answer:
                    "We work with a wide range of medical specialties including Primary Care, Cardiology, Orthopedics, Pediatrics, and many more. Our team has expertise in specialty-specific billing requirements.",
                },
                {
                  question: "How do you ensure data security and HIPAA compliance?",
                  answer:
                    "We maintain strict HIPAA compliance through encrypted data transmission, secure servers, regular audits, and comprehensive staff training. Our systems are regularly updated to meet the latest security standards.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-sm"
                >
                  <button
                    className="w-full px-6 py-4 text-left font-semibold flex justify-between items-center hover:text-purple-600"
                    onClick={(e) => {
                      const content = e.currentTarget.nextElementSibling
                      const icon = e.currentTarget.querySelector(".icon")
                      if (content?.classList.contains("hidden")) {
                        content.classList.remove("hidden")
                        icon?.classList.add("rotate-180")
                      } else {
                        content?.classList.add("hidden")
                        icon?.classList.remove("rotate-180")
                      }
                    }}
                  >
                    {item.question}
                    <ChevronDown className="icon w-5 h-5 transition-transform duration-200" />
                  </button>
                  <div className="hidden px-6 pb-4 text-gray-600">{item.answer}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
 {/* iMessage Button */}
 <motion.a
        href="sms:+15123759999&body=Only Number."
        className="fixed bottom-24 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-colors z-50"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <MessageSquare className="w-6 h-6" />
        <span className="sr-only">Message us</span>
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/15123759999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <MessageCircle className="w-6 h-6" />
        <span className="sr-only">Chat on WhatsApp</span>
      </motion.a>
    </>
  )
}

