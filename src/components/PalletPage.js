import React, { useState } from "react";
import Colorcomponent from "./Colorcomponent";
import "../components/PalletPage.css";

const PalletPage = () => {
  const [toggleColors, settoggleColors] = useState(false);

  const togglePallet = () => {
    settoggleColors(!toggleColors);
  };

  return (
    <div>
      <div className="colorSection">
        <Colorcomponent className="pallete-col" toggle={toggleColors} />

        <Colorcomponent className="pallete-col" toggle={toggleColors} />

        <Colorcomponent className="pallete-col" toggle={toggleColors} />

        <Colorcomponent className="pallete-col" toggle={toggleColors} />

        <Colorcomponent className="pallete-col" toggle={toggleColors} />
      </div>

      <button className="generate-btn" onClick={togglePallet}>
        Generate
      </button>
    </div>
  );
};

export default PalletPage;
