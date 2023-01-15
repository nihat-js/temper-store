import React from 'react'

export default function FilterComponent({searchValue,setSearchValue}) {
  return (
    <section className="filter-component">
      <div className="container">
        <div className="row">
          <div></div>
          <div className="search">
            <input className='w-12/12'  type="text" value={searchValue} onChange={ (e) =>  setSearchValue(e.target.value)   }  />
            <button>Search  </button>
          </div>
          <div className="order-by">
            <label htmlFor="" title="Price By Order"> img </label>
          </div>
          
        </div>
      </div>
    </section>
  )
}
