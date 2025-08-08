"use client"

import { MapPin, ChevronUp, Instagram, UtensilsCrossed, MessageCircle, Bike } from "lucide-react"
import { useState, useEffect } from "react"

export default function ShibuiCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [showSocialOptions, setShowSocialOptions] = useState(false)
  const [isFullyRendered, setIsFullyRendered] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
      // Add delay for full render and then apply drop shadow
      setTimeout(() => {
        setIsFullyRendered(true)
      }, 300)
    }, 1500) // Reduced from 3000ms to 1500ms for faster appearance

    return () => clearTimeout(timer)
  }, [])

  const handleMapsClick = () => {
    const mapsUrl = "https://maps.app.goo.gl/WQkNxUHJEL9MGRVr6"
    window.open(mapsUrl, "_blank")
  }

  const handleGrabFoodClick = () => {
    const grabFoodUrl = "https://grab.onelink.me/2695613898?pid=inappsharing&c=6-C7JCETNWAVBZGA&is_retargeting=true&af_dp=grab%3A%2F%2Fopen%3FscreenType%3DGRABFOOD%26sourceID%3DA4pcqCZkS4%26merchantIDs%3D6-C7JCETNWAVBZGA&af_force_deeplink=true&af_web_dp=https%3A%2F%2Fwww.grab.com%2Fdownload&fbclid=PAQ0xDSwLERJxleHRuA2FlbQIxMAABp9ZtBvmOtZDMe9JRCkKFlS932fQLl_-0-daWCrBb1yMhRyxZwadNUJOuF7y4_aem_Bo3msD18AUNiVwxEDXSHoQ"
    window.open(grabFoodUrl, "_blank")
  }

  const handleGojekClick = () => {
    const gojekUrl = "https://gofood.link/a/F7WT5nb"
    window.open(gojekUrl, "_blank")
  }

  const handleInstagramClick = () => {
    const instagramUrl = "https://www.instagram.com/shibuicrb?igsh=a213ZGxhaTN4OWFx"
    window.open(instagramUrl, "_blank")
  }

  const handleWhatsAppClick = () => {
    const whatsappUrl = "https://wa.me/6281111888119"
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
            className={`cursor-pointer bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 hover:scale-105 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 p-3 sm:p-4 backdrop-blur-sm border border-white/20 transform active:scale-95 ${
              isFullyRendered ? 'drop-shadow-lg' : ''
            }`}
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
            className={`cursor-pointer bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 hover:scale-105 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 p-3 sm:p-4 backdrop-blur-sm border border-white/20 transform active:scale-95 ${
              isFullyRendered ? 'drop-shadow-lg' : ''
            }`}
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

          {/* Gojek */}
          <div 
            onClick={handleGojekClick}
            className={`cursor-pointer bg-gradient-to-r from-[#00AA13] to-[#008A10] hover:scale-105 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 p-3 sm:p-4 backdrop-blur-sm border border-white/20 transform active:scale-95 ${
              isFullyRendered ? 'drop-shadow-lg' : ''
            }`}
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-md sm:rounded-lg flex items-center justify-center">
                <Bike className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div className="text-white">
                <div className="font-semibold text-xs sm:text-sm drop-shadow-md">Pesan di</div>
                <div className="text-xs sm:text-xs text-green-100 opacity-90 drop-shadow-sm">GoFood</div>
              </div>
            </div>
          </div>

          {/* GrabFood */}
          <div 
            onClick={handleGrabFoodClick}
            className={`cursor-pointer bg-gradient-to-r from-green-700 via-green-600 to-lime-600 hover:scale-105 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 p-3 sm:p-4 backdrop-blur-sm border border-white/20 transform active:scale-95 ${
              isFullyRendered ? 'drop-shadow-lg' : ''
            }`}
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
          className={`cursor-pointer bg-gradient-to-r from-green-800 via-green-700 to-emerald-700 hover:scale-105 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 p-3 sm:p-4 backdrop-blur-sm border border-white/20 ${
            isFullyRendered ? 'drop-shadow-lg' : ''
          }`}
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