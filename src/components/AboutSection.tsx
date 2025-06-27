const AboutSection = () => {
  return (
    <section className="py-20 relative" style={{ backgroundColor: "#0C0F35" }}>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Jewelry Image */}
          <div className="relative">
            <img
              src="/images/lifestyle-jewelry.png"
              alt="Elegant woman wearing diamond jewelry including rings and geometric necklace"
              className="w-full h-auto rounded-lg"
              style={{ width: "632px", height: "535px" }}
            />
          </div>

          {/* Right - Content */}
          <div className="text-white space-y-6">
            <h2
              className="text-5xl font-bold mb-6"
              style={{
                fontFamily: "Mulish, sans-serif",
                fontWeight: 800,
                fontSize: "45px",
                lineHeight: "40px",
              }}
            >
              ABOUT US
            </h2>
            <div
              className="text-white leading-relaxed space-y-4"
              style={{
                fontFamily: "Mulish, sans-serif",
                fontWeight: 500,
                fontSize: "20px",
                lineHeight: "40px",
              }}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Cras semper auctor
                neque vitae tempus quam pellentesque. Elementum sagittis vitae et leo duis.
              </p>
              <p>
                Elementum sagittis vitae et leo duis. Libero nunc consequat interdum varius. Habitant morbi tristique
                senectus et netus et malesuada fames ac.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
