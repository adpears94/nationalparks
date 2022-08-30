import { useContext, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "../AppContext";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import "../css/ResultsPage.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



export const ParkResults = () => {
  const { id } = useParams();
  const { parkDetails } = useContext(AppContext);
  const [mainImage, setMainImage] = useState(parkDetails.images[0]);
  let activityArr = [];
  return (
    // Map api to display results here...
    // Apply style

    <>
      <h1>{parkDetails.fullName}</h1>
      <div className="images">
        <div className="description">{parkDetails.description}</div>

        <div className="imageandCap">
          <img className="mainImage" src={mainImage.url} />
          {mainImage.caption}
        </div>
        <div className="smallImagesDiv">
          {parkDetails.images.map((image) => (
            <img
            className="smallImage"
              onMouseEnter={() => setMainImage(image)}
              src={image.url}
              alt={image.altText}
            />
          ))}
        </div>
      </div>
      <div className="parkDetails">Activities:
        <ul className="act">
          <li className="activities">  
            {parkDetails.activities.map((activity) => {
             activityArr.push(activity.name)
              // return <div className="list" >{activity.name} </div>;
            })}
            <div className="list" >{activityArr.join(', ')} </div>
          </li>
        </ul>
      </div>
      <div className="hours"> <p>Hours of Operation:</p>
      
            <div className="day">
              Monday: {parkDetails.operatingHours[0].standardHours.monday}
            </div>
            <div className="day">
              Tuesday: {parkDetails.operatingHours[0].standardHours.tuesday}
            </div>
            <div className="day">
              Wednesday:{" "}
              {parkDetails.operatingHours[0].standardHours.wednesday}
            </div>
            <div className="day">
              Thursday: {parkDetails.operatingHours[0].standardHours.thursday}
            </div>
            <div className="day">
              Friday: {parkDetails.operatingHours[0].standardHours.friday}
            </div>
            <div className="day">
              Saturday: {parkDetails.operatingHours[0].standardHours.saturday}
            </div>
            <div className="day">
              Sunday: {parkDetails.operatingHours[0].standardHours.sunday}
            </div>
            
      </div>
    </>
  );
};
