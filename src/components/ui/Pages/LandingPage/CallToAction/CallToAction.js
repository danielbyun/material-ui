import React from "react";
import clsx from "clsx";

import {
  Grid,
  Typography,
  makeStyles,
  Button,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";

import ButtonArrow from "../../../ButtonArrow/ButtonArrow";
import background from "../../../../../assets/background.jpg";
import mobileBackground from "../../../../../assets/mobileBackground.jpg";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  callToActionContainer: {
    height: "60em",
  },
  callToActionTexts: {
    marginLeft: "5rem",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      marginLeft: 0,
    },
  },
  callToActionSubtitle: { fontSize: "1.5rem" },
  learnButton: {},
  learnMoreButton: {
    marginRight: 10,
  },
  background: {
    backgroundAttachment: "fixed",
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: "inherit",
    },
  },
  estimateButtonContainer: {},
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    fontSize: "1.5rem",
    marginleft: "2rem",
    marginRight: "5rem",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("sm")]: {
      margin: "1rem 0 0 0",
    },
  },
}));

const CallToAction = ({ setTabValue }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid item>
      <Grid
        container
        className={clsx([classes.callToActionContainer, classes.background])}
        alignItems="center"
        justify={matchesSM ? "center" : "space-between"}
        direction={matchesSM ? "column" : "row"}
      >
        <Grid item className={classes.callToActionTexts}>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h2">
                Simple Software. <br />
                Cool ass Results.
              </Typography>
              <Typography
                variant="subtitle2"
                className={classes.callToActionSubtitle}
              >
                Take advantage of my brain.
              </Typography>
              <Grid container item justify={matchesSM ? "center" : undefined}>
                <Button
                  variant="outlined"
                  className={classes.learnButton}
                  component={Link}
                  to="/revolution"
                  onClick={() => setTabValue(4)}
                >
                  <span className={classes.learnMoreButton}>Learn More</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.estimateButtonContainer}>
          <Button
            variant="contained"
            className={classes.estimateButton}
            component={Link}
            to="/estimate"
            onClick={() => setTabValue(5)}
          >
            Free Estimate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CallToAction;
