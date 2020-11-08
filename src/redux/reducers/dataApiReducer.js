import { GET_RICK_MORTY_DATA, FIND_CHARACTERS } from '../actions/dataApiAction';

const defaultState = {
    totalCharactersFound: 0,
    characters: []
}


const dataApi_reducer = (state = defaultState, action) => {
    switch(action.type){
        case GET_RICK_MORTY_DATA: {
            return{
                // ...state, 
                totalCharactersFound: action.payload.totalCharacters,
                characters: action.payload.pages
            }
        }
        case FIND_CHARACTERS: {
            return{
                // ...state, 
                totalCharactersFound: action.payload.totalCharactersFound,
                characters: action.payload.characters
            }
        }

        default: return state;
    }
}


export default dataApi_reducer;
