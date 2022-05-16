import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Observer from './Observer.mjs';
import ByBulk from "./ByBulk.mjs";
import {Provider} from "react-redux";
import store from './redux/store.mjs';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Wrap in Provider whole need components
// with passing it as  props imported
// 'store' contained all 'Slices' (reducers)
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
            <Observer />
            <ByBulk />
        </Provider>
    </React.StrictMode>
)