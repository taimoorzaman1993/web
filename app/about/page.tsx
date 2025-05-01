import Image from "next/image"
import { Clock, CheckCircle, Users, TrendingUp, Heart } from "lucide-react" 
import { TestimonialSlider } from "@/components/testimonial-slider"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Elanix Enterprise - Our Medical Billing Expertise",
  description:
    "Learn about Elanix Enterprise's decade of experience in medical billing and revenue cycle management. Discover our team of certified experts and commitment to excellence.",
  openGraph: {
    title: "About Elanix Enterprise - Our Medical Billing Expertise",
    description:
      "Learn about Elanix Enterprise's decade of experience in medical billing and revenue cycle management. Discover our team of certified experts and commitment to excellence.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL || "https://elanixenterprise.com"}/about`,
  },
}


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

const advantages = [
  "Industry-leading 98% clean claim rate",
  "Average 12% increase in collections",
  "Dedicated account manager for every client",
  "Advanced AI-powered claim scrubbing",
  "Regular performance reviews and optimization",
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
      "Elanix Enterprise been a game-changer for our practice. Their attention to detail and expertise in pediatric billing has significantly reduced our claim denials.",
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

export default function About() {
  return (
    <>
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-purple-600 mb-8">About Elanix Enterprise</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <br />
            <p className="text-gray-600">
              Elanix Enterprise is a leading business solutions provider, dedicated to helping professionals streamline
              their operations and improve efficiency. With over a decade of experience, we've helped countless
              businesses enhance their performance and focus on what matters most - their core competencies.
            </p>
            <p className="text-gray-600">
              Our team of certified experts are specialists in navigating the complex world of modern business
              operations. We stay up-to-date with the latest industry trends and best practices to ensure our clients
              receive the highest level of service.
            </p>
            <p className="text-gray-600">
              At Elanix Enterprise, we believe in transparency, integrity, and results. Our advanced technology
              solutions, combined with our personalized approach, allow us to deliver unparalleled service to businesses
              of all sizes and industries.
            </p>
          </div>
          <div>
            <Image
              src="/abus.jpg"
              alt="About Elanix Enterprise"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#F8F7FF] py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Why Elanix Enterprise?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">Elanix Enterprise Advantage</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="grid grid-cols-1 gap-4">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-purple-600 mt-1" />
                <div>
                  <p className="font-medium">{advantage}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <Image src="/whyus.jpg" alt="Elanix Advantage" width={600} height={400} className="rounded-lg shadow-lg" />
          </div>
        </div>


        <div className="bg-white h-[35px]"></div> 

         {/* Client Success Stories */}
              <section className="py-20 bg-[#F8F7FF]">
                <div className="container mx-auto px-4">
                  <h2 className="text-3xl font-bold text-purple-600 text-center mb-12" >
                    Voice Of Our Clients
                  </h2>
                  <div>
                    <TestimonialSlider testimonials={testimonials} />
                  </div>
                </div>
              </section>
        
      </section>
    </>
  )
}

