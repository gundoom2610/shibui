"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, Home, UtensilsCrossed, Phone } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown)
      return () => document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen])

  const navItems = [
    {
      href: "/",
      label: "Home",
      icon: Home,
      description: "Kembali ke halaman utama",
    },
    {
      href: "/menu",
      label: "Menu",
      icon: UtensilsCrossed,
      description: "Lihat menu makanan dan minuman",
    },
    {
      href: "/contact",
      label: "Kontak",
      icon: Phone,
      description: "Hubungi kami",
    },
  ]

  return (
    <>
      {/* Navigation */}
      <nav className="bg-[#1b3a26]/90 backdrop-blur-xl sticky top-0 z-50 border-b border-white/10 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className="relative w-32 h-12 sm:w-36 sm:h-14 md:w-40 md:h-16 transition-all duration-300 group-hover:scale-105">
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
                      pathname === item.href
                        ? "w-full shadow-lg shadow-[#c5a294]/50"
                        : "w-0 group-hover:w-full group-hover:shadow-lg group-hover:shadow-[#c5a294]/30"
                    }`}
                  ></div>
                  {/* Subtle background hover effect */}
                  <div className="absolute inset-0 bg-white/5 rounded-lg scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 -z-10"></div>
                </Link>
              ))}
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden text-white hover:bg-white/10 hover:text-white transition-colors"
                  aria-label="Buka menu navigasi"
                >
                  <Menu size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[350px] bg-gradient-to-br from-[#1b3a26] via-[#1b3a26]/95 to-[#0f2418] border-l border-white/10 backdrop-blur-xl"
              >
                <SheetHeader className="text-left pb-6">
                  <div className="space-y-2">
                    <p className="text-white/70 text-sm">Matcha Bar & Cafe</p>
                    <div className="flex items-center space-x-2">
                      <div className="h-px w-8 bg-gradient-to-r from-[#c5a294] to-transparent"></div>
                      <span className="text-xs tracking-wider text-[#c5a294] font-light">di Cirebon</span>
                    </div>
                  </div>
                </SheetHeader>

                <Separator className="bg-white/10 mb-6" />

                {/* Navigation Items */}
                <nav className="space-y-2" role="navigation" aria-label="Navigasi utama">
                  {navItems.map((item) => {
                    const Icon = item.icon
                    const isActive = pathname === item.href

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-200 group ${
                          isActive
                            ? "bg-gradient-to-r from-[#c5a294]/20 to-[#d4b5a4]/20 border border-[#c5a294]/30"
                            : "hover:bg-white/5 active:bg-white/10"
                        }`}
                        aria-current={isActive ? "page" : undefined}
                      >
                        <div
                          className={`p-2 rounded-lg transition-colors ${
                            isActive
                              ? "bg-gradient-to-r from-[#c5a294] to-[#d4b5a4] text-white"
                              : "bg-white/10 text-white/70 group-hover:bg-white/20 group-hover:text-white"
                          }`}
                        >
                          <Icon size={18} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div
                            className={`font-medium transition-colors ${
                              isActive
                                ? "bg-gradient-to-r from-[#c5a294] to-[#d4b5a4] bg-clip-text text-transparent"
                                : "text-white group-hover:text-white/90"
                            }`}
                          >
                            {item.label}
                          </div>
                          <div className="text-xs text-white/50 group-hover:text-white/60 transition-colors mt-1">
                            {item.description}
                          </div>
                        </div>
                        {isActive && (
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#c5a294] to-[#d4b5a4] shadow-lg shadow-[#c5a294]/50"></div>
                        )}
                      </Link>
                    )
                  })}
                </nav>

                {/* Footer */}
                <div className="absolute bottom-6 left-6 right-6">
                  <Separator className="bg-white/10 mb-4" />
                  <div className="text-center">
                    <p className="text-xs text-white/40 font-light">
                      © {new Date().getFullYear()} SHIBUI Matcha Bar & Cafe
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  )
}
