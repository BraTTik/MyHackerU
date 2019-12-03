import React from 'react';
import { useDispatch, } from 'react-redux';
import { updateCartCounter } from '../../../../../store/actions';
import { deleteCartItem, updateCartTotalItems } from '../../../../../store/actions';

const QntyCounter = (props) => {
    const{
        id,
        cnt
    } = props;

    const dispatcher = useDispatch();

    const handleIncrement = () => {
        dispatcher({
            type: updateCartCounter.getType(),
            payload:{id, cnt: cnt + 1},
        });
        dispatcher( {type: updateCartTotalItems.getType(),} )
    }

    const handleDecrement = () => {
        if(cnt - 1 == 0){
            dispatcher({
                type: deleteCartItem.getType(),
                payload: {id},
            })
        }else{
            dispatcher({
                type: updateCartCounter.getType(),
                payload:{id, cnt: cnt - 1},
            })
        }
        
        dispatcher( {type: updateCartTotalItems.getType(),} )
    }


    return (
        <div className="flex-w bo5 of-hidden w-size17">
            <button className="btn-num-product-down color1 flex-c-m size7 bg8 eff2"
                    onClick = { ()=>{ handleDecrement() } }>
                <i className="fs-12 fa fa-minus" aria-hidden="true"></i>
            </button>

            <input className="size8 m-text18 t-center num-product" type="number" name="num-product1" value={ cnt } readOnly/>

            <button className="btn-num-product-up color1 flex-c-m size7 bg8 eff2"
                    onClick = { ()=>{ handleIncrement() } }>

                <i className="fs-12 fa fa-plus" aria-hidden="true"></i>
            </button>
        </div>

    );
}

export default QntyCounter;