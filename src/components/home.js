import React from "react";
import image from "./images/mypic.png";
import {Slide}  from "react-reveal";
import './hi.css';

function Home() {
    return (
        <div  id="About">
          <div className="title"> 
           <center> <h1>Hi, I'm Santhosh👋</h1></center>
            </div>
            <div className="container">
          <div className="col-left">
          <Slide left>
          <p className="intro">
            I’m a Web developer looking for a position that
needs innovation, creation, dedication and
enables me to continue to my work. During
HackYourFuture bootcamp i gained strong
competence within problem solving and worked in different projects and gained hands-on 
experience in working with HTML, CSS,JavaScript,NodeJs,MySQL and ReactJs as well as a
great deal of experience in working in a team. I
am very social person and enjoy teamwork, but
can easily work independent when needed.</p>
            </Slide>
            </div>
            <Slide right>
               <div className="col-right">
                 <img className="mypic" alt="logo" src={image} />
                </div>
            </Slide>
            </div>
        </div>

    );
}
export default Home;