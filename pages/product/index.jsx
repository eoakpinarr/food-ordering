import Title from '@/components/ui/Title'
import Image from 'next/image'
import React, { useState } from 'react'

const itemsExtra = [
    {
        id: 1,
        name: 'ketçap',
        price: 1,
    },
    {
        id: 2,
        name: 'mayonez',
        price: 2,
    },
    {
        id: 3,
        name: 'acı sos',
        price: 3,
    }
]

const Index = () => {
    const [prices, setPrices] = useState([10, 20, 30])
    const [price, setPrice] = useState(prices[0])
    const [size, setSize] = useState(0)
    const [extraItems, setExtraItems] = useState(itemsExtra)
    const [extras, setExtras] = useState([])

    const handleSize = (sizeIndex) => {
        const difference = prices[sizeIndex] - prices[size]
        setSize(sizeIndex);
        changePrice(difference)
    }

    const changePrice = (number) => { setPrice(price + number) }

    const handleChange = (e, item) => {
        const checked = e.target.checked
        if (checked) {
            changePrice(item.price)
            setExtras([...extras, item])
        } else {
            changePrice(-item.price)
            setExtras(extras.filter((extra) => extra.id !== item.id))
        }
    }

    return (
        <div className='flex items-center gap-5 flex-wrap md:h-[calc(100vh_-_88px)] mx-2 py-20'>
            <div className='relative md:flex-1 flex justify-center mx-auto md:h-[40%] h-[300px] w-[300px]'>
                <Image
                    src={'/images/f1.png'}
                    alt=''
                    layout='fill'
                    objectFit='contain'
                />
            </div>
            <div className='md:flex-1 md:text-start text-center'>
                <Title addClass={'text-5xl'}>Good Pizza</Title>
                <span className='text-primary text-2xl font-bold 
                underline underline-offset-1 my-2 inline-block'>
                    ${price}
                </span>
                <p className='text-sm my-4 md:pr-24'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
                    fugit corporis ex laboriosam tenetur at ad aspernatur eius numquam
                    molestiae.
                </p>
                <div>
                    <h4 className='text-xl font-bold'>Choose the size</h4>
                    <div className='flex gap-x-20 items-center md:justify-start justify-center'>
                        <div className='relative w-8 h-8 cursor-pointer' onClick={() => handleSize(0)}>
                            <Image
                                src={'/images/size.png'}
                                alt=''
                                layout='fill'
                            />
                            <span className='absolute top-0 -right-7 text-xs 
                            bg-primary rounded-full font-medium px-[5px]'>Small</span>
                        </div>
                        <div className='relative w-12 h-12 cursor-pointer' onClick={() => handleSize(1)}>
                            <Image
                                src={'/images/size.png'}
                                alt=''
                                layout='fill'
                            />
                            <span className='absolute top-0 -right-8 text-xs 
                            bg-primary rounded-full font-medium px-[5px]'>Medium</span>
                        </div>
                        <div className='relative w-16 h-16 cursor-pointer' onClick={() => handleSize(2)}>
                            <Image
                                src={'/images/size.png'}
                                alt=''
                                layout='fill'
                            />
                            <span className='absolute top-0 -right-4 text-xs 
                            bg-primary rounded-full font-medium px-[5px]'>Large</span>
                        </div>
                    </div>
                </div>
                <div className='flex gap-x-4 my-6 md:justify-start justify-center'>
                    {
                        extraItems.map((item) => (
                            <label className='flex items-center gap-x-1' key={item.id}>
                                <input type="checkbox" className='w-5 h-5 accent-primary'
                                    onChange={(e) => handleChange(e, item)} />
                                <span className='text-sm font-semibold'>{item.name}</span>
                            </label>
                        ))
                    }
                </div>
                <button className='btn-primary'>Add to cart</button>
            </div>
        </div>
    )
}

export default Index