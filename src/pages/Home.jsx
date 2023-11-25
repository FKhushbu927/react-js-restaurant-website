import React from 'react'
import Banner from './Banner'
import Category from './Category'
import Banner2 from './Banner2'
import PopularMenu from './PopularMenu'

const Home = () => {

  return (
     <div className='w-5/6 mx-auto text-center my-10'>
        <Banner />
         <Category />
         <Banner2 />
         <PopularMenu />
     </div>
  ) 
}

export default Home