import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 300,
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
}));

const Playlist = props => {
  const classes = useStyles();
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    axios(`https://api.spotify.com/v1/artists/${props.artist}/top-tracks?country=${props.id}`, {
    method: 'GET',
    headers: {
      'Authorization' : 'Bearer ' + props.token
    }
    })
    .then(tracksResponse => {
    setTracks(tracksResponse.data.tracks)
    });
  }, [props.artist, props.id,props.token]);
  
  return (
    <List className={classes.root}>   
            {tracks.map((item) => (
              <ListItem key={`${item["id"]}`}>
                <ListItemText primary={`${item["name"]}`} />
              </ListItem>
            ))}
    </List>
  );
}

export default Playlist;