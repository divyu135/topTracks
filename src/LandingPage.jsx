import React, { Component } from "react";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

class landing extends Component {
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
            Artist Top Tracks Map
          </Typography>
          <Typography
            component='h4'
            variant='h4'
            align='center'
            color='textSecondary'
            gutterBottom
          >
            Advanced Software engineering - Team 4
          </Typography>
          <Typography
            component='h5'
            variant='h5'
            align='center'
            color='primary'
            gutterBottom
          >
            Click below button to Get trending songs...
            <p style={{ paddingTop: 10 }}>
              <Button
                // to='/app'
                style={{ padding: 20, paddingRight:30, paddingLeft:30 }}
                variant='contained'
                color='primary'
                href='/app'
              >
                Artist Top Track Map
              </Button>
              <br/>
              <br/>
            </p>
          </Typography>
          <Typography
            component='h6'
            variant='h6'
            align='center'
            color='textSecondary'
            gutterBottom
          >
            Developed By
           </Typography>
            <Typography
            component='h6'
            variant='h6'
            align='center'
            color='textSecondary'
            gutterBottom
          >
            <span style={{ paddingLeft: 20, paddingRight: 20 }}>
              <Chip
                label='Divyajeetsinh Chauhan '
                variant='outlined'
                component='h6'
                style={{ paddingRight: 20, paddingLeft: 20 }}
              />
            </span>
            <span style={{ paddingLeft: 20, paddingRight: 20 }}>
              {" "}
              <Chip
                label='Vyoma Kanani '
                variant='outlined'
                component='h6'
                style={{ paddingRight: 20, paddingLeft: 20 }}
              />
            </span>
            <span style={{ paddingLeft: 20, paddingRight: 20 }}>
              {" "}
              <Chip
                label='Sam Patel '
                variant='outlined'
                component='h6'
                style={{ paddingRight: 20, paddingLeft: 20 }}
              />
            </span>
            <span style={{ paddingLeft: 20, paddingRight: 20 }}>
              <Chip
                label='Hussain '
                variant='outlined'
                component='h6'
                style={{ paddingRight: 20, paddingLeft: 20 }}
              />
            </span>
          </Typography>

          <Typography
            variant='h5'
            align='center'
            color='textSecondary'
            paragraph
            style={{ paddingBottom: 40 }}
          >
            Artist Top Track Map will show you the trending songs of particular
            artist as per country. It even makes it easy to select country as it
            is displayed graphically.
          </Typography>

          <Typography variant='h6'align='center' color='textSecondary' paragraph>
          <Button
                // to='/app'
                variant='outlined'
                color="primary"
                style={{justifyContent: 'center'}}
                href='/doc'
              >
                Click Here for Documentation
          </Button>
          </Typography>

          <Typography
            variant='h6'
            align='center'
            color='textSecondary'
            paragraph
          >
            <u>How to use:</u>
            <p>
              1. Click on the mentioned link to navigate to the website{" "}
              <a href="/app">Artist Top Track Map</a>.
            </p>
            <p>
              2. To see the top songs of a artist by country on a world map,
              simply enter name of artist or band and click the search button.
            </p>
            <p>3. Select the desired artist from the searched list.</p>
            <p>
              4. Click on the music icon for whichever country you desire, to
              know the trending song list.
            </p>
          </Typography>
          <br/>
          <br/>
          <Typography variant='body1' align='justify' color='textSecondary' paragraph>
            <strong>Please note:</strong><ol> <li>The top songs in various countries can be same for a artist.
             Try searching "Linked Horizon" a japanese band, for this different songs will be shown for japan and canada etc.
             </li><li>The app will not show any songs if spotify dataset is not available for that country.</li>
             </ol>
          </Typography>
        </Container>
        <div style={{ minHeight: 50, backgroundColor: "#3F51B5" }}></div>
      </div>
    );
  }
}

export default landing;
