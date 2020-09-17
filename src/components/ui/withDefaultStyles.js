import React from "react";
import { Paper, withStyles } from "@material-ui/core";

const withDefaultStyles = (Component) => {
  const withDefaultStyles = ({ classes, ...props }) => (
    <Paper className={classes.root}>
      <Component {...props} />
    </Paper>
  );

  const styles = (theme) => ({
    root: {
      backgroundColor: "green",
      color: theme.palette.common.orange,
    },
  });

  return withStyles(styles)(withDefaultStyles);
};

export default withDefaultStyles;
