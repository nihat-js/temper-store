import React from 'react'
import { Link } from 'react-router-dom'
export default function ProductComponent(props) {
  return (
    <div className='shadow-md border border-slate-200 '>
      <div className="img-wrap overflow-hidden">
        <Link to={'/product/' + props.product.id} >
        <img src={props.product.image} className="w-full hover:scale-125 transition-all  duration-500 object-cover rounded-md" style={{ height: "250px" }} alt="" />
        </Link>
      </div>
      <div className="body px-2 py-2">
        <h5 className="price text-3xl mb-4"> {props.product.price} <span className='text-xs'> AZN</span>   </h5>
        <h5 className="title"> {props.product.title} </h5>
      </div>
    </div>
  )
}
