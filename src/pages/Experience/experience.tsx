import { Typography } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import { experienceImage } from "../../Static/Images/index";
import { useStyles } from "./styles";
import { ImageCardProps } from "../../components/ImageCard/cardTypes";
import { personalInfo } from "./personalInfo";


const RFGImage: ImageCardProps = {
    image: experienceImage.RFG,
    title: "RFG"
}

export const Experience = () => {
    const classes = useStyles();

    return (
        <>
            <Grid container xs={12} sm={12} md={12} lg={12} xl={12}>
                <Grid item className={classes.titleGrid}>
                    <Typography className={classes.titleTypography}>RFG Software - Software Engineer</Typography>
                </Grid>
            </Grid>

            <Grid direction='column' container alignContent='flex-start' xs={12} sm={12} md={12} lg={12} xl={12}>
                <Grid item>
                    <Typography>{personalInfo.headingOne}</Typography>
                    <Typography></Typography>
                </Grid>
                <Grid item>
                    <Typography>{personalInfo.headingTwo}</Typography>
                </Grid>
                <Grid item>
                    <Typography>{personalInfo.headingThree}</Typography>
                </Grid>
            </Grid>
        </>

    );
}