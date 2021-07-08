import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from "@material-ui/core/CardMedia";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './cardStyles';
import { TextCardProps } from './cardTypes';


export const TextCard = (props: TextCardProps) => {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography variant="h5" component="h2">{props.titleText}</Typography>
                
                <Typography className={classes.pos} color="textSecondary">{props.secondaryText ? props.secondaryText : null}</Typography>
                
                <Typography variant="body2" component="p">{props.bodyText}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}
