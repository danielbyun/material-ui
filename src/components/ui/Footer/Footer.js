import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, Grid, Typography, Hidden } from "@material-ui/core";

import footerAdornment from "./Footer Adornment.svg";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    zIndex: 1302,
    position: "relative",
  },
  mainContainer: {
    position: "absolute",
  },
  adornment: {
    width: "25rem",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15rem",
    },
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  gridItem: {
    margin: "3rem",
  },
  icon: {
    height: "4rem",
    widht: "4rem",
    [theme.breakpoints.down("xs")]: {
      height: "2.5rem",
      width: "2.5rem",
    },
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-6rem",
    right: "1.5rem",
    [theme.breakpoints.down("xs")]: {
      right: "1rem",
    },
  },
}));

const Footer = ({ selectedIndex, setSelectedIndex, tabValue, setTabValue }) => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify="center" className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                onClick={() => setTabValue(0)}
                to="/"
              >
                <Typography>Home</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                onClick={() => {
                  setTabValue(1);
                  setSelectedIndex(0);
                }}
                to="/services"
              >
                <Typography>Services</Typography>
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                onClick={() => {
                  setTabValue(1);
                  setSelectedIndex(1);
                }}
                to="/software"
              >
                <Typography>Custom Software Development</Typography>
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                onClick={() => {
                  setTabValue(1);
                  setSelectedIndex(2);
                }}
                to="/mobile"
              >
                <Typography>iOS/Android App Development</Typography>
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                onClick={() => {
                  setTabValue(1);
                  setSelectedIndex(3);
                }}
                to="/web"
              >
                <Typography>Web Development</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                onClick={() => setTabValue(2)}
                to="/revolution"
              >
                <Typography>The Revolution</Typography>
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                onClick={() => setTabValue(2)}
                to="/revolution"
              >
                <Typography>Vision</Typography>
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                onClick={() => setTabValue(2)}
                to="/revolution"
              >
                <Typography>Technology</Typography>
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                onClick={() => setTabValue(2)}
                to="/revolution"
              >
                <Typography>Process</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                onClick={() => setTabValue(3)}
                to="/about"
              >
                <Typography>About Us</Typography>
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                onClick={() => setTabValue(3)}
                to="/about"
              >
                <Typography>History</Typography>
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                onClick={() => setTabValue(3)}
                to="/about"
              >
                <Typography>Team</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                onClick={() => setTabValue(4)}
                to="/contact"
              >
                <Typography>Contact Us</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>

      <img
        alt="black decorative class"
        src={footerAdornment}
        classes={classes.adornment}
      />
      <Grid
        container
        justify="flex-end"
        spacing={2}
        className={classes.socialContainer}
      >
        <Grid
          item
          component={"a"}
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon
            color="action"
            fontSize="large"
            className={classes.icon}
          />
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon
            color="action"
            fontSize="large"
            className={classes.icon}
          />
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon
            color="action"
            fontSize="large"
            className={classes.icon}
          />
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
