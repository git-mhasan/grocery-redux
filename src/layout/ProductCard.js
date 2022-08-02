import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';


const ProductCard = ({ id, brand, title, category, description, price, amount, rating, images }) => {

    const dispatch = useDispatch();

    return (
        <div>
            <div className="card max-w-md md:max-w-sm bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={images[0]} alt="" className="rounded-xl h-48" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p>{description.length > 50 ? description.slice(0, 50) : description}</p>
                    <p className="py-2 font-bold text-lg">${price}</p>
                    <div className="card-actions">
                        <button className="btn btn-xs btn-primary" onClick={() => dispatch(addToCart({ id }))}>Add to Cart</button>
                        <button className="btn btn-xs btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;