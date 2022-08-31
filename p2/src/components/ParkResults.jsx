import { useContext, useState, useEffect } from "react";
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
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const ParkResults = () => {
  const data = window.localStorage.getItem("MY_APP_STATE");
  const { id } = useParams();
  const { parkDetails, mainImage, setMainImage } = useContext(AppContext);

  let navigate = useNavigate();
  let activityArr = [];
  /*if (!parkDetails) {
    return (<h1> Loading... </h1>);
  } else {
    */
  //  console.log('parkDetails in parkResults', parkDetails);
  //  console.log('mainImage in parkResults', mainImage);
  return mainImage === null ? (
    <> ...Loading... </>
  ) : (
    <>
      <h1>{parkDetails.fullName}</h1>
      <div className="images">
        <div className="description">{parkDetails.description}</div>
        <div className="imageandCap">
          <img className="mainImage" src={mainImage.url} />
          {mainImage.caption}
        </div>
        .
        <div className="smallImagesDiv">
          {parkDetails.images.map((image) => (
            <img
              key={image.altText}
              className="smallImage"
              onMouseEnter={() => setMainImage(image)}
              src={image.url}
              alt={image.altText}
            />
          ))}
        </div>
      </div>
      <div className="parkDetails">
        <strong>Activities:</strong>
        <ul className="act">
          <li key={parkDetails.activities.name} className="activities">
            {parkDetails.activities.map((activity) => {
              activityArr.push(activity.name);
              // return <div className="list" >{activity.name} </div>;
            })}
            <div className="list">{activityArr.join(", ")} </div>
          </li>
        </ul>
      </div>
      <div className="hours">
        {" "}
        <table>
          <thead>
            <tr>
              <th>Hours of Operation:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Monday:</td>
              <td>{parkDetails.operatingHours[0].standardHours.monday}</td>
            </tr>
            <tr>
              <td>Tuesday:</td>
              <td>{parkDetails.operatingHours[0].standardHours.tuesday}</td>
            </tr>
            <tr>
              <td>Wednesday:</td>
              <td>{parkDetails.operatingHours[0].standardHours.wednesday}</td>
            </tr>
            <tr>
              <td>Thursday:</td>
              <td>{parkDetails.operatingHours[0].standardHours.thursday}</td>
            </tr>
            <tr>
              <td>Friday:</td>
              <td>{parkDetails.operatingHours[0].standardHours.friday}</td>
            </tr>
            <tr>
              <td>Saturday:</td>
              <td>{parkDetails.operatingHours[0].standardHours.saturday}</td>
            </tr>
            <tr>
              <td>Sunday:</td>
              <td>{parkDetails.operatingHours[0].standardHours.sunday}</td>
            </tr>
          </tbody>
        </table>
        {/* <div className="day">
            Monday: {parkDetails.operatingHours[0].standardHours.monday}
          </div> */}
        {/* <div className="day">
            Tuesday: {parkDetails.operatingHours[0].standardHours.tuesday}
          </div>
          <div className="day">
            Wednesday: {parkDetails.operatingHours[0].standardHours.wednesday}
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
          </div> */}
      </div>
    </>
  );
};
