import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { updatePriceFilter } from '../../../../../../../store/actions'
import Selector from '../../../../../../selector';

const PriceFilter = props => {
    const dispatcher = useDispatch();

    const priceOptions = [
        {
            title: 'Choose option',
            value:null,
        },
        {
            title: '0 - $20',
            value:'0-20',
        },
        {
            title: '$20 - $50',
            value:'20-50',
        },
        {
            title: '$50 - $100',
            value:'50-100',
        },
        {
            title: '$100+',
            value:'100-1000000',
        },
    ]

    function changeValueHandler(value){
        dispatcher({
            type: updatePriceFilter.getType(),
            payload: value
        })
    }

    return(
        <Selector options={ priceOptions } width = { 198 } onChange={ changeValueHandler }/>
    )
}

export default PriceFilter;

