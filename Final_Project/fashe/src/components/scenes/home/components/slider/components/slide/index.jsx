import React from 'react'
import { Link } from 'react-router-dom';
import { SHOP } from '../../../../../../../router/url';


const Slide = (props) => {

    const {
        isActive,
        index,
        image } = props;

    return(

        <div className={`item-slick1 item${index}-slick1 slick-slide ${isActive ? 'slick-current slick-active': null}`} style={{backgroundImage: `url(${image})`, width: '921px', position: 'relative', left: '0px', top: '0px', zIndex: '999', opacity: '1'}} data-slick-index="0" aria-hidden="false" tabIndex="0">
            <div className="wrap-content-slide1 sizefull flex-col-c-m p-l-15 p-r-15 p-t-150 p-b-170">
                <span className="caption1-slide1 m-text1 t-center animated visible-false m-b-15 fadeInDown visible-true" data-appear="fadeInDown">
                    Women Collection 2018
                </span>

                <h2 className="caption2-slide1 xl-text1 t-center animated visible-false m-b-37 fadeInUp visible-true" data-appear="fadeInUp">
                    New arrivals
                </h2>

                <div className="wrap-btn-slide1 w-size1 animated visible-false zoomIn visible-true" data-appear="zoomIn">
                    <Link to={ SHOP } className="flex-c-m size2 bo-rad-23 s-text2 bgwhite hov1 trans-0-4" tabIndex="0">
                        Shop Now
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Slide;