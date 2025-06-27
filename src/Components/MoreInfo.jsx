import React from 'react'
import { FiTruck } from "react-icons/fi";
import { BsBoxSeam,BsShieldCheck } from "react-icons/bs";
import readImg from '../assets/readImg.png';


const MoreInfo = () => {
  return (
    <div>
        <div className='m-18 mt-16 mb-5 flex-wrap sm:flex justify-between'>
            <div className='flex gap-3 mt-3'>
                <div className=''>
                    <FiTruck size={50}/>
                </div>
                <div>
                    <h2 className='font-semibold'>FREE SHIPPING</h2>
                    <p>Lorem ipsum dolor sit amet </p>
                </div>
            </div>
            <div className='flex gap-3 mt-3'>
                <div className=''>
                    <BsBoxSeam size={50} />
                </div>
                <div>
                    <h2 className='font-semibold'>FREE IN STORE RETURN</h2>
                    <p>Lorem ipsum dolor sit amet </p>
                </div>
            </div>
            <div className='flex gap-3 mt-3'>
                <div className=''>
                    <BsShieldCheck size={50}/>
                </div>
                <div>
                    <h2 className='font-semibold'>100% SECURE CHECKOUT</h2>
                    <p>Lorem ipsum dolor sit amet </p>
                </div>
            </div>
        </div>
        <div className='m-4 md:m-14 mt-16 mb-5'>
            <img className='rounded' src={readImg} alt="" />
        </div>
        <div className='place-items-center p-1'>
                <div className='h-6 w-17 rounded-3xl p-1 flex gap-1'>
                    <div className='bg-[#CFB278] rounded-[50%] h-4 w-4'></div>
                    <div className='bg-[#CFB2784D] rounded-[50%] h-4 w-4'></div>
                    <div className='bg-[#CFB2784D] rounded-[50%] h-4 w-4'></div>
                </div>
            </div>
    </div>
  )
}

export default MoreInfo
