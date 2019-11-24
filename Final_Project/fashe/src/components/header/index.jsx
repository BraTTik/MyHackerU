import React from 'react';
import { useSelector } from 'react-redux';
import Topbar from './topbar';
import Logo from './logo';
import HeaderIcons from './header_icons';
import Nav from './nav';
import Mobile from './mobile';


const Header = (props) => {
    const cart = useSelector(store=>store.app.cart);
    const isMobile = useSelector(store=>store.app.isMobile);


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
            <Mobile/>
	    </header>
    )
}

export default Header;