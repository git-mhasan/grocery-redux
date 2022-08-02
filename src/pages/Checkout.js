import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../layout/CartItem';

const Checkout = () => {
    // const itemsInCart = useSelector(state => state.cart.CartItem)
    const { allProducts, cartItems, isLoading, errorMessage, totalPrice } = useSelector(state => state.cart)
    // console.log(cartItems);
    if (cartItems.length === 0) {
        return <h2 className='text-2xl text-center py-16'>Your Cart is Empty.</h2>

    } else {
        return (
            <div>
                <h2 className='text-2xl text-center pb-8'>Checkout</h2>

                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th>SL No.</th>
                                <th className='text-center'>Product</th>
                                {/* <th>Name</th> */}
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Amount</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item, index) => <CartItem key={item.id} props={{ ...item, index }}></CartItem>)}
                        </tbody>

                        {/* <!-- foot --> */}
                        <tfoot>
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>Total:</th>
                                <th className='text-lg'>${totalPrice}</th>
                                <th></th>
                            </tr>
                        </tfoot>
                    </table>
                </div>

            </div>
        );
    }
};

export default Checkout;