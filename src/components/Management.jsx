'use client'
import { motion } from "framer-motion";

const Management = () => {
    return (
        <section className="min-h-screen flex justify-center items-center max-w-7xl mx-auto">
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
                <div className="flex flex-col md:flex-row gap-5 md:gap-10 max-w-7xl mx-auto py-10 items-center justify-center px-5 md:px-0">
                    <div className="flex-1">
                        <h1 className='mb-2 md:text-5xl text-3xl font-bold text-gray-900'>Name XYZ</h1>
                        <p className='text-cyan-900 mb-1'>CEO</p>
                        <p className='text-cyan-950 text-sm'>ceo@bondsbd.com</p>
                        <div style={{ backgroundColor: '#E13D44' }} className="h-1 w-20 mb-5 mx-0 mt-5"></div>

                        <p className='text-justify text-gray-950 md:text-xl text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil fugit pariatur dicta nemo veritatis ullam excepturi obcaecati commodi numquam officiis, aperiam quasi deleniti similique modi reiciendis maiores nostrum nesciunt velit, animi laborum. Assumenda explicabo ipsa totam magni cum 
                        tatis ullam excepturi obcaecati commodi numquam officiis, aperiam quasi deleniti similique modi reiciendis maiores nostrum nesciunt velit, animi laborum. Assumenda explicabo ipsa totam magni cum ratione aut!</p>
                    </div>


                    <div className="flex-1 mt-3 md:mt-0">
                        <img
                            className='rounded-3xl h-80 w-auto mx-auto'
                            src='https://img.freepik.com/free-photo/elegant-indian-macho-man-model-suit-pink-tie-posed-winter-day_627829-1596.jpg?t=st=1722560238~exp=1722563838~hmac=c6a6f55b9d222198b8897a324eb7758cf1d4ee7b4b9c418b21f9cdf055fcdabc&w=740'
                            alt='bonds-bd-aboutus' />
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Management