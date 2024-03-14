import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className="">

        <div style={{ backgroundColor: '#1D232A' }} className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div style={{ backgroundColor: '#E13D44' }} tabIndex={0} role="button" className="btn lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>

              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link href='/' >Home</Link></li>
                <li><Link href='/about' >About Us</Link></li>
                <li><Link href='/products' >Collections</Link></li>
                <li><Link href='/gallery' >Gallery</Link></li>
                <li><Link href='/contact' >Contact</Link></li>
              </ul>

            </div>

            <div className="">
              <Image
              className='ml-4'
                src="/logo-removebg.png"
                alt="Bonds Bangladesh Logo"
                width={180}
                height={80}
              />
            </div>
            
          </div>

          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-white font-bold">
              <li><Link href='/' >Home</Link></li>
              <li><Link href='/about' >About Us</Link></li>
              <li><Link href='/products' >Collections</Link></li>
              <li><Link href='/gallery' >Gallery</Link></li>
              <li><Link href='/contact' >Contact</Link></li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Navbar