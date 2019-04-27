import { connect } from 'react-redux';
import Today from "../Components/MainPage/Today";


function mapStateToProps(state){
  return {
    selectedDate: state.selectedDate
  }
}

export default connect(mapStateToProps)(Today);