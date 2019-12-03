import React, { useState, useEffect } from 'react';
import SubmitButton from '../../../../submit_button';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateCart, updateCartCounter, updateCartTotalItems, updateShopModal } from '../../../../../store/actions';
import { PRODUCT_VIEW } from '../../../../../router/url'

const ProductCard = (props) => {
    const {
        name,
        price,
        id,
    } = props;
    
    const [img, setImg] = useState();

    const dispatcher = useDispatch();
    const cart = useSelector(store=>store.app.cart);

    useEffect(() => {
        let isSubscribed = true;
        async function fetchImage(){
            const image = await fetch(`http://test-api.ipromote.ru/API/IMAGE/FIND?cid=${id}`)
                    .then(response => response.json())
                    .then(json=>json.data[0].url)
            if(isSubscribed){
                setImg(`http://test-api.ipromote.ru/img/${image}`);
            }
        }
        fetchImage();
        
        return () => {
            isSubscribed = false;
        };
    }, [])

    const handleAddToCart = () =>{
        const filtered = cart.items.filter(item => item.id == id);

        if(filtered[0]){
            dispatcher({
                type: updateCartCounter.getType(),
                payload:{id, cnt: filtered[0].cnt + 1},
            })
        }else{
            dispatcher({
                type: updateCart.getType(),
                payload: {...cart, items:[...cart.items, {...props, img: img, cnt: 1}]},
            })
        }

        dispatcher({
            type: updateCartTotalItems.getType(),
        })
        dispatcher({
            type: updateShopModal.getType(),
            payload: {isShown: true, goodName: name }
        })
    }
    return(
        <div className="col-sm-12 col-md-6 col-lg-4 p-b-50">
            <div className="block2">
                <div className="block2-img wrap-pic-w of-hidden pos-relative">
                    <img src={ img } alt="IMG-PRODUCT" />

                    <div className="block2-overlay trans-0-4">
                        <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                            <i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
                            <i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
                        </a>

                        <div className="block2-btn-addcart w-size1 trans-0-4">
                            <SubmitButton text="Add to cart" onClick={()=>handleAddToCart()}/>
                        </div>
                    </div>
                </div>

                <div className="block2-txt p-t-20">
                    <Link to={ `${PRODUCT_VIEW}/${id}` } className="block2-name dis-block s-text3 p-b-5">
                        { name }
                    </Link>

                    <span className="block2-price m-text6 p-r-5">
                        {`$${price}`}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;
