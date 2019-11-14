import React from 'react';

const LeftBar = (props) => {
    return(
        
        <div className="col-sm-6 col-md-4 col-lg-3 p-b-50">
        <div className="leftbar p-r-20 p-r-0-sm">
            <h4 className="m-text14 p-b-7">
                Categories
            </h4>

            <ul className="p-b-54">
                <li className="p-t-4">
                    <a href="#" className="s-text13 active1">
                        All
                    </a>
                </li>

                <li className="p-t-4">
                    <a href="#" className="s-text13">
                        Women
                    </a>
                </li>

                <li className="p-t-4">
                    <a href="#" className="s-text13">
                        Men
                    </a>
                </li>

                <li className="p-t-4">
                    <a href="#" className="s-text13">
                        Kids
                    </a>
                </li>

                <li className="p-t-4">
                    <a href="#" className="s-text13">
                        Accesories
                    </a>
                </li>
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

            <div className="filter-color p-t-22 p-b-50 bo3">
                <div className="m-text15 p-b-12">
                    Color
                </div>

                <ul className="flex-w">
                    <li className="m-r-10">
                        <input className="checkbox-color-filter" id="color-filter1" type="checkbox" name="color-filter1"/>
                        <label className="color-filter color-filter1" htmlFor="color-filter1"></label>
                    </li>

                    <li className="m-r-10">
                        <input className="checkbox-color-filter" id="color-filter2" type="checkbox" name="color-filter2"/>
                        <label className="color-filter color-filter2" htmlFor="color-filter2"></label>
                    </li>

                    <li className="m-r-10">
                        <input className="checkbox-color-filter" id="color-filter3" type="checkbox" name="color-filter3"/>
                        <label className="color-filter color-filter3" htmlFor="color-filter3"></label>
                    </li>

                    <li className="m-r-10">
                        <input className="checkbox-color-filter" id="color-filter4" type="checkbox" name="color-filter4"/>
                        <label className="color-filter color-filter4" htmlFor="color-filter4"></label>
                    </li>

                    <li className="m-r-10">
                        <input className="checkbox-color-filter" id="color-filter5" type="checkbox" name="color-filter5"/>
                        <label className="color-filter color-filter5" htmlFor="color-filter5"></label>
                    </li>

                    <li className="m-r-10">
                        <input className="checkbox-color-filter" id="color-filter6" type="checkbox" name="color-filter6"/>
                        <label className="color-filter color-filter6" htmlFor="color-filter6"></label>
                    </li>

                    <li className="m-r-10">
                        <input className="checkbox-color-filter" id="color-filter7" type="checkbox" name="color-filter7"/>
                        <label className="color-filter color-filter7" htmlFor="color-filter7"></label>
                    </li>
                </ul>
            </div>

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