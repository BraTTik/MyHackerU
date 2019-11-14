import * as actions from './actions';

export const gotDataMiddleware = store => next => action => {
    if(action.type === actions.updateCartCounter.getType()
        || 
        action.type === actions.deleteCartItem.getType()
        ||
        action.type === actions.updateCart.getType())
        {
        console.log(action);
        let newAction = {type: actions.updateCartTotalItems.getType()}
        store.dispatch({type: action.type, payload: action.payload});
        return next(newAction);
    }
    return next(action);
}