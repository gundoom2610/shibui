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
  IceCream,
  MapPin,
  ShoppingBag,
  Star,
  Clock,
  Users,
  Sparkles,
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
  googleMaps: "https://maps.google.com/?q=SHIBUI+Cafe+Cirebon",
  grabFood: "https://food.grab.com/id/en/restaurant/shibui-cafe-cirebon",
} as const

interface MenuCategory {
  icon: React.ReactNode
  title: string
  desc: string
  gradient: string
  count: string
  accent: string
}

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

  const menuCategories: MenuCategory[] = [
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Matcha & Coffee",
      desc: "Premium matcha dan coffee specialty dengan beans terpilih",
      gradient: "from-emerald-400/20 via-teal-400/20 to-green-400/20",
      count: "15+ items",
      accent: "emerald",
    },
    {
      icon: <Utensils className="w-6 h-6" />,
      title: "Makanan Berat",
      desc: "Hidangan utama fusion Jepang yang mengenyangkan",
      gradient: "from-amber-400/20 via-orange-400/20 to-yellow-400/20",
      count: "12+ items",
      accent: "amber",
    },
    {
      icon: <Cookie className="w-6 h-6" />,
      title: "Snacks",
      desc: "Camilan ringan dan pastry dengan sentuhan Jepang",
      gradient: "from-rose-400/20 via-pink-400/20 to-red-400/20",
      count: "20+ items",
      accent: "rose",
    },
    {
      icon: <IceCream className="w-6 h-6" />,
      title: "Desserts",
      desc: "Dessert premium dan ice cream dengan cita rasa autentik",
      gradient: "from-violet-400/20 via-purple-400/20 to-indigo-400/20",
      count: "10+ items",
      accent: "violet",
    },
  ]

  const currentPaperConfig = PAPER_CONFIGS[PAPER_FORMAT]
  const currentAspectClass = currentPaperConfig.aspectClass

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/20 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-200/30 to-teal-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tl from-slate-200/30 to-gray-300/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-100/20 to-teal-100/20 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-2 h-2 bg-emerald-400 rounded-full animate-bounce delay-300"></div>
      <div className="absolute top-40 left-20 w-1 h-1 bg-teal-400 rounded-full animate-bounce delay-700"></div>
      <div className="absolute bottom-40 right-40 w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce delay-1000"></div>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 relative">
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-xl px-6 py-3 rounded-full mb-8 border border-emerald-200/50 shadow-lg">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span className="text-emerald-700 font-semibold text-sm">Authentic Japanese Experience</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-[0.9]">
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 bg-clip-text text-transparent">
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
              <div className="relative h-[450px] flex items-center justify-center px-4">
                <div className="flex items-center justify-center gap-3 w-full">
                  {/* Previous Page Preview */}
                  <div
                    className="relative cursor-pointer transition-all duration-500 hover:scale-105 transform-gpu opacity-60 hover:opacity-80"
                    onClick={prevMenuPage}
                    style={{
                      transform: "perspective(800px) rotateY(25deg) rotateX(5deg)",
                    }}
                  >
                    <div
                      className={`w-20 sm:w-24 ${currentAspectClass} rounded-xl overflow-hidden shadow-lg bg-white/90 backdrop-blur-sm border border-white/50`}
                    >
                      <Image
                        src={
                          MENU_IMAGES[(currentMenuPage - 1 + MENU_IMAGES.length) % MENU_IMAGES.length] ||
                          "/placeholder.svg" ||
                          "/placeholder.svg"
                        }
                        alt="Previous menu page"
                        fill
                        className="object-contain transition-all duration-500"
                        sizes="96px"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-white/15 rounded-xl"></div>
                  </div>

                  {/* Current Page - Center */}
                  <div className="relative z-20 flex-1 max-w-[240px]">
                    <div
                      className={`w-full ${currentAspectClass} rounded-3xl overflow-hidden shadow-2xl bg-white/90 backdrop-blur-sm border border-white/50 ring-1 ring-gray-200/50 group cursor-pointer`}
                      onClick={() => openFullscreen(currentMenuPage)}
                    >
                      <Image
                        src={MENU_IMAGES[currentMenuPage] || "/placeholder.svg"}
                        alt={`Menu page ${currentMenuPage + 1}`}
                        fill
                        className="object-contain transition-all duration-500 group-hover:scale-105"
                        sizes="240px"
                        priority
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                        <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
                          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

                  {/* Next Page Preview */}
                  <div
                    className="relative cursor-pointer transition-all duration-500 hover:scale-105 transform-gpu opacity-60 hover:opacity-80"
                    onClick={nextMenuPage}
                    style={{
                      transform: "perspective(800px) rotateY(-25deg) rotateX(5deg)",
                    }}
                  >
                    <div
                      className={`w-20 sm:w-24 ${currentAspectClass} rounded-xl overflow-hidden shadow-lg bg-white/90 backdrop-blur-sm border border-white/50`}
                    >
                      <Image
                        src={MENU_IMAGES[(currentMenuPage + 1) % MENU_IMAGES.length] || "/placeholder.svg"}
                        alt="Next menu page"
                        fill
                        className="object-contain transition-all duration-500"
                        sizes="96px"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/5 to-white/15 rounded-xl"></div>
                  </div>
                </div>

                {/* Enhanced Navigation Buttons */}
                <Button
                  onClick={prevMenuPage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-xl hover:bg-white text-gray-700 hover:text-emerald-600 shadow-xl hover:shadow-2xl transition-all duration-300 p-0 z-30 border border-white/50"
                  aria-label="Previous menu page"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>

                <Button
                  onClick={nextMenuPage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-xl hover:bg-white text-gray-700 hover:text-emerald-600 shadow-xl hover:shadow-2xl transition-all duration-300 p-0 z-30 border border-white/50"
                  aria-label="Next menu page"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
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
                      className={`w-52 xl:w-64 ${currentAspectClass} rounded-2xl overflow-hidden shadow-xl opacity-60 group-hover:opacity-80 transition-all duration-500 bg-white/90 backdrop-blur-sm border border-white/50`}
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
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-white/10 rounded-2xl"></div>
                  </div>

                  {/* Current Page - Enhanced */}
                  <div className="relative z-10 group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400/20 via-teal-400/20 to-green-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                    <div
                      className={`relative w-80 xl:w-96 2xl:w-[26rem] ${currentAspectClass} rounded-3xl overflow-hidden shadow-2xl bg-white/95 backdrop-blur-sm border border-white/60 ring-1 ring-gray-200/30 transition-all duration-500 group-hover:shadow-3xl cursor-pointer`}
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
                        <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
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
                      className={`w-52 xl:w-64 ${currentAspectClass} rounded-2xl overflow-hidden shadow-xl opacity-60 group-hover:opacity-80 transition-all duration-500 bg-white/90 backdrop-blur-sm border border-white/50`}
                    >
                      <Image
                        src={MENU_IMAGES[(currentMenuPage + 1) % MENU_IMAGES.length] || "/placeholder.svg"}
                        alt="Next menu page"
                        fill
                        className="object-contain transition-all duration-500 group-hover:scale-105"
                        sizes="(max-width: 1280px) 208px, 256px"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/5 to-white/10 rounded-2xl"></div>
                  </div>
                </div>

                {/* Enhanced Desktop Navigation */}
                <Button
                  onClick={prevMenuPage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/80 backdrop-blur-xl hover:bg-white text-gray-700 hover:text-emerald-600 shadow-xl hover:shadow-2xl transition-all duration-300 p-0 z-20 border border-white/50 hover:scale-110"
                  aria-label="Previous menu page"
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>

                <Button
                  onClick={nextMenuPage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/80 backdrop-blur-xl hover:bg-white text-gray-700 hover:text-emerald-600 shadow-xl hover:shadow-2xl transition-all duration-300 p-0 z-20 border border-white/50 hover:scale-110"
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
                        ? "w-8 h-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full shadow-lg"
                        : "w-3 h-3 bg-gray-300/80 hover:bg-gray-400/80 rounded-full shadow-sm hover:shadow-md hover:scale-110"
                    }`}
                    aria-label={`Go to menu page ${index + 1}`}
                  >
                    {index === currentMenuPage && (
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full blur-sm opacity-60 animate-pulse"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Menu Categories */}
      <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-xl px-8 py-4 rounded-full mb-8 border border-emerald-200/50 shadow-lg">
              <Coffee className="w-5 h-5 text-emerald-600" />
              <span className="text-emerald-700 font-bold text-lg">Kategori Menu</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-slate-800 via-gray-800 to-slate-900 bg-clip-text text-transparent">
                Temukan Menu Favorit
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
                className="group relative text-center p-6 lg:p-8 border-0 shadow-lg rounded-2xl bg-white/70 backdrop-blur-sm hover:bg-white/90 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                <CardContent className="space-y-6 relative z-10 p-0">
                  <div className="flex justify-center">
                    <div
                      className={`relative p-4 bg-gradient-to-br from-${category.accent}-500 to-${category.accent}-600 rounded-xl text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500`}
                    >
                      {category.icon}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br from-${category.accent}-400 to-${category.accent}-500 rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                      ></div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-bold text-gray-900 text-xl group-hover:text-emerald-700 transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{category.desc}</p>
                    <div className="inline-flex items-center gap-2 bg-gray-100/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50">
                      <span className="text-sm font-semibold text-gray-700">{category.count}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ultra-Modern CTA Section with Enhanced Text Styling */}
      <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-gradient-to-br from-emerald-600 via-teal-600 to-green-700 rounded-3xl xl:rounded-[2.5rem] shadow-2xl overflow-hidden">
            {/* Enhanced Background Pattern */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_0)] bg-[length:24px_24px]"></div>
            </div>

            {/* Floating Orbs */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse delay-500"></div>

            <div className="relative z-10 p-8 sm:p-12 lg:p-16">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-white/30">
                  <Sparkles className="w-5 h-5 text-white drop-shadow-lg" />
                  <span
                    className="text-white font-semibold"
                    style={{
                      textShadow: "0 2px 4px rgba(0,0,0,0.4), 0 0 0 1px rgba(0,0,0,0.3)",
                      WebkitTextStroke: "0.5px rgba(0,0,0,0.2)",
                    }}
                  >
                    Matcha Bar & Cafe Terbaik
                  </span>
                </div>

                <h3
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
                  style={{
                    textShadow: "0 3px 6px rgba(0,0,0,0.4), 0 0 0 1px rgba(0,0,0,0.2)",
                    WebkitTextStroke: "0.5px rgba(0,0,0,0.1)",
                  }}
                >
                  Rasakan Pengalaman
                  <br />
                  <span
                    className="text-yellow-300"
                    style={{
                      textShadow: "0 3px 6px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,0,0,0.3)",
                      WebkitTextStroke: "0.5px rgba(0,0,0,0.2)",
                    }}
                  >
                    Matcha Terbaik di Cirebon
                  </span>
                </h3>

                <p
                  className="text-white/90 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed font-medium"
                  style={{
                    textShadow: "0 2px 4px rgba(0,0,0,0.3), 0 0 0 1px rgba(0,0,0,0.2)",
                    WebkitTextStroke: "0.3px rgba(0,0,0,0.1)",
                  }}
                >
                  Kunjungi SHIBUI Cafe dan nikmati authentic Japanese matcha experience dengan suasana yang cozy dan
                  instagramable
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Visit Location Card */}
                <div className="group relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-500 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10 text-center space-y-6">
                    <div className="w-20 h-20 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500 border border-white/20">
                      <MapPin className="w-10 h-10 text-white" />
                    </div>

                    <div>
                      <h4
                        className="text-white font-bold text-2xl mb-3"
                        style={{
                          textShadow: "0 2px 4px rgba(0,0,0,0.4), 0 0 0 1px rgba(0,0,0,0.2)",
                          WebkitTextStroke: "0.3px rgba(0,0,0,0.1)",
                        }}
                      >
                        Kunjungi Langsung
                      </h4>
                      <p
                        className="text-white/80 text-base leading-relaxed mb-6"
                        style={{
                          textShadow: "0 1px 3px rgba(0,0,0,0.3), 0 0 0 1px rgba(0,0,0,0.1)",
                          WebkitTextStroke: "0.2px rgba(0,0,0,0.1)",
                        }}
                      >
                        Rasakan suasana cozy dan authentic Japanese ambience langsung di SHIBUI Cafe Cirebon
                      </p>

                      <div className="space-y-3 text-white/70 text-sm">
                        <div className="flex items-center justify-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span
                            style={{
                              textShadow: "0 1px 2px rgba(0,0,0,0.3)",
                              WebkitTextStroke: "0.2px rgba(0,0,0,0.1)",
                            }}
                          >
                            Buka setiap hari 08:00 - 22:00
                          </span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <Users className="w-4 h-4" />
                          <span
                            style={{
                              textShadow: "0 1px 2px rgba(0,0,0,0.3)",
                              WebkitTextStroke: "0.2px rgba(0,0,0,0.1)",
                            }}
                          >
                            Kapasitas hingga 50 orang
                          </span>
                        </div>
                      </div>
                    </div>

                    <a href={LINKS.googleMaps} target="_blank" rel="noopener noreferrer" className="block">
                      <Button className="w-full bg-white/90 backdrop-blur-sm text-emerald-600 hover:bg-white px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 font-bold text-lg group-hover:scale-105 border border-white/20">
                        <MapPin className="w-5 h-5 mr-2" />
                        <span
                          style={{
                            textShadow: "0 1px 2px rgba(0,0,0,0.1)",
                          }}
                        >
                          Buka Google Maps
                        </span>
                      </Button>
                    </a>
                  </div>
                </div>

                {/* Order Online Card */}
                <div className="group relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-500 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10 text-center space-y-6">
                    <div className="w-20 h-20 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500 border border-white/20">
                      <ShoppingBag className="w-10 h-10 text-white" />
                    </div>

                    <div>
                      <h4
                        className="text-white font-bold text-2xl mb-3"
                        style={{
                          textShadow: "0 2px 4px rgba(0,0,0,0.4), 0 0 0 1px rgba(0,0,0,0.2)",
                          WebkitTextStroke: "0.3px rgba(0,0,0,0.1)",
                        }}
                      >
                        Pesan Online
                      </h4>
                      <p
                        className="text-white/80 text-base leading-relaxed mb-6"
                        style={{
                          textShadow: "0 1px 3px rgba(0,0,0,0.3), 0 0 0 1px rgba(0,0,0,0.1)",
                          WebkitTextStroke: "0.2px rgba(0,0,0,0.1)",
                        }}
                      >
                        Nikmati kemudahan pesan online melalui GrabFood dan rasakan kelezatan SHIBUI di rumah
                      </p>

                      <div className="space-y-3 text-white/70 text-sm">
                        <div className="flex items-center justify-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span
                            style={{
                              textShadow: "0 1px 2px rgba(0,0,0,0.3)",
                              WebkitTextStroke: "0.2px rgba(0,0,0,0.1)",
                            }}
                          >
                            Delivery dalam 30-45 menit
                          </span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <Star className="w-4 h-4" />
                          <span
                            style={{
                              textShadow: "0 1px 2px rgba(0,0,0,0.3)",
                              WebkitTextStroke: "0.2px rgba(0,0,0,0.1)",
                            }}
                          >
                            Rating 4.8/5 di GrabFood
                          </span>
                        </div>
                      </div>
                    </div>

                    <a href={LINKS.grabFood} target="_blank" rel="noopener noreferrer" className="block">
                      <Button className="w-full bg-gradient-to-r from-lime-400 to-green-500 text-white hover:from-lime-500 hover:to-green-600 px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 font-bold text-lg group-hover:scale-105">
                        <ShoppingBag className="w-5 h-5 mr-2" />
                        <span
                          style={{
                            textShadow: "0 1px 2px rgba(0,0,0,0.2)",
                          }}
                        >
                          Pesan di GrabFood
                        </span>
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="text-center mt-12">
                <p
                  className="text-white/70 text-sm"
                  style={{
                    textShadow: "0 1px 2px rgba(0,0,0,0.3)",
                    WebkitTextStroke: "0.2px rgba(0,0,0,0.1)",
                  }}
                >
                  🌟 Shibui: Tempat terbaik untuk nikmati matcha dan suasana tenang di Cirebon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeFullscreen}
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all duration-300 border border-white/20"
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
              className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => {
                setCurrentMenuPage((prev) => (prev + 1) % MENU_IMAGES.length)
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 z-10"
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
