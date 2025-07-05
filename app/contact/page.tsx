"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  MapPin,
  Clock,
  Phone,
  Instagram,
  MessageCircle,
  Utensils,
  ArrowRight,
  Star,
  Heart,
  Coffee,
  Navigation,
  CheckCircle,
} from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const contactMethods = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      subtitle: "Respon Cepat & Langsung",
      description:
        "Reservasi meja, konsultasi menu, atau tanya tentang event khusus. Tim kami siap membantu Anda 24/7.",
      action: "Chat Sekarang",
      link: "https://wa.me/6281234567890",
      gradient: "from-shibui-secondary to-shibui-secondary-light",
      hoverGradient: "hover:from-shibui-secondary-dark hover:to-shibui-secondary",
    },
    {
      icon: <Utensils className="w-6 h-6" />,
      title: "GrabFood",
      subtitle: "Delivery Premium ke Rumah",
      description: "Nikmati authentic matcha SHIBUI tanpa keluar rumah. Kemasan premium, rasa tetap sempurna.",
      action: "Pesan Delivery",
      link: "https://food.grab.com/id/en/restaurant/shibui-cafe",
      gradient: "from-shibui-secondary to-shibui-secondary-light",
      hoverGradient: "hover:from-shibui-secondary-dark hover:to-shibui-secondary",
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      title: "Instagram",
      subtitle: "@shibui.cirebon",
      description: "Follow untuk update menu seasonal, behind-the-scenes, dan promo eksklusif untuk followers.",
      action: "Follow Kami",
      link: "https://instagram.com/shibui.cirebon",
      gradient: "from-shibui-secondary to-shibui-secondary-light",
      hoverGradient: "hover:from-shibui-secondary-dark hover:to-shibui-secondary",
    },
  ]

  const highlights = [
    {
      icon: <Star className="w-5 h-5" />,
      text: "Happy Dine-In",
      subtext: "Customers",
    },
    {
      icon: <Heart className="w-5 h-5" />,
      text: "Loyal Community",
      subtext: "Members",
    },
    {
      icon: <Coffee className="w-5 h-5" />,
      text: "Authentic Matcha",
      subtext: "Experience",
    },
  ]

  const features = [
    "WiFi Kencang & Colokan Banyak",
    "AC Sejuk & Suasana Tenang",
    "Parkir Luas & Mudah Diakses",
    "Menu Halal & Berkualitas",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-stone-50">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-shibui-secondary-light/30 to-shibui-secondary/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-shibui-primary/10 to-shibui-primary/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div
              className={`transform transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-stone-200 mb-6">
                <div className="w-2 h-2 bg-gradient-to-r from-shibui-secondary to-shibui-secondary-light rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-shibui-primary">Hubungi Kami</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Mari{" "}
                <span className="bg-gradient-to-r from-shibui-primary to-shibui-primary/80 bg-clip-text text-transparent">
                  Bertemu
                </span>
                <br />
                <span className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-600">di SHIBUI Cirebon</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
                Tempat terbaik untuk menikmati authentic Japanese matcha di jantung kota Cirebon.
                <br className="hidden sm:block" />
                Hubungi kami untuk reservasi, delivery, atau sekadar bertanya tentang menu favorit!
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 bg-gradient-to-r from-white to-shibui-secondary/5 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-md border border-shibui-secondary/20 transform transition-all duration-700 ${
                      isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                    }`}
                    style={{ animationDelay: `${(index + 1) * 150}ms` }}
                  >
                    <div className="text-gradient-to-r from-shibui-secondary to-shibui-secondary-dark text-shibui-secondary">
                      {item.icon}
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-semibold text-slate-800">{item.text}</div>
                      <div className="text-xs text-slate-500">{item.subtext}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className={`group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border-0 bg-white transform hover:-translate-y-2 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ animationDelay: `${(index + 2) * 200}ms` }}
              >
                <CardContent className="p-6 text-center">
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div
                      className={`p-4 rounded-2xl text-white shadow-lg bg-gradient-to-r ${method.gradient} group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}
                    >
                      {method.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3 mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">{method.title}</h3>
                      <p className="text-sm font-medium text-shibui-primary">{method.subtitle}</p>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-sm">{method.description}</p>
                  </div>

                  {/* CTA Button */}
                  <Button
                    onClick={() => window.open(method.link, "_blank")}
                    className={`group/btn w-full bg-gradient-to-r ${method.gradient} ${method.hoverGradient} text-white px-6 py-3 rounded-2xl transition-all duration-300 text-sm font-semibold shadow-lg hover:shadow-xl border-0 hover:brightness-110`}
                  >
                    <span>{method.action}</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Hours Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Location Info */}
            <div
              className={`space-y-8 transform transition-all duration-1000 delay-300 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-shibui-secondary/10 to-shibui-secondary-light/10 px-4 py-2 rounded-full border border-shibui-secondary/30">
                  <MapPin className="w-4 h-4 text-shibui-primary" />
                  <span className="text-shibui-primary font-medium text-sm">Lokasi & Jam Buka</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                  Temukan Kami di
                  <br />
                  <span className="text-shibui-primary">Jantung Kota Cirebon</span>
                </h2>

                <p className="text-lg text-slate-600 leading-relaxed">
                  Lokasi strategis yang mudah dijangkau dengan suasana nyaman untuk bersantai, bekerja, atau berkumpul
                  bersama orang terkasih.
                </p>
              </div>

              {/* Location Details */}
              <div className="space-y-4">
                <Card className="bg-gradient-to-r from-stone-50 to-shibui-secondary/5 border border-stone-200 rounded-2xl">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-shibui-secondary to-shibui-secondary-light text-white shadow-md">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Alamat Lengkap</h3>
                        <p className="text-slate-700 leading-relaxed">
                          Jl. Dr. Mangunkusomo No. 117
                          <br />
                          <span className="text-shibui-primary font-medium">(Samping Laura Salon)</span>
                          <br />
                          Cirebon, Jawa Barat 45121
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-shibui-primary to-shibui-primary/90 text-white rounded-2xl">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-r from-shibui-secondary/30 to-shibui-secondary-light/30 backdrop-blur-sm rounded-xl">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold mb-2">Jam Operasional</h3>
                        <div className="space-y-1">
                          <p className="bg-gradient-to-r from-shibui-secondary to-shibui-secondary-light bg-clip-text text-transparent font-bold">
                            BUKA SETIAP HARI
                          </p>
                          <p className="text-white font-medium">08:00 - 21:00 WIB</p>
                          <p className="text-white/80 text-sm">Termasuk weekend & hari libur</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Features */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-slate-900">Fasilitas Unggulan:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-shibui-primary flex-shrink-0" />
                      <span className="text-sm text-slate-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={() =>
                    window.open("https://maps.google.com/?q=Jl.+Dr.+Mangunkusomo+No.+117+Cirebon", "_blank")
                  }
                  className="group bg-gradient-to-r from-shibui-secondary to-shibui-secondary-light hover:from-shibui-secondary-dark hover:to-shibui-secondary text-white px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold hover:brightness-110"
                >
                  <MapPin className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  <span>Buka di Maps</span>
                </Button>
                <Button
                  onClick={() =>
                    window.open(
                      "https://wa.me/6281234567890?text=Halo%20SHIBUI,%20saya%20ingin%20reservasi%20tempat",
                      "_blank",
                    )
                  }
                  variant="outline"
                  className="group border-2 border-shibui-primary text-shibui-primary hover:bg-shibui-primary hover:text-white px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold bg-white hover:border-shibui-primary"
                >
                  <Phone className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  <span>Reservasi</span>
                </Button>
              </div>
            </div>

            {/* Right - Map/Image */}
            <div
              className={`relative transform transition-all duration-1000 delay-500 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <div className="aspect-[4/3] rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-br from-stone-100 to-shibui-secondary/10 border border-stone-200">
                <div className="relative w-full h-full">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="SHIBUI Cafe Location - Jl. Dr. Mangunkusomo No. 117, Cirebon"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-r from-shibui-secondary to-shibui-secondary-light rounded-lg">
                          <MapPin className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="font-bold text-slate-900">SHIBUI Matcha Bar & Cafe</p>
                          <p className="text-sm text-slate-600">Jl. Dr. Mangunkusomo No. 117</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-stone-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transform transition-all duration-1000 delay-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="bg-gradient-to-br from-shibui-primary via-shibui-primary/95 to-shibui-primary/90 rounded-3xl shadow-2xl p-8 sm:p-12 text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-shibui-secondary to-shibui-secondary-light rounded-full -translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-br from-shibui-secondary-light to-shibui-secondary rounded-full translate-x-20 translate-y-20"></div>
              </div>

              <div className="relative space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
                    Mudah Ditemukan
                    <br />
                    <span className="bg-gradient-to-r from-shibui-secondary to-shibui-secondary-light bg-clip-text text-transparent">
                      di Pusat Kota
                    </span>
                  </h2>
                  <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
                    Lokasi strategis di Jl. Dr. Mangunkusomo dengan akses mudah dari berbagai arah. Parkir luas tersedia
                    untuk kenyamanan Anda.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() =>
                      window.open("https://maps.google.com/?q=Jl.+Dr.+Mangunkusomo+No.+117+Cirebon", "_blank")
                    }
                    className="group bg-gradient-to-r from-white to-stone-50 text-shibui-primary hover:bg-gradient-to-r hover:from-shibui-secondary hover:to-shibui-secondary-light hover:text-white px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold border-0"
                  >
                    <Navigation className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                    <span>Buka Google Maps</span>
                  </Button>
                  <Button
                    onClick={() =>
                      window.open(
                        "https://wa.me/6281234567890?text=Halo%20SHIBUI,%20saya%20ingin%20bertanya%20tentang%20lokasi%20dan%20arah%20ke%20cafe",
                        "_blank",
                      )
                    }
                    className="group border-2 border-white bg-transparent text-white hover:bg-gradient-to-r hover:from-white hover:to-stone-50 hover:text-shibui-primary hover:border-transparent px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
                  >
                    <MessageCircle className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                    <span>Tanya Arah via WhatsApp</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
