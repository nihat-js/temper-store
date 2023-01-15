import React from 'react'

export default function NavComponent() {
  return (
    <nav className='bg-dark text-white py-3' >
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="brand"> Temper Store </h2>
          <div className="actions">
            <button className='btn btn-outline-primary mx-2'> Login  </button>
            <button className='btn btn-outline-primary mx-2'> Sign up  </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
