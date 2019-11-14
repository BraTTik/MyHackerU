import { combineReducers } from 'redux';
import * as Actions from './actions';

const initialState = {
    movieList: [],
    watched:{},
    isShownModal: false,
    idModal: null,
    isLoading: false,
    viewId: null,
};

function rootReducer(store = initialState, action){
    switch (action.type) {
        case Actions.UPDATE_MOVIE_LIST:
            return { ...store, movieList: action.payload,}

        case Actions.UPDATE_WATCHED:
            return {...store, watched: action.payload, }

        case Actions.UPDATE_LOADING_STATE:
            return {...store, isLoading: action.payload, }
        
        case Actions.UPDATE_VIEW_ID:
            return {...store, viewId: action.payload, }

        default: return store;
    }
}

export default () => combineReducers({
    router: 'connectRouter',
    app: rootReducer,
})