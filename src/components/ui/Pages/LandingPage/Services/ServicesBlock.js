import React from "react";
import {
  makeStyles,
  Grid,
  Typography,
  Button,
  useTheme,
  // useMediaQuery,
} from "@material-ui/core";

import ButtonArrow from "../../../ButtonArrow/ButtonArrow";
import customSoftwareIcon from "../../../../../assets/Custom Software Icon.svg";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  serviceContainer: {
    marginTop: "12rem",
    [theme.breakpoints.down("sm")]: { justifyContent: "center", padding: 25 },
  },
  serviceTexts: {
    marginLeft: "5rem",
    [theme.breakpoints.down("sm")]: { marginLeft: 0, textAlign: "center" },
  },
  learnButton: {},
  learnMoreButton: {
    marginRight: 10,
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: "1rem",
  },
  icon: {
    marginLeft: "2rem",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
}));

const ServicesBlock = ({ setTabValue, setSelectedIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  // const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      direction="row"
      className={classes.serviceContainer}
      // justify={matchesSM ? "center" : undefined}
    >
      <Grid item className={classes.serviceTexts}>
        <Typography variant="h4">Custom Software Development</Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>
          I make things!*~
        </Typography>
        <Typography variant="subtitle1">
          bum to <span className={classes.specialText}>hero</span> lol
        </Typography>
        <Button
          variant="outlined"
          className={classes.learnButton}
          component={Link}
          to="/software"
          onClick={() => {
            setTabValue(1);
            setSelectedIndex(1);
          }}
        >
          <span className={classes.learnMoreButton}>Learn More</span>
          <ButtonArrow
            width={15}
            height={15}
            fill={theme.palette.common.blue}
          />
        </Button>
      </Grid>
      <Grid item>
        <img
          className={classes.icon}
          alt="custom software icon"
          src={customSoftwareIcon}
        />
      </Grid>
    </Grid>
  );
};

export default ServicesBlock;
