import React from 'react'
import { SHOP } from '../../../../../../../router/url';
import SlideButton from './slide_button';


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

                <SlideButton to={ SHOP } title="SHOP NOW"/>
            </div>
        </div>
    )
}

export default Slide;