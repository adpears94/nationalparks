import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../AppContext";

export const ParkResults = ( ) => {
    const { showParks } = useContext(AppContext);
    return (
        // Map api to display results here...
        // Apply style
        <div>
        <h1>National Parks</h1>
       
      </div>
    )
}