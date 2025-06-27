import React from 'react'
import aboutImg from '../assets/aboutImg.png'

const AboutUs = () => {
  return (
    <div className='bg-[#0C0F35] mt-20 mb-5 md:flex'>
        <div className='md:w-[50%] p-10'>
            <img className='' src={aboutImg} alt="aboutImg" />
        </div> 
        <div className='text-white md:w-[50%] p-10'>
            <h1 className=' md:text-5xl font-bold'>ABOUT US</h1>
            <p className='text-xs md:text-sm mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque error aperiam necessitatibus iste culpa ullam maiores minima voluptas incidunt, fuga tenetur quis tempora dignissimos distinctio! Cupiditate mollitia exercitationem dolores eum.</p>
            <p className='text-xs md:text-sm mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ratione hic voluptatum magnam fuga quos nisi ad saepe sit minus! Laborum tempora ipsa sint doloribus deleniti dolore pariatur, dignissimos repellendus.</p>
        </div>     
    </div>
  )
}

export default AboutUs
