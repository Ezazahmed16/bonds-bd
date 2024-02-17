import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
// import Image from 'next/image';

const TopHeader = () => {
  return (
    <div style={{ backgroundColor: '#F7941D' }}  className='grid grid-cols-3 gap-5 p-2 px-5 items-center justify-center text-white'>

      <div className='flex gap-3'>
        <FaFacebook className='text-xl' />
        <FaInstagramSquare className='text-xl' />
        <FaYoutube className='text-xl' />
      </div>

      <div className="mx-auto">
        {/* <Image
          src="/logo.jpg"
          alt="Bonds Bangladesh Logo"
          width={160}
          height={80}
        /> */}
      </div>

      <div className=''>
        <div className="flex gap-2 items-center justify-end mb-2">
          <IoCall className='text-xl' />
          <p className='text-sm'>+8801766887372</p>
        </div>
        <div className="flex gap-2 items-center justify-end">
          <IoMdMail className='text-xl' />
          <p className='text-sm'>toufiqtopu010@gmail.com</p>
        </div>
      </div>

    </div>
  )
}

export default TopHeader