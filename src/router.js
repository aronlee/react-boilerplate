import React, {Component} from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import Main from './views/main';

export default class RootRouter extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Main} />
        </div>
      </Router>
    );
  }
}
