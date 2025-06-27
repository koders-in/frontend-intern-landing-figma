import React from 'react'
import heroImg from '../assets/hero.png'
import RingImg from '../assets/img1.png'
import Button from './Button'

const Home = () => {
    return (
        <div>
            <div className='bg-[#CFB278] flex list-none justify-evenly p-2 font-bold text-xs gap-2.5 md:text-md md:font-normal'>
                <li>NECKLACES</li>
                <li>EARINGS</li>
                <li>PENDANTS</li>
                <li>RINGS</li>
                <li>BENGALS</li>
                <li>VIRASAT</li>
            </div>
            <div
                style={{
                    backgroundImage: `url(${heroImg})`,
                    height: '100vh',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className= 'text-2xl p-8 text-white md:text-4xl md:p-16 md:w-[39rem]'>
                    <h1>Discover Timeless Jewellery</h1> 
                    <div className='flex'>
                        <h1>Crafted to Perfection</h1>
                        <img className='h-8 md:h-auto' src={RingImg} alt="" />
                    </div>
                    <p className='mt-4 text-sm text-wrap'>Explore our curated collection of gold and diamond masterpieces designed to celebrate every moment.</p>
                    <div className='mt-5'>
                        <Button name='Explore Collection'/>
                        <Button name='Book an Appointment'/>
                    </div>
                </div>

            </div>
            <div className='place-items-center p-2'>
                <div className='bg-[#0C0F351A] h-6 w-17 rounded-3xl p-1 flex gap-1'>
                    <div className='bg-[#0C0F35CC] rounded-[50%] h-4 w-4'></div>
                    <div className='bg-[#0C0F3526] rounded-[50%] h-4 w-4'></div>
                    <div className='bg-[#0C0F3526] rounded-[50%] h-4 w-4'></div>
                </div>
            </div>
        </div>
    )
}

export default Home
