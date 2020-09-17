import React from "react";
import { Link } from "react-router-dom";
import {
  makeStyles,
  Grid,
  Typography,
  Button,
  useTheme,
} from "@material-ui/core";
import Lottie from "react-lottie";
import clsx from "clsx";

import animationData from "../../../../../assets/animations/landinganimation/data";
import ButtonArrow from "../../../ButtonArrow/ButtonArrow";

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: "50rem",
    minWidth: "21rem",
    marginTop: "2rem",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  heroTextContainer: {
    minWidth: "21.5rem",
    marginLeft: "1rem",
    [theme.breakpoints.down("xs")]: { margin: "0 auto" },
  },
  buttonContainer: { marginTop: "1rem" },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145,
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  span: {
    marginRight: 10,
  },
}));

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserverAspectRatio: "xMidYMid slice",
  },
};

const HeroBlock = ({ setTabValue }) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Grid item>
      <Grid container justify="flex-end" alignItems="center" direction="row">
        <Grid sm item className={classes.heroTextContainer}>
          <Typography variant="h2" align="center">
            Some BS Text to gain yo ATTENTION
          </Typography>
          <Grid container justify="center" className={classes.buttonContainer}>
            <Grid item>
              <Button
                className={classes.estimateButton}
                variant="contained"
                color="secondary"
                component={Link}
                to="/estimate"
                onClick={() => setTabValue(5)}
              >
                Free Estimate
              </Button>
            </Grid>
            <Grid item>
              <Button
                className={classes.learnButtonHero}
                variant="outlined"
                component={Link}
                to="/revolution"
                onClick={() => setTabValue(2)}
              >
                <span className={clsx([classes.span, classes.learnButton])}>
                  Learn More
                </span>
                <ButtonArrow
                  width={15}
                  height={15}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid sm item className={classes.animation}>
          <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HeroBlock;
