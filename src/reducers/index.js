// make pure 
import { ADD_MOVIES } from "../actions";

const initialMovies ={

    list:[],
    favourites: [],
}


export default  function movies(state=initialMovies,action){

if(action.type===ADD_MOVIES)
{
    // return action.movies  ; basically apne ne ab object bana liya h list jo thi vo pehle movies hi h lekin ab fav bhi aagya h state m
    return {
        ...state ,
        list: action.movies  // kyoki apne ne action m movies hi daala h
    }
} 
return state ;
}

