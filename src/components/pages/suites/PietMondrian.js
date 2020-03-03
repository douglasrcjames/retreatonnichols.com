import React, { Component } from 'react'
import PhotoGallery from '../../Utility'
import { pietMondrianPhotos } from "../../photos";
import { Link } from 'react-router-dom'
import Background from '../../../assets/images/property-v2/pm.jpg';

var bgImgStyle = {
    width: "100%",
    height: "350px",
    backgroundImage: `url(${Background})`,
    backgroundPosition: "90% 40%", // change me around to move up and down!
    backgroundSize: "cover",
    paddingtop: "5%",
    overflow: "hidden"
  };
export default class PietMondrian extends Component {
    render() {
        return (
            <>
                <div style={ bgImgStyle }></div>
                <div className="l-container">
                    <div className="center-text">
                        <h1>Piet Mondrian Suite</h1>
                        <p>In honor of the famous Dutch painter.</p>
                        <br/>
                        <hr/>
                    </div>

                    <div className="m-container">
                        <div className="video-container center-text">
                                <iframe 
                                    id="showcase-player"
                                    title="3D model of Piet Mondrian Suite" 
                                    src='https://my.matterport.com/show/?m=rN4Q7c69wdm' 
                                    frameBorder="0" 
                                    allowFullScreen
                                    allow='vr'
                                    >
                                    
                                </iframe>
                            </div>
                    </div>
                   
                    <h2>The Space</h2>
                    <p>
                        Guests will enter the Retreat on Nichols through a Mondrian inspired automatic gate into a natural oasis. Designed as an eco-centric, 
                        biophilic community for the discriminating AirBnB traveler, these cottages are Platinum Fortified, energy efficient, and extremely quiet. 
                        We have created these two unique, private and quiet cottages to help facilitate conversation and encourage connections amongst travelers. 
                        We are located within walking, biking, scootering and golf-carting distance of all that Fairhope has to offer (restaurants, art galleries, 
                        shopping, parks, beach sunsets). The Retreat on Nichols is also on the cusp of the newly designated “Warehouse/Arts District”.

                        Onsite amenities include: an outdoor wood-burning pizza oven (topped with a fresh herb garden) and kitchen, BBQ grills, regulation Petanque 
                        court (check the internet), sculptural art, fire pit, water features, trellised courtyard, citrus orchard, and numerous fruit trees.

                        Living room amenities include: internet, wifi, large screen ultra-high def 4K Samsung television, surround sound stereo equipment, sleeper
                        sofa with deluxe gel mattress, reading material, family/adult games, ceiling fan. Kitchen amenities include: paper towels, flatware, 
                        dishes, glassware, serving dishes, cooking utensils, pots/pans, gas range/oven, counter depth refrigerator with ice-maker, micro-dishwasher, 
                        filtered water, coffee maker, toaster, blender.

                        Bathroom Amenities include: hair dryer, botanical body wash, shampoo, conditioner, tissue, toilet paper. Bedroom Amenities include: 
                        flat screen TV, ceiling fan, blackout blinds/drapes, desk, wardrobes with clothes hangers, 2 luggage racks, Egyptian cotton sheets.

                        Common Area Amenities include: crockpot, 20 quart boiling pot, 15 quart boiling pot, 10 quart boiling pot, coffee bean grinder, 
                        espresso machine, Cuisinart commercial ice cream maker, electric grill, large stainless steel mixing bowls, large serving trays, 
                        a tub full of pizza making tools, muffin tins and bread tins, cheesecake, and pie pans. Also beach towels, picnic items, ice coolers, 
                        kickball, football, and Petanque ball set are included. A printer for your computer is set up in the common area, along with office supplies.
                    </p>
                    <h2>Guest Access</h2>
                    <p>A pin-coded electronic gate code, will be provided upon arrival. Special extras include: guest use of 24-hour gym membership, bicycles, and golf cart.</p>
                    <h2>Interaction with guests</h2>
                    <p>
                        You can reach us by phone or just holler out the front door. We are so local that we are tempted to be peeking over the fence to be sure that our 
                        guests are relaxing and enjoying themselves. Your hosts will be available for pizza oven orientations as well as Petanque court etiquette.
                    </p>
                    <h2>Other things to note</h2>
                    <p>Meal worms, earth worms, and gold fish are all available so guests can feed, Moe and Joe, the baby turtles (hatched on the property during the landscaping of the micro-cottages).</p>
                    <div className="center-text">
                        <Link to="/reserve/"><button className="m-btn">Reserve</button></Link>
                    </div>
                    
                    <br/>
                    <hr/>

                    <h1>Gallery</h1>
                    <PhotoGallery photos={pietMondrianPhotos} />

                    <br/>
                    <hr/>

                    <h1>Tour</h1>
                    <div className="center l-width">
                        <div className="video-container">
                            <iframe
                                title="Piet Mondrian Suite"
                                className="center-text"
                                src="https://www.youtube.com/embed/Od6QqbUZStU"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen="allowfullscreen"
                                mozallowfullscreen="mozallowfullscreen" 
                                msallowfullscreen="msallowfullscreen" 
                                oallowfullscreen="oallowfullscreen" 
                                webkitallowfullscreen="webkitallowfullscreen" />
                        </div>
                    </div>

                </div>
            </>
        )
    }
}
