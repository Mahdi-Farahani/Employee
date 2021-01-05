import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./App/components/serviceWorker";
import { Provider } from 'react-redux';
import { store } from './App/actions/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register();
