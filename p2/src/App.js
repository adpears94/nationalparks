import './css/App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React, { useState, useEffect,  useContext } from 'react';
import { AppContext } from './AppContext';
import { HomePage } from './components/HomePage'; 
import { ParkResults } from './components/ParkResults';
import { Resources } from './components/Resources';
import { About } from './components/About';
import { NavBar } from './components/NavBar';
import { Random } from './components/Random';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';



const App = () => {

  /*<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
      integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
      crossorigin="anonymous">
     
  */
    const [allParks, setAllParks ] = useState([])
    const [ parkDetails, setparkDetails ] = useState([]);

  const getParkData = async () => {
    try {
       const res = await fetch(`https://developer.nps.gov/api/v1/parks?limit=500&api_key=9xMD2mRaCUV6aEHYNCvehL3PQuHfG3GNTaEhsgJx`)
       const parkData = await res.json();
       setAllParks(parkData.data)
       } catch (err) {
          console.log(err);
       }
    }

  useEffect(() => {
      getParkData()
 },[])

  const value = { 
    parkDetails, 
    setparkDetails,
    allParks,
    setAllParks 
  };

  return (
    <>
        <Router>
          <AppContext.Provider value={value}> 
           <NavBar/>
          <Routes>          
            <Route path='/' element={<HomePage />} />
            <Route path='/park/:name' element={< ParkResults />} />
            <Route path='/Random' element={< ParkResults />} />
            <Route path='/Resources' element={<Resources />} />
            <Route path='/About' element={<About />} />
            
          </Routes>
          </AppContext.Provider >
        </Router>
    </>
  )
}
  

export default App;
