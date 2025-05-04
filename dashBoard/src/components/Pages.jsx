import React from 'react'

import Dashboard from './Dashboard'
import Sidebar from './Sidebar'

const Pages = () => {
  return (
    <div>
      <div className='grid gap-3 p-5 grid-cols-[200px,_1fr] '>
        <Sidebar/>
        <Dashboard />
      </div>
    </div>
  )
}

export default Pages
