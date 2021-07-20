import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    titleGrid: {
        alignContent: 'flex-start',
    },
    titleTypography: {
        marginLeft: '2em',
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
    }
  });