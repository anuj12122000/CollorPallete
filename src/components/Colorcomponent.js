import React, { useEffect, useState } from 'react';
import './Colorcomponent.css';
import OptionButton from './OptionButton';
import {setFavorites} from '../components/useFavorites';

const Colorcomponent = (props) => {
    function generateRandomColor() {
        let maxVal = 0xFFFFFF; // 16777215
        let randomNumber = Math.random() * maxVal;
        randomNumber = Math.floor(randomNumber);
        randomNumber = randomNumber.toString(16);
        let randColor = randomNumber.padStart(6, 0);
        return `#${randColor.toUpperCase()}`;
      }


      const setColorlock=()=>{
        setLock(!lock);
      }


      const copyClick=()=>{
        navigator.clipboard.writeText(bgcolor);
        alert("Copied the text: " + bgcolor);
      }

      const[bgcolor,setbgcolor]=useState(generateRandomColor());
      const[lock,setLock]=useState(false);

     
      const storeFavorite=()=>{
          setFavorites(bgcolor);
      }

  

useEffect(()=>{

    if(lock==false){
    setbgcolor(generateRandomColor());
    }

},[props.toggle]);




  return (

    
<div className={`colorComponent ${props.className}`}>

    <div className='innercomponent'  style={{ backgroundColor:bgcolor}}>

        <span>{bgcolor}</span>

   <div className='color-option'>
    <OptionButton onClick={setColorlock} type="lock" />
    <OptionButton onClick={copyClick} type="copy" />
    <OptionButton onClick={storeFavorite} type="star" />
    <OptionButton type="grid" />
    <OptionButton type="cross" />
    </div>
       
     

    </div>

    </div>
  )
}

export default Colorcomponent;