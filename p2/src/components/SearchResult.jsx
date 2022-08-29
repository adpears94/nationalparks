import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React, { useState, useEffect,  useContext } from 'react';
import '../css/App.css';
import { AppContext } from '../AppContext';
import { ParkResults } from './ParkResults';
//import Header from './components/Header.js';
//import { Container } from '.components/styles/Container.styled.js';
import '../css/ParkDetails.css'

export const ParkDetails = () => {
    const { allParks, setAllParks, parkDetails, setParkDetails } = useContext(AppContext);
  
  return( 
     <div>
        {allParks.map()}
      </div>     
  )
}
