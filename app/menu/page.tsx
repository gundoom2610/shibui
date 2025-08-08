"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ChevronLeft,
  ChevronRight,
  Coffee,
  Utensils,
  Cookie,
  MapPin,
  ShoppingBag,
  Star,
  Clock,
  Users,
  Sparkles,
  CakeSlice
} from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"

// Paper format configuration
const PAPER_FORMAT = "A4" as const
type PaperFormat = "A4" | "Letter"

const PAPER_CONFIGS: Record<PaperFormat, { aspectClass: string; ratio: string }> = {
  A4: { aspectClass: "aspect-[3/4.25]", ratio: "3:4.25" },
  Letter: { aspectClass: "aspect-[4/5.18]", ratio: "4:5.18" },
}

const MENU_IMAGES: string[] = ["/Menu-Shibui-1.PNG", "/Menu-Shibui-2.PNG", "/Menu-Shibui-3.JPG", "/Menu-Shibui-4.jpg"]

const LINKS = {
  googleMaps: "https://maps.app.goo.gl/cCjFVn1hdaXoBgU89",
  grabFood: "https://grab.onelink.me/2695613898?pid=inappsharing&c=6-C7JCETNWAVBZGA&is_retargeting=true&af_dp=grab%3A%2F%2Fopen%3FscreenType%3DGRABFOOD%26sourceID%3DA4pcqCZkS4%26merchantIDs%3D6-C7JCETNWAVBZGA&af_force_deeplink=true&af_web_dp=https%3A%2F%2Fwww.grab.com%2Fdownload&fbclid=PAQ0xDSwLERJxleHRuA2FlbQIxMAABp9ZtBvmOtZDMe9JRCkKFlS932fQLl_-0-daWCrBb1yMhRyxZwadNUJOuF7y4_aem_Bo3msD18AUNiVwxEDXSHoQ",
} as const

interface MenuCategory {
  icon: React.ReactNode
  title: string
  desc: string
  gradient: string
  count: string
  accent: string
}

const menuCategories: MenuCategory[] = [
  {
    icon: <Coffee className="w-6 h-6 text-[#1b3b26]" />,
    title: "Matcha & Coffee",
    desc: "Premium matcha dan coffee specialty dengan beans terpilih",
    gradient: "from-[#c8a28e] to-[#d4b299]",
    count: "15+ items",
    accent: "primary",
  },
  {
    icon: <Utensils className="w-6 h-6 text-[#1b3b26]" />,
    title: "Makanan Berat",
    desc: "Hidangan utama fusion Jepang yang mengenyangkan",
    gradient: "from-[#c8a28e] to-[#d4b299]",
    count: "12+ items",
    accent: "primary",
  },
  {
    icon: <Cookie className="w-6 h-6 text-[#1b3b26]" />,
    title: "Snacks",
    desc: "Camilan ringan dan pastry dengan sentuhan Jepang",
    gradient: "from-[#c8a28e] to-[#d4b299]",
    count: "20+ items",
    accent: "secondary",
  },
  {
    icon: <CakeSlice className="w-6 h-6 text-[#1b3b26]" />,
    title: "Desserts",
    desc: "Dessert premium dan ice cream dengan cita rasa autentik",
    gradient: "from-[#c8a28e] to-[#d4b299]",
    count: "10+ items",
    accent: "secondary",
  },
]

export default function SleekMenuPage(): React.JSX.Element {
  const [currentMenuPage, setCurrentMenuPage] = useState<number>(0)
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(true)
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false)
  const [userHasInteracted, setUserHasInteracted] = useState<boolean>(false)

  const nextMenuPage = (): void => {
    setCurrentMenuPage((prev) => (prev + 1) % MENU_IMAGES.length)
    setUserHasInteracted(true)
    setIsAutoPlay(false)
  }

  const prevMenuPage = (): void => {
    setCurrentMenuPage((prev) => (prev - 1 + MENU_IMAGES.length) % MENU_IMAGES.length)
    setUserHasInteracted(true)
    setIsAutoPlay(false)
  }

  useEffect(() => {
    if (!isAutoPlay || isHovered || userHasInteracted) return
    const interval = setInterval(() => {
      setCurrentMenuPage((prev) => (prev + 1) % MENU_IMAGES.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [isAutoPlay, isHovered, userHasInteracted])

  const openFullscreen = (index: number): void => {
    setCurrentMenuPage(index)
    setIsFullscreen(true)
  }

  const closeFullscreen = (): void => {
    setIsFullscreen(false)
  }

  const currentPaperConfig = PAPER_CONFIGS[PAPER_FORMAT]
  const currentAspectClass = currentPaperConfig.aspectClass

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(to bottom, #f8f6f3, #f5f2ed, #f8f6f3)" }}>
      {/* Hero Section */}
      <section
        className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
        style={{ background: "linear-gradient(135deg, #f8f6f3 0%, #f5f2ed 50%, #f0ebe4 100%)" }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Hero Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 relative">
            <div
              className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full mb-8 shadow-lg"
              style={{ border: "1px solid #c8a28e40" }}
            >
              <Sparkles className="w-4 h-4" style={{ color: "#1b3b26" }} />
              <span className="font-semibold text-sm" style={{ color: "#1b3b26" }}>
                Authentic Japanese Experience
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-[0.9]">
              <span
                className="bg-gradient-to-r bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(to right, #1b3b26, #2d5a3a, #1b3b26)" }}
              >
                Menu Lengkap
              </span>
              <br />
              <span className="text-gray-800">di Shibui</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Nikmati pengalaman kuliner Jepang autentik dengan sentuhan modern
            </p>
          </div>

          {/* Enhanced Menu Carousel */}
          <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            {/* Mobile Carousel with Side Previews */}
            <div className="block lg:hidden">
              <div className="relative px-4">
                {/* Main Menu Display */}
                <div className="relative mb-6">
                  <div
                    className={`w-full max-w-sm mx-auto ${currentAspectClass} rounded-2xl overflow-hidden shadow-xl bg-white group cursor-pointer`}
                    style={{ border: "2px solid #c8a28e80" }}
                    onClick={() => openFullscreen(currentMenuPage)}
                  >
                    <Image
                      src={MENU_IMAGES[currentMenuPage] || "/placeholder.svg"}
                      alt={`Menu page ${currentMenuPage + 1}`}
                      fill
                      className="object-contain transition-all duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 384px"
                      priority
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
                        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* Navigation Buttons */}
                  <Button
                    onClick={prevMenuPage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/95 hover:bg-white text-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300 p-0 z-30"
                    style={{
                      border: "2px solid #c8a28e80",
                      color: "#1b3b26",
                    }}
                    aria-label="Previous menu page"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  <Button
                    onClick={nextMenuPage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/95 hover:bg-white text-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300 p-0 z-30"
                    style={{
                      border: "2px solid #c8a28e80",
                      color: "#1b3b26",
                    }}
                    aria-label="Next menu page"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
                {/* Thumbnail Strip */}
                <div className="flex gap-3 justify-center overflow-x-auto pb-2 px-2">
                  {MENU_IMAGES.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentMenuPage(index)
                        setUserHasInteracted(true)
                        setIsAutoPlay(false)
                      }}
                      className={`flex-shrink-0 relative w-16 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        index === currentMenuPage ? "shadow-lg scale-110" : "hover:scale-105"
                      }`}
                      style={{
                        borderColor: index === currentMenuPage ? "#1b3b26" : "#c8a28e80",
                      }}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Menu page ${index + 1} thumbnail`}
                        fill
                        className="object-contain"
                        sizes="64px"
                      />
                      {index === currentMenuPage && (
                        <div className="absolute inset-0" style={{ backgroundColor: "#1b3b2620" }}></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop Carousel with Enhanced 3D Effect */}
            <div className="hidden lg:block">
              <div className="relative py-16">
                <div className="flex items-center justify-center gap-6 xl:gap-8">
                  {/* Previous Page */}
                  <div
                    className="relative cursor-pointer transition-all duration-700 hover:scale-105 transform-gpu group"
                    onClick={prevMenuPage}
                    style={{
                      transform: "perspective(1200px) rotateY(20deg) rotateX(3deg) translateZ(-50px)",
                    }}
                  >
                    <div
                      className={`w-52 xl:w-64 ${currentAspectClass} rounded-2xl overflow-hidden shadow-xl opacity-60 group-hover:opacity-80 transition-all duration-500 bg-white`}
                      style={{ border: "1px solid #c8a28e80" }}
                    >
                      <Image
                        src={
                          MENU_IMAGES[(currentMenuPage - 1 + MENU_IMAGES.length) % MENU_IMAGES.length] ||
                          "/placeholder.svg" ||
                          "/placeholder.svg"
                        }
                        alt="Previous menu page"
                        fill
                        className="object-contain transition-all duration-500 group-hover:scale-105"
                        sizes="(max-width: 1280px) 208px, 256px"
                      />
                    </div>
                  </div>

                  {/* Current Page - Enhanced */}
                  <div className="relative z-10 group">
                    <div
                      className={`relative w-80 xl:w-96 2xl:w-[26rem] ${currentAspectClass} rounded-3xl overflow-hidden shadow-2xl bg-white transition-all duration-500 group-hover:shadow-3xl cursor-pointer`}
                      style={{ border: "1px solid #c8a28e80" }}
                      onClick={() => openFullscreen(currentMenuPage)}
                    >
                      <Image
                        src={MENU_IMAGES[currentMenuPage] || "/placeholder.svg"}
                        alt={`Menu page ${currentMenuPage + 1}`}
                        fill
                        className="object-contain transition-all duration-500 group-hover:scale-105"
                        sizes="(max-width: 1280px) 320px, (max-width: 1536px) 384px, 416px"
                        priority
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
                          <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Next Page */}
                  <div
                    className="relative cursor-pointer transition-all duration-700 hover:scale-105 transform-gpu group"
                    onClick={nextMenuPage}
                    style={{
                      transform: "perspective(1200px) rotateY(-20deg) rotateX(3deg) translateZ(-50px)",
                    }}
                  >
                    <div
                      className={`w-52 xl:w-64 ${currentAspectClass} rounded-2xl overflow-hidden shadow-xl opacity-60 group-hover:opacity-80 transition-all duration-500 bg-white`}
                      style={{ border: "1px solid #c8a28e80" }}
                    >
                      <Image
                        src={MENU_IMAGES[(currentMenuPage + 1) % MENU_IMAGES.length] || "/placeholder.svg"}
                        alt="Next menu page"
                        fill
                        className="object-contain transition-all duration-500 group-hover:scale-105"
                        sizes="(max-width: 1280px) 208px, 256px"
                      />
                    </div>
                  </div>
                </div>

                {/* Enhanced Desktop Navigation */}
                <Button
                  onClick={prevMenuPage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white hover:bg-gray-50 shadow-xl hover:shadow-2xl transition-all duration-300 p-0 z-20 hover:scale-110"
                  style={{
                    border: "1px solid #c8a28e80",
                    color: "#1b3b26",
                  }}
                  aria-label="Previous menu page"
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>
                <Button
                  onClick={nextMenuPage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white hover:bg-gray-50 shadow-xl hover:shadow-2xl transition-all duration-300 p-0 z-20 hover:scale-110"
                  style={{
                    border: "1px solid #c8a28e80",
                    color: "#1b3b26",
                  }}
                  aria-label="Next menu page"
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>
              </div>
            </div>

            {/* Enhanced Page Indicators */}
            <div className="flex justify-center items-center mt-8">
              <div className="flex gap-2">
                {MENU_IMAGES.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentMenuPage(index)
                      setUserHasInteracted(true)
                      setIsAutoPlay(false)
                    }}
                    className={`transition-all duration-500 relative ${
                      index === currentMenuPage
                        ? "w-8 h-3 rounded-full shadow-lg"
                        : "w-3 h-3 rounded-full shadow-sm hover:shadow-md hover:scale-110"
                    }`}
                    style={{
                      background:
                        index === currentMenuPage ? "linear-gradient(to right, #1b3b26, #2d5a3a)" : "#c8a28e60",
                    }}
                    aria-label={`Go to menu page ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Menu Categories */}
      <section
        className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #f5f2ed 0%, #f0ebe4 50%, #f8f6f3 100%)" }}
      >
        {/* Subtle Beige Orbs Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute -top-20 -left-20 w-40 h-40 rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, #c8a28e, transparent)" }}
          ></div>
          <div
            className="absolute top-1/4 -right-16 w-32 h-32 rounded-full opacity-15 blur-2xl"
            style={{ background: "radial-gradient(circle, #d4b299, transparent)" }}
          ></div>
          <div
            className="absolute -bottom-16 left-1/3 w-36 h-36 rounded-full opacity-10 blur-3xl"
            style={{ background: "radial-gradient(circle, #c8a28e, transparent)" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full opacity-12 blur-2xl"
            style={{ background: "radial-gradient(circle, #b8926e, transparent)" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div
              className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-full mb-8 shadow-lg"
              style={{ border: "1px solid #c8a28e80" }}
            >
              <Coffee className="w-5 h-5" style={{ color: "#1b3b26" }} />
              <span className="font-bold text-lg" style={{ color: "#1b3b26" }}>
                Kategori Menu
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
              <span
                className="relative inline-block px-8 py-6 rounded-3xl shadow-xl backdrop-blur-sm"
                style={{
                  background: "linear-gradient(135deg, #f8f6f380, #f5f2ed60, #f0ebe470)",
                  border: "1px solid #c8a28e40",
                }}
              >
                <span
                  className="absolute inset-0 rounded-3xl"
                  style={{ background: "linear-gradient(135deg, #c8a28e20, transparent, #c8a28e30)" }}
                ></span>
                <span
                  className="relative bg-gradient-to-r bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(to right, #1b3b26, #2d5a3a, #1b3b26)" }}
                >
                  Temukan Menu Favorit
                </span>
              </span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
              Setiap hidangan dibuat dengan dedikasi tinggi menggunakan bahan premium pilihan
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {menuCategories.map((category, index) => (
              <Card
                key={index}
                className="group relative text-center p-6 lg:p-8 shadow-lg rounded-2xl bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
                style={{ border: "1px solid #c8a28e80" }}
              >
                <CardContent className="space-y-6 relative z-10 p-0">
                  <div className="flex justify-center">
                    <div
                      className={`relative p-4 bg-gradient-to-br ${category.gradient} rounded-xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500`}
                    >
                      {category.icon}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-bold text-gray-900 text-xl group-hover:text-[#1b3b26] transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{category.desc}</p>
                    <div
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                      style={{
                        backgroundColor: "#c8a28e20",
                        border: "1px solid #c8a28e80",
                      }}
                    >
                      <span className="text-sm font-semibold" style={{ color: "#1b3b26" }}>
                        {category.count}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clean CTA Section */}
      <section
        className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
        style={{ background: "linear-gradient(135deg, #f8f6f360, #f5f2ed40, #f0ebe450)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div
            className="relative rounded-3xl shadow-2xl overflow-hidden"
            style={{ background: "linear-gradient(135deg, #1b3b26, #2d5a3a, #1b3b26)" }}
          >
            <div className="relative z-10 p-8 sm:p-12 lg:p-16">
              <div className="text-center mb-12">
                <div
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-6"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                  }}
                >
                  <Sparkles className="w-5 h-5 text-white" />
                  <span className="text-white font-semibold">Matcha Bar & Cafe Terbaik</span>
                </div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  Rasakan Pengalaman
                  <br />
                  <span style={{ color: "#c8a28e" }}>Matcha Terbaik di Cirebon</span>
                </h3>
                <p className="text-white/90 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
                  Kunjungi SHIBUI Cafe dan nikmati authentic Japanese matcha experience dengan suasana yang cozy dan
                  instagramable
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Visit Location Card */}
                <div
                  className="group relative rounded-2xl p-8 hover:-translate-y-1 transition-all duration-500"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <div className="relative z-10 text-center space-y-6">
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500"
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.15)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                      }}
                    >
                      <MapPin className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-2xl mb-3">Kunjungi Langsung</h4>
                      <p className="text-white/80 text-base leading-relaxed mb-6">
                        Rasakan suasana cozy dan authentic Japanese ambience langsung di SHIBUI Cafe Cirebon
                      </p>
                      <div className="space-y-3 text-white/70 text-sm">
                        <div className="flex items-center justify-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>Buka setiap hari 08:00 - 22:00</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>Kapasitas hingga 50 orang</span>
                        </div>
                      </div>
                    </div>
                    <a href={LINKS.googleMaps} target="_blank" rel="noopener noreferrer" className="block">
                      <Button
                        className="w-full px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 font-bold text-lg group-hover:scale-105"
                        style={{
                          backgroundColor: "white",
                          color: "#1b3b26",
                          border: "1px solid rgba(255, 255, 255, 0.2)",
                        }}
                      >
                        <MapPin className="w-5 h-5 mr-2" />
                        <span>Buka Google Maps</span>
                      </Button>
                    </a>
                  </div>
                </div>
                {/* Order Online Card */}
                <div
                  className="group relative rounded-2xl p-8 hover:-translate-y-1 transition-all duration-500"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <div className="relative z-10 text-center space-y-6">
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500"
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.15)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                      }}
                    >
                      <ShoppingBag className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-2xl mb-3">Pesan Online</h4>
                      <p className="text-white/80 text-base leading-relaxed mb-6">
                        Nikmati kemudahan pesan online melalui GrabFood dan rasakan kelezatan SHIBUI di rumah
                      </p>
                      <div className="space-y-3 text-white/70 text-sm">
                        <div className="flex items-center justify-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>Delivery dalam 30-45 menit</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <Star className="w-4 h-4" />
                          <span>Rating 4.8/5 di GrabFood</span>
                        </div>
                      </div>
                    </div>
                    <a href={LINKS.grabFood} target="_blank" rel="noopener noreferrer" className="block">
                      <Button
                        className="w-full text-white px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 font-bold text-lg group-hover:scale-105"
                        style={{
                          background: "linear-gradient(to right, #c8a28e, #b8926e)",
                        }}
                      >
                        <ShoppingBag className="w-5 h-5 mr-2" />
                        <span>Pesan di GrabFood</span>
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="text-center mt-12">
                <p className="text-white/70 text-sm">
                  🌟 Shibui: Tempat terbaik untuk nikmati matcha dan suasana tenang di Cirebon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <div className="relative w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeFullscreen}
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all duration-300 border border-white/20"
              aria-label="Close fullscreen"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {/* Navigation Buttons */}
            <button
              onClick={() => {
                setCurrentMenuPage((prev) => (prev - 1 + MENU_IMAGES.length) % MENU_IMAGES.length)
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => {
                setCurrentMenuPage((prev) => (prev + 1) % MENU_IMAGES.length)
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            {/* Fullscreen Image */}
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="relative w-full h-full max-w-4xl max-h-full">
                <Image
                  src={MENU_IMAGES[currentMenuPage] || "/placeholder.svg"}
                  alt={`Menu page ${currentMenuPage + 1} - Fullscreen`}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>
            </div>
            {/* Page Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              {MENU_IMAGES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentMenuPage(index)}
                  className={`transition-all duration-300 ${
                    index === currentMenuPage
                      ? "w-8 h-3 bg-white rounded-full"
                      : "w-3 h-3 bg-white/50 hover:bg-white/70 rounded-full"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
      <div className="h-20"></div>
    </div>
  )
}
