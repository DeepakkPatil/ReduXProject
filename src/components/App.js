import React from 'react';
import {  Nav} from './Nav';
import { MovieCard } from './MovieCard';
import { data} from '../data'
import { addMovies } from '../actions';




class App extends React.Component {

  componentDidMount(){

    
    const { store }= this.props ;
    // make api calls here
    
    //subscribe to store :
    store.subscribe(()=>{
      console.log("State Updated")
      this.forceUpdate() ;
    })
    
    // dispatch the action  
    // store.dispatch({
    //   type: 'ADD_MOVIES', 
    //   movies: data
    // })

    // the above method is lame aacha use kro 
    store.dispatch(addMovies(data)) ;

 

  }


  render (){

    //  const data= this.props.store.getState() ; now state has list and favourites 
    const { list }= this.props.store.getState() ;
      console.log("render", this.props.store.getState())
    return (<div className="App">
      <Nav />
      <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>
          <div className="list">
              { list.map((movie,index)=>{
                return (
                  <MovieCard movie={movie} key={`movie-${index}`} />
                )
              })}
          </div>  
      </div>
    </div>
  );
  }
}

export default App;
