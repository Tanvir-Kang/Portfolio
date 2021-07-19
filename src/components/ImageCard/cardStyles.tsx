import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    root: {
      minWidth: 275,
      boxShadow: '0px 0px 0px 0px',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    media: {
      height: 0,
      paddingTop: '100%', // 16:9
      borderRadius: '50em',
      margin: '1em'
    },
    gridUpperPadding: {
      paddingTop: '2em',
    },
    blackBackground: {
      backgroundColor: '#30343F',
      minWidth: '100px',
      minHeight: '100px',
      justifyContent: 'center',
      marginTop: "2em",
      paddingBottom: "1em"
    },
    whiteText: {
      color: 'white',
      paddingTop: '0.25em',
      fontWeight: 'bold',
    },
    whiteBackground: {
      backgroundColor: '#EEEEEE',
      minWidth: '100px',
      minHeight: '100px',
      justifyContent: 'center',
    },
    charcoal: {
      color: '#30343F',
      paddingTop: '0.25em',
      fontWeight: 'bold',
    }
  });