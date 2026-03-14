import React from 'react'

import Card from './Card'
import { product } from '../data/ProductData'
import { useState } from 'react'

const categories=[
"FOOD & DRINKS",
  "FRESH FRUITS",
  "VEGETABLES",
  "DRIED FOODS & NUTS"
]
const Products = () => {
  const[category,setCategory]=useState("FOOD & DRINKS");
  const cat=product.filter((f)=>
    f.category===category
  
  )

  return (
    <div  className='bg-gray-50 h-screen w-full'>
     <div className=' flex justify-center'>
         <h1 className='text-2xl font-bold'>Our Products</h1>
     </div>

      <div className='flex  gap-x-5 justify-center mt-7 bg-amber-300 '> 
        {
          categories.map((item,index)=>(
                <p key={index} onClick={()=>setCategory(item)} className='text-emerald-600 underline font-semibold cursor-pointer hover:shadow-green-800  '>
        {item}</p>
          )

          )
        }
    
     </div>

    <div className='flex bg-gray-50 gap-5 px-4 my-2 justify-center'>

    {cat.map((p,index)=>(
      <Card key={index} {...p} />

    ))}
    </div>

    </div>
  )
}

export default Products
