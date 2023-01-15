import React from 'react'

export default function ProductComponent(props) {
  return (
    <div>
      <div className="img-wrap">
        <img src={props.item.image} className="w-100 " height="250px"  alt="" />
      </div>
      <h5 className="title"> {props.item.title} </h5>
      <h5 className="price"> {props.item.price} </h5>
    </div>
  )
}
