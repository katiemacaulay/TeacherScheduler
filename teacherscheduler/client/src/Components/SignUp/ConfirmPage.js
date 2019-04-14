import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginBottom: 20
  },
});

function ConfirmPage(props) {
  const { classes } = props;



  return (
    <div>
      <div className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          Confirm Your Information!
        </Typography>
        <Typography component="p">
            <List>
                <ListItem>
                   First Name: {localStorage.getItem('firstName')}
                </ListItem>
                <ListItem>
                    Last Name: {localStorage.getItem('lastName')}
                </ListItem>
                <ListItem>
                    Email: {localStorage.getItem('email')}
                </ListItem>
                <ListItem>
                    Username:{localStorage.getItem('username')}
                </ListItem>
                <ListItem>
                    Password: *Protected*
                </ListItem>
            </List>
        </Typography>
      </div>
    </div>
  );
}

ConfirmPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ConfirmPage);