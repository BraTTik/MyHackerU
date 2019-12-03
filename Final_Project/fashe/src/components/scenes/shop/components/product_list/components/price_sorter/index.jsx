import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { updateSortFunc } from '../../../../../../../store/actions';
import Selector from '../../../../../../selector';

const PriceSorter = props => {
    const {
        width,
    } = props;

    const dispatcher = useDispatch();

    const options = [
        {
            title:'Default Sorting',
            value:null,
        },
        {
            title:'Price: high to low',
            value:'TO_LOW',
        },
        {
            title:'Price: low to high',
            value:'TO_HIGH',
        },
    ]

    function changeValue(value){
        dispatcher({
            type: updateSortFunc.getType(),
            payload: value,
        });
    }

    return (
        <Selector minWidth ={ width } options={ options } onChange={changeValue}/>
    )
}

export default PriceSorter;