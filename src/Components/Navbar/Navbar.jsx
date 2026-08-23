import React from 'react'
import { IoMdSearch } from 'react-icons/io'
import { FaCartShopping } from 'react-icons/fa6'
import { FaCaretDown } from 'react-icons/fa6'
import { FiShoppingBag } from 'react-icons/fi'

const Menu = [
    {
        id:1,
        name:"Home",
        link:'/#'
    },
     {
        id:2,
        name:"Top Rated",
        link:'/#services'
    },
     {
        id:3,
        name:"Kids Section",
        link:'/#'
    },
     {
        id:3,
        name:"Mens Section",
        link:'/#'
    },
    {
        id:3,
        name:"Electronics",
        link:'/#'
    }
]

const Dropdownlist = [
    {
        id:1,
        name:"Trandings",
        link:'/#'
    },
    {
        id:2,
        name:"Best Selling",
        link:'/#'
    },
]


const Navbar = ({handleOrderPopup}) => {
  return (
    <>
    <div className='shadow-md bg-white dark:bg-text-white relative z-40 duration-200'>


    </div>
    </>
  )
}

export default Navbar
