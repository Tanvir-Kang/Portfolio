import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    root: {
      minWidth: 275,
      alignContent: "start",
      alignItems: 'start'

    },
    title: {
      fontSize: '1.5em',
      alignSelf: 'start'
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    pos: {
      marginBottom: 12,
    },
    gridUpperPadding: {
      paddingTop: '2em'
    },
    content: {
      alignContent: "start",
      alignItems: 'start',
      alignSelf: 'start'
    }
  });