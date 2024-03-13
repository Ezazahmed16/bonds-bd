import React from 'react'

const Collections = () => {
    return (
        <div style={{ backgroundColor: '#1D232A' }}>
            <div className="">
                <div className="my-10">
                    <h1 className='text-gray-100 text-3xl md:text-5xl text-center font-bold md:mb-10 uppercase'>Our Collections</h1>
                    <div style={{ backgroundColor: '#E13D44' }} className="h-1 w-20 mb-5 mx-auto mt-5"></div>
                </div>


                {/* All Collections */}
                <div className="max-w-7xl m-auto md:mb-10 grid grid-cols-1 md:grid-cols-3 gap-5">

                    <div style={{ border: '1px solid #F7941D' }} className="card shadow-xl bg-base-100 hover:bg-base-200 mx-3 ">
                        <figure className="px-10 pt-10">
                            <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Collection 01</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, suscipit!</p>
                        </div>
                    </div>

                    <div style={{ border: '1px solid #F7941D' }} className="card shadow-xl bg-base-100 hover:bg-base-200 mx-3 ">
                        <figure className="px-10 pt-10">
                            <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Collection 01</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, suscipit!</p>
                        </div>
                    </div>

                    <div style={{ border: '1px solid #F7941D' }} className="card shadow-xl bg-base-300 hover:bg-base-200 mx-3">
                        <figure className="px-10 pt-10">
                            <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Collection 01</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, suscipit!</p>
                        </div>
                    </div>

                    <div style={{ border: '1px solid #F7941D' }} className="card shadow-xl bg-base-300 hover:bg-base-200 mx-3">
                        <figure className="px-10 pt-10">
                            <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Collection 01</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, suscipit!</p>
                        </div>
                    </div>

                    <div style={{ border: '1px solid #F7941D' }} className="card shadow-xl bg-base-100 hover:bg-base-200 mx-3 ">
                        <figure className="px-10 pt-10">
                            <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Collection 01</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, suscipit!</p>
                        </div>
                    </div>

                    <div style={{ border: '1px solid #F7941D' }} className="card shadow-xl bg-base-100 hover:bg-base-200 mx-3">
                        <figure className="px-10 pt-10">
                            <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Collection 01</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, suscipit!</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Collections