import React, { Component } from 'react'
// import MediaQuery from "react-responsive";
export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = { year: new Date().getFullYear() };
    }

    render() {
        return (
            <footer>
            <div className="f-container">
               
                The Retreat on Nichols
                &nbsp;
                &copy;
                {this.state.year} 
                {/* <br/>
                <br/>
                <MediaQuery minWidth={373}>
                    <div className="center">
                        <a href="https://www.facebook.com/CAPSmaryland/" target="_blank" rel="noopener noreferrer"> 
                            <img
                                className="m-em"
                                alt="facebook"
                                src={require('../assets/images/social/facebook.png')}
                                />
                            &nbsp;
                            Facebook
                        </a>
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        <a href="https://twitter.com/CAPSmaryland" target="_blank" rel="noopener noreferrer"> 
                            <img
                                className="m-em"
                                alt="twitter"
                                src={require('../assets/images/social/twitter.png')}
                                />
                            &nbsp;
                            Twitter
                        </a>
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        <a href="https://www.instagram.com/capsmaryland/" target="_blank" rel="noopener noreferrer"> 
                            <img
                                className="m-em"
                                alt="instagram"
                                src={require('../assets/images/social/instagram.png')}
                                />
                            &nbsp;
                            Instagram
                        </a>
                    </div>

                </MediaQuery>
                <MediaQuery maxWidth={372}>
                    <div className="center">
                        <a href="https://www.facebook.com/CAPSmaryland/" target="_blank" rel="noopener noreferrer"> 
                            <img
                                className="m-em"
                                alt="facebook"
                                src={require('../assets/images/social/facebook.png')}
                                />
                            &nbsp;
                            Facebook
                        </a>
                        <br/>
                        <a href="https://www.instagram.com/capsmaryland/" target="_blank" rel="noopener noreferrer"> 
                            <img
                                className="m-em"
                                alt="instagram"
                                src={require('../assets/images/social/instagram.png')}
                                />
                            &nbsp;
                            Instagram
                        </a>         
                        <br/>
                        <a href="https://twitter.com/CAPSmaryland" target="_blank" rel="noopener noreferrer"> 
                            <img
                                className="m-em"
                                alt="twitter"
                                src={require('../assets/images/social/twitter.png')}
                                />
                            &nbsp;
                            Twitter
                        </a>             
                    </div>
                </MediaQuery>
                */}
            </div>
        </footer>
        )
    }
}
