import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PageHeading from '../../page_heading';
import LeftBar from './components/left_bar';
import ProductList from './components/product_list';
import ProductCard from './components/product_card';
import heading_image from '../../../assets/images/1920х239-1.jpg';
import NoGoods from './components/no_goods';
import { updateGoods } from '../../../store/actions';
import { withRouter } from 'react-router-dom';


const Shop = (props) =>{

    const goods = useSelector(store=>store.app.goods);
    const categoryId = useSelector(store=>store.app.categoryId);
    const colorId = useSelector(store=>store.app.colorId);
    const dispatcher = useDispatch();

     useEffect(() => {
        let selector = '';
        let url = 'http://test-api.ipromote.ru/api/catalog/find';
        if(categoryId){
            selector += `category=${categoryId}`;
        }
        if(colorId){
            if(selector){
                selector += `&`;
            }
            selector += `colors=${colorId}`;
        }
        if(selector){
            url += '?' + selector;
        }
        async function fetchCatalog(){
            const goods = await fetch(url)
                                .then(response => response.json())
                                .then(json => json);
            dispatcher({
                type: updateGoods.getType(),
                payload: goods.data,})
        }
        fetchCatalog();
    },[categoryId, colorId]);

    const renderProductCard = (card, index) => {
        return (
            <ProductCard  
                key={ card.id }
                id={ card.id }
                price={ card.price }
                name={ card.title }
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
                        {goods ? goods.map(renderProductCard) : <NoGoods/> }
                    </ProductList>
                </div>
            </div>
        </React.Fragment>
    )
}

export default withRouter(Shop);