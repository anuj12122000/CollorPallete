import React from 'react';
import deleti from "../asset/delete.png";
import copy from '../asset/copy.png';
import lock from '../asset/lock.png';
import './OptionButton.css';
import star from '../asset/star.png';
import cross from '../asset/cross.png';
import grid from '../asset/grid.png';


const OptionButton = (props) => {
  const{type,...attr}= props;
  return (
    // 
    // onClick={click}
    <div  {...attr} className='optionButton'>  
      
      {
        type=="copy" &&  <img src={copy}></img>
      }

      {
        type=="lock" &&  <img src={lock}></img>
      }

      {
         type=="star" &&  <img src={star}></img>
      }

      
      {
         type=="cross" &&  <img src={cross}></img>
      }

      
      {
         type=="grid" &&  <img src={grid}></img>
      }

      {
         type=="delete" &&  <img src={deleti}></img>
      }

   
    

    </div>
  )
}

export default OptionButton