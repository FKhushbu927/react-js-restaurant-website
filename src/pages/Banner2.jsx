import React from 'react'
import bannerImg from '../../src/assets/banner-4.jpg'

const Banner2 = () => {
  return (
    <div className='w-5/6 mx-auto text-center border my-20 relative'>
        <img className='w-full' src={bannerImg} alt="" />
        <div className="bg-transparent  text-white border md:absolute top-5 bottom-5 md:p-8 md:m-16">
            <h2 className='font-extrabold text-3xl uppercase mb-5'>MAK RESTAURENT</h2>
            <p className='font font-medium text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione illo reprehenderit velit at harum quas obcaecati temporibus sit porro, adipisci sapiente odio nulla debitis, rerum numquam officiis ab aperiam voluptates!</p>
        </div>
    </div>
  )
}

export default Banner2