import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import navs from './nav/url';
import socials from '../social_icons/socialIcons';
import CartIcon  from '../../assets/images/icons/icon-header-02.png';
import UserIcon from '../../assets/images/icons/icon-header-01.png';
import LogoImage from '../../assets/images/icons/logo.png';
import Logo from './logo';
import HeaderIcons from './header_icons';


const Mobile = (props) => {
    const totalItems = useSelector(store=>store.app.cart.totalItems);
    const [isActive, setIsActive] = useState(false);

    const updateActive = () => {
        setIsActive(!isActive);
    }
    
    const renderNavItems = (item, index) => {
        return (
            <li key={index} className="item-menu-mobile">
                <Link to={item.href}>{item.title}</Link>
            </li>
        )
    }
    const renderSocials = (item, index) =>{
        return <Link key={index} to={item.href} className={`topbar-social-item ${item.icon}`}></Link>
    }

    const menuClosedStyle = {maxHeight: 0}
    const menuOpenedStyle = {maxHeight: '450px'}
    return(
        <React.Fragment>
            <div className="wrap_header_mobile">
                <Logo className="logo-mobile" />

                <div className="btn-show-menu">
                    <div className="header-icons-mobile">
                            <HeaderIcons totalItems={ totalItems }/>
                            <div className={`btn-show-menu-mobile hamburger hamburger--squeeze ${isActive && 'is-active'}`} onClick={ updateActive }>
                                <span className="hamburger-box">
                                    <span className="hamburger-inner"></span>
                                </span>
                            </div>
                    </div>
                </div>
            </div>
            <div className="wrap-side-menu" style={ {transition: 'max-height .5s ease', overflow:'hidden', display: 'block', ...(isActive ? menuOpenedStyle : menuClosedStyle)} }>
                <nav className="side-menu">
                    <ul className="main-menu">
                        <li className="item-topbar-mobile p-l-20 p-t-8 p-b-8">
                            <span className="topbar-child1">
                                Free shipping for standard order over $100
                            </span>
                        </li>

                        <li className="item-topbar-mobile p-l-20 p-t-8 p-b-8">
                            <div className="topbar-child2-mobile">
                                <span className="topbar-email">
                                    fashe@example.com
                                </span>

                                <div className="topbar-language rs1-select2">
                                    <select className="selection-1" name="time">
                                        <option>USD</option>
                                        <option>EUR</option>
                                    </select>
                                </div>
                            </div>
                        </li>

                        <li className="item-topbar-mobile p-l-10">
                            <div className="topbar-social-mobile">
                                { socials.map(renderSocials)}
                            </div>
                        </li>
                        { navs.map(renderNavItems) }
                    </ul>
                </nav>
            </div>
        </React.Fragment>
    )
}

export default Mobile;