import React from 'react';
import Nav from './Nav'
import { MovieCard } from './MovieCard';
import { data} from '../data'
import { addMovies, setsShowFav } from '../actions';
import { connect } from 'react-redux';


class App extends React.Component {

  componentDidMount(){

    this.props.dispatch(addMovies(data)) ;
  }

  isMovieFav=(movie)=>{
    const { movies }= this.props ;
 
    const {favourites} = movies ;
    const index=favourites.indexOf(movie) ;
    if(index===-1)
      return false ;
     return true ;
  }

onChangeTab=(val)=>{
  this.props.dispatch(setsShowFav(val))
}

  render (){

    console.log(this.props)
    const { movies, search }= this.props ;
    const { list ,favourites ,showFav }= movies ;

    const displayMovies= showFav? favourites:list ;
    return (<div className="App">
      <Nav search={search}  />
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
                  dispatch={this.props.dispatch } 
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

function mapStatetoProps(state){

  return {
    movies: state.movies ,
    search : state.search
  }
}

const connectedAppComponent = connect(mapStatetoProps)(App) ;
export default connectedAppComponent ;
