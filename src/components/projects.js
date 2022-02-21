import React from "react";
import projectList from "./data/projectData";
import  Zoom  from "react-reveal/Zoom";
export default function Projects () {
        return(
        <div>
            <h1 id="Projects" className="hedding">Projects</h1>   
            <div className="projects">
          {projectList.map((info) => (    
                  <Zoom>          
                  <div className="cards">                      
                     <p className="proj-title">{info.title}</p>
                     <p><img src={info.image} alt={info.title}/></p>
                     <p><a href={info.codeurl}>CodeUrl</a></p>
                     <p><a href={info.appurl}>AppUrl </a></p>
                  </div>
                  </Zoom>
            ))}</div>
            </div>
    );
}