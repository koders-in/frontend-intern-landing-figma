"use client"

import type React from "react"

import { useState } from "react"

const HandpickedSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const products = [
    {
      id: 1,
      name: "Radiant Bloom Gold Pendant",
      price: "₹76,000",
      originalPrice: "₹78,500",
      badge: "New",
      image: "/images/product-pendant-new.png",
    },
    {
      id: 2,
      name: "Celestial Diamond Nose Pin",
      price: "₹14,310",
      originalPrice: "₹15,900",
      badge: "10% OFF",
      image: "/images/product-ring-discount.png",
    },
    {
      id: 3,
      name: "Classic Meenakari Bangle Set",
      price: "₹2,10,000",
      originalPrice: "",
      badge: "",
      image: "/images/product-bangles.png",
    },
    {
      id: 4,
      name: "Rose Whisper Diamond Ring",
      price: "₹46,000",
      originalPrice: "₹48,750",
      badge: "New",
      image: "/images/product-ring-new.png",
    },
  ]

  const handleProductClick = (productId: number) => {
    console.log(`Product ${productId} clicked`)
    alert(`Added ${products.find((p) => p.id === productId)?.name} to wishlist!`)
  }

  const handleAddToCart = (productId: number, e: React.MouseEvent) => {
    e.stopPropagation()
    const product = products.find((p) => p.id === productId)
    console.log(`Adding product ${productId} to cart`)
    alert(`${product?.name} added to cart!`)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Navigation Dots */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2">
            {[0, 1, 2].map((dot) => (
              <button
                key={dot}
                onClick={() => setCurrentSlide(dot)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === dot ? "bg-gray-600" : "bg-gray-400"
                }`}
                aria-label={`Go to slide ${dot + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            style={{
              fontFamily: "Mulish, sans-serif",
              fontWeight: 700,
              color: "#0C0F35",
            }}
          >
            Handpicked for You
          </h2>
          <p
            className="text-gray-600 text-lg md:text-xl lg:text-2xl italic"
            style={{
              fontFamily: "Mulish, sans-serif",
              fontWeight: 500,
              fontStyle: "italic",
            }}
          >
            Discover the latest treasures crafted for elegance and everyday sparkle
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
              onClick={() => handleProductClick(product.id)}
            >
              <div className="relative rounded-lg h-64 md:h-80 mb-4 overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={(e) => handleAddToCart(product.id, e)}
                    className="bg-white text-slate-900 px-4 md:px-6 py-2 rounded font-semibold hover:bg-gray-100 transition-colors text-sm md:text-base"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors text-sm md:text-base">
                  {product.name}
                </h3>
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-600 font-bold text-sm md:text-base">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-gray-500 line-through text-xs md:text-sm">{product.originalPrice}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button
            onClick={() => alert("Navigating to full catalog...")}
            className="bg-yellow-600 text-white px-6 md:px-8 py-2 md:py-3 rounded font-semibold hover:bg-yellow-700 transition-colors text-sm md:text-base"
            style={{ fontFamily: "Mulish, sans-serif" }}
          >
            View All Products
          </button>
        </div>
      </div>
    </section>
  )
}

export default HandpickedSection
