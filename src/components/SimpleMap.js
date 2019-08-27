import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';

class SimpleMap extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            mapStyles: {
                width: '100%',
                height: '100%'
              }
        }
    }

    render() {
        return (
            <div style={{ position: 'relative', width: '100vw', height: '40vh' }}>
                <Map
                    google={this.props.google}
                    zoom={15}
                    style={this.state.mapStyles}
                    initialCenter={{ lat: 30.516214, lng: -87.895966}}
                    >
                    <Marker position={{ lat: 30.516214, lng: -87.895966}} />
                </Map>
            </div>
            
        )
    }
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLEMAPS_API_KEY
  })(SimpleMap);
