import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { Loading } from "./components";
import './global.css'

ReactDOM.render(
  <React.StrictMode>
    {/* <Loading> */}
      <App />
    {/* </Loading> */}
  </React.StrictMode>,
  document.getElementById('root')
);

