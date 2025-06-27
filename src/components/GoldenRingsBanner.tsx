"use client"

const GoldenRingsBanner = () => {
  const handleReadMore = () => {
    alert("Learn more about our Golden Rings collection...")
    // You can replace this with navigation to a detailed page
    // window.location.href = '/golden-rings-collection'
  }

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="w-full relative">
        <img
          src="/images/golden-rings-new-design.png"
          alt="Golden Rings collection featuring elegant gold rings with diamond accents in luxury jewelry box with sparkling background"
          className="w-full h-auto"
          style={{ minHeight: "400px", objectFit: "cover" }}
        />

        {/* READ MORE button positioned in bottom right area below text content */}
        <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 lg:bottom-16 lg:right-16 xl:bottom-20 xl:right-20 z-10">
          <button
            onClick={handleReadMore}
            className="border-2 border-white text-white bg-black bg-opacity-30 px-8 md:px-10 lg:px-12 py-3 md:py-4 font-medium hover:bg-white hover:text-black transition-all duration-300 text-sm md:text-base lg:text-lg tracking-wider shadow-lg"
            style={{
              fontFamily: "Mulish, sans-serif",
            }}
            aria-label="Read more about Golden Rings collection"
          >
            READ MORE
          </button>
        </div>
      </div>
    </section>
  )
}

export default GoldenRingsBanner
