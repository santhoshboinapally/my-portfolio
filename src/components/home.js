import React from "react";
import image from "./images/mypic2.png";
import {Slide}  from "react-reveal";
function Home() {
    return (
        <div className="container" id="About">
        <div className="col-left">
          <Slide left>
          <p className="intro">
            <strong>Hi, I'm Santhosh.</strong><br/>
            I'm a frontend web developer looking for a position in IT industry.When i decided to restart my carrer as 
            developer,I want to upgraded myself,so started my journey with HackYourFuture 
            coding school, where i was working on different projects and gained hands-on 
            experience in working with HTML, CSS,JavaScript,NodeJs,MySQL and ReactJs.</p>
            </Slide>
            </div>
            <Slide right>
               <div className="col-right">
                 <img className="mypic" alt="logo" src={image} />
                </div>
            </Slide>
        </div>

    );
}
export default Home;