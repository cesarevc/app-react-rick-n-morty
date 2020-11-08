
const apiURL = 'https://rickandmortyapi.com/api/character/';

export const getAllCharacters =() =>{

    return fetch(apiURL)
    .then(response => response.json())
    // .then(response => {

    // //   const {data = []} = response.results;

    // //   if(Array.isArray(data)) {
        
    // //     const characters = data.map(data => {
    // //         const {images, title, id} = data;
    // //         const {url} = images.downsized_medium;
    // //         return {title, id, url};
    // //     });
    // //     return characters;
    //     return response;

    //   }
    // })
    .catch( err => console.log(err))
}

// id, name, status, species, type, gender, origin, location, image, episode, url, created
export const getCharacter = (name) =>{

    return fetch( `${apiURL}/?name=${name}`)
    .then(response => response.json())
    .catch( err => console.log(err))
}