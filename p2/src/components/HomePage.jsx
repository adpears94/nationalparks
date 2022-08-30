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

export const HomePage = () => {
  const { allParks, setAllParks, parkDetails, setparkDetails } = useContext(AppContext);
  const [filteredData, setFilteredData] = useState([]); 
  const [fullName, setFullName] = ("");
  let random = allParks[Math.floor(Math.random() * allParks.length +1)];

  const handlefilter = (event) => {      
    const searchWord = event.target.value;
    
    if (searchWord !== "") {
      const newFilter = allParks.filter((value) => {
        return value.fullName
          .toLowerCase()
          .startsWith(searchWord.toLowerCase());
      });
      setFilteredData(newFilter);
    } else {
      setFilteredData(allParks);
    }
    setFullName("");
  };

  const resetInputField = () => {
    setparkDetails("");
  }

  return (
    <div>
       {/* {console.log(random)}  */}

      <div className="content">
        <h1 id="h1">National Parks</h1>
        <div className="wrapper">
          <div className="searchBar">
            <input
              className="searchInput"
              type="text"
              placeholder="Search for a National Park Near You"
              onKeyUp={handlefilter}                   
            />
           
            <div className="autoBoxRollOut">
              {filteredData.map((data) => {
                return (
                  <li className="dataResult">
                    <Link key={data.id} to={`/park/${data.fullName}`}>                      
                      <div onClick={() => setparkDetails(data)} >
                        {data.fullName}
                      </div>                    
                    </Link>
                    
                  </li>                  
                );
              })}
            </div>
            <Link to={`/random`}>
              <button className="randomButton" onClick={ setparkDetails(random)}> Click Here to Start a Random Adventure </button>
            </Link>
           
          </div>
        </div>
      </div>
    </div>
  );
};
