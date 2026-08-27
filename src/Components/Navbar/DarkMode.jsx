import React, { useEffect, useState } from 'react'
import LightImage from '../../assets/website/light-mode-button.png'
import DarkImage from '../../assets/website/dark-mode-button.png'

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  )

  const element = document.documentElement

  useEffect(() => {
    if (theme == 'dark') {
      element.classList.add('dark')
      element.classList.remove('light')
      localStorage.setItem('theme', 'dark')
    } else {
      element.classList.add('light')
      element.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [theme])

  return (
    <div className="relative h-12 w-12">
      <img
        src={LightImage}
        alt="Light Mode"
        onClick={() => {
          setTheme(theme == 'light' ? 'dark' : 'light')
        }}
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)]
            transition-all duration-300 absolute right-0 z-10 ${theme == 'dark' ? 'opacity-0' : 'opacity-100'}`}
      />

      <img
        src={DarkImage}
        alt="Dark Mode"
        onClick={() => {
          setTheme(theme == 'light' ? 'dark' : 'light')
        }}
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 ${theme == 'dark' ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  )
}

export default DarkMode
