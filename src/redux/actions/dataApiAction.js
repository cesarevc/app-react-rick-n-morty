export const GET_RICK_MORTY_DATA = 'GET_RICK_MORTY_DATA';
// export const RETURN_RICK_MORTY_DATA = 'RETURN_RICK_MORTY_DATA';

export const get_data_action = (data) => {
    return {
        type: GET_RICK_MORTY_DATA,
        payload: data
    }
}