import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import configureStore, { history } from './store/configure_store';
import * as serviceWorker from './serviceWorker';
import theRoutes from './router/router'

const store = configureStore();

ReactDOM.render(
    <Provider store = { store }>
        <ConnectedRouter history = { history }>
            <App >
                { theRoutes }
            </App>
        </ConnectedRouter>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
