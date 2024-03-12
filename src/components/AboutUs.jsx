import React from 'react'
import { motion } from "framer-motion"

const AboutUs = () => {
  return (
    <div style={{ backgroundColor: '#1D232A' }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center h-screen px-20">
        <div className="">
          <h1 className='mb-5 text-5xl font-bold text-white'>About Us</h1>
          <p className='text-justify text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur earum molestias voluptate soluta aliquid error possimus eum asperiores? Ex reprehenderit reiciendis nam necessitatibus aut assumenda, aliquid consequuntur ab minima, possimus excepturi facilis ipsa! Velit earum enim eaque, accusantium qui cum.</p>
        </div>
        <div className="">
          <img
            className='rounded-lg shadow-md h-full w-full mx-0 justify-center block'
            src='https://cdn.pixabay.com/photo/2018/02/27/21/24/thread-3186657_960_720.jpg'
            alt='bonds-bd-aboutus' />
        </div>
      </div>
    </div>
  )
}

export default AboutUs