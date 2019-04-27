export function addUserFirstName(txt){
  return {
    type:"ADD_FIRST_NAME",
    value:txt
  }
}
export function addUserLastName(txt){
  return {
    type:"ADD_LAST_NAME",
    value:txt
  }
}
export function addUserEmail(txt){
  return {
    type:"ADD_EMAIL",
    value:txt
  }
}
export function addUser(txt){
  return {
    type:"ADD_USERNAME",
    value:txt
  }
}
export function addUserPassword(txt){
  return {
    type:"ADD_PASSWORD",
    value:txt
  }
}

export function addUserPasswordConfirmed(txt){
  return {
    type:"ADD_PASSWORD_CONFIRM",
    value:txt
  }
}

export function selectDate(txt){
  console.log(txt)
  return {
    type:"SELECT_DAY",
    value:txt
  }
}