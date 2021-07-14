import Card from '@material-ui/core/Card';
import CardMedia from "@material-ui/core/CardMedia";
import { useStyles } from './cardStyles';
import { ImageCardProps } from './cardTypes';


export const OutlinedCard = (props: ImageCardProps) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={props.image ? props.image : undefined}
                title={props.title}
            />
        </Card>
    );
}
