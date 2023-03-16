import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { createStore } from 'redux';
import rootReducer from './reducers';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store =createStore(rootReducer) ; // we pass reducer to store

// console.log("store",store.getState()) // initial state show krega

// store.dispatch({
//   type: 'ADD_MOVIES', /*  jo reducer m likha h voh action */
//   movies : [{ 'name' : 'Deepak'}]
// })

// console.log("store",store.getState()) // final state show krega


root.render(
  <React.StrictMode>
    <App store={store} />     {/*  IMP IMP IMP we passed the store as prop to the APP so that we can use it  */}
  </React.StrictMode>
);
