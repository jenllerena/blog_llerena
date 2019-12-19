import React from "react";
import PostForm from './pages/PostForm';
import Post from './pages/Post';
import Posts from './pages/Posts';
import About from './pages/About';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, Redirect
} from "react-router-dom";
import NavBar from '../components/NavBar';

export default function BasicExample() {
  return (
    <Router>
          <NavBar />
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
              <Route
                path="/about"
                exact
                component={About}
              />
              <Redirect to="/" />
            </Switch>
            
    </Router>
  );
}