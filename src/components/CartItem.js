import React, { useState } from 'react'
import { adjustItemQty, removeFromCart } from '../redux/actions/cartAction'
import { useDispatch } from 'react-redux'
import deleteImage from '../images/delete.svg'

const CartItem = ({ item }) => {

    const dispatch = useDispatch()
    const [input, setInput] = useState('')
    const handleChange = (e) => {
        setInput(e.target.value)
        dispatch(adjustItemQty(item.id, e.target.value))
    }

    return (
        <div className='w-full flex px-4 h-3/4 my-10 lg:h-full flex-col md:flex-row md:w-4/5 justify-evenly shadow-xl  bg-teal-200'>
            <img
                className='align-middle py-3 md:mx-auto md:w-1/3 h-1/3 md:h-full w-full md:48'
                src={item.image}
                alt={item.title}
             />
             <div className='md:ml-4 md:w-1/2 w-full h-1/2 py-2 px-1'>
                 <p className='text-2xl font-semibold'>{item.title}</p>
                 <p className='text-sm overflow-ellipsis md:py-8 antialiased'>{item.description}</p>
                 <p className='text-3xl bold py-2'>&#8377;{(item.price * 74.14).toFixed(2)}</p>
             </div>
             <div>
             {/* <label htmlFor="qty" className='font-normal text-lg w-full h-full'>Qty </label> */}
                 <div className='qty flex justify-between md:flex-col'>
                    <input
                        min='1'
                        type='number'
                        name='qty'
                        value={input}
                        onChange={handleChange}
                        placeholder=''
                        className='w-12 my-8 py-1 px-1 appearance-none rounded outline-none border-2 border-gray-600 text-sm'
                     />
                     <button onClick={() => dispatch(removeFromCart(item.id))}
                        className=''
                     >
                        <img 
                            src={deleteImage}
                            alt='delete'
                            className='w-10 h-10 md:mt-48'
                        />
                    </button>
                 </div>
             </div>
        </div>
    )
}

export default CartItem
