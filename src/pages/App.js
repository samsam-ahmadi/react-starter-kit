import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Index from '../components/Index';
import css from '../App.scss';

const GlobalStyle = createGlobalStyle`
 ${css}
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" component={Index} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
