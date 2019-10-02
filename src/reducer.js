const initialState = {
    project: [] 
  };

function reducer(state = initialState, action) {

    switch(action.type) {
      case "SEARCH_ASYNC":
        console.log("reducer called")
        return {
            project: action.project
        } 
        
      case "SEARCH_EMPTY":
        return {
          project: []
        }
      default:
        // console.log(state)
        return state;
    }
  }

  export default reducer;