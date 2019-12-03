import { createAction } from 'redux-act';

export const updateCart = createAction('updateCart');
export const updateCartCounter = createAction('updateCartCounter');
export const deleteCartItem = createAction('deleteCartItem');
export const updateCartTotalItems = createAction('updateCartTotalItems');
export const updateGoods = createAction('updateGoods');
export const updateIsMobile = createAction('updateIsMobile');
export const updateProductPageCounter = createAction('updateProductPageCounter');
export const updateProductPageId = createAction('updateProductPageId');
export const updateCategoryId = createAction('updateCategoryId');
export const updateColorId = createAction('updateColorId');
export const updateSortFunc = createAction('updateSortFunc');
export const updatePriceFilter = createAction('updatePriceFilter');
export const updateShippingTo = createAction('updateShippingTo');
export const updateShopModal = createAction('updateShopModal');

//export const addCartItem = createAction('addCartItem');
