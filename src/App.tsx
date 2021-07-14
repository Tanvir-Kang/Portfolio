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
import { ROUTES } from "../src/components/Header/routes";

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path={ROUTES.about}>
          <AboutMe/>
        </Route>
        <Route path={ROUTES.experience}>
          <Experience/>
        </Route>
        <Route path={ROUTES.contactMe}>
          <Contact/>
        </Route>
        <Route path={ROUTES.education}>
          <Education/>
        </Route>
        <Route path={ROUTES.projects}>
          <Projects/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
