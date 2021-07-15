import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';
import { LanguageCardType } from './landCardTypes';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 200,
    },
    media: {
      height: 0,
      paddingTop: '100%',
    },
  }),
);

export const LanguageCard = (props: LanguageCardType) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>

      <CardMedia
        className={classes.media}
        image={props.imageURL}
        title="Paella dish"
      />
      <CardContent>
            <Divider/>
            <Typography variant="body2" color="textSecondary" component="p">
            {props.cardTitle}
        </Typography>
      </CardContent>
    </Card>
  );
}
