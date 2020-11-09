
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

    return fetch(`${apiURL}?name=${name}`)
    .then(response => response.json())
    .then(response => {

        let objResponse = {
            info: {
                count: response.info.count,
                pages: response.info.pages
            },
            results: response.results
        }
        // let characters = response.results;

        // if(response.info.pages > 1){

            
        //     for(let i=2; i <= response.info.pages; i++){
                
        //         characters = characters.concat(await getListComplete(name, i));
        //     }
        //     console.log('CHAJOTO', characters)

        //     // objResponse.results.push(characters);
        // }

        return objResponse;


    })
    .catch( err => console.log(err))
}

const getListComplete = (name, page) => {
    return fetch(`${apiURL}?page=${page}&?name=${name}`)
    .then(res => res.json())
    .then(res => {
        console.log(res.results);
       res.results
    })
}