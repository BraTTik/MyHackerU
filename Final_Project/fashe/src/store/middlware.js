import * as actions from './actions';

export const gotDataMiddleware = store => next => action => {
    if(action.type === '@@router/LOCATION_CHANGE')
        {
            let scroll = window.pageYOffset;
            let scrollSpeed = 50;
            setTimeout(function scrollTop(){
                window.scrollBy(0, -scrollSpeed);
                scroll -= scrollSpeed;
                if(scroll >= 0){
                    setTimeout(scrollTop, 5);
                }
            }, 5)
    }
    return next(action);
}