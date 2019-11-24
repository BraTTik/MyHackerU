import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { updateProductPageCounter } from '../../../../../store/actions'

const ProductCounter = props => {
    const dispatcher = useDispatch();
    const counter = useSelector(store=>store.app.productPageCounter);
    const handleIncrement = () =>{
        dispatcher({
            type: updateProductPageCounter.getType(),
            payload: +counter + 1,
        })
    }
    const handleDecrement = () =>{
        if(counter - 1 <= 0) return
        dispatcher({
            type: updateProductPageCounter.getType(),
            payload: counter - 1,
        })
    }
  return (
    <div className="flex-w bo5 of-hidden m-r-22 m-t-10 m-b-10">
      <button className="btn-num-product-down color1 flex-c-m size7 bg8 eff2"
                onClick={ handleDecrement }>
        <i className="fs-12 fa fa-minus" aria-hidden="true"></i>
      </button>
      <input
        className="size8 m-text18 t-center num-product"
        type="number"
        name="num-product"
        value={counter}
        readOnly
      />
      <button className="btn-num-product-up color1 flex-c-m size7 bg8 eff2"
                onClick = { handleIncrement }
      >
        <i className="fs-12 fa fa-plus" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default ProductCounter;
