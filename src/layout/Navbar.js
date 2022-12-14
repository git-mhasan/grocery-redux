import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {

    const { totalItems, totalPrice } = useSelector(state => state.cart);
    const navigate = useNavigate();

    const menuList = <>
        <li><Link to='/'> All Products </Link></li>
        <li><Link to="/category">Category</Link></li>
        <li><Link to='/review' >Review</Link></li>
        <li><Link to='/login' >Login</Link></li>
    </>
    return (
        // <div style={{ backgroundColor: "LemonChiffon", padding: "20px" }}></div>

        <div className="navbar bg-orange-200 px-6 md:px-12 lg:px-16">
            <div className="dropdown dropdown-start inline md:hidden">
                <label tabIndex="0" className="btn content-center btn-ghost w-4">
                    <div className="w-10 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>

                    </div>
                </label>
                <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {menuList}
                </ul>
            </div>
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case text-xl">Grocery</Link>
            </div>

            <div className="flex-none md:inline hidden">
                <ul className="menu menu-horizontal p-0">
                    {menuList}
                </ul>
            </div>

            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            {/* <span className="badge badge-sm indicator-item">{cartItems.length}</span> */}
                            <span className="badge badge-sm indicator-item">{totalItems}</span>
                        </div>
                    </label>
                    <div tabIndex="0" className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                        <div className="card-body">
                            <span className="font-bold text-lg">{totalItems} Items</span>
                            <span className="text-info">Subtotal: ${totalPrice}</span>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-block" onClick={() => { navigate('/checkout') }}>View cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" alt='' />
                        </div>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link to='/blog' className="justify-between">
                                Profile
                                <span className="badge">Edit</span>
                            </Link>
                        </li>
                        <li><Link to="/about">Dashboard</Link></li>
                        <li><Link to='' >Logout</Link></li>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Navbar;