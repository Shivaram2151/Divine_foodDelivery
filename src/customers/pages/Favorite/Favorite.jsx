import React, { useEffect } from 'react'
import RestaurantCard from '../../components/RestarentCard/RestaurantCard'

import {useSelector } from 'react-redux'
import FavoriteRestaurantCard from './FavoriteRestaurantcard';

const Favorite = () => {
  const {auth}=useSelector(store=>store);
  useEffect(()=>{
    // dispatch()
  },[])
  return (
   <div>
    <h1 className='py-5 text-xl font-semibold text-center'>My Favorites</h1>
     <div className='flex flex-wrap justify-center'>
      {auth.favorites?.map((item)=><FavoriteRestaurantCard data={item}/>)}
    </div>
    
   </div>
  )
}

export default Favorite