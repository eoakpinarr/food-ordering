import Title from '@/components/ui/Title'
import { reset } from '@/redux/cartSlice'
import Image from 'next/image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {

    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    return (
        <div className='min-h-[calc(100vh_-_273px)]'>
            <div className='flex justify-between items-center md:flex-row flex-col'>
                <div className='md:min-h-[calc(100vh_-_273px)] flex flex-1 items-center p-10 overflow-x-auto w-full'>
                    <table className='text-sm text-center text-gray-500 w-full'>
                        <thead className='text-xs text-gray-400 uppercase bg-gray-700'>
                            <tr>
                                <th className='py-3 px-6' scope='col'>Product</th>
                                <th className='py-3 px-6' scope='col'>Extras</th>
                                <th className='py-3 px-6' scope='col'>Price</th>
                                <th className='py-3 px-6' scope='col'>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.products.map((product) => (
                                <tr className='bg-secondary border-gray-700 hover:bg-primary 
                                    transition-all'>
                                    <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white 
                                        flex items-center gap-x-1 justify-center'>
                                        <Image alt='' src={'/images/f1.png'} width={40} height={40} />
                                        <span>{product.name}</span>
                                    </td>
                                    <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                        {product.extras.map((item) => (<span key={item.id}>{item.name},</span>))}
                                    </td>
                                    <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>${product.price}</td>
                                    <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>{product.quantity}</td>
                                </tr>
                            ))
                            }
                        </tbody>
                    </table>
                </div>
                <div className='bg-secondary min-h-[calc(100vh_-_273px)] 
                flex justify-center flex-col text-white p-14 md:w-auto w-full md:text-start text-center'>
                    <Title addClass={'text-[40px]'}>Cart Total</Title>
                    <div className='my-4'>
                        <b>Subtotal: </b>${cart.total}<br />
                        <b className='inline-block my-2'>Discount: </b> $0.00<br />
                        <b>Total: </b>${cart.total}
                    </div>
                    <div>
                        <button className='btn-primary md:w-auto w-52 mt-2' 
                        onClick={() => dispatch(reset())}>CHECKOUT NOW!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart