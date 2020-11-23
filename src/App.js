/**
 * The main file of project
 * it call other components
 * Importing the require modules
 */
import React, { useState, useEffect } from 'react';
import { Credentials } from './Credentials';
import Listbox from './Listbox';
import axios from 'axios';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import MapView from './MapView';
import './App.css';
import { Switch, Route, useHistory } from 'react-router-dom';
// import Map from './Map';



const App = () => {

  const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
    search: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: '30vw',
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
  }));

  const spotify = Credentials();
  const [token, setToken] = useState('');
  const [search, setSearch] = useState('');
  const [artists, setArtists] = useState({selectedArtist: '', listOfArtistsFromAPI: []});
  const [listClicked, setListClicked] = useState(false);
  const classes = useStyles();
  const history = useHistory();
  
  useEffect(() => {

    axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization' : 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)      
      },
      data: 'grant_type=client_credentials',
      method: 'POST'
    })
    .then(tokenResponse => {
      // const str = (new Date()).toISOString().slice(0, 19).replace(/-/g, "/").replace("T", " ") + ' Generated spotify token: '+ tokenResponse.data.access_token;
      // console.log(str);
      console.log(tokenResponse.data.access_token);
      setToken(tokenResponse.data.access_token);
    });
  }, [spotify.ClientId, spotify.ClientSecret]);

  const buttonClicked = e => {
    e.preventDefault();
    
    axios(`https://api.spotify.com/v1/search?q=${search}&type=artist&limit=12`, {
      method: 'GET',
      headers: {
        'Authorization' : 'Bearer ' + token
      }
    })
    .then(artistResponse => {
      setArtists({
        selectedArtist: artists.selectedArtist,
        listOfArtistsFromAPI: artistResponse.data.artists.items
      })
      // const str = (new Date()).toISOString().slice(0, 19).replace(/-/g, "/").replace("T", " ") + ' Searched artist "'+ search + '" list: ' + artistResponse.data.artists.items ;
      // console.log(str);    
    });
  }
  // console.log(artists.listOfArtistsFromAPI[0]);

  const listboxClicked = val => {
    setArtists({
      selectedArtist:val,
      listOfArtistsFromAPI:artists.listOfArtistsFromAPI
    });
    // const str = (new Date()).toISOString().slice(0, 19).replace(/-/g, "/").replace("T", " ") + ' Selected artist id "' + val + '"';
    // console.log(str);

    // setListClicked(true);
    history.push("/app/map");
  }
  
  
  return (
    
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            ArtistTopTracksMap
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Search Artist
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            To see the top songs of a artist by country on a world map, 
            simply enter name of artist or band and click the search button and 
            select the desired artist from the searched list.
          </Typography>
          <div className={classes.heroButtons} align="center">
              <Paper component="form" onSubmit={buttonClicked} className={classes.search}>          
                    <InputBase
                      className={classes.input}
                      placeholder="Search Artist Name"
                      onChange={e => setSearch(e.target.value)}
                    />
                    <IconButton type="submit" className={classes.iconButton} aria-label="search">
                      <SearchIcon />
                    </IconButton>
                </Paper>              
          </div>  
        </Container>
      </div>
          <Container maxWidth="md">
            <Listbox items={artists.listOfArtistsFromAPI}  clicked={listboxClicked} />
          </Container>
          <Switch>
            <Route path='/app/map' component={() => <MapView artist={artists.selectedArtist} />} />
          </Switch>
           {/* {
              listClicked?
              <MapView artist={artists.selectedArtist} />
              :
              <div></div>
            } */}
    </React.Fragment>

  );

}

export default App;