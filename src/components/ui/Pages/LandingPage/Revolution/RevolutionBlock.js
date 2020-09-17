import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Button,
  makeStyles,
  useTheme,
} from "@material-ui/core";
import ButtonArrow from "../../../ButtonArrow/ButtonArrow";
import revolutionBackground from "../../../../../assets/repeatingBackground.svg";

const useStyle = makeStyles((theme) => ({
  visionaryText: {
    textAlign: "center",
  },
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground}) `,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  revolutionContainer: {
    height: "100rem",
    marginTop: "12rem",
  },
  revolutionCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: "10rem",
    [theme.breakpoints.down("sm")]: {
      padding: "8rem 0",
    },
  },
}));

const RevolutionBlock = ({ setTabValue }) => {
  const classes = useStyle();
  const theme = useTheme();

  return (
    <Grid item>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.revolutionContainer}
      >
        <Card className={classes.revolutionCard}>
          <CardContent>
            <Grid
              container
              direction="column"
              className={classes.visionaryText}
            >
              <Grid item>
                <Typography variant="h3" gutterBottom>
                  The Revolution
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">
                  Some BS revolutionary vision bsbs
                </Typography>
                <Button
                  variant="outlined"
                  className={classes.learnButton}
                  component={Link}
                  to="/revolution"
                  onClick={() => setTabValue(2)}
                >
                  <span className={classes.learnMoreButton}>Learn More</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <div className={classes.revolutionBackground} />
      </Grid>
    </Grid>
  );
};

export default RevolutionBlock;
