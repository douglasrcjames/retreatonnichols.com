import React, { Component } from 'react'
import PhotoGallery from '../Utility'
import { hostPhotos } from "../photos";
import Background1 from '../../assets/images/property-v2/head.jpg';
import Background2 from '../../assets/images/property-v2/shared.jpg';
var bgImgStyle1 = {
    width: "100%",
    height: "250px",
    backgroundImage: `url(${Background1})`,
    backgroundPosition: "60% 45%", // change me around to move up and down!
    backgroundSize: "cover",
    overflow: "hidden"
  };

  var bgImgStyle2 = {
    width: "100%",
    height: "250px",
    backgroundImage: `url(${Background2})`,
    backgroundPosition: "60% 30%", // change me around to move up and down!
    backgroundSize: "cover",
    overflow: "hidden"
  };
export default class TheHosts extends Component {
    render() {
        return (
            <>
                <div style={ bgImgStyle1 }></div>
                <div className="l-container">
                    <h1>About Kay &amp; Tarrel</h1>
                    <p>
                        We love entertaining, cooking new recipes, landscaping, weeding, mopping floors, washing windows, making beds, 
                        avoiding political discussions, consuming vegetables, feeding our newly hatched turtle (i.e. Moe), exercise, getting 
                        older, farmers markets, great nutrition, attending community art walks, creative ideas, innovative architecture, 
                        getting up each morning, positive mind-sets, live theater, nurturing young minds, visiting our children/grandchildren 
                        and meeting interesting, like-minded people.
                    </p>

                    <PhotoGallery photos={hostPhotos} />
                </div>
                <br/><br/><br/>
                <div style={ bgImgStyle2 }></div>
            </>
        )
    }
}

/* show images of sketches and building process of designing it (hurricane proof) */
