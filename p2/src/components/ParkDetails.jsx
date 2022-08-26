import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'
import React, { useState, useEffect,  useContext } from 'react';
import '../css/App.css';
import { AppContext } from '../AppContext';

export const ParkDetails = () => {
  const {allParks, setAllParks} = useContext(AppContext);
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

  return(
    <div>
      <h1>National Parks</h1>
      <input
          id='search-bar'
          type='search'
          placeholder='Search by Parks or activies here!'
      />
      
      {/* navigate('/', { replace: false }); */}
      {console.log(allParks)}
    </div>
  )
}
