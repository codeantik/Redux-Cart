import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProductComponent = () => {

    const products = useSelector(state => state.allProducts.products)
    const renderList = products.map(product => {
        const { id, title, image, price, category } = product
        return (
            <div key={id} className='min-w-sm max-w-md hover:bg-blue-200 hover:shadow-xl w-96 h-96 rounded overflow-hidden shadow-lg mx-auto py-10 my-5'>
                <Link to={`/product/${id}`} >
                    <div className="image w-full h-3/5 mt-2">
                        <img className='max-h-sm max-w-sm h-3/4 mx-auto scale-105 mt-2 overflow-y-hidden' src={image} alt={title} />
                    </div>
                    <div className="content px-6 py-4 flex justify-start items-start flex-wrap">
                        <div className="title w-full overflow-ellipsis py-1 font-semibold">{title}</div>
                        <div className="price text-2xl font-bold w-full">&#8377; {(price * 74.14).toFixed(2)} </div>
                        <div className="category font-extralight">{category}</div>
                    </div>
                </Link>
            </div>

        )
    })
    return <>{renderList}</>
}

export default ProductComponent
