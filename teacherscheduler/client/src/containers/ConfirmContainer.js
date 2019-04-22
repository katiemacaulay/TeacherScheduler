import { connect } from 'react-redux';
import ConfirmPage from "/Users/katiemacaulay/finalProject/teacherscheduler/client/src/Components/SignUp/ConfirmPage";


function mapStateToProps(state){
  return {
    firstName: state.firstName,
    lastName: state.lastName,
    email: state.email,
    username: state.username,
    password: state.password
  }
}

export default connect(mapStateToProps)(ConfirmPage);