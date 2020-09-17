import React from "react";

import {
  Grid,
  makeStyles,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";

import mobileAppsIcon from "../../../../../assets/mobileIcon.svg";
import ButtonArrow from "../../../ButtonArrow/ButtonArrow";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  mobileContainer: {
    marginTop: "12rem",
    [theme.breakpoints.down("sm")]: { justifyContent: "center", padding: 25 },
  },
  mobileTexts: {
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
  mobileIcon: {
    marginRight: "5rem",
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
    },
  },
  icon: {
    marginLeft: "2rem",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
}));

const MobileBlock = ({ setTabValue, setSelectedIndex }) => {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      direction="row"
      className={classes.mobileContainer}
      justify={matchesSM ? "center" : "flex-end"}
    >
      <Grid item className={classes.mobileTexts}>
        <Typography variant="h4">iOS / Android Development</Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>
          I make APPS~
        </Typography>
        <Typography variant="subtitle1">
          <span className={classes.specialText}>Both</span> mobile platforms lol{" "}
          {matchesSM ? null : <br />}
        </Typography>
        <Button
          variant="outlined"
          className={classes.learnButton}
          component={Link}
          to="/mobile"
          onClick={() => {
            setTabValue(1);
            setSelectedIndex(2);
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
      <Grid item className={classes.mobileIcon}>
        <img
          className={classes.icon}
          alt="mobile apps icon"
          src={mobileAppsIcon}
        />
      </Grid>
    </Grid>
  );
};

export default MobileBlock;
