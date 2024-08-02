'use client'
import { motion } from "framer-motion";

const WhyUs = () => {
    return (
        <section className="">
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
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-3 justify-center items-center h-screen md:px-20 px-5">
                        <div className="">
                            <video className='rounded-lg shadow-md h-full w-full mx-0 justify-center block' controls autoPlay >
                                <source src="https://media.istockphoto.com/id/2058634683/video/jeans.mp4?s=mp4-640x640-is&k=20&c=eW2wJmOoB-8oVR0NV70vT79daByBN3eI4kuF3EObomc=" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="">
                            <h1 className='mb-5 md:text-5xl text-3xl font-bold text-gray-900'>Why Choose Us</h1>
                            <div style={{ backgroundColor: '#E13D44' }} className="h-1 w-20 mb-5 mx-0 mt-5"></div>
                            <p className='text-justify text-gray-950 md:text-xl text-sm'>Bonds Bangladesh is your top choice for yarn, offering unmatched quality, innovative solutions, and a commitment to sustainability. With a customer-centric approach, proven industry track record since 2015, and active engagement in social responsibility, we provide a versatile product range suitable for every project. Choose Bonds Bangladesh and shape the future of the textile industry with confidence.</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default WhyUs;
