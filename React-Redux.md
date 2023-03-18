Basically saari Cheeze react-redux provide krta h default m ,

like Providers , thunk , middle-wares, connect() // so wedont need to write all

-in index.js

```js
import { Provider  } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';


const root = ReactDOM.createRoot(document.getElementById('root'));


const logger=({dispatch,getState})=>(next)=>(action)=>{ 
  console.log('ACTION_TYPE is',action)
  next(action) ;
  }


const store =createStore(rootReducer,applyMiddleware(logger,thunk)) ; // we pass reducer to store

root.render(
  <React.StrictMode>
   <Provider store={store} >
    <App  /> 
    </Provider>
  </React.StrictMode>
);
Footer

```

- for component we dont use wrapper instead we use connect() which uses 

```js
import { connect } from 'react-redux';

// component which could be using state before render functn

function mapStatetoProps(state){

  return {
    movies: state.movies , // this is root state
    search : state.search
  }
}

const connectedAppComponent = connect(mapStatetoProps)(App) ;
export default connectedAppComponent ;

```
