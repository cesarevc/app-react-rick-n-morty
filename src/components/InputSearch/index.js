import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import { getCharacter } from '../../services/fetch';
import { connect } from 'react-redux';
import { get_characters_found_action } from '../../redux/actions/dataApiAction';


const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    margin:40
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

function InputSearch( props ) {

  const classes = useStyles();

  const [keyword, setKeyword] = useState('');

  const handleSubmit = () => {

    getCharacter(keyword)
    .then(response => {

      const data = {
        totalCharactersFound: response.info.count,
        characters: response.results
      }

      props.get_characters_found_action(data);
      //setCharacters(data.results);
      //guardamos la keyword en localStorage
      console.log(response.results);
    })
    

  }

  const handleChange = (e) => {
    setKeyword(e.target.value); 
    console.log(keyword);
  };

  return (


      <Paper className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Search Your Favorite Character"
          // inputProps={{ 'aria-label': 'search google maps' }}
          onChange={handleChange}
          value={keyword}
        
        />
        <Divider className={classes.divider} orientation="vertical" />
        <IconButton 
          className={classes.iconButton} 
          aria-label="search" 
          //disabled={true}
          onClick={() => handleSubmit() }
        >
          <SearchIcon />
        </IconButton>
      </Paper>

  );
}


const mapDispatchToProps = {
  get_characters_found_action
}

export default connect(null, mapDispatchToProps)(InputSearch);