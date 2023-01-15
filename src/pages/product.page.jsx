import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link,useParams } from 'react-router-dom'
import NavComponent from '../components/nav.component'

import ProductWideComponent from '../components/product.wide.component'
import ProductsSimilarComponent from '../components/products.similar.component'

export default function ProductPage() {

  const params = useParams()
  const id = params.id 

  const URL = "https://fakestoreapi.com/products/"
  const URL_PRODUCT = URL + id
  const [product,setProduct] = useState({})
  const [similarProducts,setSimilarProducts] = useState([])
  useEffect(()=>{
   

    getData()
  },id)

  async function getData (){
    const response = await axios.get(URL_PRODUCT)
    setProduct(response.data)
    const response_ = await axios.get(URL+ "category/" + response.data.category)
    console.log("url",URL+ "category/" + response.data.category)
    setSimilarProducts(response_.data)
  }

  return (
    <div className='product-page '>
      <NavComponent />
      <main className=''>
        
      <section className="navigator py-3">
        <div className="container mx-auto text-xl text-gray-800">
          <Link to='/'> Home    </Link>
          <span> &#62; </span>
          <Link href={"/category/" + product.category }> {product.category}  </Link>
        </div>
      </section>
        <ProductWideComponent product={product} ></ProductWideComponent>
        <ProductsSimilarComponent similarProducts={similarProducts} setSimilarProducts = {setSimilarProducts} />
      </main>
    </div>
  )
}
