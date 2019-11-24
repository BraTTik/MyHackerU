import React, {useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from "react-router-dom";
import ImageGallery from 'react-image-gallery';
import SubmitButton from '../../submit_button';
import {updateCartCounter, updateCart, updateCartTotalItems, updateProductPageId} from '../../../store/actions';
import ProductCounter from './components/product_counter';
import "react-image-gallery/styles/css/image-gallery.css";
import ProductAccordion from './components/product_accordion';

const ProductPage = props => {
    const { code } = props.match.params;
    const goods = useSelector(store=>store.app.goods);
    const category = useSelector(store=>store.app.categories);
    const cart = useSelector(store=>store.app.cart);
    const counter = useSelector(store=>store.app.productPageCounter);
    const goodId = useSelector(store=>store.app.productPageId);

    const dispatcher = useDispatch();
  
    const [images, setImages] = useState([]);
    const [mainImage, setMainImage] = useState();
    const [good, setGood] = useState({});

    useEffect(() => {
        let isSubscribed = true;
        async function fetchData(){
            const dataImage = await fetch(`http://test-api.ipromote.ru/API/IMAGE/FIND?cid=${code}`)
                    .then(response => response.json())
                    .then(json=>json.data)
            let images = dataImage.map(item=>{
                return {
                    original: `http://test-api.ipromote.ru/img/${item.url}`, 
                    thumbnail:`http://test-api.ipromote.ru/img/${item.url}`,
                }
            });
            setMainImage(images[0].thumbnail);
            var goodsData;
            if(goods.length === 0){
                console.log('goods update')
                goodsData = await fetch('http://test-api.ipromote.ru/API/CATALOG/FIND')
                                        .then(response=>response.json())
                                        .then(json => {
                                            return json;
                                        })
            }
            let good = goodsData 
                    ? goodsData.data.find(item => String(item.id) === String(code))
                    : goods.find(item => String(item.id) === String(code))
            if(isSubscribed){
                setImages(images);
                setGood(good);
            }
        }
        fetchData();
        dispatcher({
          type: updateProductPageId.getType(),
          payload: code,
        })
        
        return () => {
            isSubscribed = false;
        };
    }, [code]);

    const handleAddToCart = () =>{
      const filtered = cart.items.filter(item => item.id == good.id);

      if(filtered[0]){
          dispatcher({
              type: updateCartCounter.getType(),
              payload:{id: good.id, cnt: filtered[0].cnt + +counter},
          })
      }else{
          dispatcher({
              type: updateCart.getType(),
              payload: {...cart, items:[...cart.items, {...good, img: mainImage, cnt: counter}]},
          })
      }

      dispatcher({
          type: updateCartTotalItems.getType(),
      })
  }

  return (
    <div className="container bgwhite p-t-35 p-b-80">
      <div className="flex-w flex-sb">
        <div className="w-size13 p-t-30 respon5">
            <ImageGallery 
                items={ images } 
                thumbnailPosition="left"
                showFullscreenButton={false}
                showPlayButton={false}
                />
        </div>

        <div className="w-size14 p-t-30 respon5">
          <h4 className="product-detail-name m-text16 p-b-13">
            { good.title }
          </h4>

          <span className="m-text17">${good.price}</span>

          <p className="s-text8 p-t-10">
            { good.desc || 'Здесь описание товара...'}
          </p>

          <div className="p-t-33 p-b-60">

            <div className="flex-c-m flex-w p-t-10">
              <div className="w-size16 flex-m flex-w">

                <ProductCounter />

                <div className="btn-addcart-product-detail size9 trans-0-4 m-t-10 m-b-10">

                  <SubmitButton onClick={ handleAddToCart } text="ADD TO CART"/>

                </div>
              </div>
            </div>
          </div>

{/*           <div className="p-b-45">
            <span className="s-text8 m-r-35">SKU: {category[String(good.category)]}-{good.id}</span>
            <span className="s-text8">Categories: { category[String(good.category)]}</span>
          </div>
 */}
          <ProductAccordion/>

        </div>
      </div>
    </div>
  );
};

export default withRouter(ProductPage);
