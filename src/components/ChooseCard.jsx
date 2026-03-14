import { LeafyGreenIcon } from 'lucide-react'
import React from 'react'

const ChooseCard = ({title,desc,icon:Icon}) => {
  return (
   
        <div className='bg-gray-300 w-[20%] h-[90%] flex flex-col  py-5 px-6 text-center gap-4  rounded-md' >
      <p className='flex justify-center  mt-3' > 
     <Icon size={22}/>
      </p>
        <p className='flex justify-center font-bold' >{title}</p>
        <p className='flex justify-center '>{desc}</p>

    </div>
   
  )
}

export default ChooseCard
