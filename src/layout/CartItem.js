import React from 'react';
import { useDispatch } from 'react-redux';
import { decrementQuantity, incrementQuantity, removeItem } from '../features/cart/cartSlice';
import { DecrementBtn, IncrementBtn, TrashSolid } from '../icons';

const CartItem = ({ props }) => {
    const { id, thumbnail, title, category, price, amount, index }
        = props;
    // console.log(props);
    const dispatch = useDispatch();
    return (
        <>

            {/* <!-- row  --> */}
            <tr>
                <th>
                    {index + 1}
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={thumbnail} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{title}</div>
                            <div className="text-sm opacity-50">{category}</div>
                        </div>
                    </div>
                </td>
                {/* <td>
                    Zemlak, Daniel and Leannon
                    <br />
                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                </td> */}
                <td>${price}</td>

                <td >
                    <div className='flex items-center'>
                        <button className="btn btn-ghost btn-xs" onClick={() => {
                            if (amount === 1) {
                                dispatch(removeItem(id))
                            } else {
                                dispatch(decrementQuantity(id))
                            }
                        }}><DecrementBtn /></button>
                        <p>{amount}</p>
                        <button className="btn btn-ghost btn-xs" onClick={() => { dispatch(incrementQuantity(id)) }}><IncrementBtn /></button>
                    </div>
                </td>
                <th > ${price * amount}</th>
                <th>
                    <button className="btn btn-ghost btn-xs" onClick={() => { dispatch(removeItem(id)) }}><TrashSolid /></button>
                </th>
            </tr>

        </>
    );
};

export default CartItem;