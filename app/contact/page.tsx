"use client"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Clock, MessageCircle, Instagram, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Alamat",
      content: "Jl. Siliwangi No. 123, Kesambi, Kota Cirebon, Jawa Barat 45133",
      subContent: "Dekat dengan Grage Mall dan Stasiun Cirebon",
      color: "from-red-400 to-red-600",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "WhatsApp",
      content: "+62 812-3456-7890",
      subContent: "Untuk reservasi dan informasi menu",
      color: "from-green-400 to-green-600",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Jam Operasional",
      content: "Senin - Minggu: 08.00 - 22.00 WIB",
      subContent: "Buka setiap hari termasuk hari libur",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      title: "Media Sosial",
      content: "@shibui.cirebon",
      subContent: "Follow Instagram kami untuk update terbaru",
      color: "from-pink-400 to-purple-600",
    },
  ]

  const operationalHours = [
    { day: "Senin - Jumat", hours: "08.00 - 22.00 WIB", highlight: false },
    { day: "Sabtu - Minggu", hours: "08.00 - 23.00 WIB", highlight: true },
    { day: "Hari Libur Nasional", hours: "09.00 - 22.00 WIB", highlight: false },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 overflow-hidden">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-300/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div
          className={`max-w-4xl mx-auto text-center relative z-10 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full mb-8 shadow-lg">
            <Sparkles className="w-5 h-5 text-[#1b3b26]" />
            <span className="text-[#1b3b26] font-semibold">Temukan Kami</span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold text-[#1b3b26] mb-8 animate-fadeInUp">
            Lokasi &{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Kontak</span>
          </h1>
          <p className="text-xl text-green-700 leading-relaxed max-w-3xl mx-auto animate-fadeInUp delay-200">
            Temukan kami di jantung Cirebon dan rasakan pengalaman matcha yang tak terlupakan. Kami siap menyambut Anda
            dengan hangat!
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #1b3b26 2px, transparent 2px)`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1b3b26] mb-4">Hubungi Kami</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="group p-8 shadow-xl rounded-3xl border-0 bg-gradient-to-br from-white to-green-50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 relative overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>
                <CardContent className="space-y-6 relative z-10">
                  <div className="flex items-center gap-6">
                    <div
                      className={`p-4 bg-gradient-to-br ${info.color} rounded-2xl text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}
                    >
                      {info.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-[#1b3b26] group-hover:text-green-700 transition-colors duration-300">
                      {info.title}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <p className="text-xl font-medium text-green-800">{info.content}</p>
                    <p className="text-green-600 leading-relaxed">{info.subContent}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Hours */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-300/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-200/25 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1b3b26] mb-4">Jam Operasional Detail</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full"></div>
          </div>

          <Card className="group p-10 shadow-2xl rounded-3xl border-0 bg-white/90 backdrop-blur-sm hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-100/30 to-emerald-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="space-y-8 relative z-10">
              {operationalHours.map((schedule, index) => (
                <div
                  key={index}
                  className={`flex justify-between items-center py-6 px-6 rounded-2xl border-b border-green-100 last:border-b-0 transition-all duration-300 ${
                    schedule.highlight
                      ? "bg-gradient-to-r from-green-50 to-emerald-50 shadow-md"
                      : "hover:bg-green-50/50"
                  }`}
                >
                  <span
                    className={`text-xl font-medium ${schedule.highlight ? "text-[#1b3b26] font-bold" : "text-[#1b3b26]"}`}
                  >
                    {schedule.day}
                  </span>
                  <span
                    className={`text-xl font-semibold ${schedule.highlight ? "text-green-700 font-bold" : "text-green-700"}`}
                  >
                    {schedule.hours}
                  </span>
                </div>
              ))}

              <div className="mt-10 p-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl shadow-inner">
                <h4 className="font-bold text-[#1b3b26] mb-4 text-lg">📝 Catatan Penting:</h4>
                <ul className="text-green-700 space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Last order 30 menit sebelum tutup
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Reservasi direkomendasikan untuk weekend
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Jam operasional dapat berubah pada hari libur khusus
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1b3b26] mb-4">Lokasi Kami</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Map */}
            <div className="order-2 lg:order-1">
              <Card className="group overflow-hidden shadow-2xl rounded-3xl border-0 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.6!2d108.5!3d-6.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDInMDAuMCJTIDEwOMKwMzAnMDAuMCJF!5e0!3m2!1sen!2sid!4v1234567890"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full group-hover:scale-105 transition-transform duration-700"
                />
              </Card>
            </div>

            {/* Location Details */}
            <div className="order-1 lg:order-2 space-y-8">
              <Card className="group p-10 shadow-xl rounded-3xl border-0 bg-gradient-to-br from-white to-green-50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-100/20 to-emerald-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="space-y-8 relative z-10">
                  <h3 className="text-3xl font-bold text-[#1b3b26] group-hover:text-green-700 transition-colors duration-300">
                    Mudah Ditemukan
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4 p-4 bg-white/80 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-green-700 leading-relaxed">
                        <strong className="text-[#1b3b26]">Dari Stasiun Cirebon:</strong> 5 menit berkendara atau 15
                        menit jalan kaki
                      </p>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-white/80 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-green-700 leading-relaxed">
                        <strong className="text-[#1b3b26]">Dari Grage Mall:</strong> 3 menit berkendara, berseberangan
                        dengan Bank BCA
                      </p>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-white/80 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-green-700 leading-relaxed">
                        <strong className="text-[#1b3b26]">Parkir:</strong> Tersedia area parkir motor dan mobil yang
                        luas
                      </p>
                    </div>
                  </div>

                  <div className="p-6 bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl shadow-inner">
                    <p className="text-[#1b3b26] font-bold text-center text-lg">
                      🚗 Akses mudah dari berbagai arah kota Cirebon
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-green-200/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Card className="group p-16 shadow-2xl rounded-[3rem] border-0 bg-white/90 backdrop-blur-sm hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-100/30 to-emerald-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="space-y-8 relative z-10">
              <h2 className="text-4xl font-bold text-[#1b3b26] group-hover:text-green-700 transition-colors duration-300">
                Siap Berkunjung?
              </h2>
              <p className="text-xl text-green-700 leading-relaxed">
                Hubungi kami melalui WhatsApp untuk reservasi atau informasi lebih lanjut. Tim SHIBUI siap membantu Anda
                merencanakan pengalaman matcha yang sempurna!
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-lg font-semibold transform hover:scale-105"
                >
                  <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  Chat WhatsApp
                </a>
                <a
                  href="https://instagram.com/shibui.cirebon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-10 py-5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-lg font-semibold transform hover:scale-105"
                >
                  <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  Follow Instagram
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
