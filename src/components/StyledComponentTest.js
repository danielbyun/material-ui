import React from "react";
import { Typography } from "@material-ui/core";
import withDefaultStyles from "./ui/withDefaultStyles";

const StyledComponentTest = () => {
  return <Typography variant="h1">TESTTEST</Typography>;
};

export default withDefaultStyles(StyledComponentTest);
