import { Link } from 'react-router-dom';
import React from 'react';
import URL from './url';

const Nav = (props) => {
    const renderNavItems = (item, index) => {
        return(
            <li  key={index}>
                <Link to={item.href}>{ item.title }</Link>
            </li>
        );
    }
    return (
        <div className="wrap_menu">
        <nav className="menu">
            <ul className="main_menu">
                { URL.map(renderNavItems) }
            </ul>
        </nav>
    </div>


    )
}

export default Nav;
