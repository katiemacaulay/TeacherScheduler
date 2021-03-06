import React, { Component } from "react";
import { FormGroup, FormLabel, FormControl } from "react-bootstrap";
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block',
    marginLeft: 40
  },
  form: {
    width: '100%',
    marginTop: theme.spacing.unit,
  },
  boxes:{
    margin: 20,
    fontSize: 17
  },
  boxSize:{
    fontSize: 17
  }
});

class SignUp extends Component {
  constructor(props) {
    super();
    this.classes = props.classes;
    // this.state = {
    //   username: "",
    //   password: "",
    //   confirmPassword: "",
    // };
  }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   this.props.onSignUp({
  //     username: this.state.username,
  //     password: this.state.password,
  //     confirmPassword: this.state.confirmPassword
  //   });
  // }

  render(props) {
    return (
      <main className={this.classes.main}>
      <CssBaseline>
      <form className={this.classes.form} 
      // onSubmit={this.handleSubmit.bind(this)}
      >
        <FormGroup className={this.classes.boxes}>
          <FormLabel>Username  </FormLabel>
          <FormControl
            className={this.classes.boxSize}
            type="username"
            name="username"
            onChange={e => {
              if(this.props.username){
                this.props.username(e.target.value)
              }
            }}
            placeholder=" Enter Username"
            // value={this.state.username}
          />
        </FormGroup>

        <FormGroup className={this.classes.boxes}>
          <FormLabel>Password  </FormLabel>
          <FormControl
            className={this.classes.boxSize}
            type="password"
            name="password"
            onChange={e => {
              if(this.props.password){
                this.props.password(e.target.value)
              }
            }}
            placeholder=" Enter Password"
            // value={this.state.password}
          />
        </FormGroup>

        <FormGroup className={this.classes.boxes}>
          <FormLabel>Confirm Password  </FormLabel>
          <FormControl
            className={this.classes.boxSize}          
            type="password"
            name="confirmPassword"
            onChange={e => {
              if(this.props.passwordConfirmed){
                this.props.passwordConfirmed(e.target.value)
              }
            }}
            placeholder=" Confirm Password"
            // value={this.state.confirmPassword}
          />
        </FormGroup>
      </form>
      </CssBaseline>
      </main>
    );
  }
}

export default withStyles(styles)(SignUp);