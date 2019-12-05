import React from "react";

const SlideHeader = props => {
  const { animation } = props;
  return (
    <h2
      className={`caption2-slide1 xl-text1 t-center animated visible-false m-b-37 fadeInUp visible-true ${animation}`}
      data-appear={animation}
      style={{animationDelay: '.2s'}}
    >
      {props.children}
    </h2>
  );
};

export default SlideHeader;
