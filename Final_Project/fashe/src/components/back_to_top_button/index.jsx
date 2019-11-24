import React, { useState, useEffect } from 'react';


const BackToTopBtn = (props) =>{
    
    const [isShown, setIsShown] = useState(false);

    const scrollToTop = () => {
        let scroll = window.pageYOffset;
        let scrollSpeed = 50;
        setTimeout(function scrollTop(){
            window.scrollBy(0, -scrollSpeed);
            scroll -= scrollSpeed;
            if(scroll >= 0){
                setTimeout(scrollTop, 5);
            }
        }, 5)
    }

    useEffect(() => {
        function windowListener(){
            window.pageYOffset > 200 ? setIsShown(true) : setIsShown(false);
        }
        window.addEventListener('scroll', windowListener);
        return () => {
            window.removeEventListener('scroll', windowListener);
        };
    }, []);


    
    return(
        <div className="btn-back-to-top bg0-hov" id="myBtn" style={ {display: isShown ? 'flex':'none' } } onClick = { scrollToTop }>
            <span className="symbol-btn-back-to-top">
                <i className="fa fa-angle-double-up" aria-hidden="true"></i>
            </span>
        </div>
    )
}

export default BackToTopBtn;
