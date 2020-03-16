import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import './style.css';


const Modal = (props) => {
    const movieList = useSelector(store => store.app.movieList);
    const viewId = useSelector(store => store.app.viewId);

    const renderModalBody = (id) => {
        console.log(id);
        document.body.classList.add('modal-open');
        let curElem = this.props.movieList.find(elem => (elem.show.id == id));
        const {
          name,
          language,
          summary,
          genres
        } = curElem.show;
    
        
        return (
          <React.Fragment>
    
            <div className="modal-header">
              <h5 className="modal-title">{ name }</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={ ()=> this.closeModal()}>
              <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
                <table className="table">
                  <tbody>
                    <tr><th className="row">Summary</th><td dangerouslySetInnerHTML ={ {__html: summary} }/></tr>
                    <tr><th className="row">Language</th><td>{ language }</td></tr>
                  </tbody>
                </table>
                <small>Жанр: {genres.join(' ')}</small>
            </div>
    
          </React.Fragment>
        );
      }
    Modal.propTypes = {
        data: PropTypes.object,
        isShownModal: PropTypes.bool,
        handleModal: PropTypes.func,
    }

    const {
        isShownModal,
        onClick,
    } = props;

    
    let showModal = isShownModal ? 'show' : 'hide';
    return (
        <div className={`modal fade ${showModal}`} tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">

                    { this.renderModalBody(this.props.viewId) }

                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={ ()=> onClick() }>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;