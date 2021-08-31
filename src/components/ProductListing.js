import React, { useEffect } from 'react'
import ProductComponent from './ProductComponent'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setProducts } from '../redux/actions/productAction'
import { setCartProducts } from '../redux/actions/cartAction'

const ProductListing = () => {

    const dispatch = useDispatch()

    const fetchProducts = async () => {
        const res = await axios
            .get(`https://fakestoreapi.com/products`)
            .catch(err => console.log('Error', err))
        console.log(res.data)
        dispatch(setProducts(res.data))
        dispatch(setCartProducts(res.data))
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div className='container mx-auto py-20 bg-white'>
            <div className="flex justify-between items-center flex-wrap">
                <ProductComponent />        
            </div>
        </div>
    )
}

export default ProductListing
