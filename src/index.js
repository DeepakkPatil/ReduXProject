import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers';



const root = ReactDOM.createRoot(document.getElementById('root'));

//middleware which is exectured bw dispath and reducer , ie as soon as dispatch is called it calls middle ware
// then middle ware updates action and then agai calls dispatch which sends action to reducer

const logger=({dispatch,getState})=>(next)=>(action)=>{ 
  console.log('ACTION_TYPE is',action.type)
  next(action) ;
  }

// this is a thunk we can use thunk from react-thunk as well by using npm i redux-thunk
// import thunk from 'redux-thunk'; sirf ye line ayegi 

const thunk=({dispatch,getState})=>(next)=>(action)=>{ 
  if(typeof action==='function')
 { action(dispatch)
    return ;
  }
  next(action) ;
  }

 export const StoreContext= createContext() ;
//  console.log(StoreContext) ; this has Consumer and Provider 



export class StoreProvider extends React.Component {

  render() {
    const { store }= this.props ;
    return (
      <StoreContext.Provider value={store}>
        { this.props.children}
      </StoreContext.Provider>
    )
  }
}



const store =createStore(rootReducer,applyMiddleware(logger,thunk)) ; // we pass reducer to store

root.render(
  <React.StrictMode>
    <StoreProvider store={store}>
    <App  /> 
    </StoreProvider>
  </React.StrictMode>
);
