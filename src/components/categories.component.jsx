import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function CategoriesComponent({selectedCategory,setSelectedCategory}) {

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
       <h5    className={`font-semibold border border-gray-400  py-2 rounded mb-4 px-2 cursor-pointer hover:bg-orange-300 hover:text-white "  ${selectedCategory == '' ? 'bg-orange-300 text-white ' : undefined}  ` } 
       onClick={ () => setSelectedCategory('') }  >  All </h5>
      {categories.map((item, index) => <h5   className={`font-semibold border border-gray-400  py-2 rounded mb-4 px-2 cursor-pointer hover:bg-orange-300 hover:text-white  ${selectedCategory == item  ? 'bg-orange-300 text-white ' : undefined} `} key={index} onClick={ () => setSelectedCategory(item) }  >  {item} </h5>)}
    </div>
  )
}

  
// category 'all' 