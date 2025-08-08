import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
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
    "SHIBUI menghadirkan pengalaman menikmati matcha premium, kopi, dessert, dan hidangan berat. Sebuah 'all-in-one cafe' yang siap menjadi tempat nongkrong favorit Anda di Cirebon. Nikmati suasana Jepang modern yang cozy dan estetik, cocok untuk bersantai, bekerja, atau berkumpul bersama teman dan keluarga.",
  keywords: [
    "matcha Cirebon",
    "cafe Cirebon",
    "coffee shop Cirebon",
    "dessert Cirebon",
    "makanan berat Cirebon",
    "tempat nongkrong Cirebon",
    "cafe estetik Cirebon",
    "cafe Jepang Cirebon",
    "SHIBUI Cirebon",
    "tempat kopi Cirebon",
  ],
  authors: [{ name: "SHIBUI Cafe" }],
  openGraph: {
    title: "SHIBUI - Matcha Bar & Cafe di Cirebon",
    description:
      "SHIBUI menghadirkan matcha premium, kopi, dan makanan berat. Sebuah 'all-in-one cafe' yang siap menjadi tempat nongkrong favorit Anda di Cirebon. Temukan suasana Jepang modern yang cozy dan estetik.",
    url: "https://shibui.id",
    siteName: "SHIBUI",
    images: [
      {
        url: "https://shibui.id/shibui-og-image.png",
        width: 1200,
        height: 630,
        alt: "SHIBUI Matcha Bar & Cafe di Cirebon",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SHIBUI - Matcha Bar & Cafe di Cirebon",
    description:
      "SHIBUI menghadirkan matcha premium, kopi, dan makanan berat. Sebuah 'all-in-one cafe' yang siap menjadi tempat nongkrong favorit Anda di Cirebon. Temukan suasana Jepang modern yang cozy dan estetik.",
    creator: "@shibui.id", // Ganti dengan username Twitter Anda
    images: ["https://shibui.id/shibui-og-image.png"],
  },
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <head>
        {/* Google Tag Manager - Part 1 */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N3TK84GD');
          `}
        </Script>
      </head>
      <body
        className={`${inter.className} bg-gradient-to-br from-green-50 to-emerald-50 min-h-screen`}
      >
        {/* Google Tag Manager - Part 2 (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N3TK84GD"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <MapsCTA />
      </body>
    </html>
  )
}