import './css/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React, { useState, useEffect,  useContext } from 'react';
import { AppContext } from './AppContext';
import { ParkDetails } from './components/ParkDetails';
import { ParkResults } from './components/ParkResults';


const App = () => {
  const [allParks, setAllParks ] = useState([])
  const [ parkDetails, setparkDetails ] = useState([]);

//GGEZ
//
  // useEffect(() => {
  //   let url = `http://localhost:3001/findMovies?search=${moviesSearch}`
  //   fetch(url)
  //   .then(res => res.json())
  //   .then(data => setMovies(data))
  // }, [moviesSearch])


  useEffect( () => {
    fetch('https://developer.nps.gov/api/v1/parks?limit=500&api_key=9xMD2mRaCUV6aEHYNCvehL3PQuHfG3GNTaEhsgJx')
    //fetch('https://1a675692-03cd-4f75-aee2-473321d089b7.mock.pstmn.io')
    .then(res => res.json())
    .then(data => {setAllParks(data)});
  }, []);

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
          <Routes>
            <Route path='/' element={<ParkDetails />} ></Route>
            <Route path='/park/name: name' element={< ParkResults />} ></Route>
          </Routes>
          </AppContext.Provider >
        </Router>
    </>
  )
}
  

export default App;
