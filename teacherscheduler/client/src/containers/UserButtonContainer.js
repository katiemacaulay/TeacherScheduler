import { connect } from 'react-redux';
import {addUser} from "../actions";
import UserButtons from "../components/UserButtons";


const mapDispatchToProps = {
   add: addUser
  }


export default connect(null,mapDispatchToProps)(UserButtons);