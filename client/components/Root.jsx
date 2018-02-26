import React, { Component } from 'React';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllBrands from './AllBrands';

export default class Root extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <div id="main" className="container-fluid">
            <Route exact path="/" component={} />
            <Route path="/login" component={} />
            <Route path="/signup" component={} />
            <Route exact path="/users" component={} />
            <Route path="/users/:id" component={} />
            <Route exact path="/stories" component={} />
            <Route path="/stories/:id" component={} />
          </div>
        </Switch>
      </Router>
    )
  }
}
