import React from "react";

const SlideContent = props => {
    const {
        animation
    } = props;
  return (
    <span
      className={`aption1-slide1 m-text1 t-center animated visible-false m-b-15 visible-true ${animation}`}
      data-appear={ animation }
      style={{animationDelay: '.5s'}}
    >
      { props.children }
    </span>
  );
};

export default SlideContent;
