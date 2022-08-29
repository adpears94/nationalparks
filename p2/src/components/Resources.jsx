import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "../AppContext";
import "../css/Resources.css"

export const Resources = () => {
    return (
        // Apply style
        <>
      <body id='resourceBody'>
        
        <header id="resourceHeader">
          <h1> Useful Resources </h1>
        </header> 
        <div id="bigDiver">
          <div>
            <h2 id='campingGearHeader'> Camping Gear </h2>
              <h3 id='reiHeader'> REI Co-Op </h3> 
                <Link id='reiLink' to="https://www.rei.com/h/camping-and-hiking" > 
                    <img className="imagewidth" src ='https://www.rei.com/assets/img/seo/evergreen/rei-og.jpg'/> 
                </Link>
              <h3 id='walmartHeader'> Walmart </h3> 
                <Link id='walmartLink' to='https://www.walmart.com/cp/camping-gear/4128' > 
                    <img className="imagewidth" src ='https://cdn.corporate.walmart.com/dims4/WMT/b334feb/2147483647/strip/true/crop/855x305+0+0/resize/980x350!/quality/90/?url=https%3A%2F%2Fcdn.corporate.walmart.com%2F98%2F28%2F342ccbff478ab025592645fafcfc%2Fwalmart-logo.png'/> 
                </Link>
          </div>
          <div>
            <h2 id='packingListHeader'> Packing Lists </h2>
              <h3 id='campingListHeader'> Camping List </h3> 
                <Link id='campingListLink' to='https://koa.com/blog/the-ultimate-camping-packing-list-printable-pdf-camping-checklist/'> 
                    <img className="imagewidth" src ='https://koa.com/content/images/brandhub/KOA-BP-Journey-Gateway-to-Adventure.png'/> 
                </Link>
              <h3 id='dayHikingHeader'> Day Hiking </h3> 
                <Link id='dayHikingLink' to='https://www.rei.com/learn/expert-advice/day-hiking-checklist.html'>
                    <img className="imagewidth" src ='https://www.rei.com/dam/day_hiking_checklist_lg3.jpg'/> 
                </Link>
              <h3 id='outdoorSurvivalHeader'> Outdoor Survival </h3> 
                <Link id='outdoorSurvivalLink' to="https://www.wildernesscollege.com/survival-gear-list.html">
                   <img className="imagewidth" src ='https://www.wildernesscollege.com/images/survival-gear-list-pic-1.jpg'/> 
                </Link>
          </div>
          <div>
            <h3 id='blogHeader'> Blogs </h3>
              <h4 id='greatOutdoorBlogHeader'> 50 Great Outdoor Blogs </h4> 
                <Link id='outdoorBlogLink' to='https://detailed.com/outdoor-blogs/'>
                    <img className="imagewidth" src ='https://www.outmoreusa.com/wp-content/uploads/2020/03/Outdoor-Blogs-FEATURE-correct-size-200322.jpg'/>  
                </Link>
              <h4 id='ParentsBlogHeader'> Outdoor Blogs for Parents and Kids </h4> 
                <Link id='ParentsBlogLink' to='https://www.childhoodbynature.com/outdoor-dads-to-follow/'> 
                    <img className="imagewidth" src ='https://blog.innseason.com/hubfs/InnSeason/Maine%20Attractions%20-%20Blogs/96115572_10158533884891579_3072138288048373760_o.jpg'/> 
                </Link>
          </div>
        </div>
                <footer bottom="0" position="fixed"><Link id="footerFont"to="/"> Home </Link> {'add syling, box, etc...'}</footer>
        </body>
        
      </>
    )
}