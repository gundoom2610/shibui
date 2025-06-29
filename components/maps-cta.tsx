"use client"

import { MapPin, ChevronUp, Instagram, UtensilsCrossed, MessageCircle } from "lucide-react"
import { useState, useEffect } from "react"

export default function ShibuiCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [showSocialOptions, setShowSocialOptions] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleMapsClick = () => {
    const mapsUrl = "https://www.google.com/maps/search/SHIBUI+Restaurant"
    window.open(mapsUrl, "_blank")
  }

  const handleGrabFoodClick = () => {
    const grabFoodUrl = "https://food.grab.com/id/en/restaurant/shibui"
    window.open(grabFoodUrl, "_blank")
  }

  const handleInstagramClick = () => {
    const instagramUrl = "https://instagram.com/shibui.official"
    window.open(instagramUrl, "_blank")
  }

  const handleWhatsAppClick = () => {
    const whatsappUrl = "https://wa.me/628123456789?text=Halo,%20saya%20ingin%20reservasi%20di%20SHIBUI"
    window.open(whatsappUrl, "_blank")
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      {/* Social Options */}
      <div className={`mb-3 transition-all duration-300 transform ${
        showSocialOptions ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
      }`}>
        <div className="flex flex-col gap-2 sm:gap-3">
          {/* Instagram - Moved to top */}
          <div 
            onClick={handleInstagramClick}
            className="cursor-pointer bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 hover:scale-110 rounded-lg sm:rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 p-3 sm:p-4 backdrop-blur-sm border border-white/20 transform active:scale-95 drop-shadow-lg"
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-md sm:rounded-lg flex items-center justify-center">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div className="text-white">
                <div className="font-semibold text-xs sm:text-sm drop-shadow-md">Follow kami di</div>
                <div className="text-xs sm:text-xs text-purple-100 opacity-90 drop-shadow-sm">Instagram</div>
              </div>
            </div>
          </div>

          {/* WhatsApp */}
          <div 
            onClick={handleWhatsAppClick}
            className="cursor-pointer bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 hover:scale-110 rounded-lg sm:rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 p-3 sm:p-4 backdrop-blur-sm border border-white/20 transform active:scale-95 drop-shadow-lg"
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-md sm:rounded-lg flex items-center justify-center">
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div className="text-white">
                <div className="font-semibold text-xs sm:text-sm drop-shadow-md">Chat kami di WhatsApp</div>
                <div className="text-xs sm:text-xs text-emerald-100 opacity-90 drop-shadow-sm">untuk reservasi</div>
              </div>
            </div>
          </div>

          {/* GrabFood */}
          <div 
            onClick={handleGrabFoodClick}
            className="cursor-pointer bg-gradient-to-r from-green-700 via-green-600 to-lime-600 hover:scale-110 rounded-lg sm:rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 p-3 sm:p-4 backdrop-blur-sm border border-white/20 transform active:scale-95 drop-shadow-lg"
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-md sm:rounded-lg flex items-center justify-center">
                <UtensilsCrossed className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div className="text-white">
                <div className="font-semibold text-xs sm:text-sm drop-shadow-md">Pesan di</div>
                <div className="text-xs sm:text-xs text-lime-100 opacity-90 drop-shadow-sm">GrabFood</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="relative">
        {/* Toggle Arrow - Now inside the main button */}
        <div 
          onClick={handleMapsClick}
          className="cursor-pointer bg-gradient-to-r from-green-800 via-green-700 to-emerald-700 hover:scale-110 rounded-lg sm:rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 p-3 sm:p-4 backdrop-blur-sm border border-white/20 drop-shadow-lg"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-md sm:rounded-lg flex items-center justify-center">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div className="text-white">
                <div className="font-semibold text-xs sm:text-sm drop-shadow-md">Click Untuk</div>
                <div className="font-bold text-sm sm:text-base leading-tight drop-shadow-md">Google Maps</div>
              </div>
            </div>
            
            {/* Toggle Arrow moved inside - bigger for better accessibility */}
            <div 
              onClick={(e) => {
                e.stopPropagation()
                setShowSocialOptions(!showSocialOptions)
              }}
              className={`w-8 h-8 sm:w-10 sm:h-10 bg-white/20 hover:bg-white/30 rounded-md sm:rounded-lg cursor-pointer flex items-center justify-center transition-all duration-300 ml-1 ${
                showSocialOptions ? 'transform rotate-180' : ''
              }`}
            >
              <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}