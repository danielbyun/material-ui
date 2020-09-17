import React, { Fragment, useEffect } from "react";
import { Tabs, Tab, makeStyles, Button, IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";

import SettingsIcon from "@material-ui/icons/Settings";

import Menus from "../Menus/Menus";
import Settings from "../Settings/Settings";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "4em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2.5em",
    },
    [theme.breakpoints.down("xs")]: {
      // phones
      marginBottom: "1.25em",
    },
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  logo: {
    height: "8em",
    [theme.breakpoints.down("md")]: {
      height: "7em",
    },
    [theme.breakpoints.down("xs")]: {
      // phones
      height: "5.5em",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  settingLogo: {
    outline: "none",
    marginRight: "50px",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
  },
}));

const HeaderTabs = ({
  tabValue,
  handleTabChange,
  menuAnchorEl,
  handleMenuClose,
  handleMenuOpen,
  handleMenuItemClick,
  handleSettingOpen,
  setTabValue,
  menuOptions,
  selectedIndex,
  setSelectedIndex,
  settingAnchorEl,
  handleSettingClose,
  darkMode,
  setDarkMode,
}) => {
  const classes = useStyles();

  const routes = [
    { name: "Home", link: "/", activeIndex: 0 },
    {
      name: "Services",
      link: "/services",
      activeIndex: 1,
      ariaOwns: menuAnchorEl ? "simple-menu" : undefined,
      ariaPopup: menuAnchorEl ? "true" : undefined,
      mouseOver: (e) => handleMenuOpen(e),
    },
    { name: "The Revolution", link: "/revolution", activeIndex: 2 },
    { name: "About Us", link: "/about", activeIndex: 3 },
    { name: "Contact Us", link: "/contact", activeIndex: 4 },
  ];

  useEffect(() => {
    [...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (tabValue !== route.activeIndex) {
            setTabValue(route.activeIndex);
            if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
              setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        default:
          break;
      }
    });
  }, [tabValue, selectedIndex, setSelectedIndex, setTabValue, routes]);

  return (
    <Fragment>
      <Tabs
        value={tabValue}
        className={classes.tabContainer}
        scrollButtons="auto"
        variant="scrollable"
        onChange={handleTabChange}
        indicatorColor="secondary"
      >
        {routes.map((route, index) => (
          <Tab
            key={index}
            className={classes.tab}
            component={Link}
            to={route.link}
            label={route.name}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
            value={route.activeIndex}
          />
        ))}
      </Tabs>
      <Button
        component={Link}
        to="/estimate"
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick={() => setTabValue(5)}
      >
        Free Estimate
      </Button>
      <div
        className={classes.tab}
        style={{ color: "white" }}
        onMouseOver={(e) => {
          handleSettingOpen(e);
        }}
      >
        <IconButton className={classes.settingLogo}>
          <SettingsIcon />
        </IconButton>
      </div>
      <Menus
        tabValue={tabValue}
        setTabValue={setTabValue}
        handleMenuItemClick={handleMenuItemClick}
        handleMenuClose={handleMenuClose}
        menuAnchorEl={menuAnchorEl}
        menuOptions={menuOptions}
        selectedIndex={selectedIndex}
      />
      <Settings
        settingAnchorEl={settingAnchorEl}
        handleSettingClose={handleSettingClose}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    </Fragment>
  );
};

export default HeaderTabs;
