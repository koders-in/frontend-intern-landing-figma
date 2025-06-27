import Header from "./components/Header"
import CategoryNavigation from "./components/CategoryNavigation"
import Hero from "./components/Hero"
import HandpickedSection from "./components/HandpickedSection"
import ExploreByStyle from "./components/ExploreByStyle"
import AboutSection from "./components/AboutSection"
import FeaturesSection from "./components/FeaturesSection"
import GoldenRingsBanner from "./components/GoldenRingsBanner"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <CategoryNavigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="handpicked">
          <HandpickedSection />
        </section>
        <ExploreByStyle />
        <section id="about">
          <AboutSection />
        </section>
        <FeaturesSection />
        <GoldenRingsBanner />
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
