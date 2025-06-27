import React from 'react'

const Button = (props) => {
  return (
    <div className='mt-4'>
        <button className='bg-[#FFFF] text-black pl-4 pt-1 pb-1 text-center font-light text-lg pr-4 rounded-md'>{props.name}</button>     
    </div>
  )
}

export default Button
