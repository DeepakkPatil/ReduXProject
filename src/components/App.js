import React from 'react';
import {  Nav} from './Nav';
import { MovieCard } from './MovieCard';
import { data} from '../data'
import { addMovies, setsShowFav } from '../actions';




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

  isMovieFav=(movie)=>{
    const { store }= this.props ;
    const {favourites}= store.getState() ;
    const index=favourites.indexOf(movie) ;
    if(index===-1)
      return false ;
     return true ;
  }

onChangeTab=(val)=>{
  this.props.store.dispatch(setsShowFav(val))
}

  render (){

    //  const data= this.props.store.getState() ; now state has list and favourites 
    const { list ,favourites ,showFav }= this.props.store.getState() ;

    const displayMovies= showFav? favourites:list ;
       console.log("render", this.props.store.getState())
    return (<div className="App">
      <Nav />
      <div className="main">
          <div className="tabs">
            <div className={`tab ${ showFav ? '' : 'active-tabs' }`} role='button' onClick={()=>this.onChangeTab(false)} >Movies</div>
            <div className={`tab ${ !showFav ? '' : 'active-tabs' }`} role='button' onClick={()=>this.onChangeTab(true)}>Favourites</div>
          </div>
          <div className="list">
              { displayMovies.map((movie,index)=>{
                return (
                  <MovieCard 
                  movie={movie} 
                  key={`movie-${index}`} 
                  dispatch={this.props.store.dispatch } 
                  isMovieFav={this.isMovieFav(movie)}
                  />
                )
              })}
          </div>  
          {
            displayMovies.length===0 ? <div className='no-movies'> No Movies to Display</div> : null
          }
      </div>
    </div>
  );
  }
}

export default App;
