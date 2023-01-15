import React from 'react'
import ProductComponent from './product.component'

export default function ProductsComponent({ products,  selectedCategory , searchValue ,orderByPrice }) {
  return (
    <section className="flex flex-wrap gap-12  shadow-md ">
      { products.sort((a,b)=> orderByPrice == 0 ?  false : orderByPrice == 1 ? a.price - b.price  : orderByPrice == -1 ? b.price - a.price : ''   ).map ( (item,index) =>   (selectedCategory == "" ||  item.category === selectedCategory )  &&  (searchValue == "" || item.title.toLowerCase().trim().includes (searchValue.toLowerCase().trim())   )     &&   <div className='w-3/12 ' key={index}>  {<ProductComponent   product={item}  /> }   </div>  ) }
    </section>
  )
}