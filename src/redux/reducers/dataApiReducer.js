import { GET_RICK_MORTY_DATA } from '../actions/dataApiAction';

const initialState = {
    totalCharacters: 0,
    pages: 0,
    nextPage: '',
    prevPage: '',
    characters : []
}


const dataApi_reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_RICK_MORTY_DATA: {
            return{
                ...state, 
                totalCharacters: state.totalCharacters + 1 //action.payload
            }
        }
        default: return state;
    }
}


export default dataApi_reducer;
