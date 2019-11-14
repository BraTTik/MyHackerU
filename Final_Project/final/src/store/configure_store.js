import {
    createStore,
    applyMiddleware,
    compose,
} from 'redux';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import createRootReducer from './reducer';

const history = createBrowserHistory();

export function configureStore(preloadedState){
    const store = createStore(
        createRootReducer(history),
        preloadedState,
        compose(
            applyMiddleware(thunk),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        )
    )

    return store;
}