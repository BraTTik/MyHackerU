import React from 'react';
import  { Link } from 'react-router-dom';
import { CART } from '../../../router/url';
import { useSelector } from 'react-redux';


const HeaderIcons = ({totalItems}) => {

    return(
        <div className="header-icons">
        <Link to="#" className="header-wrapicon1 dis-block">
            <img src="images/icons/icon-header-01.png" className="header-icon1" alt="ICON"/>
        </Link>

        <span className="linedivide1"></span>

        <div className="header-wrapicon2">
            <Link to={ CART } >
                <img src="images/icons/icon-header-02.png" className="header-icon1 js-show-header-dropdown" alt="ICON"/>
                <span className="header-icons-noti">{ totalItems  }</span>
            </Link>
        </div>
    </div>
    )
}

export default HeaderIcons;