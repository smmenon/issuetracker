import React, { useState } from "react";
import {
  Typography,
  Grid,
  Container,
  Tabs,
  Tab,
  Paper,
  Menu,
  MenuItem,
  Button,
  Lightbulb
} from "@material-ui/core";
import * as Icons from "@material-ui/icons";
import Widget from "../../components/Widget/Widget";

// styles
import useStyles from "./styles";

export default function ProfilePage () {

  var classes = useStyles();

  return (
  <>
    <Container className={classes.cardGrid} maxWidth="xl" >
      <Grid container spacing={4} >
        <Grid item xs={8}>
          <Widget title="Details" disableWidgetMenu>
          </Widget>
        </Grid>
        <Grid item xs={4}>
          <Widget title="Avatar" disableWidgetMenu>
          </Widget>
        </Grid>
      </Grid>
    </Container>
  </>
);}
