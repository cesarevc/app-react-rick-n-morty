export const GET_RICK_MORTY_DATA = 'GET_RICK_MORTY_DATA';
export const FIND_CHARACTERS = 'FIND_CHARACTERS';

export const get_data_action = (data) => {
    return {
        type: GET_RICK_MORTY_DATA,
        payload: data
    }
}

export const get_characters_found_action = (data) => {
    return {
        type: FIND_CHARACTERS,
        payload: data
    }
}