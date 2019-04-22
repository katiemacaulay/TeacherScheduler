import { connect } from 'react-redux';
import {addUserFirstName, addUserLastName, addUserEmail } from "../actions";
import Subscribe from "/Users/katiemacaulay/finalProject/teacherscheduler/client/src/Components/SignUp/Subscribe";


const mapDispatchToProps = {
    firstName :addUserFirstName,
    lastName :addUserLastName,
    email :addUserEmail
}


export default connect(null, mapDispatchToProps)(Subscribe);