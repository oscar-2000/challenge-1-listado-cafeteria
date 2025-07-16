import React from 'react'
import '@styles/App.css'
import {AllProducts, AvailableProducts} from '@ui/Carta'
import { useState } from 'react'

export default function App() {
  const [filter, setFilter] = useState('all');
  return (
    <>
      <div className='h-70 bg-[url(/img/bg-cafe-sm.jpg)] bg-lg-[url(./src/assets/img/bg-cafe-lg.jpg)]'></div>
      <div className='rounded-3xl max-w-[1300px] mx-auto bg-[#1c1d1f] p-10 md:p-28 -mt-28 mb-28'>
        <div className="text-center mb-10">
          <h4 className='text-white text-4xl font-bold mb-5'>Our Collection</h4>
          <p className='text-gray-400 text-lg text-clip w-full lg:w-3xl mx-auto'>Introducing our Coffe Collection, a selection of unique coffees from different types and origins, expertly roasted in small batches and shipped fresh weekly</p>
          <div className="flex flex-row flex-wrap gap-5 justify-center mt-10">
            <a href="#" className={`text-white text-md py-2 px-3 ${filter == 'all' ? 'rounded-lg bg-gray-600' : ''}`} onClick={() => setFilter('all')}>All Products</a>
            <a href="#" className={`text-white text-md py-2 px-3 ${filter == 'available' ? 'rounded-lg bg-gray-600' : ''}`}  onClick={() => setFilter('available')}>Available Now</a>
          </div>
        </div>
        <div className="sm:p-10 md:p-0">
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-6'>
            {filter === 'all' ? <AllProducts/> : <AvailableProducts/>}
          </div>
        </div>
      </div>
    </>
  )
}
