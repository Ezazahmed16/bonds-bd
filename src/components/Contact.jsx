'use client'
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import ContactLottie from "../assets/Lottie/contactLottie.json";

const Contact = () => {
    return (
        <section>
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.6,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="relative flex flex-col gap-4 items-center justify-center px-4"
            >
                <div className="max-w-7xl mx-auto justify-center items-center block ">
                    <h1 className='mb-5 text-3xl md:text-5xl font-bold text-gray-900 text-center'>Get In Touch</h1>
                    <div style={{ backgroundColor: '#E13D44' }} className="h-1 w-20 mb-5 mx-auto mt-5"></div>

                    <div className="hero">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center">
                            <div className="">
                                <Lottie animationData={ContactLottie} loop={true} />
                            </div>
                            <div className="card shrink-0 w-full shadow-2xl bg-base-100">
                                <form className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" placeholder="Enter Your Name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" placeholder="Enter Your Email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Phone Number</span>
                                        </label>
                                        <input type="text" placeholder="Enter Your Phone Number" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Message</span>
                                        </label>
                                        <textarea className="textarea textarea-bordered h-24" placeholder="Write your message ..." required></textarea>

                                    </div>
                                    <div className="form-control mt-6">
                                        <button style={{ backgroundColor: '#E13D44' }} className="btn text-gray-100 font-bold rounded-full">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Contact