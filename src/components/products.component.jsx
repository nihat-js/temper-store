import React from 'react'
import ProductComponent from './product.component'

export default function ProductsComponent({ products,  selectedCategory , searchValue }) {
  console.log('products',products)
  return (
    <section className="products row">
      {products.map ( (item,index) =>   (selectedCategory == "" ||  item.category === selectedCategory )  &&  (searchValue == "" || item.title.toLowerCase().includes (searchValue.toLowerCase())   )     &&   <div className='col-3'>  {<ProductComponent  item={item}  /> }   </div>  ) }
    </section>
  )
}