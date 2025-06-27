import './App.css'
import AboutUs from './Components/AboutUs'
import Collection from './Components/Collection'
import ContactUs from './Components/ContactUs'
import Footer from './Components/Footer'
import Home from './Components/Home'
import MoreInfo from './Components/MoreInfo'
import Navbar from './Components/Navbar'

function App() {

  return (
    <div>
      <Navbar/>
      <Home/>
      <Collection/>
      <AboutUs/>
      <MoreInfo/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default App
