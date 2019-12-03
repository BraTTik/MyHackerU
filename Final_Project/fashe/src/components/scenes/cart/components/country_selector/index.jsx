import React from 'react'
import Selector from '../../../../selector';
import {useDispatch} from 'react-redux';
import { updateShippingTo } from '../../../../../store/actions';
import * as countries from '../countries';

const CountrySelector = props => {
    const dispatcher = useDispatch();

    const options = [
        {
            title: 'Select Country...',
            value: null,
        },
        {
            title: 'Russia',
            value: countries.RUS,
        },
        {
            title: 'Ukraine',
            value: countries.UKR,
        },
        {
            title: 'Belarus',
            value: countries.BEL,
        },
    ]
    const setValue = (value) => {
        dispatcher({
            type: updateShippingTo.getType(),
            payload: value,
        })
    }
    return(
        <Selector options = {options} minWidth ='215px' onChange={setValue}/>
    )
}

export default CountrySelector;