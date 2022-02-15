import React from "react";
import {
    FaFacebookF,
    FaGithubAlt,
    FaLinkedinIn,
  } from "react-icons/fa";
function Contact () {
    return (
        <div className="contact">
        <h1 id="Contact">Contact</h1>  
        <div className="contact-info">
        <div className="contacts">
            <p>Phone : +45 53356789</p>
            <p>Email : boinapally.santhosh@gmail.com</p>
            <p>Address : Værebrovej 4,1,3<br/>2880 Bagsværd</p>
        </div>   
        <div className="social-media">
            <h2>Links</h2>
            <a href="https://github.com/santhoshboinapally" target="_blank" rel="noopener noreferrer">
                <FaGithubAlt  />
            </a>
            <a href="https://www.linkedin.com/in/santhosh-boinapally" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn  />
            </a>
            <a href="https://www.facebook.com/santhoshboinapally" target="_blank" rel="noopener noreferrer">  
                <FaFacebookF />
            </a>
            </div>  
            </div>
        </div>
    );
}
export default Contact;