import React, { useState, useEffect } from 'react';
import Main from './main';
import Mobile from './mobile';

const Nav = (props) => {

    const [isMobile, setIsMobile] = useState(true);

    window.addEventListener('resize', ()=>{
        let screenWidth = document.body.clientWidth;
        if(isMobile && screenWidth > 968){
            setIsMobile(false);
        }else if(!isMobile && screenWidth <= 968){
            setIsMobile(true);
        }
    });

    useEffect(()=>{
        let screenWidth = document.body.clientWidth;
        if(screenWidth > 968){
            setIsMobile(false);
        }else{
            setIsMobile(true);
        }
    },[isMobile]);

    const topbar = (<div className="navbar navbar-collapse collapse py-2 bg-light topbar order-1">
                        <div className = "col-4 text-center text-muted">
                            <a className="soc-icon mr-3 fab fa-facebook-f" href="#"/>   
                            <a className="soc-icon mr-3 fab fab fa-pinterest-p" href="#"/>   
                            <a className="soc-icon mr-3 fab fab fa-youtube" href="#"/>   
                            <a className="soc-icon mr-3 fab fab fa-twitter" href="#"/>
                        </div>
                        <div className = "col-4 text-center text-muted">Free shipping for standard order over $100</div>
                        <div className = "col-4 text-center text-muted">sale@mail.ru</div>
                    </div>);
    
    const navMenu = (<div className="topbar navbar navbar-collapse collapse flex-column justify-content-start pb-0 bg-light"
                    style ={ {  width: '100%', alignItems: 'flex-start' } }>
                    <div className = "text-left text-muted">Free shipping for standard order over $100</div>
                    <div className = "text-left text-muted">sale@mail.ru</div>
                    <div className = "text-left text-muted">
                        <a className="soc-icon mr-3 fab fa-facebook-f" href="#"/>   
                        <a className="soc-icon mr-3 fab fab fa-pinterest-p" href="#"/>   
                        <a className="soc-icon mr-3 fab fab fa-youtube" href="#"/>   
                        <a className="soc-icon mr-3 fab fab fa-twitter" href="#"/>
                    </div>
                </div>);

    return (
        
        isMobile ? <Mobile>{ topbar } </Mobile> : <Main >{ topbar }</Main>
        
    )
}

export default Nav;