import React from 'react'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import AOS from 'aos'
import "aos/dist/aos.css"
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
      easing: "ease-in-sine",
      delay: 100,
    })
    AOS.refresh();
  }, [])


  return (
    <>
    <div>
      <h1 className="bg-white dark:bg-gray-900 
    dark:text-white duration:200"></h1>
    <Navbar handleOrderPopup={handleOrderPopup}/>
    <Banner />
    </div>
    </>
  )
}

export default App
