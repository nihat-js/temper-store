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
    <div className='categories-component'>
      {categories.map((item, index) => n<h5   className='text-secondary'  key={index} onClick={ () => setSelectedCategory(item) }  >  {item} </h5>)}
    </div>
  )
}
