import React from "react";
import fastest from "./images/fastest.jpg";
import weather from "./images/weather.jpg";
import todo from "./images/todo.jpg";
import git from "./images/git.jpg";
import meal from "./images/meal.jpg";
import Zoom from "react-reveal/Zoom";
function Proj(){
    return (
        <div className="projects-container">
            <h1 id="Projects">Projects</h1>
            <div className="projects">
                <Zoom>
                <div className="proj1">
                  <p><h4>fastest finger first</h4><img src={fastest} alt="fastest"/></p>
                </div>
                <div className="proj2">
                    <p><h4>Weather App</h4><img src={weather} alt="weather"/></p>
                </div>
                <div className="proj3">
                    <p><h4>Git User Search</h4><img src={git} alt="git"></img></p>
                </div>
                <div className="proj4">
                    <p><h4>Todo App</h4><img src={todo} alt="todo"/></p>
                </div>
                <div className="proj5">
                    <p><h4>Meal-sharing</h4><img src={meal} alt="meal"/></p>
                </div>
                </Zoom>
            </div>
        </div>

    );
}
export default Proj;