import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";

const Teams = () => {
  return (
    <div className='max-w-7xl mx-auto block'>
      <div className="py-6">
        <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">

          <h1 className="mb-5 text-3xl md:text-5xl font-bold text-gray-900 text-center">Meet Our Expertise Team</h1>

          <div style={{ backgroundColor: '#E13D44' }} className="h-1 w-20 mb-5 mx-auto mt-5"></div>

          <div className="flex flex-row flex-wrap-reverse justify-center mt-8">

            <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-100 text-gray-900">
              <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?0" />
              <div className="flex-1 my-4">
                <p className="text-xl font-semibold leadi">Leroy Jenkins</p>
                <p>CEO</p>
              </div>
              <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                <FaFacebookF className='h-6 w-6' />
                <MdEmail className='h-6 w-6' />
                <FaInstagramSquare className='h-6 w-6' />
              </div>
            </div>

            <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-100 text-gray-900">
              <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?1" />
              <div className="flex-1 my-4">
                <p className="text-xl font-semibold leadi">Leroy Jenkins</p>
                <p>Visual Designer</p>
              </div>
              <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                <FaFacebookF className='h-6 w-6' />
                <MdEmail className='h-6 w-6' />
                <FaInstagramSquare className='h-6 w-6' />
              </div>
            </div>

            <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-100 text-gray-900">
              <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?2" />
              <div className="flex-1 my-4">
                <p className="text-xl font-semibold leadi">Leroy Jenkins</p>
                <p>Visual Designer</p>
              </div>
              <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                <FaFacebookF className='h-6 w-6' />
                <MdEmail className='h-6 w-6' />
                <FaInstagramSquare className='h-6 w-6' />
              </div>
            </div>

            <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-100 text-gray-900">
              <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?3" />
              <div className="flex-1 my-4">
                <p className="text-xl font-semibold leadi">Leroy Jenkins</p>
                <p>Chairman</p>
              </div>
              <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                <FaFacebookF className='h-6 w-6' />
                <MdEmail className='h-6 w-6' />
                <FaInstagramSquare className='h-6 w-6' />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Teams