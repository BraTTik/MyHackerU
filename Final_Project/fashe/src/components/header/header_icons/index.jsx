import React from 'react';
import  { Link } from 'react-router-dom';
import { CART } from '../../../router/url';
import CartIcon  from '../../../assets/images/icons/icon-header-02.png';
import UserIcon from '../../../assets/images/icons/icon-header-01.png';


const HeaderIcons = ({totalItems}) => {
 
    return(
        <div className="header-icons">
        <Link to="#" className="header-wrapicon1 dis-block">
            <img src={ UserIcon } className="header-icon1" alt="ICON"/>
        </Link>

        <span className="linedivide1"></span>

        <div className="header-wrapicon2">
            <Link to={ CART } >
                <img src={ CartIcon } className="header-icon1 js-show-header-dropdown" alt="ICON"/>
                <span className="header-icons-noti">{ totalItems  }</span>
            </Link>
        </div>
    </div>
    )
}

export default HeaderIcons;