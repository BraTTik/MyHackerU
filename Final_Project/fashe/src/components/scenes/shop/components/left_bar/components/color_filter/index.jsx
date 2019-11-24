import React from "react";
import Colors from "./colors";
import {useDispatch} from 'react-redux';
import { updateColorId } from '../../../../../../../store/actions'
import './style.css';

const ColorFilter = props => {

    const dispatcher = useDispatch();

    const setColorId = id => {
        dispatcher({
            type: updateColorId.getType(),
            payload: id,
        })
    }

  const renderColor = item => {
      let colorFilter = `color-filter${item.colorId}`;
    return (
      <li key={item.colorName} className="m-r-10">
        <input
          className="checkbox-color-filter"
          id={ colorFilter }
          type="radio"
          name="color-filter"
        />
        <label
          className={`color-filter ${colorFilter}`}
          htmlFor={ colorFilter }
          onClick = { () => { setColorId(item.colorId) }}
        ></label>
      </li>
    );
  };
  return (
    <div className="filter-color p-t-22 p-b-50 bo3">
      <div className="m-text15 p-b-12">Color</div>

      <ul className="flex-w">
        { Colors.map(renderColor) }
      </ul>
    </div>
  );
};

export default ColorFilter;
