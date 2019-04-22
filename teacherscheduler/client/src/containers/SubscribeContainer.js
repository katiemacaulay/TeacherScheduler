import { connect } from 'react-redux';
import {addUserFirstName, addUserLastName, addUserEmail } from "../actions";
import Subscribe from "../Components/SignUp/Subscribe";


const mapDispatchToProps = {
    firstName :addUserFirstName,
    lastName :addUserLastName,
    email :addUserEmail
}


export default connect(null, mapDispatchToProps)(Subscribe);