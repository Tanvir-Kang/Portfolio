import { Typography } from "@material-ui/core";
import { Degrees } from "./personalInfo";
import Grid from '@material-ui/core/Grid';
import { useStyles } from "./styles";
import { EducationalCard } from "../../components/EducationalCard/cards";



export const Education = () => {
    const classes = useStyles();
    return (
        <>
            <Grid container spacing={3} className={classes.gridContainer}>
                {Degrees.map((item) => {
                    {
                        return (
                            <Grid className={classes.gridItem} item xs={12} sm={12} md={12} lg={6} xl={6}>
                                <EducationalCard {...item}/>
                            </Grid>)
                    }
                })}
            </Grid>
        </>
    );
}