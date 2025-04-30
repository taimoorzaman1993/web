import type { Metadata } from "next"
import HomeClient from "./HomeClient"

export const metadata: Metadata = {
  title: "Elanix Enterprise - Expert Business Solutions",
  description:
    "Streamline your business operations with our comprehensive enterprise solutions. Maximize efficiency, reduce costs, and improve customer satisfaction.",
}

export default function Home() {
  return <HomeClient />
}

