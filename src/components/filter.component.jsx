import React from 'react'

import priceTagImage from '../assets/img/price-tag.svg'


export default function FilterComponent({searchValue,setSearchValue,orderByPrice,setOrderByPrice}) {
  return (
    <section className="filter-component bg-gray-800">
      <div className="container py-5 mx-auto">
        <div className="flex justify-between">
          <div className="w-10/12 relative search ">
            <input className='w-full py-2 px-4 outline-none '  type="text" value={searchValue} onChange={ (e) =>  setSearchValue(e.target.value)   }  />
            <button className= { `absolute right-0 py-2 px-4  bg-blue-600 hover:bg-blue-800 hover:text-white`  }     >Search  </button>
          </div>
          <div className="order-by mx-5  px-4 py-1 rounded bg-gray-600 hover:bg-blue-600 cursor-pointer " >
            <img className='w-6 text-white ' src={priceTagImage} alt="" onClick={ () =>  orderByPrice == 0 ? setOrderByPrice (-1) : orderByPrice == -1 ? setOrderByPrice(1) : orderByPrice == 1 ? setOrderByPrice(0) : null } />  
          </div>
          
        </div>
      </div>
    </section>
  )
}
