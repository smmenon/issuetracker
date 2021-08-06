import React from "react";
import { Grid, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Image from 'material-ui-image';
import sideImage from './../../images/SideImage1.png';

// styles
import useStyles from "./styles";

// components
import Widget from "../../components/Widget/Widget";
import { Typography } from "../../components/Wrappers/Wrappers";

export default function HomePage() {
  var classes = useStyles();

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Widget disableWidgetMenu>
            <Grid container item xs={12}>
              <Grid item xs={12}>
                <div className={classes.head}>{"Innovate.Participate.Collaborate"}</div>
              </Grid>
              <Grid item xs={12}>
                <div className={classes.head}>{""}</div>
              </Grid>
              <Grid item xs={6}>
                <Widget noWidgetShadow disableWidgetMenu noBodyPadding noHeaderPadding style={{paddingRight: 15}} headerClass={classes.widgetHeader}>
                  <Typography variant="h4">
                    Foster your thoughts into ideas  and ideas into innovation. 
                    Collaborate on ideas and execute …
                  </Typography>
                  <Typography>
                    A platform to post new ideas and collaborate with like-minded to execute as a project. Search for existing ideas and express interest.
                  </Typography>
                  <br /><br />
                  <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="/"
                    size="large"
                    className={classes.backButton}
                  >
                    Submit Ideas
                  </Button>
                </Widget>
              </Grid>
              <Grid item xs={6}>
                <Widget disableWidgetMenu noBodyPadding noWidgetShadow noHeaderPadding style={{paddingRight: 15}} headerClass={classes.widgetHeader}>
                  <Image src={sideImage} aspectRatio='1/2' imageStyle={{width:'inherit'}} />
                </Widget>
              </Grid>
            </Grid>
          </Widget>
        </Grid>
        <Grid item xs={12}>
        <Widget disableWidgetMenu>
          <Grid container item xs={12}>
          <Grid item xs={4}>
          <Widget title="Layout Options" noWidgetShadow disableWidgetMenu noBodyPadding noHeaderPadding style={{paddingRight: 15}} headerClass={classes.widgetHeader}>
            <Typography>
              There are few position options available for notifications. You
              can click any of them to change notifications position:
            </Typography>
          </Widget>
            </Grid>
            <Grid item xs={4}>
          <Widget title="Notifications Types" disableWidgetMenu noBodyPadding noWidgetShadow noHeaderPadding style={{paddingRight: 15}} headerClass={classes.widgetHeader}>
            <Typography>
              Different types of notifications for lost of use cases. Custom
              classes are also supported.
            </Typography>
          </Widget>
            </Grid>
            <Grid item xs={4}>
            <Widget title="Usage" disableWidgetMenu noBodyPadding noWidgetShadow noHeaderPadding style={{paddingRight: 15}} headerClass={classes.widgetHeader}>
              <Typography>
                Notifications are created with the help of{" "}
                <a href="https://github.com/fkhadra/react-toastify">
                  react-toastify
                </a>
              </Typography>
            </Widget>
            </Grid>
          </Grid>
          </Widget>
        </Grid>
      </Grid>
      
    </>
  );
}
