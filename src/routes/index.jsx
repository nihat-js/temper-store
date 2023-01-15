import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/home.page'
import ProductsPage from '../pages/product.page'
import ProductPage from '../pages/product.page'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/css/global.scss'
export default function index() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/product/:id' element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  )
}
