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

export const HomePage = () => {
  const { allParks, setAllParks,  parkDetails, setparkDetails  } = useContext(AppContext);
  const [filteredData, setFilteredData] = useState([]);


  const handlefilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = allParks.filter((value) => {
      return value.fullName.toLowerCase().startsWith(searchWord.toLowerCase());
    });
    setFilteredData(newFilter);
  };
  return (
    <div>
      {/* {console.log(allParks)} */}
      <nav className="sidebar">

      </nav>
      <div className="content">
        <h1 id="h1">National Parks</h1>
        <div className="wrapper">
          <div className="searchBar">
            <input
              className = "searchInput"
              type="text"
              placeholder="Search for a National Park!"
              onChange={handlefilter}
            />
            <div className = "autoBoxRollOut">
              {filteredData.map((data) => {
                return (
                  <li className="dataResult">
                    <Link key={data.id} to={`/park/${data.fullName}`}>
                      <div onClick={() => setparkDetails(
                        data
                      )}>
                        {data.fullName}
                      </div>
                    </Link>
                  </li>
                );
              })}
            </div>
          </div>
        </div> 
      </div>
      <Link to="/Resources">Additional Resources </Link> {'add syling, box, etc...'}
    </div>    
  );
};
