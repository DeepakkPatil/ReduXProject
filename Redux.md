<h4>Setting Context in Redux</h4>
step1)

```js
 export const StoreContext= createContext() ;
 
```
step2) Make a provider
```js
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

```
step3) Use Provider
```js
root.render(
  <React.StrictMode>
    <StoreProvider store={store}>
    <App  /> 
    </StoreProvider>
  </React.StrictMode>
);

```

step4) Now Wrap the components using <nameofComponent>Wrapper
  ```js
  class  NavWrapper extends React.Component{

  render()
  {
    return(
    <StoreContext.Consumer>
      
      {
        (store)=>{ 
        
        return<Nav dispatch={store.dispatch} search={ this.props.search} />} // beacuse we have stated props there
      }
    </StoreContext.Consumer>)
  }
}

export default NavWrapper; // export it as default not the Navbar component it wont be used. this will only be used
  
  ```
