import React, { Component } from 'react'

export default class Reserve extends Component {
    render() {
        return (
            <div className="wrapper">
                <h1>Make a Reservation</h1> 
                <p>
                    Our rates for both the Georgia O'Keefe and Piet Mondrian Suites are $195/night and discounts are 
                    available for special events. Please contact us by phone at (916) 788-1849, by email at 
                    theretreatonnichols@gmail.com, or with the contact form below.
                </p>
                <p>The Retreat on Nichols is also available on VRBO &amp; AirBNB for reservations if those are your preferred outlets!</p>
                {/* Put his as logos with links */}
                <p>
                    Georgia O'Keefe Suite on VRBO: https://www.vrbo.com/1160179
                    Georgia O'Keefe Suite on AirBNB: https://www.airbnb.com/rooms/18776024

                    Piet Mondrian Suite on VRBO: https://www.vrbo.com/1160043
                    Piet Mondrian Suite on AirBNB: https://www.airbnb.com/rooms/17879031
                </p>
            </div>
        )
    }
}
