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
  CakeSlice,
  ZoomIn,
  X,
} from "lucide-react"
import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"

// Paper format configuration
const PAPER_FORMAT = "A4" as const
type PaperFormat = "A4" | "Letter"

const PAPER_CONFIGS: Record<PaperFormat, { aspectClass: string; ratio: string }> = {
  A4: { aspectClass: "aspect-[3/4.25]", ratio: "3:4.25" },
  Letter: { aspectClass: "aspect-[4/5.18]", ratio: "4:5.18" },
}

const MENU_IMAGES: string[] = [
  "/new-menu/MENU A4 Potrait_pages-to-jpg-0002.jpg",
  "/new-menu/MENU A4 Potrait_pages-to-jpg-0003.jpg",
  "/new-menu/MENU A4 Potrait_pages-to-jpg-0004.jpg",
  "/new-menu/MENU A4 Potrait_pages-to-jpg-0005.jpg",
  "/new-menu/MENU A4 Potrait_pages-to-jpg-0006.jpg",
  "/new-menu/MENU A4 Potrait_pages-to-jpg-0007.jpg",
  "/new-menu/MENU A4 Potrait_pages-to-jpg-0008.jpg",
  "/new-menu/MENU A4 Potrait_pages-to-jpg-0009.jpg",
  "/new-menu/MENU A4 Potrait_pages-to-jpg-0010.jpg",
]

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

export default function ImprovedMenuPage(): React.JSX.Element {
  const [currentMenuPage, setCurrentMenuPage] = useState<number>(0)
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(true)
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [isImageLoading, setIsImageLoading] = useState<boolean>(true)
  const [direction, setDirection] = useState<"left" | "right" | null>(null)
  const thumbnailScrollRef = useRef<HTMLDivElement>(null)

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50

  const nextMenuPage = useCallback((): void => {
    setDirection("left")
    setCurrentMenuPage((prev) => (prev + 1) % MENU_IMAGES.length)
    setIsAutoPlay(false)
  }, [])

  const prevMenuPage = useCallback((): void => {
    setDirection("right")
    setCurrentMenuPage((prev) => (prev - 1 + MENU_IMAGES.length) % MENU_IMAGES.length)
    setIsAutoPlay(false)
  }, [])

  const goToPage = useCallback((index: number): void => {
    if (index > currentMenuPage) {
      setDirection("left")
    } else if (index < currentMenuPage) {
      setDirection("right")
    }
    setCurrentMenuPage(index)
    setIsAutoPlay(false)
  }, [currentMenuPage])

  // Touch handlers for swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      nextMenuPage()
    } else if (isRightSwipe) {
      prevMenuPage()
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevMenuPage()
      } else if (e.key === "ArrowRight") {
        nextMenuPage()
      } else if (e.key === "Escape" && isFullscreen) {
        closeFullscreen()
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [nextMenuPage, prevMenuPage, isFullscreen])

  // Auto-scroll thumbnail into view
  useEffect(() => {
    if (thumbnailScrollRef.current) {
      const thumbnail = thumbnailScrollRef.current.children[currentMenuPage] as HTMLElement
      if (thumbnail) {
        thumbnail.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        })
      }
    }
  }, [currentMenuPage])

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return
    
    const interval = setInterval(() => {
      setDirection("left")
      setCurrentMenuPage((prev) => (prev + 1) % MENU_IMAGES.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [isAutoPlay])

  // Reset direction after animation
  useEffect(() => {
    const timer = setTimeout(() => setDirection(null), 500)
    return () => clearTimeout(timer)
  }, [currentMenuPage])

  const openFullscreen = (index: number): void => {
    setCurrentMenuPage(index)
    setIsFullscreen(true)
    document.body.style.overflow = "hidden"
  }

  const closeFullscreen = (): void => {
    setIsFullscreen(false)
    document.body.style.overflow = "auto"
  }

  const currentPaperConfig = PAPER_CONFIGS[PAPER_FORMAT]
  const currentAspectClass = currentPaperConfig.aspectClass

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(to bottom, #f8f6f3, #f5f2ed, #f8f6f3)" }}>
      {/* Hero Section */}
      <section
        className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
        style={{ background: "linear-gradient(135deg, #f8f6f3 0%, #f5f2ed 50%, #f0ebe4 100%)" }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Hero Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div
              className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 shadow-md"
              style={{ border: "1px solid #c8a28e40" }}
            >
              <Sparkles className="w-4 h-4" style={{ color: "#1b3b26" }} />
              <span className="font-semibold text-xs sm:text-sm" style={{ color: "#1b3b26" }}>
                Authentic Japanese Experience
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight leading-tight px-4">
              <span
                className="bg-gradient-to-r bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(to right, #1b3b26, #2d5a3a, #1b3b26)" }}
              >
                Menu Lengkap
              </span>
              <br />
              <span className="text-gray-800">di Shibui</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
              Nikmati pengalaman kuliner Jepang autentik dengan sentuhan modern
            </p>
          </div>

          {/* Mobile-Optimized Carousel */}
          <div className="lg:hidden">
            <div className="relative">
              {/* Main Menu Display with Swipe Support */}
              <div
                className="relative mb-6 touch-pan-y"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                <div className="relative overflow-hidden">
                  <div
                    className={`w-full max-w-md mx-auto ${currentAspectClass} rounded-xl sm:rounded-2xl overflow-hidden shadow-lg bg-white relative group`}
                    style={{ border: "1px solid #c8a28e80" }}
                    onClick={() => openFullscreen(currentMenuPage)}
                  >
                    {isImageLoading && (
                      <div className="absolute inset-0 bg-gray-100 animate-pulse flex items-center justify-center">
                        <div className="w-8 h-8 border-4 border-[#c8a28e] border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    )}
                    <Image
                      src={MENU_IMAGES[currentMenuPage] || "/placeholder.svg"}
                      alt={`Menu page ${currentMenuPage + 1}`}
                      fill
                      className={`object-contain transition-opacity duration-300 ${isImageLoading ? "opacity-0" : "opacity-100"}`}
                      sizes="(max-width: 768px) 100vw, 448px"
                      priority
                      onLoadingComplete={() => setIsImageLoading(false)}
                    />
                    {/* Zoom Hint */}
                    <div className="absolute inset-0 bg-black/0 group-active:bg-black/10 transition-all duration-200 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-active:opacity-100 transition-all duration-200 shadow-lg">
                        <ZoomIn className="w-6 h-6 text-gray-700" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation Buttons - Improved Touch Targets */}
                <Button
                  onClick={prevMenuPage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 hover:bg-white active:scale-95 text-gray-700 shadow-lg transition-all duration-200 p-0 z-10"
                  style={{
                    border: "1px solid #c8a28e80",
                    color: "#1b3b26",
                  }}
                  aria-label="Previous menu page"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  onClick={nextMenuPage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 hover:bg-white active:scale-95 text-gray-700 shadow-lg transition-all duration-200 p-0 z-10"
                  style={{
                    border: "1px solid #c8a28e80",
                    color: "#1b3b26",
                  }}
                  aria-label="Next menu page"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>

              {/* Improved Thumbnail Strip */}
              <div
                ref={thumbnailScrollRef}
                className="flex gap-2 sm:gap-3 overflow-x-auto pb-3 px-4 snap-x snap-mandatory scrollbar-hide"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                {MENU_IMAGES.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => goToPage(index)}
                    className={`flex-shrink-0 snap-center relative w-14 h-18 sm:w-16 sm:h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                      index === currentMenuPage ? "ring-2 ring-[#1b3b26] shadow-lg scale-105" : "ring-1 ring-[#c8a28e80] active:scale-95"
                    }`}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Menu page ${index + 1} thumbnail`}
                      fill
                      className="object-contain"
                      sizes="64px"
                    />
                    {index === currentMenuPage && (
                      <div className="absolute inset-0 bg-[#1b3b26] bg-opacity-10"></div>
                    )}
                  </button>
                ))}
              </div>

              {/* Page Counter */}
              <div className="text-center mt-4">
                <span className="text-sm text-gray-600 font-medium">
                  {currentMenuPage + 1} / {MENU_IMAGES.length}
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Carousel - Simplified and Smoother */}
          <div className="hidden lg:block">
            <div className="relative py-12">
              <div className="flex items-center justify-center gap-6 xl:gap-8">
                {/* Previous Page Preview */}
                <button
                  onClick={prevMenuPage}
                  className="relative transition-all duration-300 hover:scale-105 active:scale-95 transform-gpu opacity-60 hover:opacity-80"
                  style={{
                    transform: "perspective(1200px) rotateY(15deg)",
                  }}
                >
                  <div
                    className={`w-52 xl:w-64 ${currentAspectClass} rounded-2xl overflow-hidden shadow-lg bg-white`}
                    style={{ border: "1px solid #c8a28e80" }}
                  >
                    <Image
                      src={MENU_IMAGES[(currentMenuPage - 1 + MENU_IMAGES.length) % MENU_IMAGES.length] || "/placeholder.svg"}
                      alt="Previous menu page"
                      fill
                      className="object-contain"
                      sizes="256px"
                    />
                  </div>
                </button>

                {/* Current Page - Main Focus */}
                <button
                  onClick={() => openFullscreen(currentMenuPage)}
                  className="relative z-10 group transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <div
                    className={`relative w-80 xl:w-96 2xl:w-[26rem] ${currentAspectClass} rounded-3xl overflow-hidden shadow-2xl bg-white`}
                    style={{ border: "2px solid #c8a28e" }}
                  >
                    <Image
                      src={MENU_IMAGES[currentMenuPage] || "/placeholder.svg"}
                      alt={`Menu page ${currentMenuPage + 1}`}
                      fill
                      className="object-contain transition-all duration-300"
                      sizes="(max-width: 1536px) 384px, 416px"
                      priority
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
                        <ZoomIn className="w-8 h-8 text-gray-700" />
                      </div>
                    </div>
                  </div>
                </button>

                {/* Next Page Preview */}
                <button
                  onClick={nextMenuPage}
                  className="relative transition-all duration-300 hover:scale-105 active:scale-95 transform-gpu opacity-60 hover:opacity-80"
                  style={{
                    transform: "perspective(1200px) rotateY(-15deg)",
                  }}
                >
                  <div
                    className={`w-52 xl:w-64 ${currentAspectClass} rounded-2xl overflow-hidden shadow-lg bg-white`}
                    style={{ border: "1px solid #c8a28e80" }}
                  >
                    <Image
                      src={MENU_IMAGES[(currentMenuPage + 1) % MENU_IMAGES.length] || "/placeholder.svg"}
                      alt="Next menu page"
                      fill
                      className="object-contain"
                      sizes="256px"
                    />
                  </div>
                </button>
              </div>

              {/* Desktop Navigation Buttons */}
              <Button
                onClick={prevMenuPage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white hover:bg-gray-50 active:scale-95 shadow-xl transition-all duration-200 p-0 z-20"
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
                className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white hover:bg-gray-50 active:scale-95 shadow-xl transition-all duration-200 p-0 z-20"
                style={{
                  border: "1px solid #c8a28e80",
                  color: "#1b3b26",
                }}
                aria-label="Next menu page"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>

              {/* Page Counter */}
              <div className="text-center mt-8">
                <span className="text-base text-gray-600 font-medium">
                  Page {currentMenuPage + 1} of {MENU_IMAGES.length}
                </span>
              </div>
            </div>
          </div>

          {/* Simplified Page Indicators */}
          <div className="flex justify-center items-center mt-6 lg:mt-8">
            <div className="flex gap-2">
              {MENU_IMAGES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index)}
                  className={`transition-all duration-300 ${
                    index === currentMenuPage
                      ? "w-8 h-3 rounded-full shadow-md"
                      : "w-3 h-3 rounded-full shadow-sm hover:scale-110 active:scale-90"
                  }`}
                  style={{
                    background: index === currentMenuPage ? "linear-gradient(to right, #1b3b26, #2d5a3a)" : "#c8a28e60",
                  }}
                  aria-label={`Go to menu page ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Menu Categories - Improved Mobile Layout */}
      <section
        className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
        style={{ background: "linear-gradient(135deg, #f5f2ed 0%, #f0ebe4 50%, #f8f6f3 100%)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div
              className="inline-flex items-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 shadow-md"
              style={{ border: "1px solid #c8a28e80" }}
            >
              <Coffee className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: "#1b3b26" }} />
              <span className="font-bold text-sm sm:text-base" style={{ color: "#1b3b26" }}>
                Kategori Menu
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight leading-tight px-4">
              <span
                className="bg-gradient-to-r bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(to right, #1b3b26, #2d5a3a, #1b3b26)" }}
              >
                Temukan Menu Favorit
              </span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Setiap hidangan dibuat dengan dedikasi tinggi menggunakan bahan premium pilihan
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {menuCategories.map((category, index) => (
              <Card
                key={index}
                className="group relative text-center p-6 shadow-md rounded-xl bg-white/90 backdrop-blur-sm hover:shadow-lg active:scale-[0.98] transition-all duration-300 overflow-hidden"
                style={{ border: "1px solid #c8a28e80" }}
              >
                <CardContent className="space-y-4 relative z-10 p-0">
                  <div className="flex justify-center">
                    <div
                      className={`relative p-3 sm:p-4 bg-gradient-to-br ${category.gradient} rounded-xl shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300`}
                    >
                      {category.icon}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-bold text-gray-900 text-lg sm:text-xl group-hover:text-[#1b3b26] transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{category.desc}</p>
                    <div
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
                      style={{
                        backgroundColor: "#c8a28e20",
                        border: "1px solid #c8a28e80",
                      }}
                    >
                      <span className="text-xs sm:text-sm font-semibold" style={{ color: "#1b3b26" }}>
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

      {/* CTA Section - Improved Mobile Layout */}
      <section
        className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
        style={{ background: "linear-gradient(135deg, #f8f6f360, #f5f2ed40, #f0ebe450)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div
            className="relative rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden"
            style={{ background: "linear-gradient(135deg, #1b3b26, #2d5a3a, #1b3b26)" }}
          >
            <div className="relative z-10 p-6 sm:p-10 lg:p-16">
              <div className="text-center mb-8 sm:mb-10">
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 sm:mb-6"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                  }}
                >
                  <Sparkles className="w-4 h-4 text-white" />
                  <span className="text-white font-semibold text-sm">Matcha Bar & Cafe Terbaik</span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                  Rasakan Pengalaman
                  <br />
                  <span style={{ color: "#c8a28e" }}>Matcha Terbaik di Cirebon</span>
                </h3>
                <p className="text-white/90 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
                  Kunjungi SHIBUI Cafe dan nikmati authentic Japanese matcha experience dengan suasana yang cozy
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {/* Visit Location Card */}
                <div
                  className="group relative rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:-translate-y-1 active:scale-[0.98] transition-all duration-300"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <div className="relative z-10 text-center space-y-4 sm:space-y-6">
                    <div
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto group-hover:scale-105 transition-transform duration-300"
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.15)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                      }}
                    >
                      <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xl sm:text-2xl mb-2 sm:mb-3">Kunjungi Langsung</h4>
                      <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                        Rasakan suasana cozy dan authentic Japanese ambience langsung di SHIBUI Cafe Cirebon
                      </p>
                      <div className="space-y-2 sm:space-y-3 text-white/70 text-xs sm:text-sm">
                        <div className="flex items-center justify-center gap-2">
                          <Clock className="w-4 h-4 flex-shrink-0" />
                          <span>Buka setiap hari 08:00 - 22:00</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <Users className="w-4 h-4 flex-shrink-0" />
                          <span>Kapasitas hingga 50 orang</span>
                        </div>
                      </div>
                    </div>
                    <a href={LINKS.googleMaps} target="_blank" rel="noopener noreferrer" className="block">
                      <Button
                        className="w-full px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl active:scale-95 transition-all duration-300 font-bold text-base sm:text-lg"
                        style={{
                          backgroundColor: "white",
                          color: "#1b3b26",
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
                  className="group relative rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:-translate-y-1 active:scale-[0.98] transition-all duration-300"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <div className="relative z-10 text-center space-y-4 sm:space-y-6">
                    <div
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto group-hover:scale-105 transition-transform duration-300"
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.15)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                      }}
                    >
                      <ShoppingBag className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xl sm:text-2xl mb-2 sm:mb-3">Pesan Online</h4>
                      <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                        Nikmati kemudahan pesan online melalui GrabFood dan rasakan kelezatan SHIBUI di rumah
                      </p>
                      <div className="space-y-2 sm:space-y-3 text-white/70 text-xs sm:text-sm">
                        <div className="flex items-center justify-center gap-2">
                          <Clock className="w-4 h-4 flex-shrink-0" />
                          <span>Delivery dalam 30-45 menit</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <Star className="w-4 h-4 flex-shrink-0" />
                          <span>Rating 4.8/5 di GrabFood</span>
                        </div>
                      </div>
                    </div>
                    <a href={LINKS.grabFood} target="_blank" rel="noopener noreferrer" className="block">
                      <Button
                        className="w-full text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl active:scale-95 transition-all duration-300 font-bold text-base sm:text-lg"
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
              <div className="text-center mt-8 sm:mt-12">
                <p className="text-white/70 text-xs sm:text-sm">
                  🌟 Shibui: Tempat terbaik untuk nikmati matcha dan suasana tenang di Cirebon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Improved Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeFullscreen}
              className="fixed top-4 right-4 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 active:scale-95 text-white rounded-full flex items-center justify-center transition-all duration-200 border border-white/20"
              aria-label="Close fullscreen"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevMenuPage}
              className="fixed left-4 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-white/10 hover:bg-white/20 active:scale-95 text-white rounded-full flex items-center justify-center transition-all duration-200 border border-white/20 z-40"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextMenuPage}
              className="fixed right-4 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-white/10 hover:bg-white/20 active:scale-95 text-white rounded-full flex items-center justify-center transition-all duration-200 border border-white/20 z-40"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Fullscreen Image with Swipe Support */}
            <div
              className="relative w-full h-full p-4 sm:p-8 flex items-center justify-center"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <div className="relative w-full h-full max-w-5xl">
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

            {/* Page Counter */}
            <div className="fixed bottom-20 sm:bottom-24 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <span className="text-white text-sm font-medium">
                {currentMenuPage + 1} / {MENU_IMAGES.length}
              </span>
            </div>

            {/* Page Indicators */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              {MENU_IMAGES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index)}
                  className={`transition-all duration-300 ${
                    index === currentMenuPage
                      ? "w-8 h-3 bg-white rounded-full"
                      : "w-3 h-3 bg-white/50 hover:bg-white/70 active:scale-90 rounded-full"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="h-16 sm:h-20"></div>

      {/* Add scrollbar-hide utility to global styles */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}