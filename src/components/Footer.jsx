import { Facebook, InstagramIcon, TwitterIcon } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-green-50 w-full h-auto flex py-12 px-10 my-9 gap-4'>
      <div className='w-[22%]  h-full gap-2 flex flex-col '>
          <p className='font-bold text-2xl text-green-600'>FarmHarvest</p>
          <p >fresh healthy and 100% organic products delivered to your footstep suppporting local farmers and sustainable living</p>
      </div>
       <div className='w-[22%]  h-full gap-1 flex flex-col '>
          <p className='font-bold text-2xl text-green-600'>Quick Links</p>
          <p >Home</p>
          <p>About us</p>
          <p>Products</p>
          <p>Contact</p>
      </div>
       <div className='w-[22%]  h-full gap-1 flex flex-col '>
          <p className='font-bold text-2xl text-green-600'>Categories</p>
         
          <p >Vegetables</p>
          <p>fruits</p>
          <p> dairy products</p>
          <p>Beverages</p>
      </div>
       <div className='w-[22%] h-full gap-1 flex flex-col ml-20 '>
          <p className='font-bold text-2xl text-green-600'>Contact</p>
          <p>
            123 organic street,London,UK
          </p>
          <p>Email: abc@gmail.com</p>
          <p>Phone: +34 232 4332 232</p>
         <div className='flex gap-3 ml-10'> 
          <p><Facebook/></p> <p> <InstagramIcon/></p><p> <TwitterIcon/></p>
          </div>
      </div>
    </div>
  )
}

export default Footer
