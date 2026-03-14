 import React from 'react'


const Card = ({img,price,title}) => {
  return (
      <div className='bg-white  w-[25%] h-80 mt-5 ml-5 p-2 flex flex-col justify-center gap-2 shadow-gray-100 shadow-md rounded-sm'>
     
       <div className='w-[94%] h-[50%] mx-auto mt-1 '>
        <img src={img} alt="pic" className=' h-full w-full' />
       </div>
       <div className=' h-[20%] text-center flex flex-col  '>
        <p className='font-semibold'>{title}</p>
        <p className='text-green-500'>{price}</p>
        
    
       </div>
       <div className='h-[20%] w-[90%] p-3 ml-3 '>
        <button className='bg-green-600 text-white w-full h-full rounded-md '>Shop now</button>
        </div>
      </div>
      
 
  )
}

export default Card