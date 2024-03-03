import React from 'react'
import { FaEye } from "react-icons/fa";

const Products = () => {
  return (
    <div style={{ backgroundColor: '#1D232A' }} className='max-w-7xl mx-auto justify-center items-center block my-10'>
      <div className="">
        <p className='text-5xl font-bold text-center text-white mb-5'>Featured Collections</p>
      </div>
      <div className="text-white grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">

        <div style={{ border: '1px solid #F7941D' }} className="card shadow-xl bg-base-300 hover:bg-base-200">
          <figure className="px-10 pt-10">
            <img src="https://img.freepik.com/premium-photo/yarn-clothing_1127-20113.jpg?w=740" alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-xl">Polished Cotton Cord
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
        <div  style={{ border: '1px solid #F7941D' }} className="card shadow-xl bg-base-300 hover:bg-base-200">
          <figure className="px-10 pt-10">
            <img src="https://img.freepik.com/premium-photo/yarn-clothing_1127-20113.jpg?w=740" alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Polished Cotton Cord
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
        <div  style={{ border: '1px solid #F7941D' }} className="card shadow-xl bg-base-300 hover:bg-base-200">
          <figure className="px-10 pt-10">
            <img src="https://img.freepik.com/premium-photo/yarn-clothing_1127-20113.jpg?w=740" alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Polished Cotton Cord
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
        <div  style={{ border: '1px solid #F7941D' }} className="card shadow-xl bg-base-300 hover:bg-base-200">
          <figure className="px-10 pt-10">
            <img src="https://img.freepik.com/premium-photo/yarn-clothing_1127-20113.jpg?w=740" alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Polished Cotton Cord
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Products