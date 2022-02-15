import React from "react";
import Skilldata from "./data/skillData";
import  Flip  from "react-reveal/Flip";

export default function Skills() {
return (<div>
  <center>
  <h1 id="Skills">Skills</h1>
      <div className="container2">
           {Skilldata.map((info) => (
              <div className="col-icons">
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
