function user(state = '', action){
    if(action.type === "ADD_USER"){
        return action.value
      }
      return state;
  }
  