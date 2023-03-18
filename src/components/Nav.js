import React, { Component } from 'react';
import { addMovieToList, handleMovieSearch } from '../actions';
import { connect } from 'react-redux';

 class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }
  handleAddToMovies = (movie) => {
     // we can fetch data here but better to make an action 
    this.props.dispatch(addMovieToList(movie));
  };

  handleSearchClick = (e) => {
  
    const { searchText } = this.state;
    if(searchText.length>3)
    this.props.dispatch(handleMovieSearch(searchText));
  
  };

  handleSearchChange = (e) => {
    
    
    this.setState({
      searchText: e.target.value,
    });

    
    
  };

  render() {
    const { showSearchResults, result  } = this.props.search;
    
    
    return (
      <div className="nav">
         <img src='https://i.ibb.co/TgbrjTg/translogo-Dark.png' className='logo'/>
        <div className="search-container">
          <div className='searchField'>
          <input 
          onChange={this.handleSearchChange}  
          onKeyDown={ this.handleSearchClick}
            placeholder='search movie...' />
          <button id="search-btn" onClick={this.handleSearchClick}>
            Search
          </button>
          </div>
          {showSearchResults && (
            <div className="search-results">
              <div className="search-result">
                <img src={result.Poster} alt="search-pic" />
                <div className="movie-info">
                  <span>{result.Title}</span>
                  </div>
                  <div className='content'>
                  <span>{result.Plot}</span>
                </div>
                 <button onClick={() => this.handleAddToMovies(result)}>
                    Add to Movies
                  </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

//  class  NavWrapper extends React.Component{

//   render()
//   {
//     return(
//     <StoreContext.Consumer>
      
//       {
//         (store)=>{ 
        
//         return<Nav dispatch={store.dispatch} search={ this.props.search} />} // beacuse we have stated props there
//       }
//     </StoreContext.Consumer>)
//   }
// }

function mapStatetoProps({ search })
{
  return {
    search ,
  }
}
export default connect(mapStatetoProps)(Nav) ;