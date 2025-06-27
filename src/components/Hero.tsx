"use client"

const Hero = () => {
  const handleExploreCollection = () => {
    const handpickedSection = document.getElementById("handpicked")
    if (handpickedSection) {
      handpickedSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleBookAppointment = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    } else {
      alert("Booking appointment... Please call us at +91-XXXXXXXXXX")
    }
  }

  return (
    <section className="relative w-full" style={{ minHeight: "100vh" }}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-section-final.png"
          alt="Hero section showcasing 'Discover Timeless Jewellery Crafted to Perfection' with elegant diamond ring and earrings display"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay Content with Positioned Buttons */}
      <div className="relative z-10 h-full">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-20 h-full">
          <div className="h-full flex items-center">
            {/* Left Content Area with Buttons positioned exactly as in screenshot */}
            <div className="w-full lg:w-1/2">
              {/* Buttons positioned below the text content as shown in screenshot */}
              <div className="mt-64 md:mt-72 lg:mt-80 space-y-4">
                <button
                  onClick={handleExploreCollection}
                  className="block bg-white text-slate-900 px-6 md:px-8 py-3 md:py-4 rounded font-semibold hover:bg-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-sm md:text-base"
                  style={{
                    fontFamily: "Mulish, sans-serif",
                    width: "200px",
                  }}
                >
                  Explore Collection
                </button>
                <button
                  onClick={handleBookAppointment}
                  className="block border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded font-semibold hover:bg-white hover:text-slate-900 hover:shadow-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-sm md:text-base"
                  style={{
                    fontFamily: "Mulish, sans-serif",
                    width: "200px",
                  }}
                >
                  Book an Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        <div className="w-3 md:w-4 h-3 md:h-4 rounded-full" style={{ backgroundColor: "#CFB278" }}></div>
        <div className="w-3 md:w-4 h-3 md:h-4 rounded-full" style={{ backgroundColor: "#CFB278", opacity: 0.3 }}></div>
        <div className="w-3 md:w-4 h-3 md:h-4 rounded-full" style={{ backgroundColor: "#CFB278", opacity: 0.3 }}></div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 640px) {
          .mt-64 {
            margin-top: 12rem !important;
          }
        }
        
        @media (min-width: 641px) and (max-width: 1024px) {
          .mt-72 {
            margin-top: 16rem !important;
          }
        }
        
        @media (min-width: 1025px) {
          .mt-80 {
            margin-top: 18rem !important;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero
