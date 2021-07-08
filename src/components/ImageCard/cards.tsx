import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from "@material-ui/core/CardMedia";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './cardStyles';
import { CardProps } from './cardTypes';


export const OutlinedCard = (props: CardProps) => {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <CardMedia
                className={classes.media}
                image={props.image}
                title={props.title}
            />
        </Card>
    );
}