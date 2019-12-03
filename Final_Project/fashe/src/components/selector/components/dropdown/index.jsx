import React from "react";

const DropDown = props => {
  const { 
    options,
    onClick,
    width,
    top,
    left,
   } = props;
  const renderOptions = (item) => {
    return (
      <li
        className="select2-results__option"
        role="treeitem"
        aria-selected="false"
        key={item.value}
        onClick = {() => onClick(item) }
      >
        { item.title }
      </li>
    );
  };
  return (
    <div id="dropDownSelect2">
      <span
        className="select2-container select2-container--default select2-container--open"
        style={{position: 'absolute', top: `${top}px`, left: `${left}px`}}
      >
        <span
          className="select2-dropdown select2-dropdown--below"
          dir="ltr"
          style={{minWidth: `${width}px`}}
        >
          <span className="select2-search select2-search--dropdown select2-search--hide">
            <input
              className="select2-search__field"
              type="search"
              tabIndex="0"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              role="textbox"
            />
          </span>
          <span className="select2-results">
            <ul
              className="select2-results__options"
              role="tree"
              id="select2-sorting-lb-results"
              aria-expanded="true"
              aria-hidden="false"
            >
            { options.map(renderOptions) }

            </ul>
          </span>
        </span>
      </span>
    </div>
  );
};

export default DropDown;
