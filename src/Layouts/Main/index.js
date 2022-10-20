import React, { Component } from 'react'
import Home from '../../Pages/Home';
import About from '../../Pages/About Us';
import Services from '../../Pages/Services';
import News from '../../Pages/News';
import Header from '../Header';
import Footer from '../Footer';
import Subscribe from '../../Components/Subscribe';
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
            <Route exact path="/services" component={Services} />
            <Route exact path="/news" component={News} />
            <Redirect to="/home" />
          </Switch>
          <Subscribe />
          <Footer />
        </div>
      );
  }
}
