import React from 'react';
import PropTypes from 'prop-types';



const PageHeading = (props) => {
    PageHeading.propTypes = {
        src: PropTypes.string,
        heading: PropTypes.string,
    }
    
    const {
        src,
        heading,
        } = props;

    return(
        <section className="bg-title-page p-t-40 p-b-50 flex-col-c-m" style={ {backgroundImage: `url(${ src })` } }>
            <h2 className="l-text2 t-center">
                { heading }
            </h2>
        </section>
    );
}

export default PageHeading;
