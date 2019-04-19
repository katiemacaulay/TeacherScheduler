import React from 'react';
import { FormGroup, FormLabel, FormControl, Button } from "react-bootstrap";
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
    this.state={
      firstName: '',
      lastName: '',
      email: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }


  handleSubmit(e) {
    e.preventDefault();
    let data = this.state

    fetch('/user', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json" 
      },
      body: JSON.stringify(data)
    });
    alert('you made an user!')
  }
  render(){
    return (
      <main className={this.classes.main}>
      <CssBaseline>
      <form className={this.classes.form} onSubmit={this.handleSubmit.bind(this)}>
        <FormGroup className={this.classes.boxes}>
        <FormLabel>
          First Name </FormLabel>
          <FormControl
            className={this.classes.boxSize}
            type="firstName"
            name="firstName"
            onChange={e => {
              this.setState({[e.target.name]: e.target.value});
              localStorage.setItem([e.target.name], e.target.value);
            }}
            placeholder=" Enter First Name"
            value={this.state.firstName}
          />
        </FormGroup>

          <FormGroup className={this.classes.boxes}>
           <FormLabel>Last Name </FormLabel>
          <FormControl
            className={this.classes.boxSize}
            type="lastName"
            name="lastName"
            onChange={e => {
              this.setState({[e.target.name]: e.target.value});
              localStorage.setItem([e.target.name], e.target.value)
            }}
            placeholder=" Enter Last Name"
            value={this.state.lastName}
          />
           </FormGroup>

          <FormGroup className={this.classes.boxes}>
           <FormLabel>Email </FormLabel>
          <FormControl
            className={this.classes.boxSize}
            type="email"
            name="email"
            onChange={e => {
              this.setState({[e.target.name]: e.target.value});
              localStorage.setItem([e.target.name], e.target.value)
            }}
            placeholder=" Enter Email Address"
            value={this.state.email}
          />
        </FormGroup>

        </form>
      </CssBaseline>
      </main>
    );
  }
}


export default withStyles(styles)(SubscribeForm);