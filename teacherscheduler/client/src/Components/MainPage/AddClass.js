import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import withStyles from '@material-ui/core/styles/withStyles';
import Checkbox from '@material-ui/core/Checkbox';


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
      }
  });



class addClass extends React.Component{
    constructor(props){
      super(props);
      this.classes = props.classes;
      this.state = {
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']
      };
    
      this.handleCheckbox = name => event => {
        this.setState({ [name]: event.target.checked });
      };
    }
  
    render(props){
      return (
        <React.Fragment>
          <Typography variant="h6" gutterBottom>
            Add a Class
          </Typography>
          <Grid container spacing={24}>
            <Grid item xs={12} md={6}>
              <TextField required id="courseName" label="Name of Class" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    id="time"
                    label="Class Start Time"
                    type="time"
                    defaultValue="07:30"
                    className={this.classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    inputProps={{
                    step: 60, // 1 min
                    }}
                />
            </Grid>
            <Grid item xs={12} md={6}>
            <TextField
                    id="time"
                    label="Class End Time"
                    type="time"
                    defaultValue="07:30"
                    className={this.classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    inputProps={{
                    step: 60, // 1 min
                    }}
                />
            </Grid>
            <Grid item xs={12}>
              <div>
                {this.state.days.map((day, i) => {
                  return <div><Checkbox
                  key={i}
                  checked={this.state.day}
                  onChange={this.handleCheckbox(day)}
                  value={this.state.day}
                  color="primary"
                /><div>{day}</div>
                </div>
                })}
              </div>
            </Grid>
            <Grid item xs={12}>
             <TextField required id="rotation" label="Class instead rotates this many days: (insert numbers only)" fullWidth />
            </Grid>
          </Grid>
        </React.Fragment>
      );
    }
}
export default withStyles(styles)(addClass);