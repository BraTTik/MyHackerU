import React from 'react';

const Select = (props) => {
    return (
        <div className="topbar-language rs1-select2">
            <select className="selection-1 select2-hidden-accessible" name="time" tabIndex="-1" aria-hidden="true">
                <option>USD</option>
                <option>EUR</option>
            </select>
        </div>
    );
}

export default Select;