import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

import SignUp from "./SignUp";
import Subscribe from "./Subscribe";


const styles = theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginRight: theme.spacing.unit,
  },
  completed: {
    display: 'inline-block',
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
});

function getSteps() {
  return ['Information', 'Credentials', 'Confirm!'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Subscribe/>;
    case 1:
      return <SignUp/>;
    case 2:
      return "Confirmation"
    default:
      return 'Unknown step';
  }
}

class SignUpSlider extends React.Component {
  state = {
    activeStep: 0,
    completed: {},
    warning: true
  };

  totalSteps = () => getSteps().length;

  handleNext = () => {
    let activeStep;

    if (this.isLastStep() && !this.allStepsCompleted()) {
      // It's the last step, but not all steps have been completed,
      // find the first step that has been completed
      const steps = getSteps();
      activeStep = steps.findIndex((step, i) => !(i in this.state.completed));
    } else {
      activeStep = this.state.activeStep + 1;
    }
    this.setState({
      activeStep,
    });
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleStep = step => () => {
    this.setState({
      activeStep: step,
    });
  };

  handleComplete = () => {
    const { completed } = this.state;
    completed[this.state.activeStep] = true;
    this.setState({
      completed,
    });
    this.handleNext();
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
      completed: {},
    });
  };

  completedSteps() {
    return Object.keys(this.state.completed).length;
  }

  isLastStep() {
    return this.state.activeStep === this.totalSteps() - 1;
  }

  allStepsCompleted() {
    return this.completedSteps() === this.totalSteps();
  }

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;
    return (
    <Card className={classes.root}>
    <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
            const props = {};
            const labelProps = {};
            return (
            <Step key={label} {...props}>
            <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
            );
        })}
    </Stepper>
    <div>
        {activeStep === steps.length ? (
    <div>
    <span>All steps completed - you&apos;re finished</span>
    <Button
        onClick={this.handleReset}
        className={classes.button}
        color="danger"
        >
    Reset
    </Button>
    </div>
    ) : (
    <div className={classes.stepMenu}>
    <span>{getStepContent(activeStep)}</span>
    <div
    className={classes.buttonMenu}
    style={{ display: 'flex' }}
    >
    <Button
        variant="outlined"
        disabled={activeStep === 0}
        onClick={this.handleBack}
        className={classes.button}
        >
    Back
    </Button>
    {activeStep !== steps.length - 1 ? (
    <Button
        variant="contained"
        color="primary"
        onClick={this.handleNext}
        className={classes.button}
        disabled={this.state.value === -1 ? true : false}
        >
    Next
    </Button>
    ) : (
    this.state.warning && (
        <Button
        variant="contained"
        color="primary"
        onClick={this.handleSubmit}
        className={classes.button}
        disabled={this.state.value === -1 ? true : false}
        >
        Confirm
        </Button>
    )
    )}
    </div>
    </div>
    )}
    </div>
    </Card>
    );
    }
}

SignUpSlider.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(SignUpSlider);



// import React, { Component } from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import SignUpSignIn from "./LogInParts/SignUpSignIn";
// import TopNavbar from "./LogInParts/TopNavBar";
// import Secret from "./LogInParts/Secret";

// class App extends Component {

//   state = {
//     signUpSignInError: "",
//     authenticated: localStorage.getItem("token") || false
//   }

//   handleSignUp = (credentials) => {
//     const { username, password, confirmPassword } = credentials;
//     if (!username.trim() || !password.trim() ) {
//       this.setState({
//         signUpSignInError: "Must Provide All Fields"
//       });
//     } else {

//       fetch("/api/users", {
//         method: "POST",
//         headers: {"Content-Type": "application/json"},
//         body: JSON.stringify(credentials)
//       }).then((res) => {
//         return res.json();
//       }).then((data) => {
//         const { token } = data;
//         localStorage.setItem("token", token);
//         this.setState({
//           signUpSignInError: "",
//           authenticated: token
//         });
//       });
//     }
//   }

//   handleSignIn = (credentials)=>{
//     const { username, password} = credentials;
//     if (!username.trim() || !password.trim() ) {
//       this.setState({
//         signUpSignInError: "Must Provide All Fields"
//       });
//     } else {

//       fetch("/api/users", {
//         method: "POST",
//         headers: {"Content-Type": "application/json"},
//         body: JSON.stringify(credentials)
//       }).then((res) => {
//         return res.json();
//       }).then((data) => {
//         const { token } = data;
//         localStorage.setItem("token", token);
//         this.setState({
//           signUpSignInError: "",
//           authenticated: token
//         });
//       });
//     }  }

//   handleSignOut = ()=> {
//     localStorage.removeItem("token");
//     this.setState({
//       authenticated: false
//     });
//   }

//   renderSignUpSignIn = ()=> {
//     return (
//       <SignUpSignIn 
//         error={this.state.signUpSignInError} 
//         onSignUp={this.handleSignUp}
//         onSignIn={this.handleSignIn} 
//       />
//     );
//   }

//   renderApp() {
//     return (
//       <div>
//         <Switch>
//           <Route exact path="/" render={() => <h1>I am protected!</h1>} />
//           <Route exact path="/secret" component={Secret} />
//           <Route render={() => <h1>NOT FOUND!</h1>} />
//         </Switch>
//       </div>
//     );
//   }

//   render() {
//     let whatToShow = "";
//     if (this.state.authenticated) {
//       whatToShow = this.renderApp();
//     } else {
//       whatToShow = this.renderSignUpSignIn();
//     }
       
//     return (
//       <BrowserRouter>
//         <div className="App">
//           <TopNavbar 
//             showNavItems={this.state.authenticated} 
//             onSignOut={this.handleSignOut} />
//           {whatToShow}
//         </div>
//       </BrowserRouter>
//     );
//   }
// }

// export default App;