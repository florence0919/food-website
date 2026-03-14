import React from 'react'
import og from "../assets/o.jpg"
const Working = () => {
  return (
    <div className='w-full h-screen bg-green-50 flex p-5'>
       <div className='w-[50%] h-full  p-7  ml-6'>
        <img src={og} alt="farm" className='rounded-md'/>
       </div>
       <div className='w-[50%] h-full p-5 flex flex-col gap-4 mt-5'>
    <h1 className='font-bold text-2xl'>How It Works</h1>
    <div className='flex  gap-2 mt-2'>
        <p className='text-xl text-green-600 font-bold'>1.</p>  <div>
            <p className='text-xl font-semibold'>Place your order</p>
            <p>Browse our organic range and place your order in few easy clicks.</p>
        </div>

        
      
    </div>
        <div className='flex  gap-2'>
        <p className='text-xl text-green-600 font-bold'>2.</p> 
         <div>
            <p className='text-xl font-semibold'>Harvest From Farm</p>
            <p>We pick the most fresh items from local organic farms.</p>
        </div>

        
      
    </div>
        <div className='flex  gap-2'>
        <p className='text-xl text-green-600 font-bold'>3.</p> 
         <div>
            <p className='text-xl font-semibold'>Eco Packaging </p>
            <p>We use sustainable eco-packaging.</p>
        </div>

        
      
    </div>
        <div className='flex  gap-2'>
        <p className='text-xl text-green-600 font-bold'>4.</p>  <div>
            <p className='text-xl font-semibold'>Quick Delivery </p>
            <p>Your order reaches freshly to your doorstep within hours. </p>
        </div>

        
      
    </div>




       </div>
      
    </div>
  )
}

export default Working
