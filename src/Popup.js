/* src/components/Popup.js */
import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Credentials } from './Credentials';
import Playlist from './Playlist';
import Button from '@material-ui/core/Button';

const Popup = props => {
  const { id, name, description } = props.feature.properties;
  const spotify = Credentials();
  const [tracks, setTracks] = useState([]);
  const [token, setToken] = useState('');
  const [listClicked, setListClicked] = useState(false);
  
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
      setToken(tokenResponse.data.access_token);
    });

  }, [spotify.ClientId, spotify.ClientSecret, token]);

const buttonClicked = e => {
    e.preventDefault();

    axios(`https://api.spotify.com/v1/artists/${props.artist}/top-tracks?country=${id}`, {
    method: 'GET',
    headers: {
      'Authorization' : 'Bearer ' + token
    }
    })
    .then(tracksResponse => {
    setTracks(tracksResponse.data.tracks)
    console.log(`https://api.spotify.com/v1/artists/${props.artist}/top-tracks?country=${id}`);
    });

  setListClicked(true);
}
  
  

//   console.log(token);
  return (
    <div id={`popup-${id}`}>
      <h3>{name}</h3>
      {description}
      <Button onClick={buttonClicked}>Show Tracks</Button>
            {
              listClicked?
              <Playlist tracks={tracks} token={token} id={id} artist={props.artist}/>
              :
              <div></div>
            }
    </div>
  );
};

export default Popup;