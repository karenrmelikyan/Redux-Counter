import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Observer from "./Observer.mjs";
import {Provider} from "react-redux";
import store from './redux/store.mjs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
          <Observer />
      </Provider>
  </React.StrictMode>
)