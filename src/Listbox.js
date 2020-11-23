import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Listbox = props => {

  const buttonClicked = (artId) => (e) => {
    e.preventDefault();
    props.clicked(artId);
  }    

    const classes = useStyles();

    return (
        <div className={classes.root}>
        <Grid container spacing={2}>
                {
                    props.items.map(item => 
                    <Grid item xs={4}
                        id={"lst_"+item.id}
                        onClick={buttonClicked(item.id)}
                         >
                        <Button 
                         id={item.id}
                        //  onClick={e=> buttonClicked(e, item.id)}
                         fullWidth={true} 
                         variant="outlined" 
                         color="primary">
                            {item.name}
                        </Button>    
                    </Grid>)
                } 
        </Grid>
        </div>
    );
}

export default Listbox;