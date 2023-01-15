import React from 'react'

export default function ProductWideComponent(props) {
  return (
    <section className='product-wide-component py-8'>
      <div className="container mx-auto flex items-center">
        <div className="img-wrap w-4/12" style={{ height: '500px' }} >
          <img className='' style={{ height: '500px' }} src={props.product.image} alt="" />
        </div>
        <div className="info">
          <h3 className="title text-4xl mb-2"> {props.product.title} </h3>
          <h5 className="price text-3xl"> {props.product.price} <span> Azn </span> </h5>
          <p className="description"> {props.product.description} </p>
          <div className="rating">
            <p className="rate"> {props.product?.rating?.rate} </p>
            <p className="count"> {props.product?.rating?.count} </p>
          </div>
          <div className="action mt-3">
            <button className='btn text-purple-800 border px-4 py-3 text-xl  font-semibold bg-white mr-2 hover:text-white hover:bg-purple-800  border-purple-800  '> Add to wishlist  </button>
            <button className='btn bg-orange-600 px-4 py-3 text-xl  font-semibold text-white mr-2 hover:bg-white hover:text-orange-600 hover:border hover:border-orange-600 ' > Add to Basket    </button>
          </div>
        </div>
      </div>
    </section>
  )
}
