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
                <Grid alignContent='flex-start' item xs={12} sm={12} md={6} lg={8} xl={8}>
                        <Typography variant="h3"> Tanvir Kang </Typography>
                        <Typography variant="h6"> Software Engineer </Typography>
                        <TextCard {...profileDescription}/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                        <OutlinedCard {...profilePicture}/>
                    </Grid>

                </Grid>


            </div>
        </>
    );
}