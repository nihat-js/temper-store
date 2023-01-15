import React from 'react'

export default function ProductComponent(props) {
  return (
    <div className='shadow-md border border-slate-600 text-white'>
      <div className="img-wrap">
        <img src={props.item.image} className="w-full  object-cover" style={{ height: "250px" }} alt="" />
      </div>
      <div className="body px-2 py-2">
        <h5 className="price text-3xl mb-4"> {props.item.price} <span className='text-xs'> AZN</span>   </h5>
        <h5 className="title"> {props.item.title} </h5>
      </div>
    </div>
  )
}
