import React from 'react'
import fruit from "../assets/fruits.png"

const About = () => {
  return (
    <div className='bg-gray-50 w-full h-full px-10  flex '>
<div className='w-[75%] h-full  p-2'>
  <div className='flex flex-col gap-1'>
     <p className='text-3xl font-bold'>   About Us</p>
   <p className='text-emerald-600 text-2xl font-semibold'> Fresh. Local .Organic  </p>
</div>
<div className='flex flex-col gap-5 mt-7 font-sans'>
     <p className='text-xl '> At Farm Harvest we  believe in the produce directly from our partnered farmers. Our mission id to promote healthy living.sustainable farming and fair trade for our local communities 
      </p>
      <p className='text-xl'>We carefully select farms that follows natural practices with no chemicals and shortcuts,
        just pure and wholesome food delivered to your doorstep.
         </p>
       <div className='mt-10'>
          <button className='bg-emerald-600 w-29 h-10 text-white rounded-md border border-lime-200'>
          Learn More
         </button>
       </div>
</div>

</div>
<div className=' w-[25%] h-full py-7'>
<img src={fruit} alt="fruis" className='mt-7 w-full h-fit'/>
</div>
    </div>

  )
}

export default About
