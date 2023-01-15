import React from 'react'
import ProductComponent from './product.component'

export default function ProductsSimilarComponent({ similarProducts, setSimilarProducts }) {
  return (
    <section className="products-similar-component">
      <div className="container mx-auto mt-5 ">
        <h3 className="heading text-3xl mb-8"> People also liked this items </h3>
        
        <div className="row flex gap-10">
          {similarProducts.map((item, index) => <div className="w-3/12">   <ProductComponent product={item} />  </div>)}
        </div>
      </div>
    </section>
  )
}
