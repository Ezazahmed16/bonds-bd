import React from 'react'

const Management = () => {
    return (
        <div style={{ backgroundColor: '#1D232A' }}>
            <div className="flex flex-col md:flex-row gap-5 md:gap-10 max-w-7xl mx-auto py-10 items-center justify-center px-5 md:px-0">
                <div className="flex-1">
                    <h1 className='mb-2 md:text-5xl text-3xl font-bold text-white'>Name XYZ</h1>
                    <p className='text-cyan-300 mb-1'>CEO</p>
                    <p className='text-cyan-100 text-sm'>ceo@bondsbd.com</p>
                    <div style={{ backgroundColor: '#E13D44' }} className="h-1 w-20 mb-5 mx-0 mt-5"></div>

                    <p className='text-justify text-white md:text-xl text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil fugit pariatur dicta nemo veritatis ullam excepturi obcaecati commodi numquam officiis, aperiam quasi deleniti similique modi reiciendis maiores nostrum nesciunt velit, animi laborum. Assumenda explicabo ipsa totam magni cum ratione aut!</p>
                </div>


                <div className="flex-1 mt-3 md:mt-0">
                    <img
                        className='rounded-lg shadow-md h-96 w-72 mx-auto justify-center block'
                        src='https://img.freepik.com/free-photo/people-taking-part-high-protocol-event_23-2150951341.jpg?t=st=1710379220~exp=1710382820~hmac=5c25e738eac6285243ea8fa04e923545b5dc7e012944f5139d0716fca1b76fb1&w=360'
                        alt='bonds-bd-aboutus' />
                </div>
            </div>
        </div>
    )
}

export default Management