import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'
import React, { useState, useEffect,  useContext } from 'react';
import '../css/App.css';
import { AppContext } from '../AppContext';
import '../css/ParkDetails.css'

export const ParkDetails = () => {
  const {allParks, setAllParks} = useContext(AppContext);
  const [filteredData, setFilteredData] = useState([{}]);
  const [ search, setSearch ] = useState('');
  let navigate = useNavigate();

  // const onKeyDown = (event) => {
  //   if (event.key === 'Enter') {
  //     setSearch(event.target.value);
  //     console.log(search);
  //   }
  // }

  // for(let park of search) {
  //   if (park.parkId.toString() === id) {
  //     setSearch(park)
  //   }
  // }
const handlefilter = (event) => {
  const searchWord = event.target.value
  const newFilter = allParks.filter((value) => {
    return value.fullName.toLowerCase().includes(searchWord.toLowerCase());
  });
  setFilteredData(newFilter);
}
  return(
    <>
    {console.log(allParks)}
    <div className='background'>
      <h1>National Parks</h1>
      <div>
        <div className="searchInputs">
          <input  type='text' 
            placeholder='Search for a National Park!' 
            onChange={handlefilter}
          />
          <div className="searchIcon">?</div>
        </div>
        {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.map((data) => {
            return (
              <a  className='dataIcon'  key= {data.id}> 
                <p>{data.fullName}</p> 
              </a>
            )
          })}
        </div>)}
      </div>
    </div>      
    </>
  )
}
