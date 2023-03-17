// make pure 
import { combineReducers } from "redux";
import { ADD_MOVIES ,ADD_FAVOURITES, REMOVE_FAVOURITES ,SET_SHOW_FAV , ADD_MOVIE_TO_LIST , ADD_SEARCH_RESULT} from "../actions";

const initialMovies ={

    list:[],
    favourites: [],
    showFav :false ,
}


export  function movies(state=initialMovies,action){

/*if(action.type===ADD_MOVIES)
{
    // return action.movies  ; basically apne ne ab object bana liya h list jo thi vo pehle movies hi h lekin ab fav bhi aagya h state m
    return {
        ...state ,
        list: action.movies  // kyoki apne ne action m movies hi daala h
    }
} 
return state ;

}
 In React Community we use Switch case           */  

switch (action.type) {
    case ADD_MOVIES:
         return {
        ...state ,
        list: action.movies  // kyoki apne ne action m movies hi daala h
    }
    
    case ADD_FAVOURITES:
         return {
        ...state ,
        favourites: [action.movie,...state.favourites]   // because in action we have set movie and state check in actions
    }
      case REMOVE_FAVOURITES:
        const index=state.favourites.indexOf(action.movie) ;
        state.favourites.splice(index,1) ; // means removing one object of index

         return {
        ...state ,
        favourites: [...state.favourites]   // because in action we have set movie and state check in actions
    }
       case SET_SHOW_FAV:

         return {
        ...state ,
        showFav: action.val   // because in action we have set movie and state check in actions
    }
    case ADD_MOVIE_TO_LIST: // because this will only add the new movie to state
      return {
        ...state,
        list: [action.movie, ...state.list],
      };


    default:
        return state;
}

}

// reducer for search
const initialSearchState = { 
    result: {},
      showSearchResults: false 
     };

export const search =(state=initialSearchState,action)=>{

switch (action.type) {
    case ADD_SEARCH_RESULT :
         return {
        ...state ,
        result: action.movie ,
        showSearchResults: true
    }
    case ADD_MOVIE_TO_LIST: // because this will only add the new movie to state
       
        return  {
            ...state ,
            showSearchResults:false 
    }
    
    default:
        return state;
}

}


//ROOT REDUCER :
// 1) ( what we wrote on our own)

// const intialRootState = { 
//     movies: initialMovies ,
//     search: initialSearchState
//  };
// export default  function rootReducer(state=intialRootState,action)
// {
//     return {
//         movies : movies(state.movies,action) , // reducer for movies
//         search: search(state.search,action)     // reducer for search
//     }
// }



//  2) Redux provides us with combine Reducer methdo inbuit it is a functn :  The combineReducers() function returns a new reducer function that is created by combining the output of multiple reducer functions into a single state object.
export default combineReducers({
    movies: movies ,
    search: search

})
