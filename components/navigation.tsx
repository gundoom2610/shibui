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

  // Handle window resize to close mobile menu and cleanup styles
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // md breakpoint
        setIsOpen(false)
        document.body.style.overflow = "unset"
      }
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      document.body.style.overflow = "unset"
    }
  }, [])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/contact", label: "Kontak" },
  ]

  return (
    <>
      {/* Navigation */}
      <nav className="bg-[#1b3a26]/90 backdrop-blur-xl sticky top-0 z-50 border-b border-white/10 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className="relative w-36 h-14 md:w-40 md:h-16 transition-all duration-300 group-hover:scale-105">
                <Image
                  src="/shibui-logo.png"
                  alt="SHIBUI Logo"
                  width={160}
                  height={64}
                  className="object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.4)] group-hover:drop-shadow-[0_12px_24px_rgba(0,0,0,0.5)] transition-all duration-300"
                  priority
                />
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#c5a294]/20 to-[#d4b5a4]/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative py-4 px-3 text-lg transition-all duration-300 group"
                >
                  <span
                    className={`transition-all duration-300 font-medium tracking-wide ${
                      pathname === item.href 
                        ? "bg-gradient-to-r from-[#c5a294] to-[#d4b5a4] bg-clip-text text-transparent font-bold drop-shadow-sm scale-105" 
                        : "text-white/90 hover:text-white hover:drop-shadow-md hover:scale-105"
                    }`}
                  >
                    {item.label}
                  </span>

                  {/* Enhanced gradient underline with glow */}
                  <div
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#c5a294] to-[#d4b5a4] transition-all duration-300 ${
                      pathname === item.href ? "w-full shadow-lg shadow-[#c5a294]/50" : "w-0 group-hover:w-full group-hover:shadow-lg group-hover:shadow-[#c5a294]/30"
                    }`}
                  ></div>

                  {/* Subtle background hover effect */}
                  <div className="absolute inset-0 bg-white/5 rounded-lg scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 -z-10"></div>
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-3 text-white hover:bg-white/10 rounded-xl transition-all duration-200 hover:drop-shadow-lg hover:scale-105 active:scale-95"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 relative">
                <Menu
                  size={24}
                  className={`absolute transition-all duration-300 ${
                    isOpen ? "opacity-0 rotate-180 scale-75" : "opacity-100 rotate-0 scale-100"
                  }`}
                />
                <X
                  size={24}
                  className={`absolute transition-all duration-300 ${
                    isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-180 scale-75"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Enhanced Backdrop with gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-[#1b3a26]/95 via-[#1b3a26]/90 to-[#0f2418]/95 backdrop-blur-2xl transition-all duration-500 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Menu Content */}
        <div
          className={`relative h-full flex flex-col justify-center px-8 transition-all duration-500 ${
            isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* Enhanced Brand Section */}
          <div className="text-center mb-20">
            <div className="space-y-6">
              <h2 className="text-4xl font-light tracking-wide text-white/95 drop-shadow-lg">
                Matcha Bar & Cafe
              </h2>
              
              <div className="flex items-center justify-center space-x-6">
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#c5a294]/60 to-[#c5a294]"></div>
                <span className="text-lg tracking-widest font-light bg-gradient-to-r from-[#c5a294] to-[#d4b5a4] bg-clip-text text-transparent drop-shadow-sm">
                  di Cirebon
                </span>
                <div className="h-px w-16 bg-gradient-to-r from-[#c5a294] via-[#c5a294]/60 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="space-y-6">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block transition-all duration-700 group ${
                  isOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                }`}
                style={{
                  transitionDelay: isOpen ? `${index * 150 + 200}ms` : "0ms",
                }}
              >
                <div className="text-center py-4 px-6 rounded-2xl transition-all duration-300 group-hover:bg-white/5 group-active:bg-white/10">
                  <span
                    className={`text-3xl font-light tracking-wider transition-all duration-300 ${
                      pathname === item.href 
                        ? "bg-gradient-to-r from-[#c5a294] to-[#d4b5a4] bg-clip-text text-transparent font-medium drop-shadow-sm" 
                        : "text-white/90 hover:text-white group-hover:scale-105 group-hover:drop-shadow-lg"
                    }`}
                  >
                    {item.label}
                  </span>

                  {/* Enhanced gradient line indicator */}
                  <div className="flex justify-center mt-4">
                    <div
                      className={`h-1 bg-gradient-to-r from-[#c5a294] to-[#d4b5a4] rounded-full transition-all duration-500 ${
                        pathname === item.href 
                          ? "w-16 shadow-lg shadow-[#c5a294]/50" 
                          : "w-0 group-hover:w-12 group-hover:shadow-md group-hover:shadow-[#c5a294]/30"
                      }`}
                    ></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Enhanced footer with decorative elements */}
          <div className="absolute bottom-12 left-8 right-8">
            <div className="text-center space-y-4">
              {/* Decorative line */}
              <div className="flex justify-center">
                <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#c5a294]/60 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}