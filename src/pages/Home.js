import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '../layout/ProductCard';


const Home = () => {

    const { allProducts, cartItems, isLoading, errorMessage } = useSelector(state => state.cart)
    // const dispatch = useDispatch();
    // console.log(cartItems);

    if (isLoading) {
        return (
            <div>
                <h2 className='text-2xl font-bold text-center pb-16'>ALL PRODUCTS</h2>

                <div className='grid grid-cols-1 content-start justify-items-center'>
                    Please wait while products are Loading...
                </div>
            </div>
        )
    } else if (errorMessage) {
        <div>
            <h2 className='text-2xl font-bold text-center pb-16'>ALL PRODUCTS</h2>

            <div className='grid grid-cols-1 content-start justify-items-center'>
                {errorMessage}
            </div>
        </div>
    } else {
        return (
            <div>
                <h2 className='text-2xl font-bold text-center pb-16'>ALL PRODUCTS</h2>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 content-start justify-items-center'>
                    {allProducts.map(item => {
                        return <ProductCard key={item.id} {...item} />;
                    })}
                </div>
            </div>
        );
    }
};

export default Home;