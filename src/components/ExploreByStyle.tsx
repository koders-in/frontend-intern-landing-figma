const ExploreByStyle = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            style={{
              fontFamily: "Mulish, sans-serif",
              color: "#0C0F35",
              fontWeight: 700,
            }}
          >
            Explore by Style
          </h2>
          <p
            className="text-gray-600 text-lg md:text-xl lg:text-2xl italic"
            style={{
              fontFamily: "Mulish, sans-serif",
              fontWeight: 500,
              fontStyle: "italic",
            }}
          >
            Find the perfect piece for every occasion – curated by category
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src="/images/explore-by-style-grid.png"
            alt="Explore jewelry by style - lifestyle images showing necklaces, earrings, rings, bracelets, and watches being worn in different occasions"
            className="max-w-full h-auto rounded-lg"
            style={{ maxWidth: "1272px" }}
          />
        </div>
      </div>
    </section>
  )
}

export default ExploreByStyle
