import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React, { useState, useEffect,  useContext } from 'react';
import '../css/App.css';
import { AppContext } from '../AppContext';
import { ParkResults } from './ParkResults';

export const ParkDetails = () => {
    const { allParks, setAllParks, parkDetails, setParkDetails } = useContext(AppContext);
  
  return(
    
    <Container>
      <h1>National Parks</h1>
     <div>
        {allParks.map()}
      </div> 
    </Container>
  )
}
