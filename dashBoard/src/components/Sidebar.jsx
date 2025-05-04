import React from 'react'
import AccountToggle  from './AccountToggle'

 const  Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='overflow-y-scroll sticky top-4
         h-[calc(100vh-32px-48px)] ' >
            {/* main sidebar content */}
          <AccountToggle/>  

        </div>
        {/* plan toggle */}
    </div>
  )
}
export default Sidebar

