import React from "react";
import {
  Grid,
  makeStyles,
  useTheme,
  Typography,
  Button,
} from "@material-ui/core";

import informationBackground from "../../../../assets/infoBackground.svg";
import ButtonArrow from "../../ButtonArrow/ButtonArrow";

const useStyle = makeStyles((theme) => ({
  aboutUs: {
    color: "white",
  },
  informationContainer: {
    height: "80rem",
  },
  informationBackground: {
    backgroundImage: `url(${informationBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  infomrationText: {
    position: "absolute",
    marginLeft: "5rem",
  },

  learnMoreButton: {
    marginRight: 10,
  },
}));

const InformationBlock = () => {
  const classes = useStyle();
  const theme = useTheme();

  return (
    <Grid item>
      <Grid
        container
        className={classes.informationContainer}
        alignItems="center"
        direction="row"
      >
        <Grid item className={classes.infomrationText}>
          <Grid container direction="column">
            <Typography variant="h2" className={classes.aboutUs}>
              About Us
            </Typography>
            <Typography variant="subtitle2">Let's get peronal.</Typography>
            <Button variant="outlined" className={classes.learnButton}>
              <span className={classes.learnMoreButton}>Learn More</span>
              <ButtonArrow
                width={15}
                height={15}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
        </Grid>
        <div className={classes.informationBackground} />
      </Grid>
    </Grid>
  );
};

export default InformationBlock;
