import React from 'react';
import { Provider , connect } from 'react-redux';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
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
