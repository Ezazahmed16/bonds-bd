import React from 'react'
import { motion } from "framer-motion"

const AboutUs = () => {
  return (
    <div style={{ backgroundColor: '#1D232A' }}>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-3 justify-center items-center h-screen md:px-20 px-5">
        <div className="">
          <h1 className='mb-5 md:text-5xl text-3xl font-bold text-white'>About Us</h1>
          <div style={{ backgroundColor: '#E13D44' }} className="h-1 w-20 mb-5 mx-0 mt-5"></div>
          <p className='text-justify text-white md:text-xl text-sm'>Welcome to Bonds Bangladesh, where craftsmanship meets innovation to produce the finest quality yarns. Established 2015, we take pride in being a leading player in the yarn manufacturing industry. Our commitment to excellence, sustainability, and customer satisfaction sets us apart.</p>
        </div>
        <div className="">
          <img
            className='rounded-lg shadow-md h-full w-full mx-0 justify-center block'
            src='https://cdn.pixabay.com/photo/2020/04/19/12/26/sewing-kit-5063401_1280.jpg'
            alt='bonds-bd-aboutus' />
        </div>
      </div>
    </div>
  )
}

export default AboutUs