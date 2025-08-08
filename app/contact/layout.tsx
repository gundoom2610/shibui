import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Kontak & Lokasi - SHIBUI Matcha Bar & Cafe Cirebon",
  description: "Hubungi SHIBUI Cirebon untuk reservasi, tanya menu, atau cek promo. Kunjungi kami di Jl. Dr. Cipto Mangunkusumo No. 117, Cirebon. Buka setiap hari.",
  keywords: [
    "kontak shibui cirebon", 
    "lokasi shibui cirebon", 
    "alamat cafe cirebon", 
    "nomor telepon shibui", 
    "reservasi cafe cirebon", 
    "shibui cipto",
    "shibuicrb"
  ],
  authors: [{ name: "SHIBUI Cafe" }],
  openGraph: {
    title: "Hubungi Kami | SHIBUI Cirebon",
    description: "Hubungi SHIBUI Cirebon melalui WhatsApp atau Instagram. Temukan lokasi kami di Jl. Dr. Cipto Mangunkusumo No. 117 untuk pengalaman matcha terbaik.",
    url: "https://shibui.id/contact",
    siteName: "SHIBUI Cirebon Matcha Bar & Cafe",
    images: [
      {
        url: "/shibui-og-image.png", // Pastikan gambar ini ada di folder /public
        width: 1200,
        height: 630,
        alt: "SHIBUI Cirebon Kontak dan Lokasi",
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Kontak & Lokasi - SHIBUI Cirebon",
    description: "Hubungi kami via WhatsApp atau kunjungi langsung di Jl. Dr. Cipto Mangunkusumo No. 117, Cirebon.",
    images: ['/shibui-og-image.png'],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'SHIBUI Matcha Bar & Cafe',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Jl. Dr. Cipto Mangunkusumo No. 117',
      'addressLocality': 'Cirebon',
      'addressRegion': 'Jawa Barat',
      'postalCode': '45121',
      'addressCountry': 'ID',
    },
    'image': 'https://shibui.id/shibui-og-image.png', // Ganti dengan URL domain Anda
    'telephone': '+6281111888119',
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      'opens': '08:00',
      'closes': '21:00',
    },
    'url': 'https://shibui.id/contact',
    'priceRange': 'Rp 20.000 - Rp 60.000',
    'servesCuisine': ['Japanese', 'Cafe', 'Matcha', 'Coffee'],
  };
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}