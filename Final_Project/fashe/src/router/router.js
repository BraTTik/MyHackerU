import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import * as URL from './url';

import Home from '../components/scenes/home';

const Shop = lazy(()=>import ( '../components/scenes/shop' ));
const Product = lazy(()=>import ( '../components/scenes/product' ));
const Cart = lazy(()=>import('../components/scenes/cart'));
const About = lazy(()=>import('../components/scenes/about'));

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path={URL.SHOP} component={Shop}/>
        <Route exact path={URL.PRODUCT} component={Product}/>
        <Route exact path={URL.CART} component={Cart}/>
        <Route exact path={URL.ABOUT} component={About}/>
    </Switch>
)
