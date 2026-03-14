import { SearchIcon, ShoppingCart, User2Icon } from 'lucide-react'
import React from 'react'

const Nav = () => {
  return (
    <div className='bg-emerald-400 w-full h-[10%] flex'>
      <div className='w-[40%]  font-medium tetx-xl p-2 ml-9'> Farm Harvest</div>
      <div className='w-[60%]  flex gap-5 font-sans p-3'>
        <p>Home</p>
        <p>Products</p>
        <p>About us</p>
        <p>Testimonials</p>
        <p>Recipes</p>
        <p>Contact</p>
      
        <div className='flex gap-5 mx-5'>
            <p ><SearchIcon/></p>
              <p><User2Icon/></p>
              <p><ShoppingCart/></p>
        </div>
         </div>
    </div>
  )
}

export default Nav
