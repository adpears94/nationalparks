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
import styled from "styled-components";
import { ParkResults } from "./ParkResults";
import { NavBar } from "./NavBar";
import "../css/NavBar.css";

export const HomePage = () => {
  const { allParks, setAllParks, parkDetails, setparkDetails } =
    useContext(AppContext);
  const [filteredData, setFilteredData] = useState([]);
  const { randomPark, setRandomPark } = useState([]);



  //let random = allParks[Math.floor(Math.random() * allParks.length)]
  
  // const [fullName, setFullName] = ("");

  //    const Random = async () => {
  //     let random = allParks[Math.floor(Math.random() * allParks.length +1)];
  //     setparkDetails(random);

  // }

  const handlefilter = (event) => {
    const searchWord = event.target.value;
    console.log(searchWord)
    if (searchWord.length !== 0) {
    const newFilter = allParks.filter((value) => {
      return value.fullName.toLowerCase().startsWith(searchWord.toLowerCase());
    });
    setFilteredData(newFilter);
  }
  else{
    return setFilteredData([])
  }
  };
  if (allParks.length === 0) {
    return (
      <div className="lds-ripple">
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="content">
          <h1 id="h1">Start your adventure...</h1>
          <div className="wrapper">
            <div className="searchBar">
              <input
                className="searchInput"
                type="text"
                placeholder="Search for a National Park Near You"
                onChange={handlefilter}
              />

              <div className="autoBoxRollOut">
                {filteredData.map((data) => {
                  return (
                    <li key={data.id} className="dataResult">
                      <Link
                        to={`/park/${data.fullName}`}
                        className="dataResult"
                      >
                        <p onClick={() => setparkDetails(data)}>
                          {data.fullName}
                        </p>
                      </Link>
                    </li>
                  );
                })}
              </div>
              <Link to={`/random`}
                className="btn btn-one dataResult happy">
                <div  className="box-1">
                  <p className="box-1">
                   
                    {" "}
                    Or Click Here to Start a Random Adventure{" "}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
// setparkDetails(allParks[Math.floor(Math.random() * allParks.length)])