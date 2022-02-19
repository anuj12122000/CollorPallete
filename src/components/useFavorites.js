const getFavorites = () => {
  const data = localStorage.getItem("BGCOLOR");

  if (data == null) {
    return [];
  }
  const colors = JSON.parse(data);

  return colors;
};

const setFavorites = (colorname) => {
 
    const prevColors =  getFavorites();

    let doesExist = prevColors.includes(colorname);
   
    if (doesExist) {
      alert("already in favorites");
      return ;
    }

    const newColors = [...prevColors, colorname];
    let arr = JSON.stringify(newColors);

    localStorage.setItem("BGCOLOR", arr);
  
};

export { setFavorites, getFavorites };
