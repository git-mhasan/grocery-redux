import React from 'react';
import { Link } from 'react-router-dom';

const NavMenu = () => {
    const menuList = <>
        <Link to='/'>Home</Link>
        <Link to='/blog'>Blog</Link>
        <Link to='/about'>About</Link>
        <Link to='/login'>Login</Link>
    </>
    return (
        // <div style={{ backgroundColor: "LemonChiffon", padding: "20px" }}>
        <div className='bg-gold'>
            {menuList}
        </div>
    );
};

export default NavMenu;