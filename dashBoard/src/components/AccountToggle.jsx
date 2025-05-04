import React from 'react'
import Untitled from '../assets/untitled.png'
import { FiChevronUp , FiChevronDown } from 'react-icons/fi';

const AccountToggle = () => {
  return (
    <div className='border-b mb-4 mt-2 pb-4 border-sky-500    '>


      <button className='flex p-0.5 hover:bg-sky-500
        rounded transition-colors relative gap-2 items-center
         w-full'>

        <img src={Untitled} alt="DashBoar" className="size-8 rounded  shrink-0 bg-stone-300 " />

        <div className='text-start'>
          <span className='text-sm  font-bold block '>  DashBoard  </span>
          <span className='text-xs  font-b- block text-stone-400'> @tanveer</span>
        </div>

        {/* icons */}
        <FiChevronUp className="absolute right-4 top-2 translate-y[calc(-50%+4px)] text-sm " />
        <FiChevronDown className="absolute right-4 top-4 translate-y[calc(-50%+4px)] text-sm " />
        
        
      </button>
    </div>
  )
}

export default AccountToggle;
