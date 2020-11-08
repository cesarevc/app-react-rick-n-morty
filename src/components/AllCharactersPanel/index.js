import React, {useEffect, useState} from 'react';
import CharacterCard from '../CharacterCard';
import getAllCharacters from '../../services/fetch';

//
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core'

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
   
    control: {
      padding: theme.spacing(2),
    },
  }));

function AllCharactersPanel() {
    const classes = useStyles();


    const [characters, setCharacters] = useState([]);

  
    useEffect(() => {
        getAllCharacters()
        .then(data => {
            setCharacters(data.results);
        })
    });
   
    return (<div>
            <Grid container className={classes.root} >
                {characters.map(character => {
                    return(
                        <Grid item xs={6} lg={2} sm={4} md={4} align="center" >
                            <CharacterCard image= {character.image} name={character.name} />
                        </Grid>);
                })}
            </Grid>
    </div>);
    
}

export default AllCharactersPanel;