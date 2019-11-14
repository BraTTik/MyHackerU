import React from 'react';
import PageHeading from '../../page_heading';
import LeftBar from './components/left_bar';
import ProductList from './components/product_list';
import ProductCard from './components/product_card';
import products from '../../../assets/product_stub';
import heading_image from '../../../assets/images/1920х239-1.jpg';


const Shop = (props) =>{

    const renderProductCard = (card, index) => {
        return (
            <ProductCard  
                key={ card.id }
                id={ card.id }
                price={ card.price }
                name={ card.name }
                img={ card.img }
                cnt= { card.cnt }
                />
        )
    }
    return (
        <React.Fragment>
            <PageHeading src={heading_image} heading='Shop'/>
            <div className="container">
                <div className="row">
                    <LeftBar/>
                    <ProductList>
                        { products.map(renderProductCard)}
                    </ProductList>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Shop;