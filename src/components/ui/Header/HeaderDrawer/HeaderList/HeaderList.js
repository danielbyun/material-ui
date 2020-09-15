import React from "react";
import { List, ListItem, ListItemText, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.7,
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
  },
  drawerItemSelected: {
    opacity: 1,
  },
}));

const HeaderList = ({
  menuAnchorEl,
  handleMenuOpen,
  setOpenDrawer,
  tabValue,
  setTabValue,
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

  return (
    <List disablePadding>
      {routes.map((route, index) => (
        <ListItem
          key={index}
          divider
          button
          component={Link}
          to={route.link}
          selected={tabValue === route.activeIndex}
          onClick={() => {
            setOpenDrawer(false);
            setTabValue(route.activeIndex);
          }}
        >
          <ListItemText
            className={
              tabValue === route.activeIndex
                ? clsx([classes.drawerItem, classes.drawerItemSelected])
                : classes.drawerItem
            }
            disableTypography
          >
            {route.name}
          </ListItemText>
        </ListItem>
      ))}

      <ListItem
        onClick={() => {
          setTabValue(5);
          setOpenDrawer(false);
        }}
        divider
        button
        component={Link}
        to="/estimate"
        className={classes.drawerItemEstimate}
        selected={tabValue === 5}
      >
        <ListItemText
          className={
            tabValue === 5
              ? clsx([classes.drawerItem, classes.drawerItemSelected])
              : classes.drawerItem
          }
          disableTypography
        >
          Free Estimate
        </ListItemText>
      </ListItem>
    </List>
  );
};

export default HeaderList;
