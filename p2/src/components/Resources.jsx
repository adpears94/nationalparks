import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "../AppContext";
import "../css/Resources.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';


export const Resources = () => {
    return (
        // Apply style
      <div id='resourceBody'>
        
        <header id="resourceHeader">
          <div id="aboutHeader"> Useful Resources </div>
        </header> 

        <div id="bigDiver">
            <div>
            <h2 id='packingListHeader'>  </h2>
              <h3 id='campingGearHeader'> Camping and Hiking Gear </h3>
                <h3 id='reiHeader'>  </h3> <div>
                  
                    <a href="https://www.rei.com/h/camping-and-hiking" > 
                      <img className="imagewidth" href="https://www.rei.com/h/camping-and-hiking"  src ='https://www.rei.com/assets/img/seo/evergreen/rei-og.jpg'/> 
                    </a>                
                  
                  </div>
                  <h2 id='packingListHeader'>  </h2>
                <h3 id='walmartHeader'> Camping Gear </h3> 
                  <a href='https://www.walmart.com/cp/camping-gear/4128' > 
                      <img className="imagewidth" src ='https://cdn.corporate.walmart.com/dims4/WMT/b334feb/2147483647/strip/true/crop/855x305+0+0/resize/980x350!/quality/90/?url=https%3A%2F%2Fcdn.corporate.walmart.com%2F98%2F28%2F342ccbff478ab025592645fafcfc%2Fwalmart-logo.png'/> 
                  </a>
            </div>
            <div>
              <h2 id='packingListHeader'>  </h2>
                <h3 id='campingListHeader'> Camping List </h3> 
                  <a id='campingListLink' href='https://koa.com/blog/the-ultimate-camping-packing-list-printable-pdf-camping-checklist/'> 
                      <img className="imagewidth" src ='https://koa.com/content/images/brandhub/KOA-BP-Journey-Gateway-to-Adventure.png'/> 
                  </a>
                <h3 id='dayHikingHeader'> Day Hiking </h3> 
                  <a id='dayHikingLink' href='https://www.rei.com/learn/expert-advice/day-hiking-checklist.html'>
                      <img className="imagewidth" src ='https://www.rei.com/dam/day_hiking_checklist_lg3.jpg' />
                  </a>
                <h3 id='outdoorSurvivalHeader'> Outdoor Survival </h3> 
                  <a id='outdoorSurvivalLink' href="https://www.wildernesscollege.com/survival-gear-list.html">
                    <img className="imagewidth" src ='https://www.wildernesscollege.com/images/survival-gear-list-pic-1.jpg'/> 
                  </a>
            </div>
            <div>
              <h2 id='blogHeader'>  </h2>
                <h3 id='greatOutdoorBlogHeader'> 50 Great Outdoor Blogs </h3> 
                  <a id='outdoorBlogLink' href='https://detailed.com/outdoor-blogs/'>
                      <img className="imagewidth" src ='https://cdn.shopify.com/s/files/1/0112/8369/3664/files/Best_Outdoor_Blogs.png'/>  
                  </a>
                <h3 id='ParentsBlogHeader'> Outdoor Blogs for Parents and Kids </h3> 
                  <a id='ParentsBlogLink' href='https://www.childhoodbynature.com/outdoor-dads-to-follow/'> 
                      <img className="imagewidth" src ='https://www.trailheads.com/product_images/uploaded_images/curiousschoolofthewild.jpg'/> 
                  </a>
            </div>
        </div>

        <footer>
          
        </footer>
                
        </div>
    )
}