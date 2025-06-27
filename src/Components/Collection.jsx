import React from 'react'
import img2 from '../assets/img2.png'
import Item from './Item'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import img6 from '../assets/img6.png'
import img7 from '../assets/img7.png'
import img8 from '../assets/img8.png'
import img9 from '../assets/img9.png'
import img10 from '../assets/img10.png'
import img11 from '../assets/img11.png'


const Collection = () => {
    return (
        <div className='mt-10'>
            <div>
                <div className='text-center'>
                    <h1 className='text-5xl font-bold'>Handpicked for You</h1>
                    <p className='mt-3 text-[#0C0F35B2]'>Discover the latest treasures crafted for elegance and everyday sparkle</p>
                </div>
                <div className='m-5 ml-12 md:flex mr-12 flex-wrap justify-evenly'>
                    <a href="#"><Item img={img2} name='Radiant Bloom Gold Pendant' aprice='₹78,500' dprice='₹76,000' /></a>
                    <a href="#"><Item img={img3} name='Celestial Diamond Nose Pin' aprice='₹15,900' dprice='₹14,310' /></a>
                    <a href="#"><Item img={img4} name='Classic Meenakari Bangle Set' aprice='' dprice='₹2,10,000' /></a>
                    <a href="#"><Item img={img5} name='Rose Whisper Diamond Ring' aprice='₹48,750' dprice='₹46,000' /></a>
                </div>
            </div>
            <div className='mt-12'>
                <div className='text-center'>
                    <h1 className='text-5xl font-bold'>Explore by Style</h1>
                    <p className='mt-3 m-1 text-[#0C0F35B2]'>Find the perfect piece for every occasion – curated by category</p>
                </div>
                <div className="m-5 md:ml-16 md:mr-16 grid grid-cols-8 grid-rows-8 gap-3">
                    <a href="#" className="col-span-4 row-span-4"><img className='h-[100%] w-[100%]' src={img6} alt="" /></a>
                    <a href="#" className="col-span-2 row-span-4 col-start-5"><img className='h-[100%] w-[100%]' src={img7} alt="" /></a>
                    <a href="#" className="col-span-2 row-span-4 col-start-7"><img className='h-[100%] w-[100%]' src={img8} alt="" /></a>
                    <a href="#" className="col-span-2 row-span-4 row-start-5"><img className='h-[100%] w-[100%]' src={img9} alt="" /></a>
                    <a href="#" className="col-span-2 row-span-4 col-start-3 row-start-5"><img className='h-[100%] w-[100%]' src={img10} alt="" /></a>
                    <a href="#" className="col-span-4 row-span-4 col-start-5 row-start-5"><img className='h-[100%] w-[100%]' src={img11} alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Collection
