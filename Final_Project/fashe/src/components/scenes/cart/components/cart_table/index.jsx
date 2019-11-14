import React from 'react'
import Row from './row'


const CartTable = (props) => {
    const {
        data
    } = props;
    const renderRow = (item) => {
        return(
            <Row key={item.id} { ...item }/>
        )
    }
    return(
        <div className="wrap-table-shopping-cart bgwhite">
            <table className="table-shopping-cart">
                <tbody>
                    <tr className="table-head">
                        <th className="column-1"></th>
                        <th className="column-2">Product</th>
                        <th className="column-3">Price</th>
                        <th className="column-4 p-l-70">Quantity</th>
                        <th className="column-5">Total</th>
                    </tr>

                    { data.items.map(renderRow) }

                </tbody>
            </table>
        </div>

    );
}

export default CartTable;