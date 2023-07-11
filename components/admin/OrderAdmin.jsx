import React from 'react'
import Title from '../ui/Title'
import Image from 'next/image'

const OrderAdmin = () => {
    return (
        <div className='lg:p-8 flex-1 lg:mt-0 mt-5'>
            <Title addClass={'text-[40px]'}>Orders</Title>
            <div className='mt-5 overflow-x-auto w-full'>
                <table className='text-sm text-center text-gray-500 w-full'>
                    <thead className='text-xs text-gray-400 uppercase bg-gray-700'>
                        <tr>
                            <th className='py-3 px-6' scope='col'>Product id</th>
                            <th className='py-3 px-6' scope='col'>Customer</th>
                            <th className='py-3 px-6' scope='col'>Total</th>
                            <th className='py-3 px-6' scope='col'>Payment</th>
                            <th className='py-3 px-6' scope='col'>Status</th>
                            <th className='py-3 px-6' scope='col'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='bg-secondary border-gray-700 transition-all'>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>63107..</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>Etem Oğulcan AKPINAR</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>$20</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>Cash</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>preparing</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                <button className='btn-primary !bg-success'>Next Stage</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default OrderAdmin