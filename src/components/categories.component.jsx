import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function CategoriesComponent({setSelectedCategory}) {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function getProducts() {
      const response = await axios.get("https://fakestoreapi.com/products/categories")
      setCategories(response.data)
    }
    getProducts()
  }, [])

  return (
    <div className='categories-component '>
       <h5   className='text-gray-100 font-semibold border border-gray-400  py-2 rounded mb-4 px-2 cursor-pointer hover:bg-slate-600 '   
       onClick={ () => setSelectedCategory('') }  >  All </h5>
      {categories.map((item, index) => <h5   className='text-gray-100 font-semibold border border-gray-400  py-2 rounded mb-4 px-2 cursor-pointer hover:bg-slate-600 '  key={index} onClick={ () => setSelectedCategory(item) }  >  {item} </h5>)}
    </div>
  )
}

  
// writing  category 'all' is not  a correct way