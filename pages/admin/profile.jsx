import Input from '@/components/form/Input'
import Account from '@/components/profile/Account'
import Orders from '@/components/profile/OrderProfile'
import Password from '@/components/profile/Password'
import Title from '@/components/ui/Title'
import Image from 'next/image'
import React, { useState } from 'react'
import Login from '../auth/login'
import Products from '@/components/admin/Products'
import OrderAdmin from '@/components/admin/OrderAdmin'
import CategoryAdmin from '@/components/admin/CategoryAdmin'
import FooterAdmin from '@/components/admin/FooterAdmin'

const AdminProfile = () => {
  const [tabs, setTabs] = useState(0)

  return (
    <div className='flex min-h-[calc(100vh_-_293px)] px-10 lg:flex-row flex-col lg:mt-5 mt-10'>
      <div className='lg:w-80 w-100 flex-shrink-0'>
        <div className='relative flex flex-col items-center 
        p-10 py-5 border border-b-0'>
          <Image
            className='rounded-full '
            src={`/images/admin.png`}
            alt=''
            width={100}
            height={100}
          />
          <b className='text-2xl mt-1'>Admin</b>
        </div>
        <ul className="text-center font-semibold">
          <li className={`border w-full p-3 cursor-pointer hover:bg-primary 
          hover:text-white transition-all ${tabs === 0 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(0)}>
            <i className="fa fa-cutlery"></i>
            <button className="ml-1 ">Products</button>
          </li>
          <li className={`border w-full p-3 cursor-pointer hover:bg-primary 
          hover:text-white transition-all ${tabs === 1 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(1)}>
            <i className="fa fa-motorcycle"></i>
            <button className="ml-1">Orders</button>
          </li>
          <li className={`border w-full p-3 cursor-pointer hover:bg-primary 
          hover:text-white transition-all ${tabs === 2 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(2)}>
            <i className="fa fa-ellipsis-h"></i>
            <button className="ml-1">Categories</button>
          </li>
          <li className={`border w-full p-3 cursor-pointer hover:bg-primary 
          hover:text-white transition-all ${tabs === 3 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(3)}>
            <i className="fa fa-window-maximize"></i>
            <button className="ml-1">Footer</button>
          </li>
          <li className={`border w-full p-3 cursor-pointer hover:bg-primary 
          hover:text-white transition-all `}
            onClick={() => setTabs(4)}>

            <i className="fa fa-sign-out"></i>
            <button className="ml-1">Exit</button>
          </li>
        </ul>
      </div>
      {tabs === 0 && (<Products />)}
      {tabs === 1 && (<OrderAdmin />)}
      {tabs === 2 && (<CategoryAdmin />)}
      {tabs === 3 && (<FooterAdmin />)}
    </div>
  )
}

export default AdminProfile