import { MapPin, Phone, Instagram, ShoppingBag } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1b3a26] shadow-[0_-8px_64px_rgba(0,0,0,0.15)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Logo Section */}
          <div className="flex flex-col items-center lg:items-start space-y-6">
            <div className="w-48 h-20 bg-[#1b3a26] rounded-2xl flex items-center justify-center overflow-hidden">
              <img
                src="/shibui-logo.png"
                alt="Shibui Cirebon Logo"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="text-center lg:text-left">
              <p className="text-green-100 text-sm max-w-sm leading-relaxed">
                Matcha bar & cafe bernuansa Jepang modern di tengah Cirebon. Tempat yang sempurna untuk bersantai dan
                menikmati matcha premium.
              </p>
              <span className="text-green-200 text-xs">Jam Operasional : 08:00 - 21:00 WIB</span>
            </div>
          </div>

          {/* Contact & Social Section */}
          <div className="flex flex-col items-center lg:items-start space-y-6">
            <h4 className="text-white font-semibold text-lg mb-2">Hubungi Kami</h4>
            
            {/* Social Links */}
            <div className="flex flex-col space-y-4 w-full max-w-xs">
              <a 
                href="https://wa.me/6281234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-green-600 hover:bg-green-500 px-4 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Phone className="w-5 h-5 text-white" />
                <span className="text-white font-medium">WhatsApp</span>
              </a>
              
              <a 
                href="https://instagram.com/shibui.cirebon" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-4 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Instagram className="w-5 h-5 text-white" />
                <span className="text-white font-medium">Instagram</span>
              </a>
              
              <a 
                href="https://food.grab.com/id/en/restaurant/shibui-matcha-bar-cirebon" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-lime-600 hover:bg-lime-500 px-4 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <ShoppingBag className="w-5 h-5 text-white" />
                <span className="text-white font-medium">Order GrabFood</span>
              </a>
              
              <a 
                href="https://maps.google.com/?q=Shibui+Matcha+Bar+Cirebon" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-blue-600 hover:bg-blue-500 px-4 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <MapPin className="w-5 h-5 text-white" />
                <span className="text-white font-medium">Google Maps</span>
              </a>
            </div>
          </div>

          {/* Map Section */}
          <div className="flex flex-col items-center lg:items-end">
            <h4 className="text-white font-semibold text-lg mb-4">Lokasi Kami</h4>
            <div className="w-full max-w-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.6!2d108.5!3d-6.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDInMDAuMCJTIDEwOMKwMzAnMDAuMCJF!5e0!3m2!1sen!2sid!4v1234567890"
                width="100%"
                height="220"
                style={{
                  borderRadius: "16px",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl border-2 border-green-300/30"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-green-300/30">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-green-100 text-sm">
             © {new Date().getFullYear()} SHIBUI Matcha Bar & Cafe.
            </p>
            <div className="flex space-x-6">
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}