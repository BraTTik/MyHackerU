import React from "react";

const CategoryColumn = props => {
  return (
    <div className="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
        { props.children }
    </div>
  );
};

export default CategoryColumn;
