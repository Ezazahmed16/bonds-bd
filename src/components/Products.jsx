import React from 'react'

const Products = () => {
  return (
    <div style={{ backgroundColor: '#1D232A' }} className='max-w-7xl mx-auto justify-center items-center block py-10'>
      <div className="mb-10">
        <p className='mb-5 text-3xl md:text-5xl font-bold text-white text-center'>Featured Collections</p>
        <div style={{ backgroundColor: '#E13D44' }} className="h-1 w-20 mb-5 mx-auto mt-5"></div>
        <p className='w-3/4 mx-auto text-white md:text-xl text-sm text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic placeat amet laudantium veritatis minima, aut ab optio alias ratione neque corrupti eos dolore repudiandae voluptatem adipisci aperiam quod nihil cupiditate!</p>
      </div>

      {/* Cards */}
      <div className="text-white grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">

        <div style={{ border: '1px solid #F7941D' }} className="card shadow-xl bg-base-100 hover:bg-base-200 mx-3">
          <figure className="px-10 pt-10">
            <img src="https://img.freepik.com/premium-photo/yarn-clothing_1127-20113.jpg?w=740" alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-xl">Polished Cotton Cord
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
        <div style={{ border: '1px solid #F7941D' }} className="card shadow-xl bg-base-100 hover:bg-base-200 mx-3">
          <figure className="px-10 pt-10">
            <img src="https://img.freepik.com/premium-photo/yarn-clothing_1127-20113.jpg?w=740" alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Polished Cotton Cord
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
        <div style={{ border: '1px solid #F7941D' }} className="card shadow-xl bg-base-100 hover:bg-base-200 mx-3">
          <figure className="px-10 pt-10">
            <img src="https://img.freepik.com/premium-photo/yarn-clothing_1127-20113.jpg?w=740" alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Polished Cotton Cord
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
        <div style={{ border: '1px solid #F7941D' }} className="card shadow-xl bg-base-100 hover:bg-base-200 mx-3">
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