import Input from '@/components/form/Input'
import Account from '@/components/profile/Account'
import Orders from '@/components/profile/Orders'
import Password from '@/components/profile/Password'
import Title from '@/components/ui/Title'
import Image from 'next/image'
import React, { useState } from 'react'
import Login from '../auth/login'

const Profile = () => {

  const [tabs, setTabs] = useState(0)




  return (
    <div className='flex min-h-[calc(100vh_-_433px)] px-10 lg:flex-row flex-col mt-5'>
      <div className='lg:w-80 w-100 flex-shrink-0'>
        <div className='relative flex flex-col items-center 
        p-10 py-5 border border-b-0'>
          <Image
            className='rounded-full '
            src={`/images/client2.jpg`}
            alt=''
            width={100}
            height={100}
          />
          <b className='text-2xl mt-1'>John Doe</b>
        </div>
        <ul className="text-center font-semibold">
          <li className={`border w-full p-3 cursor-pointer hover:bg-primary 
          hover:text-white transition-all ${
              tabs === 0 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(0)}>
            <i className="fa fa-home"></i>
            <button className="ml-1 ">Account</button>
          </li>
          <li className={`border w-full p-3 cursor-pointer hover:bg-primary 
          hover:text-white transition-all ${
              tabs === 1 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(1)}>
            <i className="fa fa-key"></i>
            <button className="ml-1">Password</button>
          </li>
          <li className={`border w-full p-3 cursor-pointer hover:bg-primary 
          hover:text-white transition-all ${
              tabs === 2 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(2)}>
            <i className="fa fa-motorcycle"></i>
            <button className="ml-1">Orders</button>
          </li>
          <li className={`border w-full p-3 cursor-pointer hover:bg-primary 
          hover:text-white transition-all `}>
            <i className="fa fa-sign-out"></i>
            <button className="ml-1">Exit</button>
          </li>
        </ul>
      </div>
      {
        tabs === 0 && (<Account />)
      }
      {
        tabs=== 1 && (<Password />)
      }
      {
        tabs === 2 && (<Orders />)
      }
      {
        
      }
    </div>
  )
}

export default Profile