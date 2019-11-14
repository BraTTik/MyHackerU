import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';


const MovieCard = (props) =>{

    MovieCard.propTypes = {
        id: PropTypes.string,
        imgURL: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        href: PropTypes.string,
        watched: PropTypes.bool,
        onClick: PropTypes.func,
        handleModal: PropTypes.func,
    };
    
    MovieCard.defaultProps = {
        watched: false,
        imgURL: 'https://img.icons8.com/carbon-copy/2x/user.png',
    };
    
    const {
        imgURL,
        title,
        description,
        href,
        watched,
        onClick,
        id,
        handleModal,
    } = props;

    const defaultImg = 'https://img.icons8.com/carbon-copy/2x/user.png';

    return (
        <div className="card mx-2 mb-1" style = {{width: '20rem'}}>
            <img src={ imgURL || defaultImg } className="card-img-top" alt="batman" />
            <div className="card-body">
                <h5 className="card-title">{ title }</h5>
                <p className="card-text" dangerouslySetInnerHTML ={ {__html: description }}/>
                <a href={ href } className="btn btn-link">Visit site</a>
                <br/><br/>
                <div className="row justify-content-around">
                    <button type="button" 
                        className={`btn ${watched ? 'btn-success' :'btn-outline-secondary'} `}
                        onClick = { () => onClick(id) }>
                        { watched ? 'Смотрел' : 'Не смотрел'}
                    </button>
                    <button type="button"
                        className="btn btn-info"
                        onClick = { () => handleModal(id) }
                    >
                        Детали
                    </button>
                </div>
            </div>
        </div>
    )
};

export default MovieCard;