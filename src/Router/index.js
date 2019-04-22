import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from '../App';
import UserProfile from '../UserPage';

class Routes extends Component {
  render() {
    return (
      <Router>
            <Switch>
              <Route path='/' exact component={App} />
              <Route path='/user' component={UserProfile} />>
            </Switch>
      </Router>
    );
  }
}

export default Routes;