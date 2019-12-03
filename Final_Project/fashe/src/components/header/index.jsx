import React from 'react';
import { useSelector } from 'react-redux';
import Topbar from './topbar';
import Logo from './logo';
import HeaderIcons from './header_icons';
import Nav from './nav';
import Mobile from './mobile';


const Header = (props) => {
    const cart = useSelector(store=>store.app.cart);


    return(
        <header className="header1">
            <div className="container-menu-header">

                <Topbar />

                <div className="wrap_header">
                    <Logo className="logo"/>
                    <Nav/>
                    <div className="header-icons">
                        <HeaderIcons totalItems={ cart.totalItems }/>
                    </div>
			    </div>
            </div>
            <Mobile/>
	    </header>
    )
}

export default Header;