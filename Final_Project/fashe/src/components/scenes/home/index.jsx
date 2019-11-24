import React from 'react';
import Slider from './components/slider';
import Categories from './components/categories';

const Home = (props) => {

    return (
        <React.Fragment>
            <Slider />
            <Categories />
        </React.Fragment>
    )

}

export default Home;