import './css/App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React, { useState, useEffect,  useContext } from 'react';
import { AppContext } from './AppContext';
import { HomePage } from './components/HomePage'; 
import { ParkResults } from './components/ParkResults';
import { Resources } from './components/Resources';

const App = () => {
  const [allParks, setAllParks ] = useState([])
  const [ parkDetails, setparkDetails ] = useState([]);

  const getParkData = async () => {
    try {
       const res = await fetch('https://developer.nps.gov/api/v1/parks?limit=500&api_key=9xMD2mRaCUV6aEHYNCvehL3PQuHfG3GNTaEhsgJx')
       const parkData = await res.json();
       setAllParks(parkData.data)
       } catch (err) {
          console.log(err);
       }
    }

  useEffect(() => {
      getParkData()
 },[])

  // useEffect( () => {
  //   fetch('https://developer.nps.gov/api/v1/parks?limit=500&api_key=9xMD2mRaCUV6aEHYNCvehL3PQuHfG3GNTaEhsgJx')
  //   .then(res => res.json())
  //   .then(data => {setAllParks(data.data)});
  // }, []);

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
            <Route path='/' element={<HomePage />} />
            <Route path='/park/:name' element={< ParkResults />} />
            <Route path='/Resources' element={<Resources />} />
          </Routes>
          </AppContext.Provider >
        </Router>
    </>
  )
}
  

export default App;
