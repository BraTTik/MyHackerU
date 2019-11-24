import React from 'react';

const Select = (props) => {
    const style = 'select2 select2-container select2-container--default select2-container--below select2-container--focus select2-container--open'
    return (
        <div className="topbar-language rs1-select2" id="form-currency">
            <span className="selected-currency" style={{display:'none'}}>USD</span>
            <select className="selection-1 select2-hidden-accessible" name="currencies" tabIndex="-1" aria-hidden="true">
                <option value="USD" defaultValue>EUR</option>
                <option value="EUR">USD</option>
                <option value="GBP">GBP</option>
                <option value="PKR">PKR</option>
                <option value="CAD">CAD</option>
                <option value="JPY">JPY</option>
            </select>
            <span className="select2 select2-container select2-container--default select2-container--open " dir="ltr" style={{width: '58px'}}>
                <span className="selection">
                    <span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="0" aria-labelledby="select2-currencies-qj-container">
                        <span className="select2-selection__rendered" id="select2-currencies-qj-container" title="USD">EUR</span>
                        <span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>
                    </span>
                </span>
                <span className="dropdown-wrapper" aria-hidden="true"></span>
            </span>
        </div>
);
}

export default Select;