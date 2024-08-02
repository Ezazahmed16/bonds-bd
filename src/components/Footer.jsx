import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoCall } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <div>
      <footer className="py-6 text-gray-900">
        <div className="container px-6 mx-auto space-y-6 divide-y md:space-y-12 ">
          <div className="grid grid-cols-12 gap-5 justify-center items-start">

            <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
              <Link href="/" className="flex justify-center space-x-3 md:justify-start">
                <div className="flex items-center justify-center">
                  <Image
                    src="/logo-removebg.png"
                    alt="Bonds Bangladesh Logo"
                    width={160}
                    height={80}
                  />
                </div>
              </Link>
              <p className='text-cyan-950 text-center md:text-start md:w-2/3'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, nulla
              </p>
              <div className="">
                <div className="flex gap-2 justify-center md:justify-start items-center">
                  <MdEmail className='text-2xl' />
                  <p className='text-cyan-950 text-center md:text-start cursor-pointer link-success'>info@bondsbd.com</p>
                </div>
                <div className="flex gap-2 justify-center md:justify-start items-center mt-1">
                  <IoCall className='text-2xl' />
                  <p className='text-cyan-950 text-center md:text-start cursor-pointer link-success'>+882345678</p>
                </div>
              </div>
            </div>

            <div className="col-span-full text-center md:text-left md:col-span-3">
              <p className="pb-1 text-lg font-bold">Pages:</p>
              <ul>
                <li>
                  <Link href="/home" className="">Home</Link>
                </li>
                <li>
                  <Link href="/about" className="">About Us</Link>
                </li>
                <li>
                  <Link href="/products" className="">Collections</Link>
                </li>
                <li>
                  <Link href="/gallery" className="">Gallery</Link>
                </li>
                <li>
                  <Link href="/contact" className="">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="pb-6 col-span-full md:pb-0 md:col-span-3">
              <p className="pb-2 text-lg font-bold text-center md:text-start">Website Developed By:</p>
              <div className="flex justify-center space-x-3 md:justify-start">
                <Image
                  src="/cyberdevBlack.png"
                  alt="CyberDev - Web Development Agency"
                  width={160}
                  height={80}
                />
              </div>
              <Link href='https://www.cyberdevbd.com/'>
                <p className='text-cyan-950 text-center md:text-start mt-1 cursor-pointer link-success'>
                  https://www.cyberdevbd.com/
                </p>
              </Link>
            </div>

          </div>

          <div className="grid justify-center pt-6 lg:justify-between">

            <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
              <span>©2024 All rights reserved</span>
              <Link href="/">
                <span>Privacy policy</span>
              </Link>
              <Link href="/">
                <span>Terms of service</span>
              </Link>
            </div>

            <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">

              <FaFacebook className='text-3xl' />
              <FaInstagramSquare className='text-3xl' />
              <FaYoutube className='text-3xl' />

            </div>
          </div>

        </div>
      </footer>
    </div>
  )
}

export default Footer