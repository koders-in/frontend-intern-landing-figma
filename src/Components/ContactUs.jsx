import React from 'react'
import contactImg from '../assets/contactImg.png'
const ContactUs = () => {
  return (
    <div className='text-center relative p-10'>
        <img className='h-full lg:h-auto absolute inset-0 z-10' src={contactImg} alt="" />
        <form action="submit" className='relative z-20 bg-white rounded-2xl border-black flex flex-col lg:w-[30%] place-self-end m-5 gap-10 shadow p-5 hover:shadow-lg'>
            <h1 className='text-[#465C85] font-bold text-2xl'>Let’s Connect With Us</h1>
            <input type="text" placeholder='Name'className='border rounded p-1'/>
            <input type="email" name="email" placeholder='Email-ID' className='border rounded p-1'/>
            <textarea name="message" cols="10" rows="5" className='border rounded p-1'></textarea>
            <button className='bg-[#CFB278] p-3 rounded-2xl'>Submit</button>
        </form>
    </div>
  )
}

export default ContactUs
