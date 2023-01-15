import React from 'react'

export default function FilterComponent({searchValue,setSearchValue}) {
  return (
    <section className="filter-component bg-gray-800">
      <div className="container py-5 mx-auto">
        <div className="flex">
          <div className="w-10/12 relative search flex">
            <input className='w-full py-2 px-4 outline-none '  type="text" value={searchValue} onChange={ (e) =>  setSearchValue(e.target.value)   }  />
            <button className='absolute right-0 py-2 px-4  bg-blue-500  ' >Search  </button>
          </div>
          <div className="order-by mx-5">
            <label htmlFor="" title="Price By Order"> img </label>
          </div>
          
        </div>
      </div>
    </section>
  )
}
