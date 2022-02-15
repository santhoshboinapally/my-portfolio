import React  from "react";
import Fade  from "react-reveal/Fade";

function Education () {
return( 
<div className="container4">
<h1 id="Education">Education</h1>
 <div className="edu">
    <Fade>
     <div className="hyf">
         <p className="edu-title">Web Development</p>
         <p>Hack Your Future</p>
         <p>Copenhagen,Denmark</p>
     </div>
     <div className="masters">
         <p className="edu-title">Master of Computer Application</p>
         <p>Kakatiya University</p>
         <p>Warangal, India</p>
     </div>
     <div className="bsc">
         <p className="edu-title">Bachelor in Computer Science</p>
         <p>Kakatiya University</p>
         <p>Warangal, India</p>
     </div>
        </Fade>
</div>
</div>
);
}
export default Education;