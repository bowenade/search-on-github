import React from 'react';
import { createStore } from "redux";
import { Provider } from "react-redux";
import SearchBar from './SearchBar';



const initialState = {
  //empty project
  project: [] 
};

function reducer(state = initialState, action) {

  switch(action.type) {
    case "SEARCH":
      console.log(action.project)
      return {
      
          project: action.project
        
      } 
      
    default:
      console.log(state)
      return state;
  }
}


const store  = createStore(reducer);

store.subscribe(() =>{
  console.log("Store updated!", store.getState())
});

function App() {

  return (
    <Provider store={store}>
      <SearchBar />
    </Provider>
  );
  
}


export default App;
