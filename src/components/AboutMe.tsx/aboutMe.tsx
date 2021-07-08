import { Typography } from "@material-ui/core"
import { OutlinedCard } from "../Card/cards";
import Grid from '@material-ui/core/Grid';
import { useStyles } from "../Card/cardStyles";

export const AboutMe = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <Grid container spacing={3} justifyContent="flex-end">
                <Grid alignContent="flex-start" item xs={12} sm={10} md={8} lg={8} xl={8}>
                        <Typography variant="h3"> Tanvir Kang </Typography>
                        <Typography variant="h6"> Software Engineer </Typography>
                    </Grid>
                    
                    <Grid item xs={12} sm={10} md={8} lg={4} xl={4}>
                        <OutlinedCard />
                    </Grid>

                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={10} md={8} lg={4} xl={4}>
                        <OutlinedCard/>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}