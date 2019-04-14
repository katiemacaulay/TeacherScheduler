import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

function SignIn(props) {
  const { classes } = props;

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input id="email" name="email" autoComplete="email" autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input name="password" type="password" id="password" autoComplete="current-password" />
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign in
          </Button>
        </form>
      </Paper>
    </main>
  );
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignIn);

// import React, { Component } from "react";
// import PropTypes from "prop-types";
// import { FormGroup, FormLabel, FormControl, Button } from "react-bootstrap";

// class SignIn extends Component {
//   constructor() {
//     super();

//     this.state = {
//       username: "",
//       password: ""
//     };
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     this.props.onSignIn({
//       username: this.state.username,
//       password: this.state.password,
//     });
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit.bind(this)}>
//         <FormGroup>
//           <FormLabel>Username</FormLabel>
//           <FormControl
//             type="email"
//             name="username"
//             onChange={e => {
//               this.setState({[e.target.name]: e.target.value});
//             }}
//             placeholder="Enter Username"
//             value={this.state.username}
//           />
//         </FormGroup>

//         <FormGroup>
//           <FormLabel>Password</FormLabel>
//           <FormControl
//             type="password"
//             name="password"
//             onChange={e => {
//               this.setState({[e.target.name]: e.target.value});
//             }}
//             placeholder="Enter Password"
//             value={this.state.password}
//           />
//         </FormGroup>

//         <Button type="submit">
//          Sign In
//        </Button>
//       </form>
//     );
//   }
// }

// SignIn.propTypes = {
//   onSignIn: PropTypes.func.isRequired
// };

// export default SignIn;