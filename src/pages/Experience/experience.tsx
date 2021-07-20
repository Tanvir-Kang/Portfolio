import { Divider, Typography } from "@material-ui/core";
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
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Typography className={classes.content} align='left'>{personalInfo.Introduction}</Typography>
        </Grid>
      </Grid>

      <Grid direction='column' container alignContent='flex-start' xs={12} sm={12} md={12} lg={12} xl={12}>
        <Grid item className={classes.gridItem}>
          <Typography className={classes.subTitle} align='left'>{personalInfo.headingOne}</Typography>
          <Typography className={classes.content} align='left'>{personalInfo.DescriptionOne}</Typography>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Typography className={classes.subTitle} align='left'>{personalInfo.headingTwo}</Typography>
          <Typography className={classes.content} align='left'>{personalInfo.DescriptionTwo}</Typography>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Typography className={classes.subTitle} align='left'>{personalInfo.headingThree}</Typography>
          <Typography className={classes.content} align='left'>{personalInfo.DescriptionThree}</Typography>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Typography className={classes.subTitle} align='left'>Languages / Frameworks / Software used</Typography>
          <Typography className={classes.content} align='left'>{personalInfo.toolsUsed}</Typography>
        </Grid>
      </Grid>
      <Divider />
      <Grid container xs={12} sm={12} md={12} lg={12} xl={12}>
        <Grid item className={classes.titleGrid}>
          <Typography className={classes.titleTypography}>Other Work Experience</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Typography className={classes.content} align='left'>{personalInfo.otherWorkExperience}</Typography>
        </Grid>
        <Grid item className={classes.gridItem} xs={12} sm={12} md={12} lg={12} xl={12}>
          <Typography className={classes.subTitle} align='left'>Mail Clerk - Canada Post</Typography>
        </Grid>
        <Grid item className={classes.gridItem} xs={12} sm={12} md={12} lg={12} xl={12}>
          <Typography className={classes.subTitle} align='left'>Team Member - Canadian AutoParts Toyota</Typography>
        </Grid>
        <Grid item className={classes.gridItem} xs={12} sm={12} md={12} lg={12} xl={12}>
          <Typography className={classes.subTitle} align='left'>Over Shortage and Damaged Goods Clerk - TransX</Typography>
        </Grid>
        <Grid item className={classes.gridItem} xs={12} sm={12} md={12} lg={12} xl={12}>
          <Typography className={classes.subTitle} align='left'>Concrete Scaffolding</Typography>
        </Grid>
        <Grid item className={classes.gridItem} xs={12} sm={12} md={12} lg={12} xl={12}>
          <Typography className={classes.subTitle} align='left'>Auto Detailer</Typography>
        </Grid>
        <Grid item className={classes.gridItem} xs={12} sm={12} md={12} lg={12} xl={12}>
          <Typography className={classes.subTitle} align='left'>Blueberry picker</Typography>
        </Grid>
        <Grid item className={classes.gridItem} xs={12} sm={12} md={12} lg={12} xl={12}>
          <Typography className={classes.subTitle} align='left'>News Paper Delivery</Typography>
        </Grid>
      </Grid>

    </>

  );
}