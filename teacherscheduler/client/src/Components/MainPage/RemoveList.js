import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';



const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginBottom: 20
  },
  courseName:{
    width: 150,
    marginRight: 5
  },
  info: {
    width: 100
  }
});


function removeItem(id) {
    fetch(`/api/schedule/` + id, {
    method: "DELETE"
    })
    .then(status => {
    console.log("Class Deleted!", status)
    
    })
    .then(document.location.reload(true))
}

function Today(props) {
  const { classes } = props;
  return (
    <div>
      <div className={classes.root} elevation={1}>
      <Typography variant="h6" gutterBottom>
            Remove a Class
          </Typography>
            <List>
              {props.courses.map((course, i) => {
                return <ListItem key={i}>
                <div className={classes.courseName}>
                    {course.courseName}
                </div>
                <Button onClick={() => {removeItem(course._id)}}></Button>
              </ListItem>                
              })}
            </List>
      </div>
    </div>
  );
}


Today.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Today);