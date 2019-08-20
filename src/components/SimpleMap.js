import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';

class SimpleMap extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            mapStyles: {
                width: '100%',
                height: '40vh',
              }
        }
    }

    render() {
        return (
            <Map
                google={this.props.google}
                zoom={15}
                style={this.state.mapStyles}
                initialCenter={{ lat: 30.516214, lng: -87.895966}}
                >
                <Marker position={{ lat: 30.516214, lng: -87.895966}} />
            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyD2v3qtDML3sFbyaoRX5-m2AI9jjB61apQ'
  })(SimpleMap);
