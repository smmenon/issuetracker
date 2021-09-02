import React from "react";
import {
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
import classnames from "classnames";

//icons

// styles
import useStyles from "./styles";

// components
import Header from "../Header";
import Sidebar from "../Sidebar";

// pages
import Dashboard from "../../pages/dashboard";
import Home from "../../pages/home";
import Notifications from "../../pages/notifications";
import Maps from "../../pages/maps";
import IdeaHub from "../../pages/ideahub/IdeaHub";
import IdeaHubNew from "../../pages/ideahubnew/IdeaHub";
import IdeaHubForm from "../../pages/ideahubnew/IdeaHubForm";
import Profile from "../../pages/profile/Profile";
import Charts from "../../pages/charts";
import IdeaList from '../../pages/ideahub/IdeaList'

// context
import { useLayoutState } from "../../context/LayoutContext";

function Layout(props) {
  var classes = useStyles();

  // global
  var layoutState = useLayoutState();

  return (
    <div className={classes.root}>
        <>
          <Header history={props.history} />
          <Sidebar />
          <div
            className={classnames(classes.content, {
              [classes.contentShift]: layoutState.isSidebarOpened,
            })}
          >
            <div className={classes.fakeToolbar} />
            <Switch>
              <Route path="/app/dashboard" component={Dashboard} />
              <Route path="/app/home" component={Home} />
              <Route path="/app/ideaHub" component={IdeaHub} />
              <Route path="/app/ideaHubNew" component={IdeaHubNew} />
              <Route path="/app/ideaHubForm" component={IdeaHubForm} />
              <Route path="/app/notifications" component={Notifications} />
              <Route path="/app/idealist" component={IdeaList} />
              <Route path="/app/profile" component={Profile} />
              <Route path="/app/ui/maps" component={Maps} />
              <Route path="/app/ui/charts" component={Charts} />
            </Switch>
          </div>
        </>
    </div>
  );
}

export default withRouter(Layout);
