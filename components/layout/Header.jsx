import React, { useState } from 'react'
import Logo from '../ui/Logo'
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa"
import Search from '../ui/Search'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useSelector } from 'react-redux'

const Header = () => {
    const [isSearchModal, setIsSearchModal] = useState(false)
    const [isMenuModal, setIsMenuModal] = useState(false)
    const router = useRouter()
    const cart = useSelector(state => state.cart)

    return (
        <div className={`h-[5.5rem] z-50 relative ${router.asPath == "/" ? "bg-transparent" : "bg-secondary"}`}>
            <div className='container text-white mx-auto flex justify-between items-center h-full'>
                <Logo />
                <nav className={`sm:static absolute top-0 left-0 sm:w-auto sm:h-auto w-full h-screen sm:text-white 
                text-black sm:bg-transparent bg-white sm:flex hidden 
                ${isMenuModal === true && "!grid place-content-center"}`}>
                    <ul className='flex gap-x-6 sm:flex-row flex-col items-center'>
                        <li className='px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer'>
                            <Link href="/">Home</Link>
                        </li>
                        <li className='px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer'>
                            <Link href="/Menu">Menu</Link>
                        </li>
                        <li className='px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer'>
                            <Link href="/About">About</Link>
                        </li>
                        <li className='px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer'>
                            <Link href="/Reservation">Book Table</Link>
                        </li>
                    </ul>
                    {isMenuModal && (
                        <button
                            onClick={() => setIsMenuModal(false)}
                            className='absolute top-4 right-4 z-50'
                        >
                            <AiOutlineCloseCircle
                                className='hover:text-primary transition-all'
                                size={30}
                            />
                        </button>
                    )}
                </nav>
                <div className='flex gap-x-4 items-center'>
                    <Link href="/auth/login" >
                        <FaUserAlt className='hover:text-primary transition-all cursor-pointer' />
                    </Link>
                    <Link href="/cart" >
                        <span className='relative'>
                            <FaShoppingCart className='hover:text-primary transition-all cursor-pointer' />
                            <span className='w-4 h-4 bg-primary text-xs grid place-content-center rounded-full
                            absolute -top-2 -right-3 text-black font-bold'>
                                {cart.products.length === 0 ? "0" : cart.products.length}
                            </span>
                        </span>
                    </Link>
                    <button onClick={() => setIsSearchModal(!isSearchModal)}>
                        <FaSearch className='hover:text-primary transition-all cursor-pointer' />
                    </button>
                    <a href="" className='md:inline-block hidden'>
                        <button className='btn-primary'>Order Online</button>
                    </a>
                    <button className='sm:hidden inline-block' onClick={() => setIsMenuModal(!isMenuModal)}>
                        <GiHamburgerMenu className='hover:text-primary transition-all text-xl' />
                    </button>

                </div>
            </div>
            {isSearchModal && <Search setIsSearchModal={setIsSearchModal} />}
        </div>
    )
}

export default Header

//deneme