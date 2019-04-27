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
import Button from '@material-ui/core/Button';
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
        rotation: 0,
        rotationDay: '',
        labelWidth: 0,
        startDate: new Date(),
        endDate: new Date()
      };
      this.handleChangeTime = this.handleChangeTime.bind(this);
      this.handleChangeTimeEnd = this.handleChangeTimeEnd.bind(this);
      this.findDays = this.findDays.bind(this);


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
    
    findDays(){
      let days = []
      if(this.state.m === true){
        days.push('m')
      }
      if(this.state.t === true){
        days.push('t')
      }
      if(this.state.w === true){
        days.push('w')
      }
      if(this.state.th === true){
        days.push('h')
      }
      if(this.state.f === true){
        days.push('f')
      }
      return days.join('')
    }

    handleSubmit(e) {
      e.preventDefault();
      let data = {
        'courseName': this.state.courseName,
        'days': this.findDays(),
        'rotation': this.state.rotation,
        'rotationDay': this.state.rotationDay,
        'startTime': this.state.startDate,
        'endTime': this.state.endDate
      }
  
      fetch('/api/schedule/add', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json" 
        },
        body: JSON.stringify(data)
      }).then((response) => {
        this.props.getSchedule()
      })
    }


    render(props){
      return (
        <div>
        <React.Fragment>
          <Typography variant="h6" gutterBottom>
            Add a Class
          </Typography>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <TextField required 
              type="courseName"
              name="courseName"
              placeholder="Class Name"
              value={this.state.courseName}
              onChange={e => {
                this.setState({[e.target.name]: e.target.value});
              }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormLabel>Start Time </FormLabel>
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
            <Grid item xs={12}>
              <FormLabel>End Time </FormLabel>
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
            <div> Choose whether your class meets every week on a specific day or if it rotates</div>
            <Grid item xs={12}>
              <FormLabel>Option 1 </FormLabel>
              <div>
                {this.state.days.map((day, i) => {
                  return <div key={i} className={this.classes.inline}>
                  <div className={this.classes.inline}>{day}</div>
                  <Checkbox 
                  className={this.classes.inline}
                  checked={this.state.day}
                  onChange={this.handleCheckbox(day)}
                  value={this.state.day}
                  color="primary"
                />
                </div>
                })}
              </div>
            </Grid>
            <FormLabel>Option 2 </FormLabel>
            <Grid item xs={12}>
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
            <Grid item xs={12}>
            <div>
              <InputLabel htmlFor="age-simple">Rotation Starts on:</InputLabel>
              <Select
                value={this.state.rotationDay}
                onChange={this.handleChanges}
                inputProps={{
                  name: 'rotationDay',
                  id: 'rotationDay',
                }}
                  >
                <MenuItem value="">none.</MenuItem>
                <MenuItem value={1}>Day 1</MenuItem>
                <MenuItem value={2}>Day 2</MenuItem>
                <MenuItem value={3}>Day 3</MenuItem>
                <MenuItem value={4}>Day 4</MenuItem>
                <MenuItem value={5}>Day 5</MenuItem>
                <MenuItem value={6}>Day 6</MenuItem>
                <MenuItem value={7}>Day 7</MenuItem>
                <MenuItem value={8}>Day 8</MenuItem>
                <MenuItem value={9}>Day 9</MenuItem>
                <MenuItem value={10}>Day 10</MenuItem>

              </Select> 
          </div>         
            </Grid>
            <Button
            variant="contained"
            color="primary"
            onClick={(e) => this.handleSubmit(e)}
            // className={classes.button}
            >
            Add Class
            </Button>
          </Grid>
        </React.Fragment>
        </div>
      );
    }
}
export default withStyles(styles)(addClass);