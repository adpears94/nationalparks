import { useContext, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "../AppContext";

export const ParkResults = () => {
  const { parkDetails } = useContext(AppContext);
  const [mainImage, setMainImage] = useState(parkDetails.images[0]);
  {
    console.log(parkDetails);
  }
  return (
    // Map api to display results here...
    // Apply style
    <>
      <div>
        <h1>{parkDetails.fullName}</h1>
        <div>{parkDetails.description}</div>
        <div className="imageAndGoogle">
          <div>
            <img height="300px" id="mainImage" src={mainImage.url} />
            {mainImage.caption}
          </div>
          {parkDetails.images.map((image) => (
            <img
              height="100px"
              onClick={() => setMainImage(image)}
              src={image.url}
              alt={image.altText}
            />
          ))}
        </div>
        
        <div className="parkDetails">          
          <ul>
            <li>
              {parkDetails.activities.map((activity) => {
                return <p>{activity.name}</p>;
              })}
            </li>
           </ul>
        <div>
       
          <p>Monday: {parkDetails.operatingHours[0].standardHours.monday}</p>
          <p>Tuesday: {parkDetails.operatingHours[0].standardHours.tuesday}</p>
          <p>Wednesday: {parkDetails.operatingHours[0].standardHours.wednesday}</p>
          <p>Thursday: {parkDetails.operatingHours[0].standardHours.thursday}</p>
          <p>Friday: {parkDetails.operatingHours[0].standardHours.friday}</p>
          <p>Saturday: {parkDetails.operatingHours[0].standardHours.saturday}</p>
          <p>Sunday: {parkDetails.operatingHours[0].standardHours.sunday}</p>
        </div>

        
        </div>

        {/* external links button  */}
      </div>
      <Link to="/">Home </Link> {"add syling, box, etc..."}
      <Link to="/Resources/">Additional Resources </Link>{" "}
      {"add syling, box, etc..."}
    </>
  );
};
