import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SimpleMap from '../SimpleMap'
import PhotoGallery from '../Utility'
import { fairhopePhotos, propertyPhotos } from "../photos";
import { Grid, Row, Col } from 'react-flexbox-grid';
import Background1 from '../../assets/images/property-v2/front-dusk-2.jpg';

var bgImgStyle1 = {
    width: "100%",
    height: "250px",
    backgroundImage: `url(${Background1})`,
    backgroundPosition: "50% 70%", // change me around to move up and down!
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    marginTop: "2%"
  };

export default class Home extends Component {

    render() {
        var PartyVid = `https://firebasestorage.googleapis.com/v0/b/retreatonnichols.appspot.com/o/videos%2Fwebsite%20loop%20720p60.mov?alt=media&token=a378f566-189b-4245-8b37-a7331aca7f0b`;
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
                    We offer two pristine 720SF units (The Mondrian &amp; The O'Keeffe - each sleeps 4. Units can be rented separately or together. Perfect for group events or a private getaway. 
                    Enjoy common outdoor kitchen, wood-fired pizza oven, fire pit, Petanque and bean bag toss court, sip-'n-dip pool, lawn &amp; board games, laundry, additional bathroom, bicycles, golf cart, &amp; gated parking.
                </p>
                <PhotoGallery photos={propertyPhotos} />
            </div>
            <div style ={ bgImgStyle1 }></div>
            <div className="l-container">
                <h1>The Suites</h1>
                <Grid fluid>
                    <Row>
                        <Col xs={12} sm={6}>
                            <img
                            className="responsive"
                            alt="Piet Mondrian"
                            src={require("../../assets/images/property-v2/pm.jpg")}
                            />
                            <h2>Piet Mondrian</h2>
                            <p className="">Named to honor the Dutch painter and theoretician who was regarded as one of the greatest artists of the 20th century.</p>
                            <Link to="/reserve/"><button className="s-btn">Reserve</button></Link>  <Link to="/suites/piet-mondrian"><button className="s-btn-inv">Read more</button></Link>
                            <br/>
                            <br/>
                        </Col>
                        <Col xs={12} sm={6}>
                            <img
                            className="responsive"
                            alt="Georgia O'Keeffe"
                            src={require("../../assets/images/property-v2/gok.jpg")}
                            />
                            <h2>Georgia O'Keeffe</h2>
                            <p className="">Named to honor the famous American artist Georgia O'Keeffe, better known as the "Mother of American modernism".</p>
                            <Link to="/reserve/"><button className="s-btn">Reserve</button></Link>  <Link to="/suites/georgia-o-keeffe/"><button className="s-btn-inv">Read more</button></Link>
                            <br/>
                            <br/>
                        </Col>
                    </Row>
                </Grid>
                
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
