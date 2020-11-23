import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import Popup from './Popup';
import fetchData from "./fetchData";
import './MapView.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'mapbox-gl/dist/svg/mapboxgl-ctrl-compass.svg';
import 'mapbox-gl/dist/svg/mapboxgl-ctrl-geolocate.svg';
import 'mapbox-gl/dist/svg/mapboxgl-ctrl-zoom-in.svg';
import 'mapbox-gl/dist/svg/mapboxgl-ctrl-zoom-out.svg';

mapboxgl.accessToken = 'pk.eyJ1IjoiZ29rdXBpc3RvbCIsImEiOiJja2hzYTJlZmEwY3UzMzRsZzJ3Z2YzZGRtIn0.4UrkI3N-YmDpR2e1riMesw';

const MapView = props => {

    const mapContainerRef = useRef(null);
    const popUpRef = useRef(new mapboxgl.Popup({ offset: 15 }));
  
    useEffect(() => {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/streets-v9",
        center: [-104.9876, 39.7405],
        zoom: 1.5,
        minZoom: 0,
        maxZoom: 3,
      });
    
      map.on("load", () => {
        // const str = (new Date()).toISOString().slice(0, 19).replace(/-/g, "/").replace("T", " ") + ' Loaded world map ';
        // console.log(str);
        map.addSource("countries-data", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: []
          }
        });
        map.addLayer({
          id: "points-layer",
          source: "countries-data",
          type: "symbol",
          layout: {
            
            "icon-image": "music-15", 
            "icon-padding": 0,
            "icon-allow-overlap": true,
            "icon-size": 1.5,
          }
        });
      });
    //   const str = (new Date()).toISOString().slice(0, 19).replace(/-/g, "/").replace("T", " ") + ' Marked markers ';
    //   console.log(str);
      map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

      map.on("moveend", async () => {
        const { lng, lat } = map.getCenter();
        const results = await fetchData({ longitude: lng, latitude: lat });
        map.getSource("countries-data").setData(results);
      });
  
      map.on("mouseenter", "points-layer", e => {
        if (e.features.length) {
          map.getCanvas().style.cursor = "pointer";
        }
      });
  
      map.on("mouseleave", "points-layer", () => {
        map.getCanvas().style.cursor = "";
      });
  
      map.on("click", "points-layer", e => {
        if (e.features.length) {
          const feature = e.features[0];
          // create popup node
          const popupNode = document.createElement("div");
        //   var str = (new Date()).toISOString().slice(0, 19).replace(/-/g, "/").replace("T", " ") + ' Country popup ';
        //   console.log(str);
      
        //   const artist = props.artist;
          ReactDOM.render(<Popup artist={props.artist} feature={feature} />, popupNode);
        //   str = (new Date()).toISOString().slice(0, 19).replace(/-/g, "/").replace("T", " ") + ' Displayed Top tracks ';
        //   console.log(str);
          // set popup on map
          popUpRef.current
            .setLngLat(feature.geometry.coordinates)
            .setDOMContent(popupNode)
            .addTo(map);
        
        }
      });
      return () => map.remove();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
  
    return <div className="map-container" ref={mapContainerRef} />;
  };

export default MapView;