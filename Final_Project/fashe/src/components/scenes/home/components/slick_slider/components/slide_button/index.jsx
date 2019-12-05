import React from "react";
import { Link } from 'react-router-dom';

const SlideButton = props => {
  const { to, title, animation } = props;
  return (
    <div className={`wrap-btn-slide1 w-size1 animated ${animation}`} data-appear= {animation} style={{animationDelay: '1s'}}>
        <Link to={ to } className="flex-c-m size2 bo-rad-23 s-text2 bgwhite hov1 trans-0-4" tabIndex="0">
            { title }
        </Link>
    </div>
  );
};

export default SlideButton;

//visible-false visible-true