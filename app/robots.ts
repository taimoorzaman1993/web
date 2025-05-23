import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/payoneer"], // Hide the Payoneer verification page from search engines
    },
    sitemap: `${process.env.NEXT_PUBLIC_BASE_URL || "https://elanixenterprise.com"}/sitemap.xml`,
  }
}
