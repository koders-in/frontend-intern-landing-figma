"use client"

const CategoryNavigation = () => {
  const categories = ["NECKLACES", "EARRINGS", "PENDANTS", "RINGS", "BANGLES", "VIRASAT"]

  const handleCategoryClick = (category: string) => {
    console.log(`Filtering by ${category}`)
    alert(`Showing ${category} collection...`)
  }

  return (
    <section className="w-full">
      <div className="bg-yellow-600 py-3 md:py-4">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex flex-wrap justify-center gap-3 md:gap-6 lg:gap-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className="text-white font-medium hover:text-yellow-200 transition-colors px-2 py-1 text-xs md:text-sm lg:text-base whitespace-nowrap"
                style={{ fontFamily: "Mulish, sans-serif" }}
              >
                {category}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </section>
  )
}

export default CategoryNavigation
