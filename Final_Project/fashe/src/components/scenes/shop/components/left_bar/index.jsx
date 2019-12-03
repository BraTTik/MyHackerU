import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateCategoryId } from '../../../../../store/actions';
import URL from '../../../../header/nav/url';
import CategoriesId from './categories';
import ColorFilter from './components/color_filter';
import PriceFilter from './components/price_filter';

const LeftBar = (props) => {
    let shopItems = URL.find(item => item.title === 'Shop');

    const dispatcher = useDispatch();

    const setCategoryId = (categoryName) => {
        dispatcher({
            type: updateCategoryId.getType(),
            payload: CategoriesId[categoryName],
        }) 
    }

    const renderNavItem = (item, index) => {
        return(
            <li key={index} className="p-t-4">
                <Link  
                    to={item.href} 
                    className="s-text13 active1"
                    onClick = {() => { setCategoryId(item.title) } }
                    >
                    { item.title }
                </Link>
            </li>
        )
    }
    return(
        
        <div className="col-sm-6 col-md-4 col-lg-3 p-b-50">
        <div className="leftbar p-r-20 p-r-0-sm">
            <h4 className="m-text14 p-b-7">
                Categories
            </h4>

            <ul className="p-b-54">
                <Link to={shopItems.href} className="s-text13 active1" onClick = {()=>{ setCategoryId('All')}}>
                    All
                </Link>
                { shopItems.children.map(renderNavItem) }
            </ul>

            <h4 className="m-text14 p-b-32">
                Filters
            </h4>

            <div className="filter-price p-t-22 p-b-50 bo3">
                <div className="m-text15 p-b-17">
                    Price
                </div>
                <PriceFilter />

            </div>
            <ColorFilter />
            <div className="search-product pos-relative bo4 of-hidden">
                <input className="s-text7 size6 p-l-23 p-r-50" type="text" name="search-product" placeholder="Search Products..."/>

                <button className="flex-c-m size5 ab-r-m color2 color0-hov trans-0-4">
                    <i className="fs-12 fa fa-search" aria-hidden="true"></i>
                </button>
            </div>
        </div>
    </div>

    )
}

export default LeftBar;