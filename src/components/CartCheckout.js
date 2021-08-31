import React, { useState, useEffect } from 'react'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const CartCheckout = () => {

    const cart = useSelector(state => state.cartProducts.cart)
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalItems, setTotalItems] = useState(0)
    console.log('cart', cart)

    useEffect(() => {
        let items = 0, price = 0

        cart.length > 0 && cart.forEach(item => {
            items += item.qty
            price += item.qty * item.price
        })
        price = (price * 74.14).toFixed(2)

        setTotalItems(items)
        setTotalPrice(price)
    }, [cart, totalItems, totalPrice])

    return (
        <div className='container w-fullmx-auto lg:px-20 py-32 px-5 flex flex-col lg:flex-row justify-around items-center lg:items-start'>
            <div>
                {cart.map(item => (
                    <CartItem key={item.id} item={item} />
                ))}
            </div>
            <div className='bg-gray-300 lg:w-4/5 w-full my-10 lg:my-0 flex flex-col py-10 justify-center items-center shadow-lg'>
                <h4 className='text-2xl text-center mb-5 font-bold'>Cart Summary</h4>
                <div className='space-x-5'>
                    <span className='font-normal'>TOTAL: ({totalItems} items)</span>
                    <span className='font-semibold text-lg py-5'>&#8377;  {totalPrice}</span>
                </div>
                <Link to='/payment'>
                    <button className='py-4 px-6 mt-5 mx-auto bg-red-500 hover:bg-red-700 rounded-lg'>
                        Proceed To Checkout
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default CartCheckout
