import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { Grid, Row, Col } from 'react-flexbox-grid';
import ContactForm from '../ContactForm';
export default class Reserve extends Component {
    render() {
        return (
            <div className="wrapper">
                <h1>Make a Reservation</h1> 
                <p>
                    We use the booking sites VRBO.com &amp; Airbnb.com to schedule guests in either units on the Retreat on Nichols. 
                    If you are booking for a special occasion, please contact us directly below.
                </p>
               
                <Grid fluid>
                    <Row>
                        <Col md={12} lg={6} className="center-text">
                            <img
                                className="responsive large"
                                alt="Piet Mondrian"
                                src={require("../../assets/images/property/piet_mondrian10.jpg")}
                                />
                            <h2>Piet Mondrian (Unit A)</h2>
                            <Grid fluid>
                                <Row>
                                    <Col md={12} lg={6}>
                                        <img
                                            className="responsive medium"
                                            alt="airbnb"
                                            src={require("../../assets/images/logos/airbnb-logo.png")}
                                            />
                                        <br/>
                                        <a href="https://www.airbnb.com/rooms/17879031" rel="noopener noreferrer" target="_blank"><button className="s-btn-airbnb">Reserve on Airbnb</button></a> 
                                    </Col>
                                    <Col md={12} lg={6}>
                                        <img
                                            className="responsive medium"
                                            alt="airbnb"
                                            src={require("../../assets/images/logos/vrbo-logo.png")}
                                            />
                                        <br/>
                                        <a href="https://www.vrbo.com/1160043" rel="noopener noreferrer" target="_blank"><button className="s-btn-vrbo">Reserve on VRBO</button></a> 
                                    </Col>
                                </Row>
                            </Grid>
                            <br/> 
                        </Col>
                        <Col md={12} lg={6}className="center-text">
                            <img
                                className="responsive large"
                                alt="Georgia O'Keefe"
                                src={require("../../assets/images/property/georgia_okeefe9.jpg")}
                                />
                            <h2>Georgia O'Keefe (Unit B)</h2>
                            <Grid fluid>
                                <Row>
                                    <Col md={12} lg={6}>
                                        <img
                                            className="responsive medium"
                                            alt="airbnb"
                                            src={require("../../assets/images/logos/airbnb-logo.png")}
                                            />
                                        <br/>
                                        <a href="https://www.airbnb.com/rooms/18776024" rel="noopener noreferrer" target="_blank"><button className="s-btn-airbnb">Reserve on Airbnb</button></a> 
                                    </Col>
                                    <Col md={12} lg={6}>
                                        <img
                                            className="responsive medium"
                                            alt="airbnb"
                                            src={require("../../assets/images/logos/vrbo-logo.png")}
                                            />
                                        <br/>
                                        <a href="https://www.vrbo.com/1160179" rel="noopener noreferrer" target="_blank"><button className="s-btn-vrbo">Reserve on VRBO</button></a> 
                                    </Col>
                                </Row>
                            </Grid>
                        </Col>
                    </Row>
                </Grid>
                <br/>
                <br/>
                <br/>
                <hr className="l-width"/>
                <br/>

                <h1>Contact Us</h1>
                <p>Send us a message directly or email us at <u>theretreatonnichols@gmail.com</u></p>
                <ContactForm />
            </div>
        )
    }
}
