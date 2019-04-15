import React, { Component } from "react";
import PropTypes from "prop-types";

import { withStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';

import SignUp from "./SignUp";
import SignIn from "./SignIn";

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Card from '@material-ui/core/Card';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
      return <SignUp/> ;
    case 1:
      return <SignIn/>;
    case 2:
      return <SignIn/>;
    default:
      return 'Unknown step';
  }
}

class SignUpSignIn extends React.Component {
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

SignUpSignIn.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(SignUpSignIn);