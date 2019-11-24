import React from 'react'
import PropTypes from 'prop-types'
import QntyCounter from './qnty_counter';
import { useDispatch } from 'react-redux';
import { deleteCartItem, updateCartTotalItems } from '../../../../../store/actions';


const Row = (props) => {
    
    Row.propTypes = {
        id: PropTypes.string,
        name: PropTypes.string,
        price: PropTypes.string,
        img: PropTypes.string,
        cnt: PropTypes.number,
    }
    
    const {
        id,
        name,
        price,
        img,
        cnt,
    } = props;
    
    const dispatcher = useDispatch();

    const handleDeleteItem = () => {
        dispatcher({
            type: deleteCartItem.getType(),
            payload: { id, },
        });
        dispatcher( {type: updateCartTotalItems.getType(),} )
    }


    return(
        <tr className="table-row">
            <td className="column-1">
                <div className="cart-img-product b-rad-4 o-f-hidden" onClick={ handleDeleteItem }>
                    <img src={img} alt="IMG-PRODUCT" />
                </div>
            </td>
            <td className="column-2">{ name }</td>
            <td className="column-3">${ +price }</td>
            <td className="column-4">
                <QntyCounter id={ id } cnt={ cnt }/>
            </td>
            <td className="column-5">${(price*cnt).toFixed(2)}</td>
        </tr>

    )
}

export default Row;