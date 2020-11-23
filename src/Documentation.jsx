import React, { Component } from "react";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

class Documentation extends Component {
  render() {
    return (
      <div>
        <div style={{ minHeight: 50, backgroundColor: "#3F51B5" }}></div>

        <Container style={{ paddingTop: 20 }}>
          <Typography
            component='h1'
            variant='h2'
            align='center'
            color='textPrimary'
            gutterBottom
          >
            Documentation
          </Typography>
          <Typography component='h4' variant='h4' align='center' color='textSecondary' gutterBottom >
            Advanced Software engineering - Team 4
          </Typography>
         
          <Typography
            component='h3'
            variant='h3'
            align='center'
            gutterBottom
          >
            APIs Used
          </Typography>

          <Typography
            variant='h4'
            // align='center'
            color='textSecondary'
            paragraph
            style={{ paddingBottom: 40 }}
          >
          1. Spotify Web API
          </Typography>

          <Typography variant='h6'align='justify' color='textSecondary' paragraph>
          Most famous REST music API, the Spotify Web API endpoints return JSON metadata about music artists,
           albums, and tracks, directly from the Spotify Data Catalogue.
          </Typography>

          <Typography variant='h6'align='justify' color='textSecondary' paragraph>
          We used the it to first search for list of artist from the entered input. Once user select an artist from
          the list one more call is made to get list of top song for that artist from each available market/country.
          </Typography>

          <Typography variant='h6'align='justify' color='textSecondary' paragraph>
          <p>For more information please refer <a href="https://developer.spotify.com/documentation/general/guides/authorization-guide/">Implicit Grant Flow</a> 
          for authorization and token generation.</p>
          <p>Refer <a href="https://developer.spotify.com/documentation/web-api/reference/artists/get-artists-top-tracks/">Get an Artist's Top Tracks</a>
          to details about how to get Spotify catalog information about an artist’s top tracks by country.</p>
          </Typography>

          <Typography
            variant='h4'
            // align='left'
            color='textSecondary'
            paragraph
            style={{ paddingBottom: 40 }}
          >
          2. MapBox API
          </Typography>

          <Typography variant='h6'align='justify' color='textSecondary' paragraph>
          The Mapbox web services APIs allow you to programmatically access Maps along with customize styling
          and interaction.
          </Typography>

          <Typography variant='h6'align='justify' color='textSecondary' paragraph>
          A dataset of longitude and latitude is used to put markers for each country, and when a user click
          the marker we use another mapbox api feature: Popup box. And inside it we show the list of songs.
          </Typography>

          <Typography variant='h6'align='justify' color='textSecondary' paragraph>
          For more information please refer <a href="https://docs.mapbox.com/api/">Mapbox docs</a> 
          </Typography>
          <br/>
          <Typography component='h5' variant='h5' align='left' color='textPrimary' gutterBottom >
          Code available at: <a href="https://github.com/divyu135/topTracks"> https://github.com/divyu135/topTracks</a>
          </Typography>
          
        </Container>
        <div style={{ minHeight: 50, backgroundColor: "#3F51B5" }}></div>
      </div>
    );
  }
}

export default Documentation;
