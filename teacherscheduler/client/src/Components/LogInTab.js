import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

import SignUp from "./SignUp/SignUpSlider";
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
      backgroundColor: theme.palette.background.paper,
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
  
  LogInTab.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(LogInTab);