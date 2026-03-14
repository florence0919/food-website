import React from 'react'
import pic from "../assets/vegetable.jpg"

const Landing = () => {
  return (
    <div className='bg-green-50 flex w-full h-[90%]'>
     {/* leftdiv */}
         <div className=' w-[45%] h-full p-8'>
         <div className='h-full  px-8  my-10 flex flex-col gap-y-5 '>
            <p className='text-md mt-4'> FRESH FROM FARM TO YOUR PLATE</p>
            <p className='text-5xl font-semibold '>healthy eating the organic way</p>
            <p>discover fresh,organic and handpicked vegetables directly from local farmers</p>

            <button className='bg-emerald-600  text-white rounded-3xl w-30 h-9'>Explore Menu</button>

         </div>
         </div>
         <div className=' w-[55%] h-fit flex  my-20 ml-9  '>
            <img src={pic} alt="tomato" className='w-[80%] rounded-full bg-pink-400 border-white shadow-gray-300 shadow-md'/>
         </div>
    </div>
  )
}

export default Landing
