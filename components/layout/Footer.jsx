import React from 'react'
import Title from '../ui/Title'

const Footer = () => {
    return (
        <div className='bg-secondary text-white'>
            <div className='container mx-auto'>
                <div>
                    <div>
                        <Title addClass={'text-[30px]'}>Contact Us</Title>
                        <div>
                            <span></span>
                        </div>
                    </div>
                    <div></div>
                    <div></div>
                </div>
                <div>
                    <p>
                        Necessary, making this the first true generator on the Internet.
                        It uses a dictionary of over 200 Latin words, combined with
                    </p>
                </div>
                <p className="text-center mt-10">
                    © 2022 All Rights Reserved By Free Html Templates
                </p>
            </div>
        </div>
    )
}

export default Footer