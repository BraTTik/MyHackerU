import * as Actions from './actions';

export function updateMovies(payload){
    return{
        type: Actions.UPDATE_MOVIE_LIST,
        payload,
    }
}

export function updateWatched(payload){
    return{
        type: Actions.UPDATE_WATCHED,
        payload,
    }
}

export function updateViewId(payload){
    return {
        type: Actions.UPDATE_VIEW_ID,
        payload,
    }
}

export function getMovies(payload){
    return async (dispatcher) => {

        dispatcher(updateLoadingState(true));

        const movies = fetch('https://api.tvmaze.com/search/shows?q=batman');
        movies
          .then(data => data.json())
          .then(data => {
            //this.setState({movieList: data})
            dispatcher(updateMovies(data));

            dispatcher(updateLoadingState(false));
          }).catch(e =>{
            console.log("Error while loading data", e);
          })
    
    }
}

export const updateLoadingState = (payload) => ({ type: Actions.UPDATE_LOADING_STATE, payload});
