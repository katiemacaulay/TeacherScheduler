import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Schedule from "./MainPage/Schedule";
import SignUp from "../containers/SignUpStepperContainer";
import LogIn from "./LogIn"


function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
  }
  
  TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
  const styles = theme => ({
    root: {
      flexGrow: 1,
      backgroundImage: "url('https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80')",
      backgroundSize: "cover",
      height: "100%",
      width: "100%",
      position: "absolute"
    },
  });
  
  class LogInTab extends React.Component {
    state = {
      value: 0,
    };
  
    handleChange = (event, value) => {
      this.setState({ value });
    };
  
    

    render() {
      const { classes } = this.props;
      const { value } = this.state;
      if(localStorage.getItem('authenticated') === 'true'){
        return <Schedule/>
      } else {
        return (
        <div className={classes.root}>
          <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Log In" />
            <Tab label="Sign Up" />
          </Tabs>
          </AppBar>
          {value === 0 && <TabContainer><LogIn/></TabContainer>}
          {value === 1 && <TabContainer><SignUp/></TabContainer>}
        </div>
      );
      }
    }
  }
  
  LogInTab.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(LogInTab);