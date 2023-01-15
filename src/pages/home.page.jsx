import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CategoriesComponent from '../components/categories.component'
import FilterComponent from '../components/filter.component'
import NavComponent from '../components/nav.component'
import ProductsComponent from '../components/products.component'


export default function HomePage() {

  const [products,setProducts] = useState([])
  const [selectedCategory,setSelectedCategory]  = useState('')
  const [searchValue,setSearchValue] = useState('')



  useEffect(()=>{
    async function getProducts () {
      const response = await axios("https://fakestoreapi.com/products/")
      setProducts(response.data)
    }
    getProducts()
  },[])



  return (
    <div className='home-page '> 
      <NavComponent />
      <FilterComponent searchValue={searchValue} setSearchValue={setSearchValue} />
      <section className='layout d-flex my-3  '>
        <div className='left w-25' >
          <CategoriesComponent  setSelectedCategory={setSelectedCategory} />
        </div>
        <div className="rigt w-75">
          <ProductsComponent products={products}  selectedCategory={selectedCategory} searchValue={searchValue}    />
        </div>
      </section>
    </div>
  )
}
