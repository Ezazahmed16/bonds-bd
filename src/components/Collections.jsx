'use client'
import { motion } from "framer-motion";
import { CollectionData } from '@/utils/CollerctionData'

const Collections = () => {
    return (
        <section className="max-w-7xl mx-auto pt-32">
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
                <div className="">
                    <div className="">
                        <h1 className='text-gray-900 text-3xl md:text-5xl text-center font-bold md:mb-10 uppercase'>Our Collections</h1>
                        <div style={{ backgroundColor: '#E13D44' }} className="h-1 w-20 mb-5 mx-auto mt-5"></div>
                    </div>


                    {/* All Collections */}
                    <div className="max-w-7xl m-auto md:mb-10 grid grid-cols-1 md:grid-cols-3 gap-5">

                        {CollectionData.map((data) => (
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

                </div>
            </motion.div>
        </section>
    )
}

export default Collections