import React from "react";
import { Link } from "react-router-dom";
import URL from "../../../../header/nav/url";
import CategoryColumn from "./components/category_column";
import CategoryButton from "./components/category_button";
import { getCategoryImage } from './components/category_images'

const Categories = props => {
  const categories = URL.find(item => {
    if (item.title === "Shop") return item;
  });
  const renderCategory = (cat) => {
      let name = cat || 'all';
      let category = categories.children.find(item=>item.title.toUpperCase() === name.toUpperCase());
      let image = getCategoryImage(name);
    return (
      <div className="block1 hov-img-zoom pos-relative m-b-30">
        <Link to={ name==='all' ? categories.href : category.href }>
          <img
            src={ image }
            className=""
            alt=""
          />
        </Link>
        <CategoryButton to={ name==='all' ? categories.href : category.href } title={ name==='all' ? 'all' : category.title }/>
      </div>
    );
  };

  return (
    <section
      className="banner bgwhite p-t-40 p-b-40"
      data-section-id="1503231244573"
    >
      <div className="container">
        <div className="row">
          <CategoryColumn>
            {renderCategory('arm chairs')}
            {renderCategory('tables')}
          </CategoryColumn>
          <CategoryColumn>
            {renderCategory('lamps')}
            {renderCategory('sofas')}
          </CategoryColumn>
          <CategoryColumn>
            {renderCategory('chairs')}
            {renderCategory()}
          </CategoryColumn>

        </div>
      </div>
    </section>
  );
};

export default Categories;
