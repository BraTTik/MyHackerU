import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateCategoryId } from '../../../../../store/actions';
import URL from '../../../../header/nav/url';
import CategoriesId from './categories';
import ColorFilter from './components/color_filter';

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

                <div className="wra-filter-bar">
                    <div id="filter-bar" className="noUi-target noUi-ltr noUi-horizontal">
                        <div className="noUi-base">
                            <div className="noUi-origin" style={{left: '0%'}}>
                                <div className="noUi-handle noUi-handle-lower" data-handle="0" tabIndex="0" role="slider" aria-orientation="horizontal" aria-valuemin="0.0" aria-valuemax="100.0" aria-valuenow="0.0" aria-valuetext="50.00" style={{zIndex: '5'}}>
                                </div>
                            </div>
                            <div className="noUi-connect" style={{left: '0%', right: '0%'}}>
                            </div>
                            <div className="noUi-origin" style={{left: '100%'}}>
                                <div className="noUi-handle noUi-handle-upper" data-handle="1" tabIndex="0" role="slider" aria-orientation="horizontal" aria-valuemin="0.0" aria-valuemax="100.0" aria-valuenow="100.0" aria-valuetext="200.00" style={{zIndex: 4}}>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-sb-m flex-w p-t-16">
                    <div className="w-size11">
                        <button className="flex-c-m size4 bg7 bo-rad-15 hov1 s-text14 trans-0-4">
                            Filter
                        </button>
                    </div>

                    <div className="s-text3 p-t-10 p-b-10">
                        Range: $<span id="value-lower">50</span> - $<span id="value-upper">200</span>
                    </div>
                </div>
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