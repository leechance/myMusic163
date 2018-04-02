import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home/Home";
import Search from "./Search/Search"

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/search' component={Search} />
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }
}

export default App;
