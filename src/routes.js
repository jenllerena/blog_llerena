import React from "react";
import PostForm from './pages/PostForm';
import Post from './pages/Post';
import Posts from './pages/Posts';
import { Container } from "@material-ui/core";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

export default function Routes() {
  return (
    <Router>
            <Switch>
              <Redirect
                from="/home"
                to="/create"
              />
              <Route
                path="/"
                exact
                component={Posts}
              />
              <Route
                path="/post/:id"
                exact
                strict
                component={Post}
              />
              <Route
                path="/create"
                exact
                component={PostForm}
              />
              <Redirect to="/" />
            </Switch>
    </Router>
  );
}