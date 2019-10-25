import React from 'react';
import PropTypes from 'prop-types';



const MovieCard = (props) =>{

    MovieCard.propTypes = {
        id: PropTypes.string,
        imgURL: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        href: PropTypes.string,
        watched: PropTypes.bool,
    };
    
    MovieCard.defaultProps = {
        watched: false,
    };
    
    const {
        imgURL,
        title,
        description,
        href,
        watched,
        onClick,
        id
    } = props;

    return (
        <div className="card col-4">
            <img src={ imgURL } className="card-img-top" alt="batman" />
            <div className="card-body">
                <h5 className="card-title">{ title }</h5>
                <p className="card-text">{ description }</p>
                <a href={ href } className="btn btn-link">Go somewhere</a>
                <br/><br/>
                <button type="button" 
                    className={`btn ${watched ? 'btn-success' :'btn-outline-secondary'} `}
                    onClick = { () => onClick(id) }>
                    { watched ? 'Смотрел' : 'Не смотрел'}
                </button>
            </div>
        </div>
    )
};

export default MovieCard;