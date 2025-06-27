import React from 'react'
import logo from '../assets/logo.png'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-[#0C0F35] justify-between pl-2 pr-2 flex flex-row md:h-24'>
        <div id='logo' className='place-self-start md:ml-12'>
            <img className='h-14 md:h-22' src={logo} alt="logo"/>            
        </div> 
        <div id='links' className='flex flex-row gap-5 self-center text-white md:mr-12 text-xs md:text-lg'>
            <a href="#">Home</a>
            <a href="#">Our Story</a>
            <a href="#">Catalouge</a>
            <a href="#">Contact Us</a>
        </div>     
    </div>
  )
}

export default Navbar
