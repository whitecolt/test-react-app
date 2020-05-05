import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

const elem = <h2>Hello pigs</h2>;

ReactDOM.render(
  <React.StrictMode>
  {elem}
  </React.StrictMode>,
  document.getElementById('root')
);


