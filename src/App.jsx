import React from 'react'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Products from './Components/Products/Products'
import TopProducts from './Components/TopProducts/TopProducts'
import Subscribe from './Components/Subscribe/Subscribe'
import Testimonials from './Components/Testimonials/Testimonials'
import Footer from './Components/Footer/Footer'
import Popup from './Components/Popup/Popup'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useState, useEffect } from 'react'

const App = () => {
  // setting useState for Popups

  const [orderPopups, setOrderPopup] = useState(false)

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopups)
  }

  // setting useEffect animation

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    })
    AOS.refresh()
  }, [])

  return (
    <>
      <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
        <h1
          className="bg-white dark:bg-gray-900
    dark:text-white duration-200"
        ></h1>
        <Navbar handleOrderPopup={handleOrderPopup} />
        <Hero handleOrderPopup={handleOrderPopup} />
        <Products/>
        <TopProducts handleOrderPopup={handleOrderPopup}/>
        <Banner />
        <Subscribe />
        <Testimonials />
        <Footer />
        <Popup orderPopup={orderPopups} setOrderPopup={setOrderPopup} />
      </div>
    </>
  )
}

export default App
