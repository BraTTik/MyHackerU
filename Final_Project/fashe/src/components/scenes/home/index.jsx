import React from 'react';
import Categories from './components/categories';
import SlickSlider from './components/slick_slider';

const Home = (props) => {

    return (
        <React.Fragment>
            <SlickSlider />
            <Categories />
        </React.Fragment>
    )

}

export default Home;