import React  from "react";
import {
  FaFacebookF,
  FaGithubAlt,
  FaLinkedinIn,
  FaInstagram
} from "react-icons/fa";
const Footer = () => {
    return (      
  <div>
  <footer>
<ul>
<li className="footer-list">
<div className="footer-text">
<h4 id="Contact">CONTACT </h4> 
<div className="address">
<p>Phone : +4553356789</p>
<p>Email : boinapally.santhosh@gmail.com</p>
<p>Address : Værebrovej 4,1,3
           2880 Bagsværd</p>
</div>
</div></li>
<li className="footer-list">
<div className="footer-text">
  <h4>LINKS </h4>
  <div className="footer-icons">
  <a href="https://www.linkedin.com/in/santhosh-boinapally/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn  /></a>   
  <a href="https://github.com/santhoshboinapally" target="_blank" rel="noopener noreferrer"><FaGithubAlt /></a>
  <a href="https://www.facebook.com/santhosboinapally/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram  /></a>
  </div>
</div></li>
</ul></footer> 
</div>
 );
};
export default Footer;