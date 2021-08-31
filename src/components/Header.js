import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import cartImage from '../images/cart.svg'
import { useSelector } from 'react-redux';

const Header = () => {

    const [cartCount, setCartCount] = useState(0)
    const cart = useSelector(state => state.cartProducts.cart)

    useEffect(() => {
        let count = 0
        cart.length > 0 && cart.forEach(item => {
            count += item.qty
        });

        setCartCount(count)
    }, [cart, cartCount])

    return (
        <div className='flex justify-between items-center text-left h-16 w-full fixed bg-gray-800 border-b-0 shadow-xl text-white'>
            <Link to='/'>
                <h2 className='h-16 font-bold text-2xl py-3.5 px-14 mb w-full'>Redux Shop</h2>
            </Link>
            <Link to='/cart'>
                <img
                 className='h-12 mr-10'
                 src={cartImage}
                 alt='shopping cart'
                />
                <span className='absolute top-2 right-8 h-6 w-6 bg-green-400 rounded-full text-center text-gray-900 font-semibold'>{cartCount}</span>
            </Link>
        </div>
    )
}

export default Header
