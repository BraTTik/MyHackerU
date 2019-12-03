import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PageHeading from '../../page_heading';
import LeftBar from './components/left_bar';
import ProductList from './components/product_list';
import ProductCard from './components/product_card';
import heading_image from '../../../assets/images/1920х239-1.jpg';
import NoGoods from './components/no_goods';
import { updateGoods, updateShopModal } from '../../../store/actions';
import { withRouter } from 'react-router-dom';
import priceSortSwitcher from './components/product_list/components/price_sorter/sort_functions';
import ShopModalWindow from './components/shop_modal_window';


const Shop = (props) =>{

    const goods = useSelector(store=>store.app.goods);
    const categoryId = useSelector(store=>store.app.categoryId);
    const colorId = useSelector(store=>store.app.colorId);
    const priceFilter = useSelector(store=>store.app.priceFilter);
    const sortFunc = useSelector(store=>store.app.sortFunc);
    const shopModal = useSelector(store=>store.app.shopModal);
    const dispatcher = useDispatch();
    const [filteredByPrice, setFilteredByPrice] = useState(false);

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
                payload: goods.data,});

            setFilteredByPrice(filterByPrice());

            function filterByPrice(){
                if(priceFilter){
                    let filter = priceFilter.split('-');
                    let filtered = goods.data.filter(item => {
                        return Number(item.price) > Number(filter[0]) && Number(item.price) <= Number(filter[1]);
                    })
                        return filtered;
                }
                return false;
            }
        }
        fetchCatalog();
    },[categoryId, colorId, priceFilter]);

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
    const renderProductList = () => {
        if(filteredByPrice){
            if(filteredByPrice.length == 0){
                return <NoGoods />
            }
            if(sortFunc){
                return filteredByPrice.sort(priceSortSwitcher(sortFunc)).map(renderProductCard);
            }
            return filteredByPrice.map(renderProductCard)
        } else{
            if(sortFunc){
                return goods.sort(priceSortSwitcher(sortFunc)).map(renderProductCard);
            }
            return goods.map(renderProductCard) || <NoGoods />
        }  
    }
    const closeShopModal = () => {
        dispatcher({
            type:updateShopModal.getType(),
            payload: {isShown: false, goodName: null}
        })
    }

    return (
        <React.Fragment>
            <PageHeading src={heading_image} heading='Shop'/>
            <div className="container" style={{ marginTop: '1rem'}}>
                <div className="row">
                    <LeftBar/>
                    <ProductList>
                        { renderProductList() }
                    </ProductList>
                    {shopModal.isShown&&<ShopModalWindow goodName={ shopModal.goodName } closeFunc={ closeShopModal }/>}
                </div>
            </div>
        </React.Fragment>
    )
}

export default withRouter(Shop);