import React, { useState } from "react";
import "../Style/Navbar.css";
import { GiFlashGrenade, GiHamburgerMenu } from "react-icons/gi";
import History from "./History";

const Navbar = () => {
  const [auth, setAuth] = useState(false);
  return (
    <div id="container">
      <div className="hamburger">
        <div onClick={() => setAuth(!auth)}>
          <GiHamburgerMenu />
        </div>
        <span>Standard</span>
      </div>
      <div style={{display:auth?"block":"none"}}>
        <History />
      </div>
    </div>
  );
};

export default Navbar;
