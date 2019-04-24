import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import withStyles from '@material-ui/core/styles/withStyles';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormLabel from '@material-ui/core/FormLabel';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"


const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    root: {
        display: 'flex',
      },
    formControl: {
        margin: theme.spacing.unit * 3,
      },
    inline: {
      display: 'inline-block',
    }
  });



class addClass extends React.Component{
    constructor(props){
      super(props);
      this.classes = props.classes;
      this.state = {
        courseName: '',
        m: false,
        t: false,
        w: false,
        th: false,
        f: false,
        days: ['m', 't', 'w', 'th', 'f'],
        rotation: '',
        labelWidth: 0,
        startDate: new Date(),
        endDate: new Date()
      };
      this.handleChangeTime = this.handleChangeTime.bind(this);
      this.handleChangeTimeEnd = this.handleChangeTimeEnd.bind(this);

      this.handleCheckbox = name => event => {
        this.setState({ [name]: event.target.checked });
      };

      this.handleChanges = event => {
      this.setState({ [event.target.name]: event.target.value });
      };
    }
  
    handleChangeTime(date) {
      this.setState({
        startDate: date
      });
    }

    handleChangeTimeEnd(date) {
      this.setState({
        endDate: date
      });
    }

    componentDidMount() {
      this.setState({
        labelWidth: 30,
      });
    }

    // handleSubmit(e) {
    //   e.preventDefault();
    //   let data = {
    //     'courseName': this.state.courseName,
    //     'days': [
    //       this.state.m,
    //       this.state.t,
    //       this.state.w,
    //       this.state.th,
    //       this.state.f
    //     ],
    //     'rotation': this.state.rotation,
    //     'startDate': this.state.startDate,
    //     'endDate': this.state.endDate
    //   }
    //   console.log(data)
  
    //   let notValid = Object.values(data).filter(x => x === '').length > 0
    //   if(notValid){
    //     return alert('you are missing a field')
    //   }
    //   fetch('/user', {
    //     method: 'POST',
    //     headers: {
    //       "Content-Type": "application/json" 
    //     },
    //     body: JSON.stringify(data)
    //   });
    //   alert('you made an user!')
    // }


    render(props){
      return (
        <div>
        <React.Fragment>
          <Typography variant="h6" gutterBottom>
            Add a Class
          </Typography>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <TextField required id="courseName" label="Name of Class" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormLabel component="DatePicker">Start Time </FormLabel>
              <DatePicker
                  selected={this.state.startDate}
                  onChange={this.handleChangeTime}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={1}
                  dateFormat="h:mm aa"
                  timeCaption="Time"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormLabel component="DatePicker">End Time </FormLabel>
                <DatePicker
                    selected={this.state.endDate}
                    onChange={this.handleChangeTimeEnd}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={1}
                    dateFormat="h:mm aa"
                    timeCaption="Time"
                />
            </Grid>
            <Grid item xs={12}>
              <FormLabel>Option 1 </FormLabel>
              <div>
                {this.state.days.map((day, i) => {
                  return <div className={this.classes.inline}>
                  <div className={this.classes.inline}>{day}</div>
                  <Checkbox 
                  className={this.classes.inline}
                  key={i}
                  checked={this.state.day}
                  onChange={this.handleCheckbox(day)}
                  value={this.state.day}
                  color="primary"
                />
                </div>
                })}
              </div>
            </Grid>
            <Grid item xs={12}>
            <FormLabel>Option 2 </FormLabel>
            <div>
              <InputLabel htmlFor="age-simple">Rotates Every: </InputLabel>
              <Select
                value={this.state.rotation}
                onChange={this.handleChanges}
                inputProps={{
                  name: 'rotation',
                  id: 'rotation',
                }}
              >
            <MenuItem value="">none.</MenuItem>
            <MenuItem value={2}>2 days</MenuItem>
            <MenuItem value={3}>3 days</MenuItem>
            <MenuItem value={4}>4 days</MenuItem>
            <MenuItem value={5}>5 days</MenuItem>
            <MenuItem value={6}>6 days</MenuItem>
            <MenuItem value={7}>7 days</MenuItem>
            <MenuItem value={8}>8 days</MenuItem>
            <MenuItem value={9}>9 days</MenuItem>
            <MenuItem value={10}>10 days</MenuItem>

          </Select> 
          </div>         
        </Grid>
          </Grid>
        </React.Fragment>
        </div>
      );
    }
}
export default withStyles(styles)(addClass);