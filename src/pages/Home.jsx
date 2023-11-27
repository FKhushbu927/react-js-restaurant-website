import React from 'react'
import Banner from './Banner'
import Category from './Category'
import Banner2 from './Banner2'
import PopularMenu from './PopularMenu'
import Recommended from './Recommended'
import Featured from './Featured'

const Home = () => {

  return (
     <div className='w-5/6 mx-auto text-center my-10'>
        <Banner />
         <Category />
         <Banner2 />
         <PopularMenu />
         <Recommended />
         <Featured />
     </div>
  ) 
}

export default Home