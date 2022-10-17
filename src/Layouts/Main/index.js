import React, { Component } from 'react'
import Home from '../../Pages/Home';
import About from '../../Pages/About Us';
import Header from '../Header';
import Footer from '../Footer';
import { Switch, Route, Redirect } from 'react-router-dom';

export default class Main extends Component {
  render() {
    return (
        <div>   
          <Header />
          <Switch>
            <Route path= "/home" component={Home} />
            {/* exact used to prevent switch from confusion with other menu links */}
            <Route exact path="/aboutus" component={About} />
            <Redirect to="/home" />
          </Switch>
          <Footer />
        </div>
      );
  }
}
