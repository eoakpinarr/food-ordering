import React from 'react'
import Title from '../ui/Title';

const OrderProfile = () => {
    return (
        <div className='lg:p-8 flex-1 lg:mt-0 mt-5'>
            <Title addClass={'text-[40px]'}>Orders</Title>
            <div className='mt-5 overflow-x-auto w-full'>
                    <table className='text-sm text-center text-gray-500 w-full'>
                        <thead className='text-xs text-gray-400 uppercase bg-gray-700'>
                            <tr>
                                <th className='py-3 px-6' scope='col'>Id</th>
                                <th className='py-3 px-6' scope='col'>Address</th>
                                <th className='py-3 px-6' scope='col'>Date</th>
                                <th className='py-3 px-6' scope='col'>Total</th>
                                <th className='py-3 px-6' scope='col'>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='bg-secondary border-gray-700 
                            hover:bg-primary transition-all'>
                                <td className='py-4 px-6 font-medium whitespace-nowrap 
                                hover:text-white flex items-center gap-x-1 justify-center'>63107..</td>
                                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>Erzincan</td>
                                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>09.07.2023</td>
                                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>20$</td>
                                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>preparing</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

        </div>
    )
}

export default OrderProfile