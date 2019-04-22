import { connect } from 'react-redux';
import {addUser, addUserPassword, addUserPasswordConfirmed } from "../actions";
import SignUp from "../Components/SignUp/SignUp";


const mapDispatchToProps = {
    username :addUser,
    password :addUserPassword,
    passwordConfirmed :addUserPasswordConfirmed 
}


export default connect(null, mapDispatchToProps)(SignUp);