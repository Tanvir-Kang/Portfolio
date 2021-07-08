import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useStyles } from "./cardStyles";
import { ProjectCardProps } from "./cardTypes";

export const ProjectCard = (props: ProjectCardProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.imageURL? props.imageURL : undefined}
          title={props.imageTitle}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">{props.textTitle}</Typography>
          <Typography className={classes.pos} color="textSecondary">{props.subTitles ? props.subTitles : null}</Typography>

          <Typography variant="body2" color="textSecondary" component="p">{props.textDescription}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a href={props.GitHubURL}><Button size="small" color="primary">GitHub</Button></a>
      </CardActions>
    </Card>
  );
}
