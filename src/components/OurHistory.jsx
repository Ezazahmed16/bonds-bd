'use client'
import { motion } from "framer-motion";

const OurHistory = () => {
    return (
        <section>
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
                <div className="md:px-20 px-5">
                    <div className="">
                        <h1 className='mb-5 md:text-5xl text-3xl font-bold text-gray-900'>Our History</h1>
                        <div style={{ backgroundColor: '#E13D44' }} className="h-1 w-20 mb-5 mx-0 mt-5"></div>
                        <p className='text-justify text-gray-950 md:text-xl text-sm'>
                            Since its inception in 2015, Bonds Bangladesh has been a trailblazer in the yarn manufacturing industry. Founded with a vision of blending craftsmanship and innovation, our journey has been marked by a steadfast commitment to excellence and sustainability. <br />

                            In the early years, we established ourselves as a reliable player, focusing on quality and precision in every aspect of our manufacturing process. As technology evolved, so did we, consistently investing in cutting-edge solutions to stay ahead of industry trends. <br />

                            Our commitment to sustainability became a cornerstone of our identity. From eco-friendly practices to community engagement, Bonds Bangladesh became synonymous with responsible business. <br />

                            Over the years, our proven track record has solidified our position as a leader in the industry. Today, we continue to shape the future of textiles with a versatile product range, setting the standard for quality, innovation, and social responsibility. <br />

                            Bonds Bangladesh remains dedicated to weaving a legacy of excellence, sustainability, and customer satisfaction into the fabric of the textile industry. <br />

                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default OurHistory