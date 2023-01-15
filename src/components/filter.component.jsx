import React from 'react'

import priceTagImage from '../assets/img/price-tag.svg'


export default function FilterComponent({searchValue,setSearchValue,orderByPrice,setOrderByPrice}) {
  return (
    <section className="filter-component border">
      <div className="container py-5 mx-auto">
        <div className="flex justify-between">
          <div className="w-10/12 relative search ">
            <input className='w-full py-2 px-4 outline-none '  type="text" value={searchValue} onChange={ (e) =>  setSearchValue(e.target.value)   }  />
            <button className= { `absolute right-0 py-2 px-4  bg-blue-600 hover:bg-blue-800 hover:text-white`  }     >Search  </button>
          </div>
          <button  className={`order-by mx-5  px-3  rounded bg-gray-600 hover:bg-blue-600 cursor-pointer   ${orderByPrice ==1 ? 'rotate-90' : orderByPrice == -1 ?  '-rotate-90' : null}   `} onClick={ () =>  orderByPrice == 0 ? setOrderByPrice (-1) : orderByPrice == -1 ? setOrderByPrice(1) : orderByPrice == 1 ? setOrderByPrice(-1) : null } >
            
            <img className="w-6 h-6 " src={priceTagImage} alt=""  />  
          </button>
          
        </div>
      </div>
    </section>
  )
}
