import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './cardStyles';
import { TextCardProps } from './cardTypes';


export const TextCard = (props: TextCardProps) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent className={classes.content}>
                <Typography align='left' className={classes.title} >{props.titleText}</Typography>
                <Typography align='left'className={classes.pos} color="textSecondary">{props.bodyText}</Typography>

                <Typography align='left' className={classes.pos} color="textSecondary">{props.secondaryText ? props.secondaryText : null}</Typography>
                
            </CardContent>
        </Card>
    );
}
