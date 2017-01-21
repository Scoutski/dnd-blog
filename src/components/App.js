import React, { PropTypes } from 'react';
import StyledApp from '../styles/App.css';

const propTypes = {
  children: PropTypes.object,
};

const App = ({ children }) => (
  <StyledApp>
    <h1>{children}</h1>
  </StyledApp>
);

App.propTypes = propTypes;
export default App;
