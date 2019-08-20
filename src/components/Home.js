import React, { Component } from 'react'
import SimpleMap from './SimpleMap'
export default class Home extends Component {
    render() {
        return (
            <>
            <div className="wrapper">
                <h1>Welcome to the Retreat on Nichols</h1>
                <p>Situated in the quant town of Fairhope, Alabama, the Retreat on Nichols is your primier destination for temporary living in the south.</p>
                
            </div>
            <SimpleMap />
            </>
        )
    }
}
