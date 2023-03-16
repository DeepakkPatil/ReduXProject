// we write all actions here

// {
//     type : 'INCREASE_COUNT',
//     movies: [] 
// }


// action types
export const ADD_MOVIES = 'ADD_MOVIES' ;
export const ADD_FAVOURITES = 'ADD_FAVOURITES' ;
export const REMOVE_FAVOURITES= 'REMOVE_FAVOURITES' ;
export const SET_SHOW_FAV= 'SET_SHOW_FAV' ;


// action Creators 
export const addMovies= (data)=>{
    return {
        type: ADD_MOVIES ,
        movies : data
    }
}
export const addFavourites= (data)=>{
    return {
        type: ADD_FAVOURITES ,
        movie:data
    }
}
export const removeFavourites= (data)=>{
    return {
        type: REMOVE_FAVOURITES ,
        movie:data
    }
}
export const setsShowFav= (val)=>{
    return {
        type: SET_SHOW_FAV ,
        val
    }
}