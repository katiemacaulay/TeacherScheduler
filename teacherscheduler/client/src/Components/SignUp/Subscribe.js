import React from 'react';
import { FormGroup, FormLabel, FormControl } from "react-bootstrap";
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block',
    marginLeft: 40
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing.unit,
  },
  boxes:{
    margin: 25,
    fontSize: 17
  },
  boxSize:{
    fontSize: 17
  }
});

class SubscribeForm extends React.Component{
  constructor(props){
    super(props);
    this.classes = props.classes;
  }

  render(props){
    return (
      <main className={this.classes.main}>
      <CssBaseline>
      <form className={this.classes.form} 
      >
        <FormGroup className={this.classes.boxes}>
        <FormLabel>
          First Name </FormLabel>
          <FormControl
            required={true}
            className={this.classes.boxSize}
            type="firstName"
            name="firstName"
            onChange={e => {
              if(this.props.firstName){
                this.props.firstName(e.target.value)
              }
            }}
            placeholder=" Enter First Name"
          />
        </FormGroup>

          <FormGroup className={this.classes.boxes}>
           <FormLabel>Last Name </FormLabel>
          <FormControl
            required={true}
            className={this.classes.boxSize}
            type="lastName"
            name="lastName"
            onChange={e => {
              if(this.props.lastName){
                this.props.lastName(e.target.value)
              }
            }}
            placeholder=" Enter Last Name"
            // value={this.state.lastName}
          />
           </FormGroup>

          <FormGroup className={this.classes.boxes}>
           <FormLabel>Email </FormLabel>
          <FormControl
            required={true}
            className={this.classes.boxSize}
            type="email"
            name="email"
            onChange={e => {
              if(this.props.email){
                this.props.email(e.target.value)
              }
            }}
            placeholder=" Enter Email Address"
            // value={this.state.email}
          />
        </FormGroup>

        </form>
      </CssBaseline>
      </main>
    );
  }
}


export default withStyles(styles)(SubscribeForm);