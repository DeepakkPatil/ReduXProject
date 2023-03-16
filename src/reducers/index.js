// make pure 
import { combineReducers } from "redux";
import { ADD_MOVIES ,ADD_FAVOURITES, REMOVE_FAVOURITES ,SET_SHOW_FAV } from "../actions";

const initialMovies ={

    list:[],
    favourites: [],
    showFav :false 
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
        console.log(state,action) ;
         return {
        ...state ,
        favourites: [action.movie,...state.favourites]   // because in action we have set movie and state check in actions
    }
      case REMOVE_FAVOURITES:
        console.log(state,action) ;
        const index=state.favourites.indexOf(action.movie) ;
        state.favourites.splice(index,1) ; // means removing one object of index

        // const filteredArray=state.favourites.filter(movie=>movie.Title!==action.movie.Title) ;
        // return {
        //      ...state ,
        // favourites: filteredArray
        // }


         return {
        ...state ,
        favourites: [...state.favourites]   // because in action we have set movie and state check in actions
    }
       case SET_SHOW_FAV:

         return {
        ...state ,
        showFav: action.val   // because in action we have set movie and state check in actions
    }

    default:
        return state;
}

}

// reducer for search
const initialSearchState = { result: {} };

export const search =(state=initialSearchState,action)=>{


return state ;
}


//ROOT REDUCER : ( what we wrote on our own)

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



// Redux provides us with combine Reducer methdo inbuit
export default combineReducers({
    movies: movies ,
    search: search

})
