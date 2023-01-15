import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CategoriesComponent from '../components/categories.component'
import FilterComponent from '../components/filter.component'
import NavComponent from '../components/nav.component'
import ProductsComponent from '../components/products.component'


export default function HomePage() {

  const [products, setProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const [orderByPrice, setOrderByPrice] = useState(0)


  useEffect(() => {
    async function getProducts() {
      const response = await axios("https://fakestoreapi.com/products/")
      setProducts(response.data)
    }
    getProducts()
  }, [])



  return (
    <div className='home-page bg-slate-100 text-black '>
      <NavComponent />
      <FilterComponent searchValue={searchValue} setSearchValue={setSearchValue} orderByPrice={orderByPrice} setOrderByPrice={setOrderByPrice} />
      <section className='flex pt-12   '>
        <div className="container mx-auto flex">
          <div className='w-3/12 pr-8  ' >
            <CategoriesComponent  selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
          </div>
          <div className="w-9/12 ">
            <ProductsComponent products={products} selectedCategory={selectedCategory} searchValue={searchValue} orderByPrice={orderByPrice} />
          </div>
        </div>
      </section>
    </div>
  )
}
