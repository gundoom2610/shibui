"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Coffee, Wifi, Camera, Heart, ArrowRight, Star, MapPin, Clock } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import Image from "next/image"

// Image paths constants for easy management
const IMAGES = {
  hero: {
    background: "/shibui-background.jpg",
  },
  menu: {
    ambience: "/ambience.jpg",
    feature1: "/fav-menu.JPG",
    feature2: "/menu2.JPG",
    feature3: "/menu3.JPG",
    feature4: "/menu4.JPG",
  },
  spaces: {
    cozyCorner: "/cozy-space.jpg",
    workStation: "/work-station.JPG",
    matchaCounter: "/reading-space.jpg",
    socialSpace: "/social-space.JPG",
  },
  story: {
    cafeInterior: "/cerita-shibui.png",
    atmosphere: "/atmosphere.png",
  },
  cta: {
    featuredDrink: "/fav-menu.JPG",
  },
}

// Hero Menu items - different from signature drinks
const heroMenu = [
  {
    name: "Strawberry Matcha Latte",
    image: IMAGES.menu.feature1,
    rating: 4.9,
    popular: true,
  },
  {
    name: "Matcha Burnt Cheesecake",
    image: IMAGES.menu.feature2,
    rating: 4.8,
    popular: false,
  },
  {
    name: "Choco Chip Cookies",
    image: IMAGES.menu.feature3,
    rating: 4.9,
    popular: true,
  },
]

// Custom hook for scroll-triggered animations
function useScrollAnimation() {
  const [visibleElements, setVisibleElements] = useState(new Set())
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set([...prev, entry.target.id]))
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "50px 0px -50px 0px",
      },
    )

    // Observe all elements with data-animate attribute
    const elementsToObserve = document.querySelectorAll("[data-animate]")
    elementsToObserve.forEach((el) => {
      if (observerRef.current) {
        observerRef.current.observe(el)
      }
    })

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  return visibleElements
}

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const visibleElements = useScrollAnimation()

  useEffect(() => {
    setIsVisible(true)
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const signatureDrinks = [
    {
      name: "Strawberry Matcha Latte",
      desc: "Paduan unik matcha dan stroberi dengan foam art",
      image: IMAGES.menu.feature1,
    },
    {
      name: "Matcha Burnt Cheesecake",
      desc: "Cheesecake lembut dengan sentuhan earthy dari matcha.",
      image: IMAGES.menu.feature2,
    },
    {
      name: "Choco Chip Cookies",
      desc: "Klasik yang renyah di luar, lembut di dalam",
      image: IMAGES.menu.feature3,
    },
    {
      name: "Shibui Matcha Latte",
      desc: " Paduan sempurna matcha otentik dengan rasa yang elegan dan seimbang.",
      image: IMAGES.menu.feature4,
    },
  ]

  const whyShibui = [
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Free WiFi",
      desc: "Internet cepat untuk kerja & belajar",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Ambience Cozy",
      desc: "Suasana nyaman ala Jepang modern",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Instagram Worthy",
      desc: "Perfect untuk konten sosial media",
      gradient: "from-purple-500 to-violet-500",
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Matcha Premium",
      desc: "Kualitas terbaik langsung dari Jepang",
      gradient: "from-shibui-primary to-emerald-500",
    },
  ]

  const cafeSpaces = [
    {
      title: "Cozy Corner",
      description: "Sudut hangat dengan pencahayaan alami yang sempurna untuk bersantai",
      image: IMAGES.spaces.cozyCorner,
    },
    {
      title: "Work Station",
      description: "Area produktif dengan WiFi cepat dan suasana yang mendukung fokus",
      image: IMAGES.spaces.workStation,
    },
    {
      title: "Reading Corner",
      description: "Pilihan buku menarik untuk dinikmati bersama matcha yang menenangkan.",
      image: IMAGES.spaces.matchaCounter,
    },
    {
      title: "Social Space",
      description: "Ruang berkumpul yang ideal untuk quality time bersama teman",
      image: IMAGES.spaces.socialSpace,
    },
  ]

  return (
    <>
      <div className="bg-gradient-to-b from-green-50 via-white to-green-50 min-h-screen -mt-0 pt-0">
        {/* Hero Section with Parallax */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-green-50 to-white mt-0 pt-0">
          {/* Hero Background Image with Parallax */}
          <div className="absolute inset-0 z-0" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
            <div className="relative w-full h-full">
              <Image
                src={IMAGES.hero.background || "/placeholder.svg"}
                alt="Shibui Cafe Background"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-green-50/50 to-emerald-50/60"></div>
            </div>
            {/* White fade at bottom for seamless transition */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
          </div>

          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen py-20">
              {/* Left Content */}
              <div
                className={`space-y-8 lg:space-y-10 transform transition-all duration-1000 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-3 bg-white/95 backdrop-blur-sm px-5 py-3 rounded-full shadow-lg border border-shibui-primary/20">
                  <div className="w-2.5 h-2.5 bg-shibui-primary rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-700 tracking-wide">
                    Matcha Bar & Cafe Terbaik di Cirebon
                  </span>
                </div>

                {/* Main Heading */}
                <div className="space-y-6">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-gray-900 leading-[0.9] tracking-tight">
                    Matcha, Cozy,
                    <br />
                    <span className="bg-gradient-to-r from-shibui-primary via-shibui-primary to-shibui-primary/80 bg-clip-text text-transparent">
                      Estetik
                    </span>
                  </h1>
                  <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-2xl leading-relaxed font-medium">
                    Selamat datang di <span className="font-bold text-shibui-primary">SHIBUI</span> — matcha bar & cafe
                    bernuansa Jepang modern di tengah Cirebon.
                  </p>
                </div>

                {/* Quick Info */}
                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 text-base text-gray-600">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-shibui-primary flex-shrink-0" />
                    <span className="font-medium">Cirebon, Jawa Barat</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-shibui-primary flex-shrink-0" />
                    <span className="font-medium">08:00 - 22:00</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() => (window.location.href = "/menu")}
                    className="group bg-gradient-to-r from-shibui-primary to-shibui-primary/90 hover:from-shibui-primary/90 hover:to-shibui-primary text-white px-8 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-base font-bold transform hover:scale-105"
                  >
                    <span>Lihat Menu</span>
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                  <Button
                    onClick={() => document.getElementById("cerita-shibui")?.scrollIntoView({ behavior: "smooth" })}
                    variant="outline"
                    className="group border-2 border-gray-300 text-gray-700 hover:border-shibui-primary hover:text-shibui-primary px-8 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-base font-bold bg-white/95 backdrop-blur-sm"
                  >
                    <Heart className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
                    <span>Tentang Kami</span>
                  </Button>
                </div>
              </div>

              {/* Right Content - Hero Image with Floating Cards */}
              <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] mt-8 lg:mt-0">
                {/* Main Image */}
                <div className="relative h-full w-full max-w-sm sm:max-w-md mx-auto lg:max-w-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-shibui-primary/20 to-transparent rounded-3xl z-10"></div>
                  <Image
                    src={IMAGES.menu.ambience || "/placeholder.svg"}
                    alt="Shibui Cafe Hero"
                    fill
                    className="object-cover rounded-3xl shadow-2xl"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Floating Menu Cards - Mobile Optimized */}
                <div className="absolute inset-0 pointer-events-none z-20">
                  {heroMenu.map((item, index) => (
                    <Card
                      key={index}
                      className={`absolute bg-white/95 backdrop-blur-sm shadow-xl rounded-xl lg:rounded-2xl border border-green-100/50 hover:border-shibui-secondary/30 transform hover:scale-105 transition-all duration-500 pointer-events-auto ${
                        index === 0
                          ? "top-4 sm:top-8 -left-2 sm:-left-4 lg:-left-12 w-48 sm:w-56 lg:w-64"
                          : index === 1
                            ? "top-24 sm:top-32 lg:top-40 -right-2 sm:-right-4 lg:-right-12 w-48 sm:w-56 lg:w-64"
                            : "bottom-8 sm:bottom-16 -left-1 sm:-left-2 lg:-left-8 w-48 sm:w-56 lg:w-64"
                      }`}
                      style={{
                        animationDelay: `${(index + 1) * 300}ms`,
                      }}
                    >
                      <CardContent className="p-3 sm:p-4">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="relative flex-shrink-0">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg lg:rounded-xl shadow-md overflow-hidden">
                              <Image
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                width={64}
                                height={64}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            {item.popular && (
                              <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full font-bold shadow-lg">
                                Popular
                              </div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-gray-900 text-xs sm:text-sm truncate">{item.name}</h4>
                            <div className="flex items-center gap-1 mt-0.5 sm:mt-1">
                              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 flex-shrink-0" />
                              <span className="text-xs text-gray-500">{item.rating}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Signature Drinks Section */}
        <section
          className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-shibui-secondary/5 to-white"
          data-animate
          id="signature-drinks"
        >
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div
              className={`text-center mb-16 sm:mb-20 transform transition-all duration-1000 ${
                visibleElements.has("signature-drinks") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <div className="inline-flex items-center gap-3 bg-green-50 px-6 py-3 rounded-full mb-6 border border-green-100">
                <span className="text-2xl">✨</span>
                <span className="text-shibui-primary font-bold text-base">Signature Collection</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-gray-900 mb-6 tracking-tight">
                Signature Drinks
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
                Nikmati koleksi minuman dan makanan premium yang dibuat dengan cinta dan bahan terbaik
              </p>
            </div>

            {/* Drinks Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {signatureDrinks.map((drink, index) => (
                <Card
                  key={index}
                  className={`group hover:shadow-xl transition-all duration-500 border border-green-100 rounded-2xl overflow-hidden bg-white transform hover:-translate-y-2 hover:border-green-300 shadow-lg ${
                    visibleElements.has("signature-drinks") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    transitionDelay: visibleElements.has("signature-drinks") ? `${index * 100}ms` : "0ms",
                  }}
                >
                  <CardContent className="p-0">
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={drink.image || "/placeholder.svg"}
                        alt={drink.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      {/* Overlay content */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-white text-sm font-medium">{drink.desc}</p>
                      </div>
                    </div>
                    <div className="p-5 text-center">
                      <h3 className="font-semibold text-gray-900 text-lg mb-1">{drink.name}</h3>
                      <p className="text-gray-500 text-sm">{drink.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section - Enhanced with Glassmorphism */}
        <section
          id="cerita-shibui"
          className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-green-50 relative"
          data-animate
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, #c8a28e 2px, transparent 2px), radial-gradient(circle at 75% 75%, #c8a28e 2px, transparent 2px)`,
                backgroundSize: "50px 50px",
              }}
            ></div>
          </div>

          {/* Glassmorphism Container */}
          <div className="relative z-10 max-w-7xl mx-auto">
            <div
              className="relative backdrop-blur-xl bg-[#c8a28e]/20 border border-[#c8a28e]/30 rounded-3xl shadow-2xl p-8 sm:p-12 lg:p-16"
              style={{
                boxShadow: "0 25px 50px -12px rgba(200, 162, 142, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
              }}
            >
              {/* Subtle inner glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-[#c8a28e]/10 pointer-events-none"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Section Header */}
                <div
                  className={`text-center mb-16 sm:mb-20 transform transition-all duration-1000 ${
                    visibleElements.has("cerita-shibui") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                >
                  <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full mb-6 shadow-lg border border-[#c8a28e]/20">
                    <span className="text-[#1b3b26] font-bold text-base">Tentang Kami</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-shibui-primary mb-6 tracking-tight drop-shadow-sm">
                    Cerita <span className="italic font-light text-shibui-primary/80">SHIBUI</span>
                  </h2>
                  <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
                    Kami menyediakan berbagai minuman matcha berkualitas premium, coffee specialty, snacks ringan yang
                    menggugah selera, hingga makanan berat yang mengenyangkan. Setiap sajian dibuat dengan penuh cinta
                    dan dedikasi untuk memberikan pengalaman kuliner terbaik bagi setiap tamu yang berkunjung ke SHIBUI.
                  </p>
                </div>

                {/* Story Content Grid */}
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center mb-16 sm:mb-20 transform transition-all duration-1000 delay-300 ${
                    visibleElements.has("cerita-shibui") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                >
                  {/* Left - Story Text */}
                  <div className="space-y-8">
                    <div className="space-y-5">
                      <h3 className="text-2xl sm:text-3xl font-bold text-shibui-primary">Perjalanan SHIBUI</h3>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        Dimulai dari kecintaan terhadap budaya Jepang dan passion akan kualitas matcha terbaik, SHIBUI
                        hadir untuk membawa pengalaman authentic Japanese cafe di tengah kota Cirebon. Setiap detail di
                        SHIBUI dirancang untuk menciptakan suasana yang hangat dan menenangkan.
                      </p>
                    </div>
                    <div className="space-y-5">
                      <h3 className="text-2xl sm:text-3xl font-bold text-shibui-primary">Komitmen Kualitas</h3>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        Kami berkomitmen menggunakan bahan-bahan premium, mulai dari pilihan matcha yang berkualitas,
                        hingga coffee beans pilihan yang di-roast dengan sempurna. Setiap menu diciptakan dengan resep
                        autentik dan sentuhan modern.
                      </p>
                    </div>
                  </div>

                  {/* Right - Cafe Photo */}
                  <div className="relative">
                    <div className="aspect-[4/3] rounded-3xl shadow-2xl overflow-hidden bg-white/20 backdrop-blur-sm border border-white/30 drop-shadow-[0_0_20px_rgba(200,162,142,0.3)]">
                      <Image
                        src={IMAGES.story.cafeInterior || "/placeholder.svg"}
                        alt="Shibui Cafe Interior Story"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>

                {/* Features Grid - Updated with solid white cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20">
                  {whyShibui.map((item, index) => (
                    <Card
                      key={index}
                      className={`group text-center p-8 border border-gray-200 shadow-lg rounded-3xl bg-white hover:bg-white hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden ${
                        visibleElements.has("cerita-shibui") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                      }`}
                      style={{
                        transitionDelay: visibleElements.has("cerita-shibui") ? `${(index + 2) * 100}ms` : "0ms",
                      }}
                    >
                      {/* Hover gradient background */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                      ></div>
                      <CardContent className="space-y-4 relative z-10">
                        <div className="flex justify-center">
                          <div
                            className={`p-4 bg-gradient-to-br ${item.gradient} rounded-2xl text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}
                          >
                            {item.icon}
                          </div>
                        </div>
                        <h3 className="font-semibold text-gray-900 text-xl group-hover:text-shibui-primary transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Cafe Spaces Gallery */}
                <div
                  className={`space-y-12 transform transition-all duration-1000 delay-500 ${
                    visibleElements.has("cerita-shibui") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                >
                  <div className="text-center">
                    <h3 className="text-3xl sm:text-4xl font-bold text-shibui-primary mb-4">
                      Ruang yang Kami Ciptakan
                    </h3>
                    <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto font-medium">
                      Setiap sudut di SHIBUI memiliki cerita dan fungsinya sendiri, dirancang khusus untuk kenyamanan
                      Anda
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {cafeSpaces.map((space, index) => (
                      <Card
                        key={index}
                        className="group overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 bg-white hover:bg-white drop-shadow-lg hover:drop-shadow-2xl transform hover:-translate-y-1"
                      >
                        <CardContent className="p-0">
                          <div className="relative aspect-[3/2] overflow-hidden">
                            <Image
                              src={space.image || "/placeholder.svg"}
                              alt={space.title}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-700"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                          <div className="p-8">
                            <h4 className="font-bold text-gray-900 text-2xl mb-4 tracking-tight leading-tight">
                              {space.title}
                            </h4>
                            <p className="text-gray-700 leading-relaxed text-lg font-medium">{space.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Redesigned "Shibui Tempat Nyaman" Section - Updated with New Colors */}
        <section
          className="relative px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-green-50 to-white"
          data-animate
          id="tempat-nyaman"
        >
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-br from-shibui-primary to-shibui-primary/90 rounded-3xl overflow-hidden">
              <div className="py-20 sm:py-24 lg:py-32 px-6 sm:px-8 lg:px-12">
                <div className="max-w-7xl mx-auto relative z-10">
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center transform transition-all duration-600 ${
                      visibleElements.has("tempat-nyaman") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                    }`}
                  >
                    {/* Mobile: Image first, Desktop: Content first */}
                    <div className="order-2 lg:order-1 space-y-6 sm:space-y-8">
                      <div className="space-y-4 sm:space-y-6">
                        <div className="drop-shadow-lg">
                          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white leading-tight tracking-tight">
                            Tempat yang <span className="text-green-300 drop-shadow-sm">Nyaman</span>
                            <br />
                            <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white/80 font-light">
                              untuk semua
                            </span>
                          </h2>
                        </div>
                        <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-xl font-medium">
                          Setiap sudut di SHIBUI dirancang khusus untuk memberikan kenyamanan maksimal. Dari area kerja
                          yang produktif hingga sudut santai yang menenangkan jiwa.
                        </p>
                      </div>

                      {/* Feature highlights in 2x2 grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Card className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1">
                          <CardContent className="space-y-3 p-0">
                            <div>
                              <h4 className="text-white font-semibold text-base mb-1">Menu Lengkap</h4>
                              <p className="text-white/60 text-sm leading-relaxed">
                                Menu yang lengkap dari Matcha, Coffee, Snacks, dan makanan berat
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                        <Card className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1">
                          <CardContent className="space-y-3 p-0">
                            <div>
                              <h4 className="text-white font-semibold text-base mb-1">Reading Corner</h4>
                              <p className="text-white/60 text-sm leading-relaxed">
                                Sudut baca yang nyaman untuk menikmati buku favorit sambil menyeruput matcha
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                        <Card className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1">
                          <CardContent className="space-y-3 p-0">
                            <div>
                              <h4 className="text-white font-semibold text-base mb-1">Nyaman Buat Nongkrong & Nugas</h4>
                              <p className="text-white/60 text-sm leading-relaxed">
                                Tempat yang luas dengan natural lighting membuat cozy
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                        <Card className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1">
                          <CardContent className="space-y-3 p-0">
                            <div>
                              <h4 className="text-white font-semibold text-base mb-1">Fasilitas Charging Lengkap</h4>
                              <p className="text-white/60 text-sm leading-relaxed">
                                Banyak socket charger untuk mendukung aktivitas kerja dan belajar
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    {/* Mobile: Image on top, Desktop: Image on right */}
                    <div className="order-1 lg:order-2 relative mt-8 lg:mt-0">
                      <div className="aspect-[4/3] bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 relative overflow-hidden ring-1 ring-white/10">
                        <Image
                          src={IMAGES.story.atmosphere || "/placeholder.svg"}
                          alt="Shibui Cafe Atmosphere"
                          fill
                          className="object-cover rounded-3xl opacity-80"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div
            className={`max-w-7xl mx-auto mt-16 sm:mt-20 relative z-20 mb-12 sm:mb-16 transform transition-all duration-600 delay-200 ${
              visibleElements.has("tempat-nyaman") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl shadow-xl p-8 sm:p-12 mx-4 border border-green-200">
              {/* Mobile Layout */}
              <div className="block md:hidden">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    {/* Small profile-like image for mobile */}
                    <div className="relative w-16 h-16 flex-shrink-0">
                      <div className="absolute inset-0 bg-white/20 rounded-2xl"></div>
                      <Image
                        src={IMAGES.cta.featuredDrink || "/placeholder.svg"}
                        alt="Featured Drink"
                        fill
                        className="object-cover rounded-2xl"
                        sizes="64px"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-800 leading-tight">Lihat Menu Lengkap Kami</h3>
                    </div>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Jelajahi koleksi lengkap minuman dan makanan premium kami yang dibuat dengan penuh cinta
                  </p>
                  <Button
                    onClick={() => (window.location.href = "/menu")}
                    className="group bg-white text-shibui-primary hover:bg-gray-50 px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-base font-semibold transform hover:scale-105 w-full"
                  >
                    <span>Lihat Menu Lengkap</span>
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:grid md:grid-cols-2 gap-8 items-center">
                {/* Left - CTA Content */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 leading-tight">
                      Lihat Menu Lengkap Kami
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Jelajahi koleksi lengkap minuman dan makanan premium kami yang dibuat dengan penuh cinta
                    </p>
                  </div>
                  <Button
                    onClick={() => (window.location.href = "/menu")}
                    className="group bg-white text-shibui-primary hover:bg-gray-50 px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-base font-semibold transform hover:scale-105"
                  >
                    <span>Lihat Menu Lengkap</span>
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>

                {/* Right - Featured Drink Image */}
                <div className="flex justify-center">
                  <div className="relative w-48 h-48 sm:w-56 sm:h-56">
                    <div className="absolute inset-0 bg-white/20 rounded-3xl"></div>
                    <Image
                      src={IMAGES.cta.featuredDrink || "/placeholder.svg"}
                      alt="Featured Drink"
                      fill
                      className="object-cover rounded-3xl"
                      sizes="(max-width: 768px) 200px, 224px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
