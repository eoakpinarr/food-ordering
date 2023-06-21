import MenuWrapper from '@/components/product/MenuWrapper'
import About from '@/components/ui/About'
import Campaigns from '@/components/ui/Campaigns'
import Carousel from '@/components/ui/Carousel'
import React from 'react'

const Index = () => {
  return (
    <div className=''>
      <Carousel />
      <Campaigns />
      <MenuWrapper />
      <About />
    </div>
  )
}

export default Index