import React from 'react'
import ProductComponent from './product.component'

export default function ProductsComponent({ products,  selectedCategory , searchValue }) {
  return (
    <section className="flex flex-wrap gap-12  shadow-md ">
      {products.map ( (item,index) =>   (selectedCategory == "" ||  item.category === selectedCategory )  &&  (searchValue == "" || item.title.toLowerCase().includes (searchValue.toLowerCase())   )     &&   <div className='w-3/12 ' key={index}>  {<ProductComponent   item={item}  /> }   </div>  ) }
    </section>
  )
}