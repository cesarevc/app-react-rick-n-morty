import React, {useEffect, useState} from 'react';
import CharacterCard from '../CharacterCard';
import getAllCharacters from '../../services/fetch';


function MainPanel() {


    const [characters, setCharacters] = useState([]);

    const HandlePanel = () => {
        
        let cards = []
        characters.map( character => {
            cards.push(<CharacterCard name={character.name} image={character.image}/>);
        })

        return cards;
    }

    useEffect(() => {
        
        getAllCharacters()
        .then(data => {
            setCharacters(data.results);
            //guardamos la keyword en localStorage
        })
    });
   
    return (
        <div>
            <h3>Hola soy un panel</h3>
            {HandlePanel()}
        </div>
    );
    
}

export default MainPanel;