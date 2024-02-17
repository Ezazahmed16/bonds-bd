import Link from 'next/link'
import React from 'react'

const Banner = () => {
  return (
    <div>
      <div className="">
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/multi-colored-textile-spools-arranged-wooden-table-generated-by-ai_188544-19697.jpg?w=826&t=st=1708182482~exp=1708183082~hmac=c7c2a19ad5787fb7865cb925cf70cbf4a84368ea7a8bf129a2c6676e9ede2f08 )' }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Bonds Bangladesh</h1>
              <p className="mb-5">
                Discover high-quality thread manufacturing at Bonds Bangladesh, the premier thread reckoning factory in Bangladesh. We offer top-notch thread products to meet your sewing needs.
              </p>

              <Link href='/contact'>
                <button style={{ backgroundColor: '#E13D44' }} className="btn text-white border-none">Contact Us</button>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner