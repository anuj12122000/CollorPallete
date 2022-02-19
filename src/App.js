import "./App.css";
import React, { useState } from "react";

import FavoritesSaved from "./components/FavoritesSaved/FavoritesSaved";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PalletPage from "./components/PalletPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<PalletPage />} />
            <Route path="/favorite" element={<FavoritesSaved />} />
            {/* <Route path="/" element={<Favorites />} /> */}

            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;

// feature--> copied to clipboard

//umique url

//store to favorites  local storage (implemented)
//view and
// delete save favorites

// on front div button ->>
//   lock  (implemented)
// click  // copied to clickboard (implemented)

//save to favorites local storage
