import { CheckCircle, HandshakeIcon, LeafIcon, LeafyGreen, Truck } from 'lucide-react'
import React from 'react'
import ChooseCard from './ChooseCard'


const Why = () => {
  return (
    <div className='h-[90%] w-full bg-gray-50 p-5'>
   <div className='h-[10%] w-full flex justify-center p-4'>
         
      <h1 className='font-bold text-2xl text-green-700 '>
        Why Choose Us
      </h1>
   </div>
   <div className=' w-full h-[84%]  mt-7 p-5 flex gap-30 '>
  
   <ChooseCard title="100% Organic"  desc="All our produce is grown without harmful chemicals or pesticides" icon={LeafIcon} />
      <ChooseCard title="Fast Delivery"  desc="We deliver fresh produce at your doorstep within hours of harvesting" icon={Truck} />
         <ChooseCard title="Farmer Supoort"  desc="Empowering localfarmers with fair trade and Sustainable practices" icon={HandshakeIcon} />
            <ChooseCard title="Quality Assured"  desc="Every item is checked for freshness and quality before delivery" icon={CheckCircle} />
   </div>
    </div>
  )
}

export default Why
