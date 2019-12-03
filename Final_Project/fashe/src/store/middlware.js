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
    if(action.type === actions.updateCart.getType()){
        localStorage.setItem('_fashe_cart', JSON.stringify(action.payload))
    }
    if(action.type === actions.updateCartTotalItems.getType()){
        localStorage.setItem('_fashe_cart', JSON.stringify({items:[...store.getState().app.cart.items], totalItems: store.getState().app.cart.totalItems+1}));
    }
    return next(action);
}