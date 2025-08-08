import { MapPin, Phone, Instagram, ShoppingBag, Bike } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1b3a26] drop-shadow-[0_-8px_32px_rgba(0,0,0,0.19)] rounded-t-[50px] relative overflow-hidden">
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
                href="https://wa.me/6281111888119"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-[#c8a28e]/20 backdrop-blur-md border border-[#c8a28e]/30 hover:bg-[#c8a28e]/30 hover:border-[#c8a28e]/50 px-4 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5 text-[#c8a28e]" />
                <span className="text-white font-medium">WhatsApp</span>
              </a>
              <a
                href="https://www.instagram.com/shibuicrb?igsh=a213ZGxhaTN4OWFx"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-[#c8a28e]/20 backdrop-blur-md border border-[#c8a28e]/30 hover:bg-[#c8a28e]/30 hover:border-[#c8a28e]/50 px-4 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Instagram className="w-5 h-5 text-[#c8a28e]" />
                <span className="text-white font-medium">Instagram</span>
              </a>
              <a
                href="https://grab.onelink.me/2695613898?pid=inappsharing&c=6-C7JCETNWAVBZGA&is_retargeting=true&af_dp=grab%3A%2F%2Fopen%3FscreenType%3DGRABFOOD%26sourceID%3DA4pcqCZkS4%26merchantIDs%3D6-C7JCETNWAVBZGA&af_force_deeplink=true&af_web_dp=https%3A%2F%2Fwww.grab.com%2Fdownload&fbclid=PAQ0xDSwLERJxleHRuA2FlbQIxMAABp9ZtBvmOtZDMe9JRCkKFlS932fQLl_-0-daWCrBb1yMhRyxZwadNUJOuF7y4_aem_Bo3msD18AUNiVwxEDXSHoQ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-[#c8a28e]/20 backdrop-blur-md border border-[#c8a28e]/30 hover:bg-[#c8a28e]/30 hover:border-[#c8a28e]/50 px-4 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <ShoppingBag className="w-5 h-5 text-[#c8a28e]" />
                <span className="text-white font-medium">Order GrabFood</span>
              </a>
                <a
                href="https://gofood.link/a/F7WT5nb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-[#c8a28e]/20 backdrop-blur-md border border-[#c8a28e]/30 hover:bg-[#c8a28e]/30 hover:border-[#c8a28e]/50 px-4 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Bike className="w-5 h-5 text-[#c8a28e]" />
                <span className="text-white font-medium">Order Gojek</span>
              </a>
              <a
                href="https://maps.app.goo.gl/WQkNxUHJEL9MGRVr6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-[#c8a28e]/20 backdrop-blur-md border border-[#c8a28e]/30 hover:bg-[#c8a28e]/30 hover:border-[#c8a28e]/50 px-4 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <MapPin className="w-5 h-5 text-[#c8a28e]" />
                <span className="text-white font-medium">Google Maps</span>
              </a>
   
            </div>
          </div>

          {/* Map Section */}
          <div className="flex flex-col items-center lg:items-end">
            <h4 className="text-white font-semibold text-lg mb-4">Lokasi Kami</h4>
            <div className="w-full max-w-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3962.3636541581795!2d108.5478911!3d-6.725406!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6ee300721dcd45%3A0x13709d648a1e1c67!2sShibui%20Matcha!5e0!3m2!1sen!2sid!4v1754669131118!5m2!1sen!2sid"
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
            <p className="text-green-100 text-sm">© {new Date().getFullYear()} SHIBUI Matcha Bar & Cafe.</p>
            <div className="flex space-x-6"></div>
          </div>
        </div>
      </div>
    </footer>
  )
}
