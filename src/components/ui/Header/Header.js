import React, { Fragment, useEffect, useState } from "react";

import {
  AppBar,
  Toolbar,
  makeStyles,
  Button,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";

import logo from "../../../assets/logo.svg";

import { Link } from "react-router-dom";
import ElevationScroll from "../ElevationScroll/ElevationScroll";

import HeaderTabs from "./Tabs/HeaderTabs";
import HeaderDrawer from "./HeaderDrawer/HeaderDrawer";
import { menuOptions } from "../../util/menuOptions/menuOptions";

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.modal + 1,
  },
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
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));

const Header = ({
  tabValue,
  setTabValue,
  selectedIndex,
  setSelectedIndex,
  darkMode,
  setDarkMode,
  ...props
}) => {
  const classes = useStyles();
  const theme = useTheme(); // the default theme

  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const options = menuOptions;

  const [settingAnchorEl, setSettingAnchorEl] = useState(null);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);

  const [openDrawer, setOpenDrawer] = useState(false);

  const handleSettingOpen = (e) => {
    setSettingAnchorEl(e.currentTarget);
  };

  const handleSettingClose = (e) => {
    setSettingAnchorEl(null);
  };

  const handleMenuOpen = (e) => {
    setMenuAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const handleTabChange = (e, value) => {
    setTabValue(value);
  };

  const handleMenuItemClick = (e, i) => {
    setMenuAnchorEl(null);
    setSelectedIndex(i);
  };

  useEffect(() => {
    [...options].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (tabValue !== route.activeIndex) {
            setTabValue(route.activeIndex);
            if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
              setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        case "/estimate":
          setTabValue(5);
          break;
        default:
          break;
      }
    });
  }, [tabValue, setTabValue, selectedIndex, setSelectedIndex, options]);

  return (
    <Fragment>
      <ElevationScroll>
        <AppBar color="primary" position="fixed" className={classes.appBar}>
          <Toolbar disableGutters>
            <Button
              disableRipple /* no ripple */
              component={Link}
              to="/"
              onClick={() => handleTabChange(0)}
              className={classes.logoContainer}
            >
              <img src={logo} alt="logo" className={classes.logo} />
            </Button>
            {matches ? (
              <HeaderDrawer
                openDrawer={openDrawer}
                setOpenDrawer={setOpenDrawer}
                tabValue={tabValue}
                setTabValue={setTabValue}
                menuAnchorEl={menuAnchorEl}
                handleMenuOpen={handleMenuOpen}
                handleSettingClose={handleSettingClose}
                setDarkMode={setDarkMode}
                darkMode={darkMode}
                settingAnchorEl={settingAnchorEl}
              />
            ) : (
              <HeaderTabs
                {...props}
                tabValue={tabValue}
                handleTabChange={handleTabChange}
                menuAnchorEl={menuAnchorEl}
                handleMenuClose={handleMenuClose}
                handleMenuOpen={handleMenuOpen}
                handleMenuItemClick={handleMenuItemClick}
                handleSettingClose={handleSettingClose}
                handleSettingOpen={handleSettingOpen}
                setTabValue={setTabValue}
                menuOptions={menuOptions}
                settingAnchorEl={settingAnchorEl}
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </Fragment>
  );
};

export default Header;
