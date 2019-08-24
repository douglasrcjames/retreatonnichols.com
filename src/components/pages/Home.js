import React, { Component } from 'react'
import SimpleMap from '../SimpleMap'
import PhotoGallery from '../Utility'
import { fairhopePhotos, propertyPhotos } from "../photos";

export default class Home extends Component {

    render() {
        var PartyVid = `https://firebasestorage.googleapis.com/v0/b/retreatonnichols.appspot.com/o/videos%2FWebsite%20Loop%20Video.mov?alt=media&token=9d99208e-9d3f-4852-84f7-1f704207728e`;
        return (
            <>
            <div className="video-container">
                <video 
                    autoplay="autoplay" 
                    loop 
                    muted
                    className="video"
                    >
                    <source src={PartyVid} type="video/mp4" />
                    <source src={PartyVid} type="video/ogg" />
                    Your browser does not support the video tag.
                </video>
                <div className="overlay-modal center-text">
                    <h1 className="no-padding no-margin">The Retreat on Nichols</h1>
                    <p>Luxury short-term accommodations in Fairhope, Alabama</p>
                </div>
            </div>

            <div className="l-container">
                <h1>The Property</h1>
                <p>
                    The Retreat on Nichols is a new lavish contemporary micro-cottage community within walking/biking/golf-carting distance to downtown Fairhope. 
                    We offer two pristine 720SF units (The Mondrian &amp; The O'Keefe - each sleeps 4). Units can be rented separately or together. Perfect for group events or a private getaway. 
                    Enjoy common outdoor kitchen, wood-fired pizza oven, fire pit, Petanque court, lawn &amp; board games, additional bathroom, laundry, gated parking, bicycles, &amp; golf cart.
                </p>
                <PhotoGallery photos={propertyPhotos} />
            </div>
            
            <SimpleMap />

            <div className="l-container">
                <h1>The Neighborhood</h1>
                <p>
                    Tarrel &amp; Kay’s micro-cottage community is located in Fairhope, Alabama. Geographically, 
                    Fairhope is located on the eastern edge of Baldwin County (the largest county in the state) on a sloping plateau, along the 
                    cliffs and shoreline of Mobile Bay with a population of almost 20,000. Fairhope is the fastest growing city in Alabama and in 
                    2016, was named the best small town in the South by Southern Living magazine. There are more published authors (per capita) in the town, 
                    than any other in the United States. Forrest Gump claims Fairhope as his hometown. Activities abound year-round, including the annual Mardi 
                    Gras fabulous series of parades and elegant balls (in January/February), Arts &amp; Crafts Festival (in March), Sailboat Regatta (in April), Eastern Shore Triathalon 
                    (in May), Red Snapper Season (off the Pier in June), Humidity Festival (in July and August), Sunset Wine Festival (every night in September), Five Rivers 
                    Bird Festival (in October), Film Festival (in November), Tree Lighting Festival (in December) and these are just naming a few --- all highly acclaimed 
                    with an international following!!! Every First Friday is the official Art Walk in downtown Fairhope when the whole town gets decked out in artistic 
                    attire to stroll the streets enjoying downtown merchant offerings of special sales, free libations of adult beverages, classic Southern hors d'oeuvres, 
                    open parties, and with musical groups on every corner. This eclectic downtown is bursting with art galleries and street artists, boutiques, bookstores, 
                    and restaurants featured on the Food Network. 
                    Enjoy the warm and friendly charm of a walkable Southern town as you dine, shop, strut and stroll! Even those from Olean, New York are welcome and bound to enjoy themselves!
                </p>
                <PhotoGallery photos={fairhopePhotos} />
            </div>
 
            
            
            </>
        )
    }
}
