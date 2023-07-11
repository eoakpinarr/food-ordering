import Image from 'next/image'
import React from 'react'

const CustomerItem = ({imgSrc}) => {
    return (
        <div className='mx-4'>
            <div className='p-[25px] bg-secondary text-white rounded-[5px]'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam
                </p>
                <div className='flex flex-col mt-4'>
                    <span className='text-lg font-semibold'>Mike Hamel</span>
                    <p className='text-[15px]'>magna aliqua</p>
                </div>
            </div>
            <div className="relative w-28 h-28 border-4 border-primary rounded-full mt-[30px] 
            before:w-5 before:h-5 before:content-[''] before:absolute before:top-0 before:rotate-45
            before:bg-primary before:-translate-y-3 flex justify-center">
                <Image
                    src={imgSrc}
                    alt=''
                    layout='fill'
                    objectFit='contain'
                    className='rounded-full'
                />
            </div>
        </div>
    )
}

export default CustomerItem