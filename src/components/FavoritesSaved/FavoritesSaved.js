import React, { useState } from 'react'
import FavoriteColor from './FavoriteColor'
import {getFavorites} from '../useFavorites';

import "./FavoriteSaved.css";

const FavoritesSaved = () => { 

const[toggle,setToggle]=useState(false);

    let a = getFavorites(); 
    console.log(a);
    
  return (
    <div className="favorite-page wrapper">
      <h3 className='favorite-page-title'>My Favorites</h3>
      <div className='favorite-page-colors'>

      {
        a.map((color,index) => {
          return <FavoriteColor bgcolor={color} key={index} setToggle={setToggle} />
        })
      }
        
      </div>
        
    </div>
  )
}

export default FavoritesSaved