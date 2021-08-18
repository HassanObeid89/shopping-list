import React from "react";
import logo from "../assets/Logo.png";

// If the header is just an img tag then there is no point on makin a component. Instead of making it more organized is more dissorganized.
function Header() {
  return <img src={logo} alt='' className='m-5 h-16 w-auto ' />;
}

export default Header;
