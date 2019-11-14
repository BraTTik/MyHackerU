import React,{ useEffect }from 'react';
import Logo from '../../../img/icons/logo.png';
import './index.css';
import $ from 'jquery';
import 'bootstrap';
import menuOpener from '../menu-opener';
import * as Navs from '../navigation';

const Mobile = (props) => {

    const { NAVIGATION } = Navs;
    
    const renderNavigation = (item, index) => {
        return <a key = { index } className="nav-item px-3 py-1" href={ item.url }>{ item.title }</a>
    }

    useEffect(() => {
        menuOpener();
    });

    const collapse = () =>{
        if($('.navbar-collapse.show').length > 0){
            $('.navbar-collapse').collapse('hide');
        }else{
            $('.navbar-collapse').collapse('show');
        };
    }

    return(
        <nav className="navbar-expand-lg" id="mobile-navbar">
        <div className="navbar justify-content-between navbar-light bg-white px-0">
            <div className="navbar-brand ml-3">
                <div style={{textIndent:'-1000px', position:'absolute'}}>Fashe</div>
                <img src={Logo}/>
            </div>
            <button className="navbar-toggler mr-1 mb-1"
                    type="button"
                    onClick={ ()=> collapse() }
                    >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-nav navbar-collapse collapse justify-content-center"
                id="nav-menu"
                aria-expanded="false"
                style ={ {    width: '100%', alignItems: 'flex-start' } }>
                <div className="topbar navbar navbar-collapse collapse flex-column justify-content-start pb-0 bg-light topbar"
                    style ={ {    width: '100%', alignItems: 'flex-start' } }>
                    <div className = "text-left text-muted">Free shipping for standard order over $100</div>
                    <div className = "text-left text-muted">sale@mail.ru</div>
                    <div className = "text-left text-muted">
                        <a className="soc-icon mr-3 fab fa-facebook-f" href="#"/>   
                        <a className="soc-icon mr-3 fab fab fa-pinterest-p" href="#"/>   
                        <a className="soc-icon mr-3 fab fab fa-youtube" href="#"/>   
                        <a className="soc-icon mr-3 fab fab fa-twitter" href="#"/>
                    </div>
                </div>
                <div className="flex-column nav" style ={{backgroundColor: '#e65540', width: '100%'}}>

                    { NAVIGATION.map(renderNavigation) }

                </div>
            </div>
            <div className="row justify-content-center text-muted" id="user-mobile" style={{fontSize: '1.5rem'}}>
                <div className="login px-2 border-right border-dark">
                    <span className="far fa-user" ></span>
                </div>
                <div className="cart px-2">
                    <span className="fas fa-shopping-bag"></span>
                </div>
            </div>
        </div>

    </nav>
    )
}

export default Mobile;
