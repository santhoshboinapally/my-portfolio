import React from "react";
import './navigation.css';

function Navigation(){
    return (
        <div>
        <nav>
        <ul>
        <li><a href="#About">About</a></li>
        <li><a href="#Skills">Skills</a></li>
        <li><a href="#Projects">Projects</a></li>
        <li><a href="#Education">Education</a></li>
        <li class="active" style={{float:"right"}}><a href="#Contact">Contact</a></li>
      </ul>
        </nav>
        </div>
    );
}
export default Navigation;