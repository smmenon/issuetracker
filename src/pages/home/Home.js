import React from "react";
import { Grid, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Image from 'material-ui-image';
import sideImage from './../../images/SideImage1.png';
import pyramidImage from './../../images/navaritih_pyramid.png';
import pyramiImage from './../../pages/ideahub/IdeaHub';
// styles
import useStyles from "./styles";

// components
import Widget from "../../components/Widget/Widget";
import { Typography } from "../../components/Wrappers/Wrappers";
import Notification from "../../components/Notification";

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
                  <br /> <br /> <br />
                  <Typography variant="h4">
                    Foster your thoughts into ideas  and ideas into innovation. 
                    Collaborate on ideas and execute …
                  </Typography>
                  <br />
                  <Typography>
                    A platform to post new ideas and collaborate with like-minded to execute as a project. Search for existing ideas and express interest.
                    Tag your ideas to increase the search hits that helps collaborators to contribute. Discuss with contributors to make them stakeholder 
                    or participant for the idea and co-execute.
                  </Typography>
                  <br /><br />
                  <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="./IdeaHubForm"
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
            <Grid item xs={8}>
              <Image src={pyramidImage} aspectRatio='1/4' imageStyle={{width:'inherit'}} />
            </Grid>
            <Grid item xs={4}>
                  <Typography variant="h4">
                    Foster your thoughts into ideas  and ideas into innovation. 
                    Collaborate on ideas and execute …
                  </Typography>
                  <br />
                  <Typography>
                    A platform to post new ideas and collaborate with like-minded to execute as a project. Search for existing ideas and express interest.
                    Tag your ideas to increase the search hits that helps collaborators to contribute. Discuss with contributors to make them stakeholder 
                    or participant for the idea and co-execute.
                  </Typography>
            </Grid>
          </Grid>
          </Widget>
        </Grid>
        <Grid item xs={12}>
        <Widget disableWidgetMenu>
          <Grid container item xs={12}>
          <Grid item xs={4}>
          <Widget title="" noWidgetShadow disableWidgetMenu noBodyPadding noHeaderPadding style={{paddingRight: 15}} headerClass={classes.widgetHeader}>
          <Notification
              className={classes.notificationItem}
              shadowless
              message="Idea Tagging"
              variant="contained"
              color="primary"
            />
            <br />
            <Typography variant="h5">Functional Stream</Typography>
            <Typography>
              Think ideas in the Consumer Industry space and that qualifies for the primary category of ideas. 
              For e.g. any business problem that are trying to be solved in the Consumer Industry space shall be 
              give a Functional tag.
            </Typography>
            <br />
            <Typography variant="h5">Technology Stream</Typography>
            <Typography>
              Tag your ideas a technology if you are trying to solve an issue using a technology trend. 
              This could be use of AI/ML, Big Data, Side Cars to solve a business problem.
            </Typography>
            <br />
            <Typography variant="h5">General Stream</Typography>
            <Typography>
              If the idea do not fall in the other two categories tag it as general. 
              There are no priorities and the tags are strictly to filter and classify the ideas.
            </Typography>
          </Widget>
            </Grid>
            <Grid item xs={4}>
          <Widget title="" disableWidgetMenu noBodyPadding noWidgetShadow noHeaderPadding style={{paddingRight: 15}} headerClass={classes.widgetHeader}>
          <Notification
              className={classes.notificationItem}
              type="collaborate"
              shadowless
              message="Collaborate"
              variant="contained"
              color="secondary"
            />
            <br />
            <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Etiam non quam lacus suspendisse faucibus interdum posuere lorem. Neque sodales ut etiam sit amet nisl purus in mollis. Sit 
            amet purus gravida quis. Et tortor at risus viverra adipiscing at in tellus. 
            </Typography>
            <br />
            <Typography>
            Nisl vel pretium lectus quam id leo in vitae. 
            Commodo ullamcorper a lacus vestibulum sed arcu non. Amet porttitor eget dolor morbi non. Suspendisse interdum consectetur 
            libero id faucibus nisl tincidunt eget. Suscipit tellus mauris a diam. Orci ac auctor augue mauris. Nibh tortor id aliquet 
            lectus proin nibh nisl condimentum.
            </Typography>
          </Widget>
            </Grid>
            <Grid item xs={4}>
            <Widget title="" disableWidgetMenu noBodyPadding noWidgetShadow noHeaderPadding style={{paddingRight: 15}} headerClass={classes.widgetHeader}>
            <Notification
              className={classes.notificationItem}
              shadowless
              type="shipped"
              message="Plan & Execute"
              variant="contained"
              color="warning"
            />
            <br />
            <br />
            <Grid item xs={12}>
              <Grid item xs={12}>
                <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Etiam non quam lacus suspendisse faucibus interdum posuere lorem. Neque sodales ut etiam sit amet nisl purus in mollis. Sit 
                amet purus gravida quis. Et tortor at risus viverra adipiscing at in tellus. 
                </Typography>
              </Grid>
            </Grid>
            
            </Widget>
            </Grid>
          </Grid>
          </Widget>
        </Grid>
      </Grid>
      
    </>
  );
}
