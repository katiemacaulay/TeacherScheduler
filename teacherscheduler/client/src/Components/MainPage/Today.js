import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginBottom: 20
  },
  courseName:{
    width: 200
  },
  info: {
    marginRight: 7,
    width: 70
  }
});

 function hours12(date) { 
    return (date.getHours() + 24) % 12 || 12; 
  }
  function formatDate(d) {
    let date = new Date(d)
    let minutes = ('0'+ date.getMinutes()).slice(-2)
    if (date.getHours() > 11) {
      return hours12(date) + ':' + minutes + 'AM'
    }  else {
      return hours12(date) + ':' + minutes + 'PM'
    }
  }
  function sortDates(courses) {
    return courses
  }


function Today(props) {
  const { classes } = props;
  return (
    <div>
      <div className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          Today's Classes
        </Typography>
        <Typography component="div">
            <List>
            <ListItem>
                <div className={classes.info}>
                    Start Time
                </div>
                <div className={classes.info}>
                    End Time
                </div>
                <div className={classes.courseName}>
                    Class
                </div>
                <div className={classes.info}>
                    Lesson
                </div>
              </ListItem>    
              {console.log(props.courses)}
              {sortDates(props.courses).map((course, i) => {
                return <ListItem key={i}>
                <div className={classes.info}>
                    {formatDate(course.startTime)}
                </div>
                <div className={classes.info}>
                    {formatDate(course.endTime)}
                </div>
                <div className={classes.courseName}>
                    {course.courseName}
                </div>
                <div className={classes.info}>
                    Lesson: 1
                </div>
              </ListItem>                
              })}
            </List>
        </Typography>
      </div>
    </div>
  );
}


Today.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Today);