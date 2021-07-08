import { Typography } from "@material-ui/core"
import { OutlinedCard } from "../ImageCard/cards";
import { TextCard } from "../TextCard/cards";
import Grid from '@material-ui/core/Grid';
import { useStyles } from "../ImageCard/cardStyles";
import { profilePicture, profileDescription} from "./personalInfo";

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
                        <OutlinedCard {...profilePicture}/>
                    </Grid>

                </Grid>
                <Grid container spacing={3} className={classes.gridUpperPadding}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <TextCard {...profileDescription}/>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}