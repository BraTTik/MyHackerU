import React from "react";
import { Link } from 'react-router-dom';

const CategoryButton = props => {
  const { to, title } = props;
  return (
    <div className="block1-wrapbtn w-size2">
      <Link
        to={ to }
        className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4"
      >
        { title }
      </Link>
    </div>
  );
};

export default CategoryButton;
