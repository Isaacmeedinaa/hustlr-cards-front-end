import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./store/store";

import "./index.css";
import App from "./App";

import 'fomantic-ui-css/semantic.css';
import $ from 'jquery'
window.jQuery = $;   //this makes jquery accessible for any later jquery plugin (like FUI in this case)
window.$ = $;
require('fomantic-ui-css/semantic.js'); // https://github.com/fomantic/Fomantic-UI/discussions/1591#discussioncomment-92902

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
