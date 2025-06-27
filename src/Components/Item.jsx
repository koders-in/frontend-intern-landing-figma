import React from 'react'

const Item = (props) => {
    return (
        <div className='ml-3 mb-5 h-96 w-3xs '>
            <div className='bg-[#0C0F35] h-[80%]'><img src={props.img} alt={props.name} /></div>
            <div>
                <h2 className='text-2xl'>{props.name}</h2>
                <div className='flex gap-4 text-sm mt-1'>
                    <p className='text-[#FFB013]'>{props.dprice}</p>
                    <p className='text-[#717171] line-through'>{props.aprice}</p>
                </div>
            </div>
        </div>
    )
}

export default Item
