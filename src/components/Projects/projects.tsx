import { listOfProjects } from "./personalInfo";
import { ProjectCard } from "../ProjectCard/cards";
import Grid from '@material-ui/core/Grid';
import { useStyles } from "./styles";


export const Projects = () => {
    const classes = useStyles();
    return (
        <>
            <Grid container spacing={3} className={classes.gridContainer}>
                
                    {listOfProjects.map( (projects) => {
                        {return (
                        <Grid className={classes.gridItem} item xs={12} sm={10} md={8} lg={6} xl={4}>
                        <ProjectCard {...projects}/>
                        </Grid>)
                        }
                    })}
            </Grid>
        </>
    );
}