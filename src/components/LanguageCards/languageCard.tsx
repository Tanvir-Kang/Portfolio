import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';
import { LanguageCardType } from './landCardTypes';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    NOMARGIN: {
      margin: '1em',
      padding: '0.5em',
      justifyContent: 'center'
    },
    media: {
      minHeight: '50px',
      paddingTop: '56.25%',
      maxWidth: '50px',
      margin: 0,
      paddingLeft: '100%'
        },
  }),
);

export const LanguageCard = (props: LanguageCardType) => {
  const classes = useStyles();

  return (
    <Card className={classes.NOMARGIN}>

      <CardMedia
        className={classes.media}
        image={props.imageURL}
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
