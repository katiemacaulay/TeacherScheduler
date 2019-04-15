import { connect } from 'react-redux';
import Users from "../components/Users";


function mapStateToProps(state){
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(Users);