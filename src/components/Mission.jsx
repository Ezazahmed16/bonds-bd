'use client'
import { motion } from "framer-motion";

const Mission = () => {
    return (
        <div>
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
                    <h1 className='mb-5 text-3xl md:text-5xl font-bold text-gray-900'>Mission</h1>
                    <div style={{ backgroundColor: '#E13D44' }} className="h-1 w-20 mb-5"></div>
                    <p className='text-justify text-gray-950 md:text-xl text-sm'>Driven by a passion for perfection, our mission is to produce high-quality yarns that cater to the diverse needs of our customers. Through continuous research and development, we aim to stay at the forefront of technological advancements while maintaining a strong commitment to sustainability.</p>
                </div>
            </motion.div>
        </div>
    )
}

export default Mission