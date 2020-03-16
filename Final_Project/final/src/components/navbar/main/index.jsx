import React from 'react';
import Logo from '../../../img/icons/logo.png';
import './index.css';
import * as Navs from '../navigation';


const Main = (props) => {
    const { NAVIGATION } = Navs;

    const renderNavigation = (item, index) => {
        return (<a 
                key={index} 
                className="nav-item pt-1 pb-0 text-dark ml-md-3" 
                href={ item.url }>{ item.title }</a>
        )

    }

    return(
        <nav className="navbar-expand-md" id="main-navbar">
        {
            props.children
        }
        <div className="navbar justify-content-between navbar-light bg-white">
            <div className="navbar-brand">
                <div style={{ textIndent:'-1000px', position:'absolute' }}>Fashe</div>
                <img src={Logo}/>
            </div>
            <button className="navbar-toggler"
                    type="button"
                    >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-nav navbar-collapse collapse justify-content-center"
                id="nav-menu"
                aria-expanded="false">
                { NAVIGATION.map(renderNavigation) }
            </div>
            <div className="row justify-content-center text-muted" id="user-main" style={{fontSize: '2rem'}}>
                <div className="login px-3">
                    <span className="far fa-user-circle"/>
                </div>
                |
                <div className="cart px-3">
                    <span className="fas fa-shopping-bag"/>
                </div>
            </div>
        </div>

    </nav>
    )
}

export default Main;
