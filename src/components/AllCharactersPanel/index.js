import React, {useEffect, useState} from 'react';
import CharacterCard from '../CharacterCard';
import { getAllCharacters } from '../../services/fetch';
// Redux
import { connect } from 'react-redux';
// Material UI
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    control: {
      padding: theme.spacing(2),
    },
}));


function AllCharactersPanel(props) {

    const classes = useStyles();

    const [characters, setCharacters] = useState([]);
  
    useEffect(() => {
        getAllCharacters()
        .then(data => {
            setCharacters(data.results);
        })
    });
   
    return (
        <div>
            <Grid container className={classes.root} >
                {props.data.characters.map(character => {
                    return(
                        <Grid item xs={6} lg={2} sm={4} md={4} align="center" >
                            <CharacterCard image= {character.image} name={character.name} character={character} />
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
    
}


const mapStateToProps = (state) => {
    return {
        data: state.dataApi
    }
}

export default connect(mapStateToProps)(AllCharactersPanel);