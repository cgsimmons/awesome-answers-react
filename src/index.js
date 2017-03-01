import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import $ from 'jquery';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// TODO remove on deploy (allows variable access globally in console)
window.$ = $;
