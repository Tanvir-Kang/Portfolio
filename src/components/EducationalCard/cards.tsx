import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useStyles } from "./cardStyles";
import { EducationItem } from "../../pages/Education/educationTypes";

export const EducationalCard = (props: EducationItem) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant='outlined'>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">{props.degreeName} - {props.degree}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">{props.school} - {props.yearOfCompletion}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
