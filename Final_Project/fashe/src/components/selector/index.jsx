import React, { useState, useEffect } from "react";
import DropDown from './components/dropdown';

const Selector = props => {
  const { 
    minWidth,
    options,
    onChange,
  } = props;
  const [option, setOption] = useState();
  const [isShown, setIsShown] = useState(false);
  const [left, setLeft] = useState();
  const [top, setTop] = useState();
  const [height, setHeight] = useState();
  const [width, setWidth] = useState();

  useEffect(() => {
    setOption(options[0].title);
  }, []);

  const renderOptions = (item, index) =>{
    return(
      <option key={index}>{ item.title }</option>
    )
  }

  const chooseOption = (option) =>{
    setOption(option.title);
    onChange(option.value);
    setIsShown(false);
  }
  const showDropdown = (e) => {
    const elem = e.target.closest('.rs2-select2');
    setTop(elem.offsetTop);
    setLeft(elem.offsetLeft);
    setHeight(elem.offsetHeight);
    setWidth(elem.offsetWidth);
    setIsShown(!isShown);
  }
  return (
    <React.Fragment>
      <div className="rs2-select2 rs3-select2 bo4 w-size16" 
            style={{position: 'relative', width: `${ minWidth || '150px'}`}}
            >
        <select
          className="selection-2 select2-hidden-accessible"
          name="size"
          tabIndex="-1"
          aria-hidden="true"
        >
          { options.map(renderOptions) }
        </select>
        <span
          className="select2 select2-container select2-container--default"
          dir="ltr"
        >
          <span className="selection">
            <span
              className="select2-selection select2-selection--single"
              role="combobox"
              aria-haspopup="true"
              aria-expanded="false"
              tabIndex="0"
              aria-labelledby="select2-size-7j-container"
              onClick = {(e)=> showDropdown(e) }
              
            >
              <span
                className="select2-selection__rendered"
                id="select2-size-7j-container"
                title="Choose an option"
              >
                { option }
              </span>
              <span className="select2-selection__arrow" role="presentation">
                <b role="presentation"></b>
              </span>
            </span>
          </span>
          <span className="dropdown-wrapper">
            {
              isShown && <DropDown 
                            options = { options } 
                            onClick = { chooseOption }
                            width = { width }
                            top = {height}
                            left = {0}
                            />
            }
          </span>
        </span>
      </div>
    </React.Fragment>
  );
};

export default Selector;
