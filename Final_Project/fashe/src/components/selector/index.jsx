import React from "react";

const Selector = props => {
  return (
    <div className="rs2-select2 rs3-select2 bo4 of-hidden w-size16">
      <select
        className="selection-2 select2-hidden-accessible"
        name="size"
        tabIndex="-1"
        aria-hidden="true"
      >
        <option>Choose an option</option>
        <option>Size S</option>
        <option>Size M</option>
        <option>Size L</option>
        <option>Size XL</option>
      </select>
      <span
        className="select2 select2-container select2-container--default"
        dir="ltr"
        style="width: 165.333px;"
      >
        <span className="selection">
          <span
            className="select2-selection select2-selection--single"
            role="combobox"
            aria-haspopup="true"
            aria-expanded="false"
            tabIndex="0"
            aria-labelledby="select2-size-7j-container"
          >
            <span
              className="select2-selection__rendered"
              id="select2-size-7j-container"
              title="Choose an option"
            >
              Choose an option
            </span>
            <span className="select2-selection__arrow" role="presentation">
              <b role="presentation"></b>
            </span>
          </span>
        </span>
        <span className="dropdown-wrapper" aria-hidden="true"></span>
      </span>
    </div>
  );
};

export default Selector;
