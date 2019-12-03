import React from 'react';
import PriceSorter from './components/price_sorter';


const ProductList = (props) => {
    return(
        <div className="col-sm-6 col-md-8 col-lg-9 p-b-50">
            <div className="flex-sb-m flex-w p-b-35">
                <div className="flex-w">
                    <PriceSorter width = { '200px' }/>
                </div>

            </div>
            
            <div className="row">
                { props.children }
            </div>

        </div>
    );
}

export default ProductList;
