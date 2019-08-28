import React, { Component } from 'react'
import PhotoGallery from '../Utility'
import { hostPhotos } from "../photos";

export default class TheHosts extends Component {
    render() {
        return (
            <div className="wrapper">
                <h1>About Kay &amp; Tarrel</h1>
                <p>
                    We love entertaining, cooking new recipes, landscaping, weeding, mopping floors, washing windows, making beds, 
                    avoiding political discussions, consuming vegetables, feeding our newly hatched turtle (i.e. Moe), exercise, getting 
                    older, farmers markets, great nutrition, attending community art walks, creative ideas, innovative architecture, 
                    getting up each morning, positive mind-sets, live theater, nurturing young minds, visiting our children/grandchildren 
                    and meeting interesting, like-minded people.
                </p>

                <div className="m-width center">
                    <PhotoGallery photos={hostPhotos} />
                </div>

            {/* need more here... instagram handle for my mom? idk */}

            {/* show images of sketches and building process of designing it (hurricane proof) */}

            {/* Show more images of mom and dad! */}

            {/* Add stuff about sherry (ask to verify) */}

            </div>
        )
    }
}
