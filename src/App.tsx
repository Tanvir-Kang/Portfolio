import React from 'react';
import './App.css';
import  Header  from "./components/Header/header";
import {
  Switch,
  Route,
} from "react-router-dom";
import { AboutMe } from "../src/components/AboutMe.tsx/aboutMe";
import { Experience} from "../src/components/Experience/experience";
import { Contact } from "../src/components/Contact/contact";
import { Education } from "../src/components/Education/education";
import { Projects } from "../src/components/Projects/projects";
import { Footer } from "../src/components/Footer/footer"

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/">
          <AboutMe/>
        </Route>
        <Route path="/experience">
          <Experience/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/education">
          <Education/>
        </Route>
        <Route path="/projects">
          <Projects/>
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
