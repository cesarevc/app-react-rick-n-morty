import React, {useEffect, useState} from 'react';
import CharacterCard from '../CharacterCard';
import { getAllCharacters } from '../../services/fetch';
import { connect } from 'react-redux';



function MainPanel(props) {

    const [characters, setCharacters] = useState([]);

    return (
        <div>
            <h3>Personajes Encontrados: {props.data.totalCharactersFound}</h3>
        </div>
    );
    
}

const mapStateToProps = (state) => {
    return {
        data: state.dataApi
    }
}

export default connect(mapStateToProps)(MainPanel);