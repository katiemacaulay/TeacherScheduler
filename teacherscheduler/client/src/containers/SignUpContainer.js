import { connect } from 'react-redux';
import {addUser, addUserPassword, addUserPasswordConfirmed } from "../actions";
import SignUp from "/Users/katiemacaulay/finalProject/teacherscheduler/client/src/Components/SignUp/SignUp";


const mapDispatchToProps = {
    username :addUser,
    password :addUserPassword,
    passwordConfirmed :addUserPasswordConfirmed 
}


export default connect(null, mapDispatchToProps)(SignUp);