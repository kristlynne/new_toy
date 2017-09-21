import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App'

$(function() {
  let reactApp = document.getElementById('app')
  if(reactApp){
    ReactDOM.render(
      <App/>,
      reactApp
    );
  }
});
