import './App.css'
import Header from './component/Header'
import DesignSection from './pages/DesignSection'
import FocusSection from './pages/FocusSection'
import HeroSection from './pages/HeroSection'
import ModernPage1 from './pages/ModernPage1'
import ModernPage2 from './pages/ModernPage2'
import ContactUs from './pages/ContactUs'
import FutureSection from './pages/FutureSection'

function App() {
  

  return (
    <>
      <Header/>
      <HeroSection/>
      <DesignSection/>
      <FocusSection/>
      <ModernPage1/>
      <ModernPage2/>
      <FutureSection/>
      <ContactUs/>
    </>
  )
}

export default App
