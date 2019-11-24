import React from 'react';
import Row from './row';
import { useSelector } from 'react-redux';


const CartTable = (props) => {
    const totalItems = useSelector(store=>store.app.cart.totalItems);
    const {
        data
    } = props;
    const renderRow = (item) => {
        return(
            <Row key={item.id} { ...item }/>
        )
    }
    const renderEmptyCart = () => {
        return (
            <tr className="table-row">
                <td className="column-1">
                    Ваша корзина пуста
                </td>
                <td className="column-2"></td>
                <td className="column-3"></td>
                <td className="column-4">
                </td>
                <td className="column-5"></td>
            </tr>
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

                    { totalItems > 0 ? data.items.map(renderRow) : renderEmptyCart() }

                </tbody>
            </table>
        </div>

    );
}

export default CartTable;