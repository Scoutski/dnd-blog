import { Route, IndexRoute } from 'react-router';
import React from 'react';
import App from '../components/App';
import Home from '../components/Home';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
  </Route>
);
