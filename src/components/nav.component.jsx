import React from 'react'
import { Link } from 'react-router-dom'

export default function NavComponent() {
  return (
    <nav className='bg-gray-800 text-white py-4' >
      <div className="container mx-auto">
        <div className="flex  justify-between align-center ">
          <h2 className="brand text-3xl hover:text-blue-800"> <Link to='/'>   Temper Store </Link>   </h2>
          <div className="actions">
            <button className='btn  bg-transparent  text-blue-800 border py-2 px-4 border-blue-500 font-semibold hover:bg-blue-800  hover:text-white mx-2 rounded  '> Login  </button>
            <button className='btn  bg-transparent  text-blue-800 border py-2 px-4 border-blue-500 font-semibold hover:bg-blue-800  hover:text-white mx-2 rounded '> Sign up  </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
