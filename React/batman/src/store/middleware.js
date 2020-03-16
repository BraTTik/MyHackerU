import * as Actions from './actions';

export const gotDataMiddleware = store => next => action => {
    if(Actions.type === Actions.UPDATE_MOVIE_LIST){
        alert("Список фильмов успешно загружен!!");
        // store.dispatch(Action.UPDATE_MOVIE_LIST);
    }
    return next(action);
}