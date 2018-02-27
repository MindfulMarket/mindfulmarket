import React, { Component } from 'React';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import AllBrands from './AllBrands';
import { HomePage, AllBrands } from './index';

const Root = (props) => {
  // render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/brands" component={AllBrands} />
        </Switch>
      </Router>
      )
      // }
  }

export default Root
    // <Route exact path="/" component={} />
    // <Route path="/" component={} />
    // <Route path="/signup" component={} />
    // <Route exact path="/users" component={} />
    // <Route path="/users/:id" component={} />
    // <Route exact path="/stories" component={} />
    // <Route path="/stories/:id" component={} />
