import React  from 'react'
import { addFavourites, removeFavourites } from '../actions';

 export class MovieCard extends React.Component {
  
 
  
  handleFavourites=()=>
  {
    const { movie } =this.props ;
     const { dispatch} = this.props ;
    dispatch(addFavourites(movie))
  }

  removeFav=()=>{
     const { movie } =this.props ;
     const { dispatch} = this.props ;

    dispatch(removeFavourites(movie))
  }
  
  render() {

    const { movie , isMovieFav} = this.props ; 
    return (
      <div className='movie-card'>
        <div className='left'>   
            <img alt='movie' src={movie.Poster}/>     
        </div>
        <div className='right'>    
        <div className='title'>{ movie.Title }</div>
        <div className='plot'>{ movie.Plot }</div>
        <div className='footer'>
                <div className='rating'>
                        { movie.imdbRating}⭐
                </div>
                {
                  isMovieFav ? (<button className='unfavourite-btn' onClick={this.removeFav}>Remove from Favourite</button>):
                  (<button className='favourite-btn' onClick={this.handleFavourites}>Favourite</button>
      )
      
                }
                  </div>
        </div>
      </div>
    )
  }
}


