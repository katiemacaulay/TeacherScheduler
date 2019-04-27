import { combineReducers } from 'redux'

function firstName(state = '', action){
    if(action.type === "ADD_FIRST_NAME"){
        return action.value
      }
      return state;
  }
  
  function lastName(state = '', action){
    if(action.type === "ADD_LAST_NAME"){
        return action.value
      }
      return state;
  }

  function email(state = '', action){
    if(action.type === "ADD_EMAIL"){
        return action.value
      }
      return state;
  }

  function username(state = '', action){
    if(action.type === "ADD_USERNAME"){
        return action.value
      }
      return state;
  }

  function password(state = '', action){
    if(action.type === "ADD_PASSWORD"){
        return action.value
      }
      return state;
  }

  function passwordConfirm(state = '', action){
    if(action.type === "ADD_PASSWORD_CONFIRM"){
        return action.value
      }
      return state;
  }


  function selectedDate(state = '', action){
    if(action.type === "SELECT_DAY"){
      return action.value
    }
    return state;
  }
  
  export default combineReducers({firstName, lastName, email, username, password, passwordConfirm, selectedDate})