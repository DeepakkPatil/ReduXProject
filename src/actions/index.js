// we write all actions here

// {
//     type : 'INCREASE_COUNT',
//     movies: [] 
// }


// action types
export const ADD_MOVIES = 'ADD_MOVIES' ;


// action Creators 
export const addMovies= (data)=>{
    return {
        type: ADD_MOVIES ,
        movies : data
    }
}