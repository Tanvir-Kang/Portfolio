import React from 'react';
import Paper from '@material-ui/core/Paper';
import { useStyles } from './styles';
import { PaperTypes } from "./paperTypes";
import { Typography } from '@material-ui/core';


export const SimplePaper = (props: PaperTypes) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <Typography>
            {props.degree}
        </Typography>
        <Typography>
            {props.degreeName}
        </Typography>
        <Typography>
            {props.yearOfComletion}
        </Typography>
        <Typography>
            {props.otherInfo}
        </Typography>
        </Paper>
    </div>
  );
}
