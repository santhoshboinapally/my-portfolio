import React from "react";
import logo from "./images/navlogo1.png";
function NavigationBar() {
  return (
    <div>
   <nav>
       <center>
       <div className="nav-links">
           <a href="/"><img src={logo} alt="logo"/></a>
           <a href="#About">About</a>
           <a href="#Skills">Skills</a>
           <a href="#Projects">Projects</a>
           <a href="#Education">Education</a>
           <a href="#Contactus">Contact</a>
       </div>
       </center>
   </nav>
</div>
  );
}
export default NavigationBar;