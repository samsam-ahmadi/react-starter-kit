import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { initStore } from './store';
import App from './pages/App';
import * as serviceWorker from './serviceWorker';

let theme = {
  primary: '#4dd0e1',
  indigo: '#7986cb',
  fs14: 14 / 14 + 'rem',
  fs13: 13 / 14 + 'rem',
  fs12: 12 / 14 + 'rem',
  fs11: 11 / 14 + 'rem',
  shadow: 'rgba(0, 0, 0, 0.2) 0px 2px 5px 0px;',
};

const renderApp = app =>
  ReactDOM.render(
    <Provider store={initStore}>
      <ThemeProvider theme={theme}>{app}</ThemeProvider>
    </Provider>,
    document.getElementById('root'),
  );

renderApp(<App />);

if (module.hot) {
  module.hot.accept('./pages/App', () => {
    const NextApp = require('./pages/App').default;
    renderApp(<NextApp />);
  });
}

serviceWorker.unregister();
