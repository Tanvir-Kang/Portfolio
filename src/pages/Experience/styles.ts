import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  titleGrid: {
    alignContent: 'flex-start',
  },
  titleTypography: {
    marginLeft: '0.5em',
    fontWeight: 'bold',
    fontSize: '2em'
  },
  media: {
    height: 100,
    width: 100,
    margin: 'auto',
  },
  cardRoot: {
    padding: '1em'
  },
  subTitle: {
    fontWeight: 'bold',
    marginLeft: '1em',
  },
  content: {
    marginLeft: '1em',
    marginRight: '1em'
  },
  gridItem: {
    marginTop: '1em',
  }

});