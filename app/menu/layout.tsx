import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Menu - SHIBUI Matcha Bar & Cafe Cirebon",
  description: "Jelajahi menu lengkap SHIBUI, Matcha Bar & Cafe terbaik di Cirebon. Nikmati matcha premium, kopi, dessert, dan makanan berat kami di Jl. Cipto Mangunkusumo No. 117. Pesan online atau kunjungi langsung untuk pengalaman otentik Jepang.",
  keywords: [
    "menu shibui cirebon", 
    "matcha cirebon", 
    "cafe cirebon", 
    "coffee cirebon", 
    "shibui menu", 
    "makanan berat cirebon", 
    "snacks cirebon", 
    "Shibui Cipto Mangunkusumo",
    "cafe estetik cirebon",
    "tempat nongkrong cirebon"
  ],
  authors: [{ name: "SHIBUI Cafe" }],
  openGraph: {
    title: "Menu - SHIBUI Cirebon Matcha Bar & Cafe",
    description: "Jelajahi menu lengkap kami yang terdiri dari matcha premium, coffee specialty, snacks, dan makanan berat di Jl. Cipto Mangunkusumo No. 117, Cirebon.",
    url: "https://shibui.id/menu",
    siteName: "SHIBUI Cirebon Matcha Bar & Cafe",
    images: [
      {
        url: "/shibui-og-image.png",
        width: 1200,
        height: 630,
        alt: "Menu SHIBUI Cirebon",
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Menu - SHIBUI Cirebon Matcha Bar & Cafe",
    description: "Jelajahi menu lengkap kami yang terdiri dari matcha premium, coffee specialty, snacks, dan makanan berat di Jl. Cipto Mangunkusumo No. 117, Cirebon.",
    images: ['/shibui-og-image.png'],
  },
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Menu',
    'name': 'Menu Lengkap SHIBUI Cirebon',
    'url': 'https://shibui.id/menu',
    'description': 'Pilihan lengkap minuman matcha premium, kopi specialty, makanan berat, dan aneka dessert di SHIBUI Cirebon.',
    'hasMenuSection': [
      {
        '@type': 'MenuSection',
        'name': 'Matcha & Coffee',
      },
      {
        '@type': 'MenuSection',
        'name': 'Makanan Berat',
      },
      {
        '@type': 'MenuSection',
        'name': 'Snacks',
      },
      {
        '@type': 'MenuSection',
        'name': 'Desserts',
      },
    ],
    'mainEntityOfPage': 'https://shibui.id',
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