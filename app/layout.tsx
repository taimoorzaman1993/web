import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Layout from "@/components/layout"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Elanix Enterprise - Medical Billing Solutions",
  description: "Expert medical billing solutions for your practice",
    generator: 'Talha Ahmed || Web Developer ',
    keywords:"Medical billing, claims processing, revenue cycle management, RCM services, credentialing services, web development, digital marketing, virtual assistant, WordPress development, medical billing services, Taimoor Zaman website, Taimoor Zaman Elanix Enterprise, Elanix, Taimoor Zaman Ch - Founder & CEO - Medfolio Billing, healthcare compliance, practice management, HIPAA compliance, medical billing solutions, MedBill Pro, Elanix Enterprise, medical coding, insurance verification, patient billing, accounts receivable management, medical billing outsourcing, healthcare billing services, medical billing software, medical billing company, medical billing services, medical billing agency, Medical Billing Solutions, Elanix Enterprise, end-to-end medical billing services, best medical billing company USA, outsourced medical billing solutions, top healthcare RCM providers, virtual assistant for medical practice, custom healthcare web development, SEO for medical practices, HIPAA-compliant billing services, medical billing and coding experts, practice growth solutions, front office automation healthcare, claim denial management services, insurance claim follow-up, credentialing for healthcare providers, EHR integration services, EMR billing support, healthcare digital transformation, secure patient data handling, online reputation management for doctors, telehealth billing services, healthcare business consulting, medical billing support services, dedicated medical billing team, Medfolio Billing, Elanix medical billing services, healthcare software development, Taimoor Zaman Medfolio, Elanix RCM solutions."


    ,
    icons: {
      icon: "/logo.svg", // or "/favicon.png" if you're using a PNG
    },
    authors: [{ name: "Elanix Enterprise" }],
  creator: "Elanix Enterprise",
  publisher: "Elanix Enterprise",
  formatDetection: {
    email: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://elanixenterprise.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://elanixenterprise.com",
    title: "Elanix Enterprise - Expert Medical Billing Solutions",
    description:
      "Streamline your medical billing with comprehensive solutions to maximize revenue, reduce denials, and improve patient satisfaction.",
    siteName: "Elanix Enterprise",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Elanix Enterprise - Medical Billing Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elanix Enterprise - Expert Medical Billing Solutions",
    description:
      "Streamline your medical billing with comprehensive solutions to maximize revenue, reduce denials, and improve patient satisfaction.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}



import './globals.css'