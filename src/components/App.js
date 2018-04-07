import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Home from "./Home/Home";
import Search from "./Search/Search"
import Footer from './Footer';
import FooterPlaylist from './FooterPlaylist';

import store from '../store/store';
class App extends Component {
  render() {
    let {footerPlaylist} = store.getState().maskWrap
    return (
      <div className='App'>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/search' component={Search} />
            <Redirect to="/" />
          </Switch>
        </Router>
        <Footer />
        <FooterPlaylist show={footerPlaylist}/>
      </div>
    );
  }
}

export default App;
