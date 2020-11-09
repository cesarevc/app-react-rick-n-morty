export const RESET_DATA = 'RESET_DATA';
export const FIND_CHARACTERS = 'FIND_CHARACTERS';

export const reset_data_action = (data) => {
    return {
        type: RESET_DATA,
        payload: data
    }
}

export const set_characters_found_action = (data) => {
    return {
        type: FIND_CHARACTERS,
        payload: data
    }
}