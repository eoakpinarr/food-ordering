import React from 'react'
import Input from '../form/Input'
import Title from './Title'

const Reservation = () => {
  return (
    <div className='container mx-auto py-[48px]'>
      <Title addClass={'text-[30px] mb-10'}>Book A Table</Title>
      <div className='flex flex-wrap justify-between gap-x-10'>
        <div className='lg:flex-1 w-full'>
          <div className='flex flex-col gap-y-2'>
            <Input />
            <Input />
            <Input />
            <Input />
            <Input />
          </div>
          <button className='btn-primary my-4'>BOOK NOW</button>
        </div>
        <div className='lg:flex-1 !h-[384px] w-full'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48979.85828551356!2d32.7514861216797!3d39.89123300000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d345d9d434d213%3A0x5e5858586f0c50e9!2sYummy%20Burger%20House!5e0!3m2!1str!2str!4v1687351029579!5m2!1str!2str"
            width="100%"
            height="100%"
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Reservation