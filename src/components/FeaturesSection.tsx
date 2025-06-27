const FeaturesSection = () => {
  const features = [
    {
      icon: "🚚",
      title: "FREE SHIPPING",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      icon: "↩️",
      title: "FREE IN-STORE RETURN",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      icon: "🔒",
      title: "100% SECURE CHECKOUT",
      description: "Lorem ipsum dolor sit amet",
    },
  ]

  return (
    <section className="py-16 bg-white border-t-4" style={{ borderTopColor: "#DDD9D7" }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3
                className="font-bold text-lg"
                style={{
                  fontFamily: "Mulish, sans-serif",
                  color: "#0C0F35",
                }}
              >
                {feature.title}
              </h3>
              <p
                className="text-gray-600"
                style={{
                  fontFamily: "Mulish, sans-serif",
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
