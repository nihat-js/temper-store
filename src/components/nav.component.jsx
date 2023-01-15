import React from 'react'

export default function NavComponent() {
  return (
    <nav>
      <div className="container">
        <div className="d-flex justify-content-between">
          <h2 className="brand"> Temper Store  </h2>
          <div className="search">
            <input type="text" />
            <button> Search  </button>
          </div>
          <div className="actions">
            <button> Login  </button>
            <button> Sign up  </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
