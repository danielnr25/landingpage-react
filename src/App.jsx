import Footer from './components/navigation/Footer'
import Navbar from './components/navigation/Navbar'
import Banner from './components/pages/Banner'
import Country from './components/pages/Country'
import Hero from './components/pages/Hero'
import Hoteles from './components/pages/Hoteles'
import MainContent from './components/pages/MainContent'
function App() {

  return (
    <div className='bg-gray-100 min-h-screen w-full pt-6 px-3 antialiased'>
      <div className='mx-auto max-w-7xl'>
        <Navbar />
        <Hero />
        <MainContent />
        <Banner />
        <Hoteles />
        <Country />
        <Footer />
      </div>
    </div>

  )
}

export default App
