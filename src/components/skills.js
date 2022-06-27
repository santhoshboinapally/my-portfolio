import React from "react";
import Skilldata from "./data/skillData";
import  Flip  from "react-reveal/Flip";

export default function Skills() {
return (<div>
  <center>
  <h1 id="Skills" className="hedding">Skills</h1>
      <div className="container2">
           {Skilldata.map((info) => (
              <div className="col-icons" key={info.id}>
                <Flip>
                <img
                  className="skill-box"
                  src={info.imageUrl}
                  alt={info.text}
                />
                </Flip>
              </div>
            ))}
          </div>
  </center>
          </div>
  );
};
