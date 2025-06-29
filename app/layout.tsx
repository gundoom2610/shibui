import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import MapsCTA from "@/components/maps-cta"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    template: "%s | SHIBUI - Matcha Bar & Cafe di Cirebon",
    default: "SHIBUI - Matcha Bar & Cafe di Cirebon",
  },
  description:
    "SHIBUI menghadirkan matcha premium, coffee, dessert, dan makanan berat juga, jadi all in one cafe siap untuk menjadi tempat nongkrong mu! Nikmati suasana Jepang modern yang cozy dan estetik di tengah Cirebon.",
  keywords: ["matcha", "cafe", "cirebon", "coffee", "dessert", "japanese", "aesthetic", "cozy"],
  authors: [{ name: "SHIBUI Cafe" }],
  openGraph: {
    title: "SHIBUI - Matcha Bar & Cafe di Cirebon",
    description:
      "SHIBUI menghadirkan matcha premium, coffee, dessert, dan makanan berat juga, jadi all in one cafe siap untuk menjadi tempat nongkrong mu!",
    type: "website",
    locale: "id_ID",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={`${inter.className} bg-gradient-to-br from-green-50 to-emerald-50 min-h-screen`}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <MapsCTA />
      </body>
    </html>
  )
}
