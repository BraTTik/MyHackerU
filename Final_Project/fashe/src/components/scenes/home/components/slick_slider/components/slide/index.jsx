import React from 'react';
import './style.css';

const Slide = props => {
    const {
        image,
        index,
        isActive,
    } = props;

    return(
        <div className={`item-slick1 slick-slide`} style={{backgroundImage: `url(${image})`, width: '100%'}} tabIndex="0">
            <div className="wrap-content-slide1 sizefull flex-col-c-m p-l-15 p-r-15 p-t-150 p-b-170">
                {props.children}
            </div>
        </div>

    )
}

export default Slide;

/*                 <span className="caption1-slide1 m-text1 t-center animated visible-false m-b-15 fadeInDown visible-true" data-appear="fadeInDown">
                    Women Collection 2018
                </span>

                <h2 className="caption2-slide1 xl-text1 t-center animated visible-false m-b-37 fadeInUp visible-true" data-appear="fadeInUp">
                    New arrivals
                </h2>

                <div className="wrap-btn-slide1 w-size1 animated visible-false zoomIn visible-true" data-appear="zoomIn">
                    <Link to={ SHOP } className="flex-c-m size2 bo-rad-23 s-text2 bgwhite hov1 trans-0-4" tabIndex="0">
                        Shop Now
                    </Link>
                </div> */