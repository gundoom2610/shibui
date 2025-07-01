"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/contact", label: "Kontak" },
  ]

  return (
    <>
      {/* Navigation */}
      <nav className="bg-[#1b3a26]/95 backdrop-blur-md sticky top-0 z-50 border-b border-[#1b3a26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className="relative w-24 h-11 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/shibui-logo.png"
                  alt="SHIBUI Logo"
                  width={96}
                  height={44}
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-6 py-2.5 rounded-full transition-all duration-300 text-sm font-medium ${
                    pathname === item.href
                      ? "bg-white text-[#1b3a26] font-bold italic"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Full Screen Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-[#1b3a26] transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Menu Content */}
        <div
          className={`relative h-full flex flex-col justify-center items-center space-y-16 transform transition-all duration-300 ${
            isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        >
          {/* Logo Section */}
          <div className="text-center space-y-4">
            <div className="relative w-40 h-19 mx-auto">
              <Image
                src="/shibui-logo.png"
                alt="SHIBUI Logo"
                width={160}
                height={76}
                className="object-contain"
                priority
              />
            </div>
            <p className="text-white text-lg font-medium">Matcha Bar & Cafe di Cirebon</p>
          </div>

          {/* Navigation Items */}
          <div className="space-y-8">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block text-2xl font-medium text-white hover:text-green-200 transition-all duration-300 text-center ${
                  pathname === item.href ? "font-bold italic text-green-200" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-20 left-8 w-12 h-12 bg-white/10 rounded-full opacity-60"></div>
          <div className="absolute bottom-24 right-12 w-16 h-16 bg-white/10 rounded-full opacity-40"></div>
          <div className="absolute top-1/3 right-6 w-8 h-8 bg-white/10 rounded-full opacity-50"></div>
        </div>
      </div>
    </>
  )
}