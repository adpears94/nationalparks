import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import "../css/HomePage.css";
import { AppContext } from "../AppContext";
import { ParkResults } from "./ParkResults";
import { NavBar } from "./NavBar";
import "../css/NavBar.css";
import "../css/About.css";

export const About = () => {
  return (

    <div id="page-body">
      <div className="App"> 
    </div>
 
      <h1 className="Header"> About Us </h1>
      
      <div className="aboutContent">
        <div className="para">
          <h1 className='internalHeader'> Our Mission </h1>
          <p className='internalpara'> Our mission is to provide a way to navigate the extensive National Park system. Our hope is that this will allow outdoor enthusiasts 
              the ability to explore the basic information of each park, highlighting activities offered. If this gets you into a Park, Mission Success!
          </p>
        </div>
        <div className="para">
          <h1 className='internalHeader'> About Us  </h1>
          <p className='internalpara'> Our team consists of four elite software developers with a love for the great outdoors. The real work is done by the thousands of Park employees, 
                                       volunteers, and members like you.
          </p>
        </div>
        <div className="para">
          <h1 className='internalHeader'> Contact Us </h1>
          <p className='internalpara'> 202-208-6843; National Park Service, 1849 C Street NW, Washington, DC 20240         -      
                <a href="https://www.nps.gov/aboutus/contactinformation.htm">
                   Click here for more contact information 
                </a> 
          </p>
        </div>
      </div>

    </div>
  );
};
