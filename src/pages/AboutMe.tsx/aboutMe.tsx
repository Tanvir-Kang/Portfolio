import { Typography } from "@material-ui/core"
import { OutlinedCard } from "../../components/ImageCard/cards";
import { TextCard } from "../../components/TextCard/cards";
import Grid from '@material-ui/core/Grid';
import { useStyles } from "../../components/ImageCard/cardStyles";
import { profilePicture, profileDescription, PrimaryLanguages, SecondaryLanguage } from "./personalInfo";
import { LanguageCard } from "../../components/LanguageCards/languageCard";
import { TitlebarImageList } from "../../components/ImageList/imageList";

export const AboutMe = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <Grid container spacing={3} justifyContent="flex-end">
                    <Grid alignContent='flex-start' item xs={12} sm={6} md={6} lg={8} xl={8}>
                        <Typography variant="h3"> Tanvir Kang </Typography>
                        <Typography variant="h6"> Software Engineer </Typography>
                        <TextCard {...profileDescription} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                        <OutlinedCard {...profilePicture} />
                    </Grid>

                </Grid>
                <Grid container className={classes.blackBackground}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography className={classes.whiteText} variant='h4' >My main skills are</Typography>
                    </Grid>
                    {PrimaryLanguages.map((language) => {
                        return (
                            <Grid item xs={4} sm={4} md={3} lg={3} xl={3} direction="column"
                                justify="center"
                                alignItems="center"
                                spacing={0}>
                                <LanguageCard {...language} />
                            </Grid>
                        );
                    })}
                </Grid>
                <Grid container className={classes.whiteBackground}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography className={classes.charcoal} variant='h4' >I also have experience with</Typography>
                    </Grid>
                    {SecondaryLanguage.map((language) => {
                        return (
                            <Grid item xs={4} sm={4} md={3} lg={2} xl={2} direction="column"
                                justify="center"
                                alignItems="center"
                                spacing={0}>
                                <LanguageCard {...language} />
                            </Grid>
                        );
                    })}
                </Grid>
                <Grid container className={classes.blackBackground2}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography className={classes.whiteText} variant='h4' >My Hobbies</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <TitlebarImageList/>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}></Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}></Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}></Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}></Grid>

                </Grid>
            </div>
        </>
    );
}