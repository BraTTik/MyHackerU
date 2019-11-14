import { combineReducers } from 'redux';
import * as Actions from './actions';

const initialState = {
    isMobile: true,
}

const rootReducer = (store = initialState, action) => {
    switch(action.type){
        case Actions.UPDATE_SCREEN_SIZE:
            return {...store, isMobile: action.payload };
        default:
            return store;
    }
}

export default () => combineReducers({
    app: rootReducer,
    router: 'connectRouter',
});