import React from "react";
import {
  Grid,
  makeStyles,
  useTheme,
  Typography,
  Button,
  useMediaQuery,
} from "@material-ui/core";

import informationBackground from "../../../../../assets/infoBackground.svg";
import ButtonArrow from "../../../ButtonArrow/ButtonArrow";
import { Link } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  aboutUsItem: {
    marginLeft: "5rem",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "2rem",
    },
  },
  aboutUs: {
    color: "white",
  },
  aboutUsTextContainer: {
    marginBottom: 0,
    [theme.breakpoints.down("xs")]: {
      marginBottom: "10rem",
    },
  },
  informationContainer: {
    marginBottom: "0",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "10rem",
      textAlign: "center",
    },
  },
  informationBackground: {
    backgroundImage: `url(${informationBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "80rem",
    width: "100%",
  },
  infomrationText: {
    position: "absolute",
    marginLeft: "5rem",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
  contactUsTextContainer: {
    marginRight: "5rem",
    textAlign: "right",
    [theme.breakpoints.down("sm")]: {
      marginRight: "2rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginRight: 0,
      textAlign: "center",
    },
  },
  contactUsText: {
    position: "absolute",
    marginRight: "5rem",
    textAlign: "right",
    [theme.breakpoints.down("sm")]: {
      marginRight: "2rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginRight: 0,
      textAlign: "center",
    },
  },
  learnButton: {
    color: "white",
    borderColor: "white",
  },
  learnMoreButton: {
    marginRight: 10,
  },
  callToActionText: {
    color: "white",
  },
}));

const InformationBlock = ({ setTabValue }) => {
  const classes = useStyle();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid item>
      <Grid
        container
        alignItems="center"
        direction="row"
        className={classes.informationBackground}
      >
        <Grid
          item
          container
          direction={matchesXS ? "column" : "row"}
          className={classes.informationContainer}
        >
          <Grid item sm className={classes.aboutUsItem}>
            <Grid
              container
              className={classes.aboutUsTextContainer}
              direction="column"
            >
              <Typography variant="h2" className={classes.callToActionText}>
                About Us
              </Typography>
              <Typography variant="subtitle2">Let's get personal.</Typography>
              <Grid item>
                <Button
                  component={Link}
                  to="/about"
                  variant="outlined"
                  className={classes.learnButton}
                  onClick={() => setTabValue(3)}
                >
                  <span className={classes.learnMoreButton}>Learn More</span>
                  <ButtonArrow width={10} height={10} fill="white" />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm className={classes.contactUsTextContainer}>
            <Grid container direction="column">
              <Typography variant="h2" className={classes.callToActionText}>
                Contact Us
              </Typography>
              <Typography variant="subtitle2">
                Say hello!{" "}
                <span role="img" aria-label="waving hand">
                  👋🏻
                </span>
              </Typography>
              <Grid item>
                <Button
                  component={Link}
                  to="/contact"
                  variant="outlined"
                  className={classes.learnButton}
                  onClick={() => setTabValue(4)}
                >
                  <span className={classes.learnMoreButton}>Learn More</span>
                  <ButtonArrow width={10} height={10} fill="white" />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default InformationBlock;
