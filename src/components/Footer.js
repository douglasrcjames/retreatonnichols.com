import React, { Component } from 'react'
export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = { year: new Date().getFullYear() };
    }

    render() {
        return (
            <footer>
            <div className="f-container">
                <span className="blue">
                    The Retreat on Nichols
                    &nbsp;
                    &copy;
                    {this.state.year} 
                </span>
               
                <br/>
                <br/>
             
                <div className="center">
                    <a href="https://www.facebook.com/theretreatonnichols/" target="_blank" rel="noopener noreferrer"> 
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
                    <a href="https://www.instagram.com/retreatonnichols/" target="_blank" rel="noopener noreferrer"> 
                        <img
                            className="m-em"
                            alt="instagram"
                            src={require('../assets/images/social/instagram.png')}
                            />
                        &nbsp;
                        Instagram
                    </a>
                </div>

            
               
            </div>
        </footer>
        )
    }
}
