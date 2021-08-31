import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productAction'
import { addToCart } from '../redux/actions/cartAction'

const ProductDetail = () => {

    const { productId } = useParams()
    const dispatch = useDispatch()
    const product = useSelector(state => state.product)
    const { id, image, title, price, category, description } = product
    console.log(product)

    const fetchProductDetail = async () => {
        const res = await axios
            .get(`https://fakestoreapi.com/products/${productId}`)
            .catch(err => console.log('Error', err))
        dispatch(selectedProduct(res.data))
    }

    useEffect(() => {
        (productId && productId !== '' && fetchProductDetail())
        return () => {
            dispatch(removeSelectedProduct())
        }
    }, [productId])

    return (
        <div className='container min-h-md min-w-md w-11/12 h-3/5 mx-auto py-20 flex justify-around items-center px-20'>
            {Object.keys(product).length === 0 ? (
                <div className='text-center text-4xl'>...Loading</div>
            ) : (
                <div className='mx-auto'>
                    <div className="flex justify-between items-center flex-col lg:flex-row">
                        <div className="h-1/3 image w-full px-4 border-0 border-black shadow-lg">
                            <img src={image} alt={title} />
                        </div>
                        <div className="w-full py-12 px-4 border-0 border-black shadow-lg">
                            <h1 className='text-2xl font-bold'>{title}</h1>
                            <h2>
                                <a href='#' className='leftArrowBox  bg-gray-700 p-1 text-white relative border-black border-2 rounded-md inline-block m-4 whitespace-no-wrap'>&#8377;{(price * 74.14).toFixed(2)}</a>
                            </h2>
                            <h3 className='bg-gray-300 py-2 rounded px-2 text-red-900 font-semibold'>{category}</h3>
                            <p className='h-32 overflow-auto py-2 my-8 shadow-lg font-semibold tracking-wide'>{description}</p>
                            <button 
                                className='py-2 px-2 rounded font-semibold text-gray-100 bg-red-500 hover:bg-red-700 '
                                onClick={() => {
                                    dispatch(addToCart(id || productId))
                                    console.log('added to cart')
                                }}
                            >
                                Add To Cart
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProductDetail
