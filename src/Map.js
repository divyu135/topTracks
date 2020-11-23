import React, { PureComponent } from 'react';
import Geocoder from 'react-mapbox-gl-geocoder';
import ReactMapGL, {Marker, Popup } from 'react-map-gl';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
// import { Container, Col, Row } from 'reactstrap';

const mapStyle = {
    width: '100%',
    height: 600
}

const mapboxApiKey = 'pk.eyJ1IjoiZ29rdXBpc3RvbCIsImEiOiJja2hzYTJlZmEwY3UzMzRsZzJ3Z2YzZGRtIn0.4UrkI3N-YmDpR2e1riMesw';

const params = {
    country: "ca"
}

const CustomMarker = ({index, marker}) => {
  return (
    <Marker
      longitude={marker.longitude}
      latitude={marker.latitude}>
      <div className="marker">
        <span><b>{index + 1}</b></span>
      </div>
    </Marker>
  )
};


class MapView extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 45.50884,
        longitude: -73.58781,
        zoom: 2,
        minZoom: 1,
        maxZoom: 3,
      },
      tempMarker: null,
      markers:[]
    };

  }

  onSelected = (viewport, item) => {
      this.setState({
        viewport,
        tempMarker: {
          name: item.place_name,
          longitude: item.center[0],
          latitude: item.center[1]
        }
      })
  }

  add = () => {
    var { tempMarker } = this.state

    this.setState(prevState => ({
        markers: [...prevState.markers, tempMarker],
        tempMarker: null
    }))
  }

  render() {
    const { viewport, tempMarker, markers } = this.state;
    return(
      <React.Fragment>


            <Geocoder
                mapboxApiAccessToken={mapboxApiKey}
                onSelected={this.onSelected}
                viewport={viewport}
                hideOnSelect={true}
                value=""
                queryParams={params}
            />

           <Button color="primary" onClick={this.add}>Add</Button>


            <ReactMapGL
              mapboxApiAccessToken={mapboxApiKey}
              mapStyle="mapbox://styles/mapbox/streets-v9"
              {...viewport}
              {...mapStyle}
              onViewportChange={(viewport) => this.setState({viewport})}
            >
              { tempMarker &&
                <Marker
                  longitude={tempMarker.longitude}
                  latitude={tempMarker.latitude}>
                  <div className="marker temporary-marker"><span></span></div>
                </Marker>
              }
              {
                this.state.markers.map((marker, index) => {
                  return(
                    <CustomMarker
                      key={`marker-${index}`}
                      index={index}
                      marker={marker}
                    />
                  )
                })
              }
            </ReactMapGL>
        </React.Fragment>
   );
  }
}

export default MapView;