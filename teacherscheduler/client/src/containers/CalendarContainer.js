import { connect } from 'react-redux';
import { selectDate } from "../actions";
import Calendar from "../Components/MainPage/Calendar";

const mapDispatchToProps = {
    selectedDate :selectDate
}

export default connect(null, mapDispatchToProps)(Calendar);