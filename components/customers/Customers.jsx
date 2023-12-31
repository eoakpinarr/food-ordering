import React from 'react'
import Title from '../ui/Title'
import CustomerItem from './CustomerItem'
import Slider from "react-slick";
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'

const Customers = () => {

  function NextBtn ({onClick}) {
    return(
      <button className='bg-primary absolute -bottom-12 left-1/2 text-white ml-2
      flex items-center justify-center w-10 h-10 rounded-full' onClick={onClick}>
        <IoIosArrowForward />
      </button>
    )
  }

  function PrevBtn ({onClick}) {
    return(
      <button className='bg-primary absolute -bottom-12 right-1/2 text-white mr-2
      flex items-center justify-center w-10 h-10 rounded-full' onClick={onClick}>
        <IoIosArrowBack />
      </button>
    )
  }

  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoPlay:true,
    autoplaySpeed: 4000,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
      {
        breakpoint: 768,
        settings:{
          slidesToShow: 1,
        }
      }
    ]
  };
  return (
    <div className='container mx-auto mb-20'>
      <Title addClass={"text-[40px] text-center"}>What Says Our Customers</Title>
      <Slider {...settings} autoplay>
        <CustomerItem imgSrc="/images/client1.jpg" />
        <CustomerItem imgSrc="/images/client2.jpg" />
        <CustomerItem imgSrc="/images/client1.jpg" />
        <CustomerItem imgSrc="/images/client2.jpg" />
        <CustomerItem imgSrc="/images/client2.jpg" />
      </Slider>
    </div>
  )
}

export default Customers