import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import Test from './Time'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginBottom: 20
  },
});

function ThisWeek(props) {
  const { classes } = props;
  return (
    <div>
      <div className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
            This Week:
        </Typography>
        <Typography component="p">
            <List>
                <ListItem>
                  {/* <Test/> */}
                </ListItem>
            </List>
        </Typography>
      </div>
    </div>
  );
}

ThisWeek.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ThisWeek);