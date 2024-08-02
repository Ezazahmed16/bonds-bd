import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";

const TopHeader = () => {
  return (
    <div style={{ backgroundColor: '#F7941D' }} className='grid grid-cols-1 md:grid-cols-2 gap-3 p-2 px-5 items-center justify-center text-white'>

      <div className='flex gap-3'>
        <div className="flex gap-2 items-center justify-center">
          <IoCall className='text-sm md:text-xl' />
          <p className='text-sm'>+8801766887372</p>
        </div>
        <div className="flex gap-2 items-center justify-center">
          <IoMdMail className='text-sm md:text-xl' />
          <p className='text-sm'>toufiqtopu010@gmail.com</p>
        </div>
      </div>  

      <div className='flex justify-center md:justify-end items-center gap-5'>
        <FaFacebook className='text-xl' />
        <FaInstagramSquare className='text-xl' />
        <FaYoutube className='text-xl' />
      </div>

    </div>
  )
}

export default TopHeader