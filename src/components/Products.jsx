'use client'
import { CollectionData } from "@/utils/CollerctionData"
import { motion } from "framer-motion";

const Products = () => {
  return (
    <section className='max-w-7xl mx-auto justify-center items-center block py-10'>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="mb-10">
          <p className='mb-5 text-3xl md:text-5xl font-bold text-gray-900 text-center'>Featured Collections</p>
          <div style={{ backgroundColor: '#E13D44' }} className="h-1 w-20 mb-5 mx-auto mt-5"></div>
          <p className='w-3/4 mx-auto  md:text-xl text-sm text-center text-gray-950'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic placeat amet laudantium veritatis minima, aut ab optio alias ratione neque corrupti eos dolore repudiandae voluptatem adipisci aperiam quod nihil cupiditate!</p>
        </div>

        {/* Cards */}
        <div className=" grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">

          {CollectionData.slice(0, 4).map((data) => (
            <div
              key={data.id}
              style={{ border: '2px solid #F7941D' }}
              className="card shadow-xl bg-base-100 hover:bg-base-300 mx-3 rounded-2xl hover:cursor-pointer"
            >
              <figure className="p-2">
                <img
                  src={data.img}
                  alt={data.title}
                  className="rounded-xl h-52"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-xl text-gray-900">
                  {data.title}
                </h2>
                <p className="text-base text-gray-950">
                  {data.description}
                </p>
              </div>
            </div>
          ))}

        </div>
      </motion.div>
    </section>
  )
}

export default Products