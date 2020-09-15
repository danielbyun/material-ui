import React from "react";
import {
  Grid,
  makeStyles,
  useTheme,
  Typography,
  Button,
  useMediaQuery,
} from "@material-ui/core";

import webIcon from "../../../../assets/websiteIcon.svg";
import ButtonArrow from "../../ButtonArrow/ButtonArrow";

const useStyles = makeStyles((theme) => ({
  webContainer: {
    marginTop: "12rem",
    [theme.breakpoints.down("sm")]: { justifyContent: "center", padding: 25 },
  },
  webTexts: {
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

const WebBlock = () => {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      direction="row"
      className={classes.webContainer}
      // justify={matchesSM ? "center" : undefined}
    >
      <Grid item className={classes.webTexts}>
        <Typography variant="h4">iOS / Android Development</Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>
          I make WEB APPS *~!
        </Typography>
        <Typography variant="subtitle1">
          Makin all the damn <span className={classes.specialText}>cool</span>{" "}
          {matchesSM ? <br /> : null}webapps you'll see lol
        </Typography>
        <Button variant="outlined" className={classes.learnButton}>
          <span className={classes.learnMoreButton}>Learn More</span>
          <ButtonArrow
            width={15}
            height={15}
            fill={theme.palette.common.blue}
          />
        </Button>
      </Grid>
      <Grid item>
        <img className={classes.icon} alt="mobile apps icon" src={webIcon} />
      </Grid>
    </Grid>
  );
};

export default WebBlock;
