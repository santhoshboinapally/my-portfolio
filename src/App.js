import './App.css';
import React from 'react';
import NavigationBar from './components/header';
import Home from './components/home';
import Skills from './components/skills';
import Projects from './components/projects';
import Education from './components/education';
import Experience from './components/experience';
import Footer from './components/footer';
function App() {
  return (
    <div className="App">
    <NavigationBar /> 
    <Home />
    <Skills />
    <Projects />
    <Education />
    <Experience/>
    <Footer />
    </div>
  );
}
export default App;