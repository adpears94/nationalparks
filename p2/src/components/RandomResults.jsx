import  { useContext, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  useNavigate,
  useParams,
} from "react-router-dom";
import { AppContext } from "../AppContext";
import "../css/ResultsPage.css";
import "../css/HomePage.css";

export const RandomResults = () => {
  const data = window.localStorage.getItem("MY_APP_STATE");
  const { id } = useParams();
  const { parkDetails, mainImage, setMainImage, setparkDetails, allParks } = useContext(AppContext);

    useEffect(() => {
        const random = allParks[Math.floor(Math.random() * allParks.length)];
        setparkDetails(random);
    }, []);




  let navigate = useNavigate();
  let activityArr = [];
  /*if (!parkDetails) {
    return (<h1> Loading... </h1>);
  } else {
    */
  //  console.log('parkDetails in parkResults', parkDetails);
  //  console.log('mainImage in parkResults', mainImage);

    return mainImage === null ? (
      <div className="lds-ripple">
          <div></div>
          <div></div>
          <div></div>
        </div>
    ) : (
      <>
        <h1 className="h1center">{parkDetails.fullName}</h1>
        <div className="images">
          <div className="description">{parkDetails.description}
            <div className='uframe'>
                <iframe width="500" height="400" frameborder="0" src={`https://www.bing.com/maps/embed?h=400&w=500&cp=${parkDetails.latitude}~${parkDetails.longitude}&lvl=11&typ=s&sty=h&src=SHELL&FORM=MBEDV8`} scrolling="no">
                  </iframe>
                  <a id="dirMapLink" target="_blank" href={`https://www.bing.com/maps/directions?cp=${parkDetails.latitude}~${parkDetails.longitude}&amp;sty=h&amp;lvl=11&amp;rtp=~${parkDetails.latitude}_${parkDetails.longitude}____&amp;FORM=MBEDLD`}>Get Directions</a>
                </div>
          </div>
          <div className="imageandCap">
            <img className="mainImage" src={mainImage.url} />
            {mainImage.caption}
          </div>
          
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
        
        <div className="hours">
          <strong>Activities:</strong>
          <ul>
            <li key={parkDetails.activities.name} className="activities">
              {parkDetails.activities.map((activity) => {
                activityArr.push(activity.name);
              })}         
              <div>{activityArr.join(', ')}</div>          
            </li>
          </ul>
        </div>
        <p></p>
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
        </div>
      </>
    );
  };
  