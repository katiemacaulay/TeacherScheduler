import { connect } from 'react-redux';
import SignUpSlider from "../Components/SignUp/SignUpSlider";


function mapStateToProps(state){
  return {
    firstName: state.firstName,
    lastName: state.lastName,
    email: state.email,
    username: state.username,
    password: state.password,
    passwordConfirmed: state.passwordConfirmed
  }
}

export default connect(mapStateToProps)(SignUpSlider);