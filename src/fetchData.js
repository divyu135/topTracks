import data from './countries.json';

const countries = data;
// console.log(countries.IN.lat);


/**
 * A complete Coordinate Pair consisting of a latitude and longitude
 * @typedef {Object} CoordinatePair
 * @property {number} longitude - longitude coordinate
 * @property {number} latitude - latitude coordinate
 */

/**
 * Generates a GeoJSON FeatureCollection of random points based on
 * the center coordinates passed in.
 * @param {CoordinatePair} centerCoordinates - the {@link CoordinatePair} for the map center
 * @return {results} GeoJSON FeatureCollection
 */
const fetchData = () => {
    const newFeaturesList = [];
    Object.keys(countries).forEach(function(countryCode) {
        const id = countryCode;
        const longitude = countries[countryCode].long;
        const latitude = countries[countryCode].lat ;
        newFeaturesList.push({
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [longitude, latitude],
          },
          properties: {
            id,
            name: `country_#${id}`,
            description: '',
          },
        });
      })
  
      return Promise.resolve({
      type: 'FeatureCollection',
      features: newFeaturesList,
    });
  };
  
  
  export default fetchData;