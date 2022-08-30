import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "../AppContext";
import "../css/Random.css"
import 'bootstrap/dist/css/bootstrap.min.css';



export const Random = async () => {
  const { allParks, setparkDetails } = useContext(AppContext);
  let random = allParks[Math.floor(Math.random() * allParks.length +1)];
  await setparkDetails(random);
    return (
      //totalParkArray[random - 1];   
      <body id='randomBody'>
        
        <header id="resourceHeader">
          <div id="aboutHeader">  </div>
        </header> 
        
        <Link key={random.id} to={`/park/${random.fullName}`}>                      
                      <div onClick={() => setparkDetails(random)} >
                        <button>Click Here to Start an Adventure</button>
                      </div>                    
            </Link>
        
      </body>

        
        
        
    )
}

/*
function generateRandomNumber(totalNumbers, totalNumbersArray) {    
  const randomNumberIndex = Math.floor(Math.random() * totalNumbers + 1);    
  return totalNumbersArray[randomNumberIndex - 1];}
*/