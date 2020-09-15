import React from "react";

import { makeStyles, Grid } from "@material-ui/core";
import HeroBlock from "./Hero/HeroBlock";
import ServicesBlock from "./Services/ServicesBlock";
import MobileBlock from "./Mobile/MobileBlock";
import WebBlock from "./Web/WebBlock";
import RevolutionBlock from "./Revolution/RevolutionBlock";
import InformationBlock from "./Information/InformationBlock";
import CallToAction from "./CallToAction/CallToAction";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: "5rem",
    [theme.breakpoints.down("md")]: { marginTop: "3rem" },
    [theme.breakpoints.down("xs")]: { marginTop: "2rem" },
  },
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
    ...theme.typography.estimate,
    borderColor: theme.palette.common.blue,
    color: theme.palette.type !== "dark" ? theme.palette.common.blue : "white",
    borderWidth: 2,
    textTransform: "none",
    borderRadius: 50,
    fontFamily: "Roboto",
    fontWEight: "bold",
    fontSize: "0.9rem",
    height: 45,
    width: 145,
  },
  span: {
    marginRight: 10,
  },
}));

const LandingPage = ({ setTabValue, setSelectedIndex }) => {
  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      {/* ===== HERO BLOCK ===== */}
      <HeroBlock
        setTabValue={setTabValue}
        setSelectedIndex={setSelectedIndex}
      />

      {/* ==== SERVICES BLOCK ===== */}
      <ServicesBlock
        setTabValue={setTabValue}
        setSelectedIndex={setSelectedIndex}
      />

      {/* ===== IOS / ANDROID BLOCK ===== */}
      <MobileBlock
        setTabValue={setTabValue}
        setSelectedIndex={setSelectedIndex}
      />

      {/* ===== WEB BLOCK ===== */}
      <WebBlock setTabValue={setTabValue} setSelectedIndex={setSelectedIndex} />

      {/* ===== REVOLUTION BLOCK ===== */}
      <RevolutionBlock
        setTabValue={setTabValue}
        setSelectedIndex={setSelectedIndex}
      />

      {/* ===== INFORMATION BLOCK ===== */}
      <InformationBlock
        setTabValue={setTabValue}
        setSelectedIndex={setSelectedIndex}
      />

      {/* ===== CALL TO ACTION BLOCK */}
      <CallToAction
        setTabValue={setTabValue}
        setSelectedIndex={setSelectedIndex}
      />
    </Grid>
  );
};

export default LandingPage;
