import React from 'react';
import {Link} from 'react-router-dom';
import { HOME } from '../../../router/url';
import LogoImage from '../../../assets/images/icons/logo.png'

const Logo = (props) =>{
    return(
        <Link to={ HOME } className="logo">
            <img src={ LogoImage } alt="IMG-LOGO"/>
        </Link>
    );
}

export default Logo;