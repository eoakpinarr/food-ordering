import React from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import Title from './Title'
import Image from 'next/image'
import { AiOutlineCloseCircle } from 'react-icons/ai'

const Search = ({ setIsSearchModal }) => {
    return (
        <div className='fixed top-0 left-0 h-screen w-screen z-50 
        after:content[``] after:w-screen after:h-screen after:bg-gray-50 
        after:absolute after:top-0 after:left-0 first-of-type:h-screen
        grid place-content-center after:opacity-50'>
            <OutsideClickHandler onOutsideClick={() => setIsSearchModal(false)}>
                <div className='w-full h-full grid place-content-center'>
                    <div className='relative z-50 md:w-[600px] w-[370px] bg-white border-2 p-10 rounded-3xl'>
                        <Title addClass="text-[40px] text-center">Search</Title>
                        <input type="text" placeholder='Search...' className='border w-full my-10' />
                        <ul>
                            <li className='flex items-center justify-between p-2
                                hover:bg-primary transition-all'>
                                <div className='relative flex'>
                                    <Image src='/images/f1.png' alt='' width={48} height={48} />
                                </div>
                                <span className='font-bold'>Good Pizza</span>
                                <span className='font-bold'>$10</span>
                            </li>
                            <li className='flex items-center justify-between p-2
                                hover:bg-primary transition-all'>
                                <div className='relative flex'>
                                    <Image src='/images/f1.png' alt='' width={48} height={48} />
                                </div>
                                <span className='font-bold'>Good Pizza</span>
                                <span className='font-bold'>$10</span>
                            </li>
                            <li className='flex items-center justify-between p-2
                                hover:bg-primary transition-all'>
                                <div className='relative flex'>
                                    <Image src='/images/f1.png' alt='' width={48} height={48} />
                                </div>
                                <span className='font-bold'>Good Pizza</span>
                                <span className='font-bold'>$10</span>
                            </li>
                        </ul>
                        <button onClick={() => setIsSearchModal(false)} className='absolute top-4 right-4'>
                            <AiOutlineCloseCircle size={25} />
                        </button>
                    </div>
                </div>
            </OutsideClickHandler>
        </div>
    )
}

export default Search
{
    /*
    md:w-[600px] w-320px ekran küçüldüğü zaman 320px e düşür demek
    */
}