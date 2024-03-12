'use client'
import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto justify-center items-center block my-10">
                <h1 className='mb-5 text-5xl font-bold text-white text-center'>Get In Touch</h1>
                <div className="hero max-w-7xl mx-auto">
                    <div className="hero-content grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="text-center lg:text-left w-full">
                            <img className='h-96 w-full rounded-lg' src='https://img.freepik.com/free-vector/flat-customer-support-illustration_23-2148899114.jpg?w=740&t=st=1708355542~exp=1708356142~hmac=a046c0277df0595e044e66417aeff2f1034ac2408b76ccf43c410aa98f40fd81' alt='Contact Us - Bonds BD' />
                        </div>
                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Message</span>
                                    </label>
                                    <textarea className="textarea textarea-bordered h-24" placeholder="Write your message ..." required></textarea>

                                </div>
                                <div className="form-control mt-6">
                                    <button style={{ backgroundColor: '#E13D44' }} className="btn text-gray-100 font-bold">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact