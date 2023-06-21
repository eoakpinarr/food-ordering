import Image from 'next/image'
import React from 'react'
import Title from './Title'

const About = () => {
    return (
        <div className='bg-secondary py-14'>
            <div className='container mx-auto flex items-center flex-wrap-reverse
            text-white gap-20 justify-center'>
                <div className='grid place-content-center'>
                    <div className='flex justify-center relative w-[300px] sm:w-[455px] h-[450px] sm:h-[600px]'>
                        <Image
                            src={'/images/about-img.png'}
                            alt=''
                            layout='fill'
                        />
                    </div>
                </div>
                <div className='md:w-1/2 '>
                    <Title addClass={'text-[40px]'}>We Are Feane</Title>
                    <p className="my-5 flex flex-col items-center">
                        There are many variations of passages of Lorem Ipsum available, but
                        the majority have suffered alteration in some form, by injected
                        humour, or randomised words which don`t look even slightly
                        believable. If you are going to use a passage of Lorem Ipsum, you
                        need to be sure there isn`t anything embarrassing hidden in the
                        middle of text. All
                    </p>
                    <button className="btn-primary">Read More</button>
                </div>
            </div>

        </div>
    )
}

export default About