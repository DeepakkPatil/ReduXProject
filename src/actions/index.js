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
export const ADD_MOVIE_TO_LIST = "ADD_MOVIE_TO_LIST";
export const ADD_SEARCH_RESULT='ADD_SEARCH_RESULT'


// action Creators ie in action we define type and  ( these are passed within a dispatch)
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
export function addMovieToList(movie) {
  return {
    type: ADD_MOVIE_TO_LIST,
    movie:movie,
  };
}

 export function handleMovieSearch(movie)
{
    const url = `https://www.omdbapi.com/?i=tt3896198&apikey=4305844f&t=${movie}` ; // use &s for array

//     const response = await fetch(url) ;
//   const m = await response.json() ;
//   console.log(m) ;


    // we need to dispatch an action 

    return function(dispatch)
    {
                fetch(url)
    .then(response=>response.json())
    .then(movie=> {
        console.log(movie)
        dispatch(addMovieSearchResult(movie)) ;
        }) ;

    }

}

export const addMovieSearchResult=(movie)=>
{
    return {
        type : ADD_SEARCH_RESULT ,
        movie
    }
}