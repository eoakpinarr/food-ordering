import React from 'react'
import Head from 'next/head'
import Home from './Home'
import Header from '@/components/layout/Header'
import Carousel from '@/components/ui/Carousel'

const İndex = () => {
  return (
    <div className= "">
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app'/>
        <link rel='icon' href='/favicon.ico'/> 
      </Head>
      <Header />
      <Home />
    </div>
  )
}

export default İndex