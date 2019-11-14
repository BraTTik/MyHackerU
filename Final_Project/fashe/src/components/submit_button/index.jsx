import React from 'react'
import PropTypes from 'prop-types'


const SubmitButton = (props) => {
    SubmitButton.propTypes = {
        text: PropTypes.string,
        onClick: PropTypes.func, 
    }
    const { 
            text, 
            onClick,
        } = props;
    return(
        <button className="flex-c-m size2 bg4 bo-rad-23 hov1 m-text3 trans-0-4" onClick={ onClick }>
            { text }
        </button>
    );
}

export default SubmitButton;