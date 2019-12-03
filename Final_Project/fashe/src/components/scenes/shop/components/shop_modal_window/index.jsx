import React from 'react';
import SubmitButton from '../../../../submit_button';
import './style.css';


const ShopModalWindow = props => {
    const {
        goodName,
        closeFunc,
    } = props
    return(
        <div id="shop-modal-overlay">
            <div className="shop-modal">
                <div className="tick-container">
                    <div className="tick-outline"></div>
                    <div className="tick-outline--transparent"></div>
                    <div className="tick-line-short"></div>
                    <div className="tick-line-long"></div>
                    <div className="hide-corners"></div>
                </div>
                <div className="shop-modal-content">
                    <h4>{ goodName }</h4>
                    <p>is added to cart</p>
                </div>
                <div className="modal-button-wrap">
                    <SubmitButton text="OK" onClick={ closeFunc }/>
                </div>
            </div>
        </div>
    )
}

export default ShopModalWindow;