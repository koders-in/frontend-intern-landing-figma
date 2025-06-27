"use client"

import { useState } from "react"

const Header = () => {
  const [activeSection, setActiveSection] = useState("home")

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleCatalogueClick = () => {
    alert("Opening catalogue...")
  }

  const handleContactClick = () => {
    scrollToSection("contact")
  }

  return (
    <header className="w-full" style={{ backgroundColor: "#0C0F35" }}>
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="cursor-pointer" onClick={() => scrollToSection("home")}>
            <div className="flex flex-col">
              <span
                className="text-3xl md:text-4xl font-bold"
                style={{
                  color: "#D4AF37",
                  fontFamily: "Mulish, sans-serif",
                  fontWeight: 700,
                }}
              >
                DC
              </span>
              <span
                className="text-xs tracking-wider"
                style={{
                  color: "#D4AF37",
                  fontFamily: "Mulish, sans-serif",
                  fontWeight: 400,
                }}
              >
                D11GENT
              </span>
            </div>
          </div>

          {/* Navigation Menu - Right Side */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className={`text-white hover:text-yellow-300 transition-colors text-sm lg:text-base ${
                activeSection === "home" ? "text-yellow-300 font-semibold" : ""
              }`}
              style={{ fontFamily: "Mulish, sans-serif" }}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`text-white hover:text-yellow-300 transition-colors text-sm lg:text-base ${
                activeSection === "about" ? "text-yellow-300 font-semibold" : ""
              }`}
              style={{ fontFamily: "Mulish, sans-serif" }}
            >
              Our Story
            </button>
            <button
              onClick={handleCatalogueClick}
              className="text-white hover:text-yellow-300 transition-colors text-sm lg:text-base"
              style={{ fontFamily: "Mulish, sans-serif" }}
            >
              Catalogue
            </button>
            <button
              onClick={handleContactClick}
              className={`text-white hover:text-yellow-300 transition-colors text-sm lg:text-base ${
                activeSection === "contact" ? "text-yellow-300 font-semibold" : ""
              }`}
              style={{ fontFamily: "Mulish, sans-serif" }}
            >
              Contact Us
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-white p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
