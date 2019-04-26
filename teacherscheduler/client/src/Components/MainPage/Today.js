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
  info: {
    margin: 7
  }
});

class Today extends React.Component {
    constructor(props){
        super(props);
        this.classes = props.classes;
        this.state = {
            schoolDays: [[ 8, 20, 2019 ],[ 8, 21, 2019 ],[ 8, 22, 2019 ],[ 8, 23, 2019 ],[ 8, 26, 2019 ],[ 8, 27, 2019 ],[ 8, 28, 2019 ],[ 8, 29, 2019 ],[ 8, 30, 2019 ],[ 9, 3, 2019 ],[ 9, 4, 2019 ],[ 9, 5, 2019 ],[ 9, 6, 2019 ],[ 9, 9, 2019 ],[ 9, 10, 2019 ],[ 9, 11, 2019 ],[ 9, 12, 2019 ],[ 9, 13, 2019 ],[ 9, 16, 2019 ],[ 9, 17, 2019 ],[ 9, 18, 2019 ],[ 9, 19, 2019 ],[ 9, 20, 2019 ],[ 9, 23, 2019 ],[ 9, 24, 2019 ],[ 9, 25, 2019 ],[ 9, 26, 2019 ],[ 9, 27, 2019 ],[ 9, 30, 2019 ],[ 10, 1, 2019 ],[ 10, 2, 2019 ],[ 10, 3, 2019 ],[ 10, 4, 2019 ],[ 10, 7, 2019 ],[ 10, 8, 2019 ],[ 10, 9, 2019 ],[ 10, 10, 2019 ],[ 10, 11, 2019 ],[ 10, 15, 2019 ],[ 10, 16, 2019 ],[ 10, 17, 2019 ],[ 10, 18, 2019 ],[ 10, 21, 2019 ],[ 10, 22, 2019 ],[ 10, 23, 2019 ],[ 10, 24, 2019 ],[ 10, 25, 2019 ],[ 10, 28, 2019 ],[ 10, 29, 2019 ],[ 10, 30, 2019 ],[ 10, 31, 2019 ],[ 11, 1, 2019 ],[ 11, 4, 2019 ],[ 11, 5, 2019 ],[ 11, 6, 2019 ],[ 11, 7, 2019 ],[ 11, 8, 2019 ],[ 11, 11, 2019 ],[ 11, 12, 2019 ],[ 11, 13, 2019 ],[ 11, 14, 2019 ],[ 11, 15, 2019 ],[ 11, 18, 2019 ],[ 11, 19, 2019 ],[ 11, 20, 2019 ],[ 11, 21, 2019 ],[ 11, 22, 2019 ],[ 12, 2, 2019 ],[ 12, 3, 2019 ],[ 12, 4, 2019 ],[ 12, 5, 2019 ],[ 12, 6, 2019 ],[ 12, 9, 2019 ],[ 12, 10, 2019 ],[ 12, 11, 2019 ],[ 12, 12, 2019 ],[ 12, 13, 2019 ],[ 12, 16, 2019 ],[ 12, 17, 2019 ],[ 12, 18, 2019 ],[ 12, 19, 2019 ],[ 1, 7, 2020 ],[ 1, 8, 2020 ],[ 1, 9, 2020 ],[ 1, 10, 2020 ],[ 1, 13, 2020 ],[ 1, 14, 2020 ],[ 1, 15, 2020 ],[ 1, 16, 2020 ],[ 1, 17, 2020 ],[ 1, 21, 2020 ],[ 1, 22, 2020 ],[ 1, 23, 2020 ],[ 1, 24, 2020 ],[ 1, 27, 2020 ],[ 1, 28, 2020 ],[ 1, 29, 2020 ],[ 1, 30, 2020 ],[ 1, 31, 2020 ],[ 2, 3, 2020 ],[ 2, 4, 2020 ],[ 2, 5, 2020 ],[ 2, 6, 2020 ],[ 2, 7, 2020 ],[ 2, 10, 2020 ],[ 2, 11, 2020 ],[ 2, 12, 2020 ],[ 2, 13, 2020 ],[ 2, 14, 2020 ],[ 2, 18, 2020 ],[ 2, 19, 2020 ],[ 2, 20, 2020 ],[ 2, 21, 2020 ],[ 2, 24, 2020 ],[ 2, 25, 2020 ],[ 2, 26, 2020 ],[ 2, 27, 2020 ],[ 2, 28, 2020 ],[ 3, 2, 2020 ],[ 3, 3, 2020 ],[ 3, 4, 2020 ],[ 3, 5, 2020 ],[ 3, 6, 2020 ],[ 3, 9, 2020 ],[ 3, 10, 2020 ],[ 3, 11, 2020 ],[ 3, 12, 2020 ],[ 3, 13, 2020 ],[ 3, 23, 2020 ],[ 3, 24, 2020 ],[ 3, 25, 2020 ],[ 3, 26, 2020 ],[ 3, 27, 2020 ],[ 3, 30, 2020 ],[ 3, 31, 2020 ],[ 4, 1, 2020 ],[ 4, 2, 2020 ],[ 4, 3, 2020 ],[ 4, 6, 2020 ],[ 4, 7, 2020 ],[ 4, 8, 2020 ],[ 4, 9, 2020 ],[ 4, 13, 2020 ],[ 4, 14, 2020 ],[ 4, 15, 2020 ],[ 4, 16, 2020 ],[ 4, 17, 2020 ],[ 4, 20, 2020 ],[ 4, 21, 2020 ],[ 4, 22, 2020 ],[ 4, 23, 2020 ],[ 4, 24, 2020 ],[ 4, 27, 2020 ],[ 4, 28, 2020 ],[ 4, 29, 2020 ],[ 4, 30, 2020 ],[ 5, 1, 2020 ],[ 5, 4, 2020 ],[ 5, 5, 2020 ],[ 5, 6, 2020 ],[ 5, 7, 2020 ],[ 5, 8, 2020 ],[ 5, 11, 2020 ],[ 5, 12, 2020 ],[ 5, 13, 2020 ],[ 5, 14, 2020 ],[ 5, 15, 2020 ],[ 5, 18, 2020 ],[ 5, 19, 2020 ],[ 5, 20, 2020 ],[ 5, 21, 2020 ],[ 5, 22, 2020 ],[ 5, 26, 2020 ],[ 5, 27, 2020 ],[ 5, 28, 2020 ]],
            schedule: [ 
                {
                    name: '3rd Grade Music',
                    startTime: '7:55 AM',
                    endTime: '8:43 AM',
                    lesson: 1
                },
                {
                  name: '1st Grade Music',
                  startTime: '8:46 AM',
                  endTime: '9:35 AM',
                  lesson: 1
                },
                {
                  name: 'Kinder Music',
                  startTime: '10:15 AM',
                  endTime: '11:24 AM',
                  lesson: 1
                }
            ]
        };
      }

  render(props){
  return (
    <div>
      <div className={this.classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          Today's Classes August 20th!
        </Typography>
        <Typography component="div">
            <List>
              {this.state.schedule.map((course, i) => {
                return <ListItem key={i}>
                <div className={this.classes.info}>
                    {course.name}
                </div>
                <div className={this.classes.info}>
                    {course.startTime}
                </div>
                <div className={this.classes.info}>
                    {course.endTime}
                </div>
                <div className={this.classes.info}>
                    Lesson: {course.lesson}
                </div>
              </ListItem>                
              })}
            </List>
        </Typography>
      </div>
    </div>
  );
}
}
Today.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Today);