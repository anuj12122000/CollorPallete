import React, { useState, useEffect } from "react";
import "./FavoriteColor.css";
import { getFavorites } from "../useFavorites";
import OptionButton from "../OptionButton";
const FavoriteColor = (props) => {
 

 
  const { bgcolor,setToggle } = props;




  const deletefromSaved = () => {
    console.log("delete is hitted");
    let arr = getFavorites();

    arr = arr.filter((color) => {
      if (color != bgcolor) {
        return color;
      }
    });

    setToggle(prevToggle => !prevToggle);
    localStorage.setItem("BGCOLOR", JSON.stringify(arr));
   
  };

  return (
    <div className="favorite-color">
      <div style={{ background: bgcolor }} className="favorite-color-color">
        <span>{bgcolor}</span>
      </div>

      {/* <button onClick={deletefro-optionsm>
        Saved}>delete</button> */}
      <div className="favorite-color-option">
        <OptionButton onClick={deletefromSaved} type="delete" />
      </div>
    </div>
  );
};

export default FavoriteColor;
