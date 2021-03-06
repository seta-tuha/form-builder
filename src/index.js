import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@material/react-checkbox/dist/checkbox.css';
import '@material/react-select/dist/select.css';
import '@material/react-text-field/dist/text-field.css';
import '@material/react-material-icon/dist/material-icon.css';

import App from './App';
import * as serviceWorker from './serviceWorker';

import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';


ReactDOM.render(
  <ThemeProvider theme={createMuiTheme({})}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
