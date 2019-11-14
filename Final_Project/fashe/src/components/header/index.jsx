import React from 'react';
import { useSelector } from 'react-redux';
import Topbar from './topbar';
import Logo from './logo';
import HeaderIcons from './header_icons';
import Nav from './nav';


const Header = (props) => {
    const cart = useSelector(store=>store.app.cart)
    return(
        <header className="header1">
            <div className="container-menu-header">

                <Topbar />

                <div className="wrap_header">
                    <Logo/>
                    <Nav/>
                    <HeaderIcons totalItems={ cart.totalItems }/>
			    </div>
            </div>
	    </header>
    )
}

export default Header;